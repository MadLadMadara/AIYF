$(document).ready(function(){ // wait until the html/css to load

  // element selectors, selecting by class
  var dom = $("body, html");
  var linkContainers = $(".navLinkElementContainer"); 
  var innerLinks = $(".innerLinks"); 
  var outerLinks = $(".outerNavElement:nth-child(2)");

  // hide elements
  innerLinks.hide(); 
  outerLinks.hide();

  // fade in elements
  innerLinks.fadeIn("slow"); 
  outerLinks.fadeIn("slow");

  /* 
  on mouse over of .innerLinks change
  the colour of the element that the mouse
  is hovering over.
  */
  	linkContainers.hover(function(){ // on hover 

  		$(this).css("background-color", "rgba(144,144,144, 0.8)");

	}, function(){ // off hover

		$(this).css("background-color", "rgba(144,144,144, 0.5)");

	});

  
  
});