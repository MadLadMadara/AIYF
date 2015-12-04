// using the JQuery library
$(document).ready(function(){ // on page load

	// banner animation code 
	var menuBtn = $("#banner > .row > #menuBtnContainer");  // the menu buttom

	var menuBtnImg = $("#banner > .row > #menuBtnContainer > #menuBtn");  

	var dropDownMenu = $("#banner > .row:nth-of-type(2) > #menuDropDownContainer"); // the drop down menu

	var dropDownMenuOptions = $("#banner > .row:nth-of-type(2) > #menuDropDownContainer > a > .menuOption");

	var toggleMenuBtn = false; // checks if menu is up or down

	var bounceMenueClick = true; // checks if button is clicked

	var menuBtnBounceCallBack = function(){ // call back bounce script for menu

		bounceMenueClick = !bounceMenueClick; 

	}

	dropDownMenu.hide(); // hides the menu from user


	menuBtn.click(function(){ // on click of the menu icon
		// opens the menu

		if(bounceMenueClick){ // stops double clicking

			bounceMenueClick = !bounceMenueClick; // flip bool to stop double clicking

  			if(!toggleMenuBtn){ // slide down if the menu is up

  				dropDownMenu.slideDown("slow", menuBtnBounceCallBack);

  				menuBtnImg.css("background", "url(img/menuGreyIcon.png) no-repeat center center");
  				menuBtnImg.css("-webkit-background-size", "contain");
  				menuBtnImg.css("--moz-background-size", "contain");
  				menuBtnImg.css("-o-background-size", "contain");
  				menuBtnImg.css("background-size", "contain");
  				


  			}else{ // slide up if the menu is down

  				dropDownMenu.slideUp("slow", menuBtnBounceCallBack);


  				menuBtnImg.css("background", "url(img/menuWhiteIcon.png) no-repeat center center");
  				menuBtnImg.css("-webkit-background-size", "contain");
  				menuBtnImg.css("--moz-background-size", "contain");
  				menuBtnImg.css("-o-background-size", "contain");
  				menuBtnImg.css("background-size", "contain");
  				
  

  			}



  			toggleMenuBtn = !toggleMenuBtn; // flip the menu btn

  		}


	});

	dropDownMenuOptions.hover(function(){

		$(this).css("background-color", "rgba(144,144,144, 0.9)");

	}, function(){

		$(this).css("background-color", "rgba(144,144,144, 0.8)");

	});



});