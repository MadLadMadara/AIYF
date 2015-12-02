$(document).ready(function(){

  // element selectopr
  var linkContainers = $(".navLinkElementContainer"); 
  var innerLinks = $(".innerLinks"); 
  var outerLinks = $(".outerNavElement:nth-child(2)");

  //hide elements
  innerLinks.hide(); 
  outerLinks.hide();

  //fade in elements
  innerLinks.fadeIn("slow"); 
  outerLinks.fadeIn("slow");

  /* 
  on mouse over of .innerLinks change
  the colour of the element.
  */
  linkContainers.hover(function(){ // on hover 

  	$(this).css("background-color", "rgba(144,144,144, 0.8)");

	}, function(){ // off hover

		$(this).css("background-color", "rgba(144,144,144, 0.5)");

	});
  
});