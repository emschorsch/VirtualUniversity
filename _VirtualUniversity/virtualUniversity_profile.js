/*************
**************
Toggle Menu Screens
**************
*************/
let 
infoSetcion = document.getElementById("infoSection"),
galleriesSection = document.getElementById("galleriesSection"),
networkSection = document.getElementById("networkSection");

function displayInfoSection()
{
 //alert("Displaying info section");
 if (infoSection.style.display == "none")
 {
  infoSection.style.display = "inline-block";	 
 }
 else if (infoSection.style.display == "inline-block")
 {
 }
 else
 {
  infoSection.style.display = "none";	 
 }
 galleriesSection.style.display = "none";	 
 networkSection.style.display = "none";	 
}

function displayGalleriesSection()
{
 //alert("Displaying galleries section");
 if (galleriesSection.style.display == "none")
 {
  galleriesSection.style.display = "inline-block";	 
 }
 else if (galleriesSection.style.display == "inline-block")
 {
 }
 else
 {
  galleriesSection.style.display = "none";	 
 }
 infoSection.style.display = "none";	 
 networkSection.style.display = "none";	 
}

function displayNetworkSection()
{
 //alert("Displaying network section");
 if (networkSection.style.display == "none")
 {
  networkSection.style.display = "inline-block";	 
 }
 else if (networkSection.style.display == "inline-block")
 {
 }
 else
 {
  networkSection.style.display = "none";	 
 }
 galleriesSection.style.display = "none";	 
 infoSection.style.display = "none";	 
}


//Profile info/image changing
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) 
{
 showDivs(slideIndex += n);
}

function showDivs(n) 
{
 let i;
 let x = document.getElementsByClassName("mySlides");
 if (n > x.length) 
 {
  slideIndex = 1;
 } 
 if (n < 1) 
 {
  slideIndex = x.length;
 }
 for (i = 0; i < x.length; i++) 
 {
    x[i].style.display = "none"; 
 }
 x[slideIndex-1].style.display = "block"; 
 x[slideIndex-1].style.height = '100%'; //WAS 90
 x[slideIndex-1].style.width = '100%'; //was 90
}

let addImgToGallery = function()
{
 prompt("Add an image to profile gallery");	
}

let deleteImgFromGallery = function()
{
 prompt("Are you sure you want to delet this image from your profile gallery");	
}

let editImgGallery = function()
{
 alert("Displaying you image gallery");	
}

function displayCreateGalleryBox()
{
 
}
