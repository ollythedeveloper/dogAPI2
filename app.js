'use strict';

//This function places the input number into the GET(fetch) Request
//then a JSON response is generated
//then the response is put through the displayImages function
//if any errors are caught an alert will be displayed
function getDogImage(dogNum) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

//This function takes the responseJSON, creates images,
//and places them in the DOM
function displayImages(responseJson){
 var doggyBin= []
 let dogPics = responseJson.message
 doggyBin = dogPics
 var div= document.getElementById('results')
 div.innerHTML='';
 for(let i = 0; i < doggyBin.length; i++){
   var allDoggies= document.createElement('div');
   var img= document.createElement('img');
   img.src= doggyBin[i];
   allDoggies.appendChild(img);
   div.appendChild(allDoggies)
  }
}
//This function responds to the form submission by taking the input number
//and placing it into the GET Request
function watchForm() {
  $('form').submit(event => {
    if($('#dogamt').val().length===0){
      event.preventDefault();
      let dogNum= 3;
      console.log(dogNum);
      getDogImage(dogNum);
    }else{
    event.preventDefault();
    let dogNum = $('#dogamt').val();
    console.log(dogNum);
    getDogImage(dogNum);
    $('#dogamt').val('');
    }
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});