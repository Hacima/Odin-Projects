$(document).ready(function() {
    var pixelAreaSize = 500,
        pixelSize = 20,
        pixelsPerLine = pixelAreaSize/pixelSize,
        selectedColor = "black",
        i = 0;
    for (i = 0; i < (pixelsPerLine*pixelsPerLine); i += 1) {
        $("#pixelArea").append("<div class='pixel'></div>");
    }
    
    $(".color").click(function() {
        selectedColor = $(this).css("background-color");
        $(".color").css("border", "1px solid black"); //reset borders
        $(this).css("border", "2px solid black"); //add 'selection' border to selected color
    });
    
    $(".pixel").click(function() {
        $(this).css("background-color", selectedColor);
    });
    
    $("#reset").click(function() {
        $(".pixel").css("background-color", "black");
    });
    
    $("#randomize").click(function() {
        $(".pixel").each(function() {
            var randomOne = Math.floor(Math.random() * 256),
                randomTwo = Math.floor(Math.random() * 256),
                randomThree = Math.floor(Math.random() * 256);
            $(this).css("background-color", "rgb(" + randomOne + ',' + randomTwo + ',' + randomThree + ')');
        });
    });
});