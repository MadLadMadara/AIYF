$(document).ready(function(){

  // element selectopr
  var innerLinks = $(".innerLinks"); 
  var outerLinks = $(".outerNavElement:nth-child(2)"); 
  //hide elements
  innerLinks.hide(); 
  outerLinks.hide();
  //fade in elements
  innerLinks.fadeIn("slow"); 
  outerLinks.fadeIn("slow");
  
});