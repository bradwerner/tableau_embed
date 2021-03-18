
var viz, sheet, workbook; //we need this to be semi-global so we can reference it via multiple functions

    function initViz()
    {
        var containerDiv = document.getElementById("vizContainer"),
            url = "http://localhost/trusted/" + ticket + "/views/RedirectPage/Sheet1",
            options =
            {
                height: "1px",
                width: "1px",
                hideTabs: true,
                hideToolbar: true,
                onFirstInteractive: function () //this function fires only once when the viz is first time rendered - think of it as init function
                {
                    console.log("Finished loading, redirecting to dashboard.");
                    loadNewDoc();
                }
            }
        viz = new tableau.Viz(containerDiv, url, options); // Create a viz object and embed it in the container div.
    }

    function loadNewDoc(){
       window.location="/dashboard";
       }