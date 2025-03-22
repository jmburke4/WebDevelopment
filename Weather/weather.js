$( window ).on( "load", function() {
    $("#lblTest").text("Page loaded!");
    GetForecast();
});

function GetForecast(){
    $.ajax({
        url: "https://api.weather.gov/points/39.7456,-97.0892",
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log("Success!");
            $("#preResult").html(JSON.stringify(data, null, 2));
        },
        error: function(error){
            console.log("Error!");
            $("#preResult").html("Error: " + JSON.stringify(error));
        }
    });
}
