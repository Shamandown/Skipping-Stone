/* This little nugget should let me control the animation speed with each function. gradual for ifs (forward) faster for elses (reverts)
document.getElementById("myDIV").style.animationDuration = "1s"; */

function adrift(){
	var adrift = document.getElementById("adrift");
	var landing = document.getElementById("landing");
		if (adrift.style.display == "none" && landing.style.display == "none"){
		adrift.style.display = "block";/*if the story divs named adrift and landing are both not showing, change adrift to show*/
		document.getElementById("death1Choice").style.backgroundColor="black"; /*changes both buttons to black, and deactivates their functions*/
		document.getElementById("death1Choice").setAttribute("onClick","");
		document.getElementById("landingChoice").style.backgroundColor="black";
		document.getElementById("landingChoice").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(images/BGPH-adrift.jpg)";/*changes the background image to the one that goes with adrift story section*/
	}
		else{/*the else portions of these functions happen with reset and revert processes. When the programs run again, if story sections are showing, they will be hidden, and changes reversed.*/
			adrift.style.display = "none";
			document.getElementById("death1Choice").style.backgroundColor="";/*these 4 lines restore the buttons to default appearance (not blacked out) and restore the functionality.*/
			document.getElementById("death1Choice").setAttribute("onClick","adrift()");
			document.getElementById("landingChoice").style.backgroundColor="";
			document.getElementById("landingChoice").setAttribute("onClick","landing()");
			document.body.style.backgroundImage = "url(images/BGPH-main.jpg)";/*changes the bg image back to the bgimage belonging to the next tier up.*/
		}
	}
	
function landing(){
	var adrift = document.getElementById("adrift");
	var landing = document.getElementById("landing");
		if (landing.style.display == "none" && adrift.style.display == "none"){
		landing.style.display = "block";
		document.getElementById("death1Choice").style.backgroundColor="black";
		document.getElementById("death1Choice").setAttribute("onClick","");
		document.getElementById("landingChoice").style.backgroundColor="black";
		document.getElementById("landingChoice").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(images/BGPH-landing.jpg)";
		}
		else{
			landing.style.display = "none";
			document.getElementById("death1Choice").style.backgroundColor="";
			document.getElementById("death1Choice").setAttribute("onClick","adrift()");
			document.getElementById("landingChoice").style.backgroundColor="";
			document.getElementById("landingChoice").setAttribute("onClick","landing()");
			document.body.style.backgroundImage = "url(images/BGPH-main.jpg)";
			}
	}
	
function guessRight(){
	var correlation = document.getElementById("correlation");
	var noClue = document.getElementById("noClue");
		if (correlation.style.display == "none" && noClue.style.display == "none"){
		correlation.style.display = "block";
		document.getElementById("falseChoice1").style.backgroundColor="black";
		document.getElementById("falseChoice1").setAttribute("onClick","");
		document.getElementById("falseChoice2").style.backgroundColor="black";
		document.getElementById("falseChoice2").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(images/BGPH-correlation.jpg)";
		}
		else{
			correlation.style.display = "none";
			document.getElementById("falseChoice1").style.backgroundColor="";
			document.getElementById("falseChoice1").setAttribute("onClick","guessRight()");
			document.getElementById("falseChoice2").style.backgroundColor="";
			document.getElementById("falseChoice2").setAttribute("onClick","guessWrong()");
			document.body.style.backgroundImage = "url(images/BGPH-landing.jpg)";
			}
	}	
	
function guessWrong(){
	var correlation = document.getElementById("correlation");
	var noClue = document.getElementById("noClue");
		if (noClue.style.display == "none" && correlation.style.display == "none"){
		noClue.style.display = "block";
		document.getElementById("falseChoice1").style.backgroundColor="black";
		document.getElementById("falseChoice1").setAttribute("onClick","");
		document.getElementById("falseChoice2").style.backgroundColor="black";
		document.getElementById("falseChoice2").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(images/BGPH-correlation.jpg)";
		}
		else{
			noClue.style.display = "none";
			document.getElementById("falseChoice1").style.backgroundColor="";
			document.getElementById("falseChoice1").setAttribute("onClick","guessRight()");
			document.getElementById("falseChoice2").style.backgroundColor="";
			document.getElementById("falseChoice2").setAttribute("onClick","guessWrong()");
			document.body.style.backgroundImage = "url(images/BGPH-landing.jpg)";
			}
	}		

