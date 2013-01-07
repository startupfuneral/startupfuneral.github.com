/*
 * Here is an example of how to use Backstretch as a slideshow.
 * Just pass in an array of images, and optionally a duration and fade value.
 */
 
  // Duration is the amount of time in between slides,
  // and fade is value that determines how quickly the next image will fade in
  
 
  $("#jumbotron, #connect").backstretch([
      "assets/images/bg01.jpg"
    , "assets/images/bg02.jpg"
    , "assets/images/bg03.jpg"
	, "assets/images/bg04.jpg"
  ], {duration: 3000, fade: 750});



