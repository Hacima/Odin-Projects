$(document).ready(function() {
    var pixelAreaSize = 500,
        pixelSize = 20,
        pixelsPerLine = pixelAreaSize/pixelSize,
        selectedColor = "black",
        isDown = false;
        i = 0;
    
    for (i = 0; i < (pixelsPerLine*pixelsPerLine); i += 1) {
        $("#pixelArea").append("<div class='pixel'></div>");
    }
    
    //Color selection
    $(".color").click(function() {
        selectedColor = $(this).css("background-color");
        $(".color").css("border", "0px solid black"); //reset borders
        $(this).css("border", "1px solid black"); //add 'selection' border to selected color
    });
    
    //This is our drag functionality. It lets the user hold down the mouse to create a continuous line of color.
    $(document).mousedown(function() {
        isDown = true;      // When mouse goes down, set isDown to true
    })
    .mouseup(function() {
        isDown = false;    // When mouse goes up, set isDown to false
    });
    
    $('#pixelArea').on('mouseover', 'div', function() {
        if(isDown) {
            $(this).css("background-color", selectedColor);
        }
    });
    
    //This might seem redundant, but it serves to paint the pixel that the cursor is hovering over
    //upon click instead of waiting for it to release the click.
    $('#pixelArea').on('mousedown', 'div', function() {
        $(this).css("background-color", selectedColor);
    });
    
    $("#reset").click(function() {
        $(".pixel").css("background-color", "black");
    });
    
    $("#randomize").click(function() {
        randomize();
    });
    
    $("#resize").click(function() {
        resize(prompt("How many pixels would you like per line? (numbers above 100 are very slow - be warned!)"));
    });
});

function resize(newSize) {
    var numPixels = newSize * newSize; 
    var pixelSize = 500 / newSize; //500px is how wide our container is. Magic number, I know. =/
    var i = 0;
    
    //Get rid of the old pixels
    $("#pixelArea").empty();
    
    //Add all the new pixels
    for (i = 0; i < numPixels; i += 1) {
         $("#pixelArea").append("<div class='pixel'></div>");
    }
    
    //Set the pixels to their new size. They will always be squares, so the height and width are the same.
    $(".pixel").css("width", pixelSize);
    $(".pixel").css("height", pixelSize);
}

function randomize() {
    $(".pixel").each(function() {
        var randomOne = Math.floor(Math.random() * 256),
            randomTwo = Math.floor(Math.random() * 256),
            randomThree = Math.floor(Math.random() * 256);
            
        $(this).css("background-color", "rgb(" + randomOne + ',' + randomTwo + ',' + randomThree + ')');
    });
}