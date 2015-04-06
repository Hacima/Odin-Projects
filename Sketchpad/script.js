$(document).ready(function() {
    var pixelAreaSize = 500,
        pixelSize = 20,
        pixelsPerLine = pixelAreaSize/pixelSize,
        i = 0;
    for (i = 0; i < (pixelsPerLine*pixelsPerLine); i += 1) {
        $("#pixelArea").append("<div class='pixel'></div>");
    };
    
    $(".pixel").click(function(){
        $(this).toggleClass("grey");
    })
})