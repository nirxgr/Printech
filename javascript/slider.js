// Array containing image paths
var images=['"images/b.jpeg"','"images/c.jpg"','"images/d.jpeg"','"images/e.jpeg"','"images/f.jpeg"','"images/a.jpeg"'];
// Variable to keep track of the current image index
var x=0;
// Get the element with the ID "ig"
var imgs= document.getElementById("ig");
// The setInterval() calls the slider function at the intervals of 2000 milliseconds.
setInterval(slider,2000);
    // function to handle slider
function slider()
    {
        // check if the current index is below the length
        if (x<images.length)
        {
            //Increment of index by 1
            x=x+1;
        }
        else{
            // reseting the index to first image if it exceeds the array bounds
             x=1;
        }
    // Seting the inner HTML of the "ig" element to display the current image
    imgs.innerHTML= "<img src=" + images[x-1] + ">";
        } 