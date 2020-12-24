// 1. Grab Input
document.querySelector(".js-go").addEventListener("click", function () {
  var input = document.querySelector(".js-userinput").value;
  console.log(input);
  /* 
//   For Local Derviation
  var container = document.querySelector(".js-container");
container.innerHTML = input;
 */
  pushToDom(input); //Globally Fetch
});
document.querySelector(".js-userinput").addEventListener("keyup", function (e) {
  var input = document.querySelector(".js-userinput").value;

  //Press a enter key it show result
  if (e.which === 13) {
    pushToDom(input);
  }
});

// 2. Do stuff with API
var url =
  "https://api.giphy.com/v1/gifs/search?q=funny&api_key=bafNCY8HBTl1LjYnUOdO553J9F0FbSVh";

//   AJAX Request
var giphyAJAXCall = new XMLHttpRequest();
giphyAJAXCall.open("GET", url);
giphyAJAXCall.send();
giphyAJAXCall.addEventListener("load", function (e) {
  var data = e.target.response;
  pushToDom(data);
});

// 3. Show me the GIPS

//   For Global Derviation
function pushToDom(input) {
  var response = JSON.parse(input);
  var imageURLs = response.data;
  imageURLs.forEach(function () {});
  console.log(response);
  var container = document.querySelector(".js-container");
  container.innerHTML = imageURLs;
}
// api_key=bafNCY8HBTl1LjYnUOdO553J9F0FbSVh
