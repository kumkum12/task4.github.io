
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    let buttonInnerHTML = this.innerHTML;

    Sound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", (event)=> {

  Sound(event.key);

  buttonAnimation(event.key);

});


function Sound(key) {

  switch (key) {
    case "k":
       let tom1 = new Audio("music/k1.mp3");
      tom1.play();
      break;

    case "u":
      let tom2 = new Audio("music/k2.mp3");
      tom2.play();
      break;
      
      case "m":
      let tom3 = new Audio('music/k3.mp3');
      tom3.play();
      break;

    case "s":
      let tom4 = new Audio('music/k4.mp3');
      tom4.play();
      break;

    case "a":
      let snare = new Audio('music/k5.mp3');
      snare.play();
      break;

  
  }
}


function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 1000);

}