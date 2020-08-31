/* This little nugget should let me control the animation speed with each function. gradual for ifs (forward) faster for elses (reverts). If I can make it work, timeout for the big revert program needs to match accordingly.
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

// second tier of divergent choices

function monsterHunter(){
	var madscience = document.getElementById("madScience");
	var monsterhunter = document.getElementById("monsterHunter");
		if (madscience.style.display == "none" && monsterhunter.style.display == "none"){
			monsterhunter.style.display = "block";
			document.getElementById("madScienceChoice").style.backgroundColor="black";
			document.getElementById("madScienceChoice").setAttribute("onClick","");
			document.getElementById("monsterHunterChoice").style.backgroundColor="black";
			document.getElementById("monsterHunterChoice").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-monsterhunter.jpg)";
		}
		else{
			monsterhunter.style.display = "none";
			document.getElementById("madScienceChoice").style.backgroundColor="";
			document.getElementById("madScienceChoice").setAttribute("onClick","madScience()");
			document.getElementById("monsterHunterChoice").style.backgroundColor="";
			document.getElementById("monsterHunterChoice").setAttribute("onClick","monsterHunter()");
			document.body.style.backgroundImage = "url(images/BGPH-torus.jpg)";
		}
}

function madScience(){
	var madscience = document.getElementById("madScience");
	var monsterhunter = document.getElementById("monsterHunter");
		if (madscience.style.display == "none" && monsterhunter.style.display == "none"){
			madscience.style.display = "block";
			document.getElementById("madScienceChoice").style.backgroundColor="black";
			document.getElementById("madScienceChoice").setAttribute("onClick","");
			document.getElementById("monsterHunterChoice").style.backgroundColor="black";
			document.getElementById("monsterHunterChoice").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-madscience.jpg)";
		}
		else{
			madscience.style.display = "none";
			document.getElementById("madScienceChoice").style.backgroundColor="";
			document.getElementById("madScienceChoice").setAttribute("onClick","madScience()");
			document.getElementById("monsterHunterChoice").style.backgroundColor="";
			document.getElementById("monsterHunterChoice").setAttribute("onClick","monsterHunter()");
			document.body.style.backgroundImage = "url(images/BGPH-torus.jpg)";
		}
}

function outlaw(){
	var icedearth = document.getElementById("icedEarth");
	var outlaw = document.getElementById("outlaw");
		if (icedearth.style.display == "none" && outlaw.style.display == "none"){
			outlaw.style.display = "block";
			document.getElementById("icedEarthChoice").style.backgroundColor="black";
			document.getElementById("icedEarthChoice").setAttribute("onClick","");
			document.getElementById("hotEarthChoice").style.backgroundColor="black";
			document.getElementById("hotEarthChoice").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-outlaw.jpg)";
		}
		else{
			outlaw.style.display = "none";
			document.getElementById("icedEarthChoice").style.backgroundColor="";
			document.getElementById("icedEarthChoice").setAttribute("onClick","icedearth()");
			document.getElementById("hotEarthChoice").style.backgroundColor="";
			document.getElementById("hotEarthChoice").setAttribute("onClick","outlaw()");
			document.body.style.backgroundImage = "url(images/BGPH-barbell.jpg)";
		}
}

function icedearth(){
	var icedearth = document.getElementById("icedEarth");
	var outlaw = document.getElementById("outlaw");
		if (icedearth.style.display == "none" && outlaw.style.display == "none"){
			icedearth.style.display = "block";
			document.getElementById("icedEarthChoice").style.backgroundColor="black";
			document.getElementById("icedEarthChoice").setAttribute("onClick","");
			document.getElementById("hotEarthChoice").style.backgroundColor="black";
			document.getElementById("hotEarthChoice").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-icedearth.jpg)";
		}
		else{
			icedearth.style.display = "none";
			document.getElementById("icedEarthChoice").style.backgroundColor="";
			document.getElementById("icedEarthChoice").setAttribute("onClick","icedearth()");
			document.getElementById("hotEarthChoice").style.backgroundColor="";
			document.getElementById("hotEarthChoice").setAttribute("onClick","outlaw()");
			document.body.style.backgroundImage = "url(images/BGPH-barbell.jpg)";
		}
}

// third tier of divergent choices

function enabler(){
	var betrayer = document.getElementById("betrayer");
	var enabler = document.getElementById("enabler");
		if (betrayer.style.display == "none" && enabler.style.display == "none"){
			enabler.style.display = "block";
			document.getElementById("betrayerChoice").style.backgroundColor="black";
			document.getElementById("betrayerChoice").setAttribute("onClick","");
			document.getElementById("enablerChoice").style.backgroundColor="black";
			document.getElementById("enablerChoice").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-enabler.jpg)";
		}
		else{
			enabler.style.display = "none";
			document.getElementById("betrayerChoice").style.backgroundColor="";
			document.getElementById("betrayerChoice").setAttribute("onClick","betrayer()");
			document.getElementById("enablerChoice").style.backgroundColor="";
			document.getElementById("enablerChoice").setAttribute("onClick","enabler()");
			document.body.style.backgroundImage = "url(images/BGPH-madscience.jpg)";
		}
}

function betrayer(){
	var betrayer = document.getElementById("betrayer");
	var enabler = document.getElementById("enabler");
		if (betrayer.style.display == "none" && enabler.style.display == "none"){
			betrayer.style.display = "block";
			document.getElementById("betrayerChoice").style.backgroundColor="black";
			document.getElementById("betrayerChoice").setAttribute("onClick","");
			document.getElementById("enablerChoice").style.backgroundColor="black";
			document.getElementById("enablerChoice").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-betrayer.jpg)";
		}
		else{
			betrayer.style.display = "none";
			document.getElementById("betrayerChoice").style.backgroundColor="";
			document.getElementById("betrayerChoice").setAttribute("onClick","betrayer()");
			document.getElementById("enablerChoice").style.backgroundColor="";
			document.getElementById("enablerChoice").setAttribute("onClick","enabler()");
			document.body.style.backgroundImage = "url(images/BGPH-madscience.jpg)";
		}
}

function noMatterWhat(){
	var loveAndHope = document.getElementById("loveAndHope");
	var noMatterWhat = document.getElementById("noMatterWhat");
		if (loveAndHope.style.display == "none" && noMatterWhat.style.display == "none"){
			noMatterWhat.style.display = "block";
			document.getElementById("chooseLoveAndHope").style.backgroundColor="black";
			document.getElementById("chooseLoveAndHope").setAttribute("onClick","");
			document.getElementById("noMatterChoice").style.backgroundColor="black";
			document.getElementById("noMatterChoice").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-nomatter.jpg)";
		}
		else{
			noMatterWhat.style.display = "none";
			document.getElementById("chooseLoveAndHope").style.backgroundColor="";
			document.getElementById("chooseLoveAndHope").setAttribute("onClick","loveAndHope()");
			document.getElementById("noMatterChoice").style.backgroundColor="";
			document.getElementById("noMatterChoice").setAttribute("onClick","noMatterWhat()");
			document.body.style.backgroundImage = "url(images/BGPH-monsterhunter.jpg)";
		}
}

function loveAndHope(){
	var loveAndHope = document.getElementById("loveAndHope");
	var noMatterWhat = document.getElementById("noMatterWhat");
		if (loveAndHope.style.display == "none" && noMatterWhat.style.display == "none"){
			loveAndHope.style.display = "block";
			document.getElementById("chooseLoveAndHope").style.backgroundColor="black";
			document.getElementById("chooseLoveAndHope").setAttribute("onClick","");
			document.getElementById("noMatterChoice").style.backgroundColor="black";
			document.getElementById("noMatterChoice").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-loveandhope.jpg)";
		}
		else{
			loveAndHope.style.display = "none";
			document.getElementById("chooseLoveAndHope").style.backgroundColor="";
			document.getElementById("chooseLoveAndHope").setAttribute("onClick","loveAndHope()");
			document.getElementById("noMatterChoice").style.backgroundColor="";
			document.getElementById("noMatterChoice").setAttribute("onClick","noMatterWhat()");
			document.body.style.backgroundImage = "url(images/BGPH-monsterhunter.jpg)";
		}
}

function stayFocused(){
	var discover = document.getElementById("discovery");
	var focused = document.getElementById("stayFocused");
		if (discover.style.display == "none" && focused.style.display == "none"){
			focused.style.display = "block";
			document.getElementById("discoveryChoice").style.backgroundColor="black";
			document.getElementById("discoveryChoice").setAttribute("onClick","");
			document.getElementById("focusChoice").style.backgroundColor="black";
			document.getElementById("focusChoice").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-focus.jpg)";
		}
		else{
			focused.style.display = "none";
			document.getElementById("discoveryChoice").style.backgroundColor="";
			document.getElementById("discoveryChoice").setAttribute("onClick","restorefunc()");
			document.getElementById("focusChoice").style.backgroundColor="";
			document.getElementById("focusChoice").setAttribute("onClick","restorefunc()");
			document.body.style.backgroundImage = "url(images/BGPH-icedearth.jpg)";
		}
}

function discover(){
	var discover = document.getElementById("discovery");
	var focused = document.getElementById("stayFocused");
		if (discover.style.display == "none" && focused.style.display == "none"){
			discover.style.display = "block";
			document.getElementById("discoveryChoice").style.backgroundColor="black";
			document.getElementById("discoveryChoice").setAttribute("onClick","");
			document.getElementById("focusChoice").style.backgroundColor="black";
			document.getElementById("focusChoice").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-discovery.jpg)";
		}
		else{
			discover.style.display = "none";
			document.getElementById("discoveryChoice").style.backgroundColor="";
			document.getElementById("discoveryChoice").setAttribute("onClick","restorefunc()");
			document.getElementById("focusChoice").style.backgroundColor="";
			document.getElementById("focusChoice").setAttribute("onClick","restorefunc()");
			document.body.style.backgroundImage = "url(images/BGPH-icedearth.jpg)";
		}
}

function trust(){
	var stopHim = document.getElementById("stopHim");
	var trustHim = document.getElementById("trust");
		if (stopHim.style.display == "none" && trustHim.style.display == "none"){
			trustHim.style.display = "block";
			document.getElementById("stopChoice").style.backgroundColor="black";
			document.getElementById("stopChoice").setAttribute("onClick","");
			document.getElementById("chooseTrust").style.backgroundColor="black";
			document.getElementById("chooseTrust").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-Trust.jpg)";
		}
		else{
			trustHim.style.display = "none";
			document.getElementById("stopChoice").style.backgroundColor="";
			document.getElementById("stopChoice").setAttribute("onClick","stopHim()");
			document.getElementById("chooseTrust").style.backgroundColor="";
			document.getElementById("chooseTrust").setAttribute("onClick","trust()");
			document.body.style.backgroundImage = "url(images/BGPH-outlaw.jpg)";
		}
}

function stopHim(){
	var stopHim = document.getElementById("stopHim");
	var trustHim = document.getElementById("trust");
		if (stopHim.style.display == "none" && trustHim.style.display == "none"){
			stopHim.style.display = "block";
			document.getElementById("stopChoice").style.backgroundColor="black";
			document.getElementById("stopChoice").setAttribute("onClick","");
			document.getElementById("chooseTrust").style.backgroundColor="black";
			document.getElementById("chooseTrust").setAttribute("onClick","");
			document.body.style.backgroundImage = "url(images/BGPH-stophim.jpg)";
		}
		else{
			stopHim.style.display = "none";
			document.getElementById("stopChoice").style.backgroundColor="";
			document.getElementById("stopChoice").setAttribute("onClick","stopHim()");
			document.getElementById("chooseTrust").style.backgroundColor="";
			document.getElementById("chooseTrust").setAttribute("onClick","trust()");
			document.body.style.backgroundImage = "url(images/BGPH-outlaw.jpg)";
		}
}

// // Template for story progression functions
// function funcname(){
// 	var pathnottaken = document.getElementById("idofnottaken");
// 	var pathtaken = document.getElementById("idoftaken");
// 		if (nottaken.style.display == "none" && taken.style.display == "none"){
// 			taken.style.display = "block";
// 			document.getElementById("buttonnottaken").style.backgroundColor="black";
// 			document.getElementById("buttonnottaken").setAttribute("onClick","");
// 			document.getElementById("buttontaken").style.backgroundColor="black";
// 			document.getElementById("buttontaken").setAttribute("onClick","");
// 			document.body.style.backgroundImage = "url(images/newbgimg.jpg)";
// 		}
// 		else{
// 			taken.style.display = "none";
// 			document.getElementById("buttonnottaken").style.backgroundColor="";
// 			document.getElementById("buttonnottaken").setAttribute("onClick","restorefunc()");
// 			document.getElementById("buttontaken").style.backgroundColor="";
// 			document.getElementById("buttontaken").setAttribute("onClick","restorefunc()");
// 			document.body.style.backgroundImage = "url(images/parentbgimg.jpg)";
// 		}
// }

/*will clear out all the selected paths, hopefully progressively from the bottom up
As I add tiers to the story, need to change the timeout on each level so the lowest level goes last
This will get mo funky when I really start branching, and when branches ad more transformations to the page, which need to be trnasformed back*/

