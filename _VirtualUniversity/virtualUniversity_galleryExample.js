function postComment()
{
 var postedCommentText = document.getElementById("commentInputTextArea").value;
 //alert("Posting comment: \n" + postedCommentText);
 
 
 let bottomOfComments = document.getElementById("bottomOfComments");
 
 
 $(bottomOfComments).before("<div class=\"commentPost\"><h3 class=\"commentHeader\">" + currentAccount.alias +"</h3> <p class=\"commentContent\">" + postedCommentText + "</p></div>");
 //savecommentData();
 
 //go to #bottomOfComments
 
 bottomOfComments.scrollIntoView();
 
 document.getElementById("commentInputTextArea").value = "";
}

function saveCommentData()
{
	
}

function displaySavedCommentData()
{
	
}

function rate()
{
 let rating = prompt("Enter rating between 0 and 10: ");
}

function share()
{
 alert("Url: _________");
}

function fave()
{
 alert("Added to faves gallery");
}

function loadFile(fileNum) //majorly rewrite this
{
 //let fileNum = fileNum;
 alert("Loading file: vid" + fileNum);
 
 $("currentVideo").attr('src', ("vid" + fileNum));
 /*
 //set as #currentVideo
 //reload div if necessary 
 */
}

 /*
 $("currentVideo").before("vid" + fileNum);
 $("currentVideo").text('jQuery').attr('src', ("vid" + fileNum));
 jQuery('a').text('jQuery').attr('href', ("vid" + fileNum));
 */