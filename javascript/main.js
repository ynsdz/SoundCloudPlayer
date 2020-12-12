/* 1.Search */


/*2. Query Soundcloud API */
var SoundCloudAPI ={}

SoundCloudAPI.init = function(){
  SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});  
}
SoundCloudAPI.init();
SoundCloudAPI.getTrack = function(inputValue){
    // find all sounds of buskers licensed under 'creative commons share alike'
SC.get('/tracks', {
  q: inputValue, /*license: 'cc-by-sa'*/
}).then(function(tracks) {
  console.log(tracks);
    SoundCloudAPI.renderTracks(tracks);
});
}

SoundCloudAPI.getTrack("Rilo Kiley");

SoundCloudAPI.renderTracks= function(tracks){

 //card 
var card =document.createElement("div");
card.classList.add("card");

//image
var imageDiv =document.createElement("div");
imageDiv.classList.add("image");

var image_img = document.createElement("img");
image_img.classList.add("image_img");
image_img.src = "http://www.placekitten.com/290/290";

imageDiv.appendChild(image_img);

//content 
var content= document.createElement('div');
    content.classList.add("content");

var header = document.createElement('div');
header.classList.add('header');
header.innerHTML= "<a href='#' target='_blank'>Science Vs. Romance</a>"
    
//button
var button = document.createElement('div');
    button.classList.add("ui", 'bottom', 'attached', 'button', 'js-button');
var icon = document.createElement('i');
icon.classList.add('add','icon');
var buttonText = document.createElement('span');
buttonText.innerHTML='Add to playlist';
    
    
content.appendChild(header);
button.appendChild(icon);
button.appendChild(buttonText);
card.appendChild(imageDiv);
card.appendChild(content);
card.appendChild(button);

var searchResult = document.querySelector(" .js-search-results" );

searchResult.appendChild(card);

                   };


/*3. Display to cards */


