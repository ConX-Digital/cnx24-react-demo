<script runat="server">

    Platform.Load("core", "1.1.1");
    var prox = new Script.Util.WSProxy();

    HTTPHeader.SetValue("Access-Control-Allow-Methods", "*");
    HTTPHeader.SetValue("Access-Control-Allow-Origin", "*");
    HTTPHeader.SetValue("Access-Control-Allow-Headers", "*");

    try {
        // Initialize the response object
        var response = {};

        // Retrieve the payload from the request body
        var requestBody = Platform.Request.GetPostData();

        // Parse the survey results from JSON
        var surveyResults = Platform.Function.ParseJSON(requestBody);

        // Specify the Data Extension external key
        var deExternalKey = "Survey_Results";

        // Initialize the Data Extension
        var deObj = DataExtension.Init(deExternalKey);

        // Add a row to the Data Extension
        response.DEAddResult = deObj.Rows.Add({
            SurveyID: 1,
            Response: Stringify(surveyResults)
        });

        // Send response to frontend
        Write(Stringify(response));

    } catch (e) {
        // Send error to frontend
        Write(Stringify(e));

    }
</script>