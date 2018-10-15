/*
Project: Virtual University

Filename: virtualUniversity_accounts.js


Notes:



To Do:
make account class

local storage/ postgres

*/

//
let accounts = [];

class Account
{
 constructor(email, pass, alias)
 {
  this.id = accounts.length;
  this.email = email;
  this.pass = pass;
  this.alias = alias;
  this.databaseLocation = "";
  this.uploads = [];
  this.settings = {"backgroundColor" : "blue"}
  
  accounts.push(this);
 } 
	
 //let this.savedSettings = [];
}

let account0 = new Account("dog@xmail.com", "pass", "dog");
let account1 = new Account("cat@xmail.com", "pass", "cat");
let account2 = new Account("bird@xmail.com", "pass", "bird");

//alert(account0.settings["backgroundColor"]);
//alert(JSON.stringify(account0) + "\n" + JSON.stringify(account1) + "\n" + JSON.stringify(account2) + "\n"  );

let currentlySignedInAccount;
function signIn()
{
 //get email and pass input
 let signInEmail = document.getElementById("signInEmail").value;
 let signInPass = document.getElementById("signInPass").value;
 
 //check if email is in array/db
 loop1:
 for (let i = 0; i <= accounts.length; i++)
 {
  if (signInEmail == accounts[i].email && signInPass == accounts[i].pass)
  {
   
   currentlySignedInAccount = accounts[i]
   alert("Login in successful as " + currentlySignedInAccount.alias);
   localStorage.setItem('currentlySignedInAccount', currentlySignedInAccount.alias);
   currentlySignedInAccount = localStorage.getItem("currentlySignedInAccount", currentlySignedInAccount);
   alert("Currently signed in as: " + currentlySignedInAccount);
   //replace sign in box with sign out button
   
   break loop1;
  }	
  else
  {
   //alert("Sign in unsuccessful");
  }	  
 }
 
 //set local storage vally of currentlySignedInAs id1
 
 
}

function signUp()
{
 //get email and pass input
 let signInEmail = document.getElementById("signInEmail").value;
 let signInPass = document.getElementById("signInPass").value;
 //send confirmation email
 // alert confirmation email sent
}


document.onload(function (){let currentlySignedInAccount = localStorage.getItem("currentlySignedInAccount", currentlySignedInAccount); alert("Currently signed in as: + currentlySignedInAccount")});