function enter(){
	var goInside = document.getElementById("enter");
	var stayOut = document.getElementById("death2");
		if (goInside.style.display == "none" && stayOut.style.display == "none"){
		goInside.style.display = "block";
		document.getElementById("enterChoice").style.backgroundColor="black";
		document.getElementById("enterChoice").setAttribute("onClick","");
		document.getElementById("death2Choice").style.backgroundColor="black";
		document.getElementById("death2Choice").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(images/BGPH-enter.jpg)";
		}
		else{
			goInside.style.display = "none";
			document.getElementById("enterChoice").style.backgroundColor="";
			document.getElementById("enterChoice").setAttribute("onClick","enter()");
			document.getElementById("death2Choice").style.backgroundColor="";
			document.getElementById("death2Choice").setAttribute("onClick","death2()");
			document.body.style.backgroundImage = "url(images/BGPH-correlation.jpg)";
			}
	}		

function death2(){
	var goInside = document.getElementById("enter");
	var stayOut = document.getElementById("death2");
		if (goInside.style.display == "none" && stayOut.style.display == "none"){
		stayOut.style.display = "block";
		document.getElementById("enterChoice").style.backgroundColor="black";
		document.getElementById("enterChoice").setAttribute("onClick","");
		document.getElementById("death2Choice").style.backgroundColor="black";
		document.getElementById("death2Choice").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(images/BGPH-keepout.jpg)";
		}
		else{
			stayOut.style.display = "none";
			document.getElementById("enterChoice").style.backgroundColor="";
			document.getElementById("enterChoice").setAttribute("onClick","enter()");
			document.getElementById("death2Choice").style.backgroundColor="";
			document.getElementById("death2Choice").setAttribute("onClick","death2()");
			document.body.style.backgroundImage = "url(images/BGPH-correlation.jpg)";
			}
	}		

	function enterb(){
		var goInside = document.getElementById("enter");
		var stayOut = document.getElementById("death2");
			if (goInside.style.display == "none" && stayOut.style.display == "none"){
			goInside.style.display = "block";
			document.getElementById("enterChoiceb").style.backgroundColor="black";
			document.getElementById("enterChoiceb").setAttribute("onClick","");
			document.getElementById("death2Choiceb").style.backgroundColor="black";
			document.getElementById("death2Choiceb").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-enter.jpg)";
			}
			else{
				goInside.style.display = "none";
				document.getElementById("enterChoiceb").style.backgroundColor="";
				document.getElementById("enterChoiceb").setAttribute("onClick","enterb()");
				document.getElementById("death2Choiceb").style.backgroundColor="";
				document.getElementById("death2Choiceb").setAttribute("onClick","death2b()");
				document.body.style.backgroundImage = "url(images/BGPH-correlation.jpg)";
				}
		}		
	
	function death2b(){
		var goInside = document.getElementById("enter");
		var stayOut = document.getElementById("death2");
			if (goInside.style.display == "none" && stayOut.style.display == "none"){
			stayOut.style.display = "block";
			document.getElementById("enterChoiceb").style.backgroundColor="black";
			document.getElementById("enterChoiceb").setAttribute("onClick","");
			document.getElementById("death2Choiceb").style.backgroundColor="black";
			document.getElementById("death2Choiceb").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-keepout.jpg)";
			}
			else{
				stayOut.style.display = "none";
				document.getElementById("enterChoiceb").style.backgroundColor="";
				document.getElementById("enterChoiceb").setAttribute("onClick","enterb()");
				document.getElementById("death2Choiceb").style.backgroundColor="";
				document.getElementById("death2Choiceb").setAttribute("onClick","death2b()");
				document.body.style.backgroundImage = "url(images/BGPH-correlation.jpg)";
				}
		}		

function death3(){
	var nastyNode = document.getElementById("death3");
	var goUp = document.getElementById("upperRoom");
		if (nastyNode.style.display == "none" && goUp.style.display == "none"){
		nastyNode.style.display = "block";
		document.getElementById("death3Choice").style.backgroundColor="black";
		document.getElementById("death3Choice").setAttribute("onClick","");
		document.getElementById("upperRoomChoice").style.backgroundColor="black";
		document.getElementById("upperRoomChoice").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(images/BGPH-Death3.jpg)";
		}
		else{
			nastyNode.style.display = "none";
			document.getElementById("death3Choice").style.backgroundColor="";
			document.getElementById("death3Choice").setAttribute("onClick","death3()");
			document.getElementById("upperRoomChoice").style.backgroundColor="";
			document.getElementById("upperRoomChoice").setAttribute("onClick","upperRoom()");
			document.body.style.backgroundImage = "url(images/BGPH-enter.jpg)";
			}
	}	

function upperRoom(){
	var nastyNode = document.getElementById("death3");
	var goUp = document.getElementById("upperRoom");
		if (nastyNode.style.display == "none" && goUp.style.display == "none"){
		goUp.style.display = "block";
		document.getElementById("death3Choice").style.backgroundColor="black";
		document.getElementById("death3Choice").setAttribute("onClick","");
		document.getElementById("upperRoomChoice").style.backgroundColor="black";
		document.getElementById("upperRoomChoice").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(images/BGPH-choices.jpg)";
		}
		else{
			goUp.style.display = "none";
			document.getElementById("death3Choice").style.backgroundColor="";
			document.getElementById("death3Choice").setAttribute("onClick","death3()");
			document.getElementById("upperRoomChoice").style.backgroundColor="";
			document.getElementById("upperRoomChoice").setAttribute("onClick","upperRoom()");
			document.body.style.backgroundImage = "url(images/BGPH-enter.jpg)";
			}
	}	
