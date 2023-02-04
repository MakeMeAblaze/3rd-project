//press detector

var drums = document.querySelectorAll(".drum").length

for (var i=0; i<drums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  var ButinnerHTML = this.innerHTML;

    makeSound(ButinnerHTML);

    buttonAnimation(ButinnerHTML)

  });

    //kayboard press detector

    document.addEventListener("keypress", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

    function makeSound(key){

      switch (key) {
        case "w":
        var  first = new Audio("sounds/tom-1.mp3");
        first.play();
          break;
        case "a":
        var second = new Audio("sounds/tom-2.mp3");
        second.play();
          break;

        case "s":
        var third = new Audio("sounds/tom-3.mp3");
        third.play();
          break;

        case "d":
        var forth = new Audio("sounds/tom-3.mp3");
        forth.play();
          break;

        case "j":
        var fifth = new Audio("sounds/snare.mp3");
        fifth.play();
          break;

        case "l":
        var sixth = new Audio("sounds/kick-bass.mp3");
        sixth.play();
          break;

        case "k":
        var seventh = new Audio("sounds/crash.mp3");
        seventh.play();
        break;

        default:

    };

  };

  function buttonAnimation(currentKey){

//adding class name to element when kayword gets pressed
    var activateButton = document.querySelector("." + currentKey)
    //
    activateButton.classList.add("pressed");
//returning to original
    setTimeout (function (){
      activateButton.classList.remove("pressed");
    },800);

      }



};
