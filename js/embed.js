//***Part 1 - Instantiate the Viz
var viz, sheet, workbook; //we need this to be semi-global so we can reference it via multiple functions

    function initViz()
    {
        var containerDiv = document.getElementById("vizContainer"),
            
            url = "https://demo.tableau.com/t/BaileyFerrari/views/NewInnovationsDashboardDemo/RotationScheduling?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link", //Change to URL for View required. 
            options =
            {
                height: "775px",
                width: "1650px",
                hideTabs: true,
                hideToolbar: true,
                onFirstInteractive: function () //this function fires only once when the viz is first time rendered - think of it as init function
                {
                    console.log("Run this code when the viz has finished loading.");

                    workbook = viz.getWorkbook();
                    console.log(workbook);

                    sheet = viz.getWorkbook().getActiveSheet();
                    console.log(sheet.getName());

                    sheets = sheet.getWorksheets();
                    console.log(sheets);

                  for(var i =0; i < sheets.length; i++) {
                    sheetName = sheets[i].getName();
                    console.log(sheetName);
                  }

                    $('#dataTablesDiv').hide();
                }
            }
        viz = new tableau.Viz(containerDiv, url, options); // Create a viz object and embed it in the container div.
    }

//***Part 2 - Export buttons
function exportToPDF()
{
        viz.showExportPDFDialog();
 }

function exportToCSV()
{
        viz.showExportDataDialog();
 }

function downloadCrosstab()
{
    viz.showExportCrossTabDialog();
}

//***Part 3 - Filter One & Revert
function filterOne(filterName, value) {
for(var i =0; i < sheets.length; i++) {
sheets[i].applyFilterAsync(filterName, value, tableau.FilterUpdateType.REPLACE);
}
}

function clearFilters(filterName) {
for(var i =0; i < sheets.length; i++) {
sheets[i].clearFilterAsync(filterName);
}
}

function revertAll() {
viz.revertAllAsync();
}

//***Part 4 - Filter Two & Revert
function filterTwo(filterName, value) {
for(var i =0; i < sheets.length; i++) {
sheets[i].applyFilterAsync(filterName, value, tableau.FilterUpdateType.REPLACE);
}
}

function clearFilters(filterName) {
for(var i =0; i < sheets.length; i++) {
sheets[i].clearFilterAsync(filterName);
}
}

function revertAll() {
viz.revertAllAsync();
}

//Here we load the table with our "Generate Tables" button and unhide the "dataTablesDiv"
    function loadTable() {
        $('#dataTablesDiv').show();
     }

    function emptyTable(){
        $('#auditDetailTable').empty();
        $('#auditDetailTable').html("<tr><th>Country</th><th>State</th><th>Quantity</th></tr>");
        $('#dataTablesDiv').hide();
        clearSelection();
    }