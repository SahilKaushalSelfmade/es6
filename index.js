//

/* 
var h1 = document.querySelector("h1");
h1.innerHTML = "Change from query selector";
console.log(h1);
*/

var a = document.querySelector("a");
a.addEventListener("click", function (e) {
  var h1 = document.querySelector("h1");
  h1.innerHTML = "Change from query selector";
});

var car = ["BMW", "Audi", "Tesla"];
for (let ccar = 0; ccar < car.length; ccar++) {
  console.log(ccar.toString());
}

// image code
var x;
for (x = 0; x <= 2; x++) {
  setTimeout(() => {
    // Set Timeout Fn
    //   var box = document.createElement("div");
    //   box.className = "box";
    //   document.getElementById("container").appendChild(box);
    // }, 500 * x);
    var box = (document.getElementById("container").className = "box");
  }, 500 * 4);
}

var heading = document.querySelectorAll(".heading");

for (var i = 0; i < heading.length; i++) {
  heading[i].innerHTML = "hello query selector all";
}
var elements = document.getElementsByClassName("heading");
for (var i = 0; i < elements.length; i++) {
  // elements[i].style ...
  elements[i].innerHTML = "hello query selector all";
}
elements();
