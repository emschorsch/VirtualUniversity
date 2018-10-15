/*
Project: Virtual University

Filename: virtualUniversity_settings.js


Notes:



To Do:

*/
//Theme section
let siteHeaderBarColor = document.getElementById("siteHeaderBarColor").value;
let pageHeaderBarColor = document.getElementById("pageHeaderBarColor").value;
let backgroundColor = document.getElementById("backgroundColor").value;
let backgroundImages = document.getElementById("backgroundImage").value;

//Privacy security section



function saveSettings()
{
 //Theme section
 siteHeaderBarColor = document.getElementById("siteHeaderBarColor").value;
 pageHeaderBarColor = document.getElementById("pageHeaderBarColor").value;
 backgroundColor = document.getElementById("backgroundColor").value;
 backgroundImage = document.getElementById("backgroundImage").value;
 
 //Privacy/Security sections
 /*
 siteHeaderBarColor = document.getElementById("siteHeaderBarColor").value;
 pageHeaderBarColor = document.getElementById("pageHeaderBarColor").value;
 backgroundColor = document.getElementById("backgroundColor").value;
 backgroundImage = document.getElementById("backgroundImage").value;
*/
 alert("siteheaderBarColor :" + siteHeaderBarColor + "\n" +
 "pageHeaderBarColor :" + pageHeaderBarColor + "\n" + 
 "backgroundColor :" + backgroundColor + "\n" +
 "backgroundImage :" + backgroundImage + "\n" );
}


//let  = document.getElementById("").value;

/*  
  <div id="privacySecuritySection">
   <h2>Privacy/Security</h2>
   <form>
   Profile Searchable<br>
   <input type="radio" name="profileSearchable" value="yes">Yes <br>
   <input type="radio" name="profileSearchable" value="no" checked>No <br><br>
   
   Profile Viewable By<br>
   <input type="radio" name="profileViewableBy" value="none"checked>None<br>
   <input type="radio" name="profileViewableBy" value="invite">Invite<br>
   <input type="radio" name="profileViewableBy" value="network">Network<br>
   <input type="radio" name="profileViewableBy" value="all">All<br><br>
   
   Default Item Post Security<br>
   <input type="radio" name="defaultPostSecLv" value="none" checked>None<br>
   <input type="radio" name="defaultPostSecLv" value="invite">Invite<br>
   <input type="radio" name="defaultPostSecLv" value="network">Network<br>
   <input type="radio" name="defaultPostSecLv" value="all">All<br><br>
   */
function reshowCurrentSettings()
{
 alert("Reshowing currently saved settings" );
}
   
function restoreDefaultSettings()
{
 confirm("Are you sure you want to restore default settings?" );
	
}




