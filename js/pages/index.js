/* not refined work but should be used for testing*/
$(document).ready(function(){

  
  var innerLinks = $(".innerLinks"); // element selectopr



  innerLinks.hide();

  $(".outerNavElement:nth-child(2)").hide(); // hide elemens  




  innerLinks.fadeIn("slow"); //fade in inner elements

  /* this should slide from bottom to top

	note: the $("").slideUp(); dose the revers of slideDown();
	not the oppisite
  */
  $("#topExpandableNav").slideDown(); // <-- this is fubar

  $("#bottomExpandableNav").slideDown(); // slide out bottom bar
 
});