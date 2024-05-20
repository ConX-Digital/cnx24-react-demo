/* Import necessary CSS and SurveyJS components */
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

const surveyJson = {
  "title": "Feedback on Enhancing CloudPages with React",
  "completedHtml": "<h3>Thank you for providing your feedback.</h3><p>Your responses will help us improve future presentations.</p>",
  "pages": [
   {
    "name": "understanding_and_clarity",
    "elements": [
     {
      "type": "panel",
      "name": "personal-details",
      "elements": [
       {
        "type": "text",
        "name": "firstName",
        "title": "First Name",
        "autocomplete": "given-name"
       },
       {
        "type": "text",
        "name": "lastName",
        "startWithNewLine": false,
        "title": "Last Name",
        "autocomplete": "family-name"
       },
       {
        "type": "text",
        "name": "email",
        "title": "Email",
        "isRequired": true,
        "inputType": "email",
        "autocomplete": "email"
       }
      ],
      "title": "Personal Details"
     },
     {
      "type": "rating",
      "name": "clarity_of_explanation",
      "title": "How clear was the explanation of integrating React with Cloud Pages?",
      "isRequired": true
     },
     {
      "type": "matrix",
      "name": "understanding_before_after",
      "title": "Rate your understanding of React on Cloud Pages before and after the session.",
      "isRequired": true,
      "columns": [
       "1",
       "2",
       "3",
       "4",
       "5"
      ],
      "rows": [
       "Before the session",
       "After the session"
      ]
     }
    ]
   },
   {
    "name": "content_satisfaction",
    "elements": [
     {
      "type": "checkbox",
      "name": "topics_covered",
      "title": "Did the session cover the topics you were most interested in regarding React and CloudPages?",
      "isRequired": true,
      "choices": [
       "Yes",
       "Partially",
       {
        "value": "Item 1",
        "text": "No"
       }
      ],
      "otherText": "No (describe)"
     },
     {
      "type": "comment",
      "name": "most_valuable_part",
      "title": "What was the most valuable part of the presentation?"
     }
    ]
   },
   {
    "name": "future_interests",
    "elements": [
     {
      "type": "rating",
      "name": "presentation_engagement",
      "title": "How engaging was the presentation style of the session?",
      "isRequired": true
     },
     {
      "type": "checkbox",
      "name": "follow_up_topics",
      "title": "Are there any follow-up topics or advanced features in React or Cloud Pages that you would like to learn about?",
      "choices": [
       "Advanced React techniques",
       "Performance optimization",
       "Case studies"
      ],
      "showOtherItem": true
     },
     {
      "type": "radiogroup",
      "name": "interest_in_future_sessions",
      "title": "Would you be interested in more sessions like this one?",
      "choices": [
       "Yes",
       "Maybe",
       "No"
      ]
     }
    ]
   }
  ],
  "showProgressBar": "bottom",
  "widthMode": "responsive"
 };

 const codeResourceUrl = process.env.CodeResourceServerURL;

/* Define the FeedbackForm component */
function FeedbackForm() {

  /* Initialize a new survey model with the surveyJson configuration */
  const survey = new Model(surveyJson);

  /* Define a key for storing survey data in local storage */
  const storageItemKey = "my-survey";

  /* Function to save survey data to local storage */
  function saveSurveyData(survey) {
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(storageItemKey, JSON.stringify(data));
  }

  /* Attach the saveSurveyData function to survey events */
  survey.onValueChanged.add(saveSurveyData);
  survey.onCurrentPageChanged.add(saveSurveyData);

  /* Restore survey data from local storage if available */
  const prevData = window.localStorage.getItem(storageItemKey) || null;
  if (prevData) {
    const data = JSON.parse(prevData);
    survey.data = data;
    if (data.pageNo) {
      survey.currentPageNo = data.pageNo;
    }
  }

  /* Function to handle survey completion */
  survey.onComplete.add(async function(sender, options) {
    options.showSaveInProgress('Saving your feedback...');

    try {
      /* Send the survey data to the Code Resource */
      const response = await fetch(codeResourceUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(sender.data)
      });

      console.log("Server Response:", response);

      /* Check if the response is ok and process the response */
      if (response.ok) {
        const responseData = await response.json(); // Assumes the server response is JSON

        // Print the server response in the console
        console.log("Server Response:", responseData);
        options.showSaveSuccess('Feedback saved successfully!');

        // Empty the local storage after the survey is completed
        /* window.localStorage.setItem(storageItemKey, ""); */

      } else {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
    } catch (error) {
      options.showSaveError();
      console.error('Fetch error:', error);
    }

  });

  /* Render the survey component */
  return(
    <div className="survey-container">
      <Survey model={survey} />
    </div>
  );
}

export default FeedbackForm;