function clearance(){
	//Template: if(document.getElementById("tobecleared").style.display == "block"){clearcallfunc();}
	setTimeout(function () {
	if(document.getElementById("enabler").style.display == "block"){enabler();}
	if(document.getElementById("betrayer").style.display == "block"){betrayer();}
	if(document.getElementById("noMatterWhat").style.display == "block"){noMatterWhat();}
	if(document.getElementById("loveAndHope").style.display == "block"){loveAndHope();}
	if(document.getElementById("stayFocused").style.display == "block"){stayFocused();}
	if(document.getElementById("discovery").style.display == "block"){discover();}
	if(document.getElementById("trust").style.display == "block"){trust();}
	if(document.getElementById("stopHim").style.display == "block"){stopHim();}
	}, 0010);	
		setTimeout(function () {
		if(document.getElementById("icedEarth").style.display == "block"){icedearth();}
		if(document.getElementById("outlaw").style.display == "block"){outlaw();}
		if(document.getElementById("madScience").style.display == "block"){madScience();}
		if(document.getElementById("monsterHunter").style.display == "block"){monsterHunter();}
		}, 1100);
			setTimeout(function () {
			if(document.getElementById("torus").style.display == "block"){donut();}
			if(document.getElementById("barbell").style.display == "block"){dumbell();}
			}, 2200);
				setTimeout(function () {
				if(document.getElementById("death3").style.display == "block"){death3();}
				if(document.getElementById("upperRoom").style.display == "block"){upperRoom();}
				}, 3300);
					setTimeout(function () { //breakdown here: bgimage blacks out on revert, rather than animates smoothly. no likey
					if(document.getElementById("enter").style.display == "block"){enter();}
					if(document.getElementById("death2").style.display == "block"){death2();}
					}, 4400);
						setTimeout(function () {
						if(document.getElementById("adrift").style.display == "block"){adrift();}
						if(document.getElementById("landing").style.display == "block"){landing();}
						}, 5500);
}

	/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


