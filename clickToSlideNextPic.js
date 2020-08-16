/*
DESCRIPTION:
Upon a button click event, the program fetches the path of the file on display,
and extracts its number. It then increments this number by one to determine the 
next file to display. The number is checked to not surpass the number of files in 
the gallery. If it surpasses, it is reset to display the first file.
finally the src in the DOM is updated with the file path of the next to be displayed.
*/
const amountOfImagesInGallery = 4;

function DetermineNextImageToDisplay() {
  if (imagePointer < amountOfImagesInGallery) {
    imagePointer++
  } else {
    imagePointer = 1;
  }
  nextImageToDisplay = 'pic' + imagePointer + '.jpg'; // Create next image path
  return nextImageToDisplay;
}
const htmlImgTag = document.getElementsByTagName("img")[0]; //Grab 1st img element of the html collection
var imageOnDisplay = htmlImgTag.src; // src holds path and filename of an image
var imagePointer = imageOnDisplay.charAt(imageOnDisplay.length - 5); //Extract image number from its filename
const firstButtonTag = document.getElementsByTagName("Button")[0]; //Grab 1st button element of the html collection
firstButtonTag.addEventListener("click", function () { // Specify click event and define its function
  var nextImageToDisplay = DetermineNextImageToDisplay()
  htmlImgTag.src = nextImageToDisplay; // Update src to display next image
  return;
});