// First tier of divergent choices

function donut(){
	var barbell = document.getElementById("barbell");
	var torus = document.getElementById("torus");
		if (barbell.style.display == "none" && torus.style.display == "none"){
		torus.style.display = "block";
		document.getElementById("dumbellChoice").style.backgroundColor="black";
		document.getElementById("dumbellChoice").setAttribute("onClick","");
		document.getElementById("donutChoice").style.backgroundColor="black";
		document.getElementById("donutChoice").setAttribute("onClick","");
		document.body.style.backgroundImage = "url(images/BGPH-torus.jpg)";
		}
		else{
			torus.style.display = "none";
			document.getElementById("dumbellChoice").style.backgroundColor="";
			document.getElementById("dumbellChoice").setAttribute("onClick","dumbell()");
			document.getElementById("donutChoice").style.backgroundColor="";
			document.getElementById("donutChoice").setAttribute("onClick","donut()");
			document.body.style.backgroundImage = "url(images/BGPH-choices.jpg)";
		}
	}

	function dumbell(){
		var barbell = document.getElementById("barbell");
		var torus = document.getElementById("torus");
			if (barbell.style.display == "none" && torus.style.display == "none"){
			barbell.style.display = "block";
			document.getElementById("dumbellChoice").style.backgroundColor="black";
			document.getElementById("dumbellChoice").setAttribute("onClick","");
			document.getElementById("donutChoice").style.backgroundColor="black";
			document.getElementById("donutChoice").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-barbell.jpg)";
			}
			else{
				barbell.style.display = "none";
				document.getElementById("dumbellChoice").style.backgroundColor="";
				document.getElementById("dumbellChoice").setAttribute("onClick","dumbell()");
				document.getElementById("donutChoice").style.backgroundColor="";
				document.getElementById("donutChoice").setAttribute("onClick","donut()");
				document.body.style.backgroundImage = "url(images/BGPH-choices.jpg)";
			}
		}



// // Template for story progression functions
// function funcname(){
// 	var pathnottaken = document.getElementById("idofnottaken");
// 	var pathtaken = document.getElementById("idoftaken");
// 		if (nottaken.style.display == "none" && taken.style.display == "none"){
// 		taken.style.display = "block";
// 		document.getElementById("buttonnottaken").style.backgroundColor="black";
// 		document.getElementById("buttonnottaken").setAttribute("onClick","");
// 		document.getElementById("buttontaken").style.backgroundColor="black";
// 		document.getElementById("buttontaken").setAttribute("onClick","");
// 		document.body.style.backgroundImage = "url(images/newbgimg.jpg)";
// 		}
// 		else{
// 			taken.style.display = "none";
// 			document.getElementById("buttonnottaken").style.backgroundColor="";
// 			document.getElementById("buttonnottaken").setAttribute("onClick","restorefunc()");
// 			document.getElementById("buttontaken").style.backgroundColor="";
// 			document.getElementById("buttontaken").setAttribute("onClick","restorefunc()");
//			document.body.style.backgroundImage = "url(images/parentbgimg.jpg)";
// 		}
// 	}

/*will clear out all the selected paths, hopefully progressively from the bottom up
As I add tiers to the story, need to change the timeout on each level so the lowest level goes last
This will get mo funky when I really start branching, and when branches ad more transformations to the page, which need to be trnasformed back*/
function clearance(){
	if(document.getElementById("torus").style.display == "block"){donut();}
	if(document.getElementById("barbell").style.display == "block"){dumbell();}
		setTimeout(function () {
		if(document.getElementById("death3").style.display == "block"){death3();}
		if(document.getElementById("upperRoom").style.display == "block"){upperRoom();}
		}, 500);
			setTimeout(function () {
			if(document.getElementById("enter").style.display == "block"){enter();}
			if(document.getElementById("enter").style.display == "block"){enterb();}
			if(document.getElementById("death2").style.display == "block"){death2();}
			if(document.getElementById("death2").style.display == "block"){death2b();}
			}, 1000);
				setTimeout(function () {
				if(document.getElementById("correlation").style.display == "block"){guessRight();}
				if(document.getElementById("noClue").style.display == "block"){guessWrong();}
				}, 1500);
					setTimeout(function () {
					if(document.getElementById("adrift").style.display == "block"){adrift();}
					if(document.getElementById("landing").style.display == "block"){landing();}
					}, 2000);
}

	/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


