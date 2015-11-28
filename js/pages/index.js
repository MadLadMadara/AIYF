/* not refined work but should be used for testing*/
$(document).ready(function(){

  
  var innerLinks = $(".innerLinks"); // element selectopr
  var outerLinks = $(".outerNavElement:nth-child(2)"); //element selectopr

  innerLinks.hide();
  outerLinks.hide();

  innerLinks.fadeIn("slow"); //fade in inner elements
  outerLinks.fadeIn("slow");
  
});