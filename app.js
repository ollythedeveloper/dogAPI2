'use strict';

function getDogImage(dogNum) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
    .then(response => response.json())
    .then(responseJson => displayImages(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}
//var doggyBin= []

function displayImages(responseJson){
 //console.log("These are the doggies " + responseJson.message)
 var doggyBin= []
 let dogPics = responseJson.message
 doggyBin = dogPics
 var div= document.getElementById('results')
 div.innerHTML='';
 //console.log(doggyBin)
 for(let i = 0; i < doggyBin.length; i++){
   var allDoggies= document.createElement('div');
   var img= document.createElement('img');
   img.src= doggyBin[i];
   allDoggies.appendChild(img);
   div.appendChild(allDoggies)
  }
}

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