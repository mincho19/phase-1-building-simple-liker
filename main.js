// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//user clicks the heart
//eventListener will record that input
//if the heart is an empty heart
  //invoke mimicServerCall (THIS SHOULD BE THE FETCH STEP, GETTING DATA FROM BACKEND SERVER)
    //if the servercall is 'fail'
      //error response should be catch block after then block ()
      //display error modal by removing hidden class
      //display server error message in the modal
    //if the server is successful
      //change the heart to full heart
      //add the activated heart class

document.addEventListener('DOMContentLoaded', (event) => {
const modal = document.getElementById("modal");
modal.hidden = true;
heartsCollection = document.getElementsByClassName("like-glyph");
const heartsArray =[...heartsCollection];
//console.log(heartsCollection);
heartsArray.forEach(element => element.addEventListener("click", clickHeart));

})


//------------------------------------------------------------------------------
// HELPER FUNCTIONS
//------------------------------------------------------------------------------

function clickHeart(e){
  //console.log('i have been clicked');
  const myPromise = mimicServerCall();
  myPromise
  .then((r) => handleResolvedA(e, r))
  .catch((error) => handleRejectedAny(e, error));
}

function handleResolvedA(e, r){

 if(e.target.className === "activated-heart"){
    e.target.className = "&#x2661";
    e.target.innerText = EMPTY_HEART;
 }
 else{
    e.target.className = "activated-heart";
    e.target.innerText = FULL_HEART;
 }
}

function handleRejectedAny(e, error){
  modal.hidden = false;
  setTimeout(()=> modal.hidden = true, 3000);
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
