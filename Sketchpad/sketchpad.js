$(document).ready(function() {
    var selectedColor = "black",
        isDown = false;
    
    //Initializing the sketchpad.
    resize(20);

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
            if($("#gradient").prop("checked")) {
                gradient($(this));
            } else {
                $(this).css("background-color", selectedColor);
            }
        }
    });
    
    //This might seem redundant, but it serves to paint the pixel that the cursor is hovering over
    //upon click instead of waiting for it to release the click.
    $('#pixelArea').on('mousedown', 'div', function() {
        if($("#gradient").prop("checked")) {
            gradient($(this));
        } else {
            $(this).css("background-color", selectedColor);
        }
    });
    
    //Just changes every pixel to black. Super simple
    $("#reset").click(function() {
        $(".pixel").css("background-color", "black");
    });
    
    $("#randomize").click(function() {
        randomize();
    });
    
    $("#resize").click(function() {
        var pixelsPerLine = prompt("How many pixels would you like per line? (numbers above 100 are very slow - be warned!)")
        resize(pixelsPerLine);
    });
});

function resize(pixelsPerLine) {
    var numPixels = pixelsPerLine * pixelsPerLine,
        canvasWidth = parseInt($("#pixelArea").css("width")),
        pixelSize = canvasWidth / pixelsPerLine,
        i = 0;
    
    //Get rid of the old pixels
    $("#pixelArea").empty();
    
    //Add all the new pixels
    for (i = 0; i < numPixels; i += 1) {
         $("#pixelArea").append("<div class='pixel'></div>");
    }
    
    //Set the pixels to their new size. They will always be squares, so the height and width are the same.
    $(".pixel").css({"width": pixelSize, "height": pixelSize});
}

//Super basic! For each pixel, three random numbers from 0 to 255 are generated and used in rgb()!
function randomize() {
    $(".pixel").each(function() {
        var randomOne = Math.floor(Math.random() * 256),
            randomTwo = Math.floor(Math.random() * 256),
            randomThree = Math.floor(Math.random() * 256);
            
        $(this).css("background-color", "rgb(" + randomOne + ',' + randomTwo + ',' + randomThree + ')');
    });
}

function gradient($pixel) {
    //Get the pixels rgb values. rgb = "rgb(r,g,b)" currently. We only want r, g and b, though...
    var rgb = $pixel.css("background-color");
    
    //This expression gets the values of x. Now rgb = ["r", "g", "b"]. They are still strings.
    rgb = rgb.match(/\d+/g);

    //This loop converts rbg[i] into an int, then decreases it by 10, making sure it doesn't go below 0.
    for (var i in rgb) {
        rgb[i] = parseInt(rgb[i]);
        if (rgb[i] <= 10 && rgb[i] > 0) {
            rgb[i] = 0;
        } else if (rgb[i] > 10) {
            rgb[i] -= 10;
        }
    }
    
    //And finally we plug 'em in! Voila, a very slight gradient is accomplished.
    $pixel.css("background-color", "rgb(" + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')');
}