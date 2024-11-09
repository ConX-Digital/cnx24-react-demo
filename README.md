# Dubai Dreamin' '24 React on CloudPages Demo

### Slides

The slides for the presentation are available in the repository under the `slides` folder.

### Need Help?

If you encounter any issues, you can log an issue on the repository or reach out via [LinkedIn](https://www.linkedin.com/in/stijnhoste/). We will do our best to assist you.

## How to Deploy the Project on Marketing Cloud

### Step 1: Create the Data Extension

Create a Data Extension with the following specifications:

**Name:** Survey_Results

**External Key:** Survey_Results

| Field Name     | Data Type | Length       | Default Value |
|----------------|-----------|--------------|---------------|
| SurveyID       | Number    |              |               |
| SubmissionDate | Date      |              | Current Date  |
| Response       | Text      | VARCHAR(MAX) |               |

### Step 2: Set Up the Server

1. Create a new Code Resource for JSON.
2. Copy the contents from `Server\app.js` and paste them into the JSON Code Resource.

### Step 3: Update the Environment Configuration

1. Open the `.env` file in your project directory.
2. Update the file with your Code Resource Server URL.

### Step 4: Build the Project

1. Open a terminal in your project directory.
2. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the following command to build the project:
   ```bash
   npm run build
   ```
### Step 5: Create Marketing Cloud Assets

Create the following assets on Marketing Cloud and populate them with the respective files:

1. **CSS Code Resource:**
   - Use the file located at `build\static\main.*.css`.
   
2. **JavaScript Code Resource:**
   - Use the file located at `build\static\main.*.js`.

3. **Landing Page:**
   - Use the file located at `build\index.html`.
   - Edit the paths of the CSS and JavaScript files to reflect the Code Resource URLs.




## Available Create React App Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
