// using the JQuery library
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
  // 1200 milliseconds
  innerLinks.fadeIn(900); 
  outerLinks.fadeIn(900);

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

  // the buy tickets link 
  $(".navElement:nth-of-type(1)").click(function(){ // event 

      // this re-directs the user to aberdeeb box office
      window.location.href = "http://www.aberdeenperformingarts.com/venues/his-majestys-theatre?username=&password=&mybutton=submit&stuff="; // the link 

  });


});