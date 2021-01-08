

let userClickedPattern = [];
let check = false;
let level = 0;
let buttonArr = ["red", "blue", "green", "yellow"];
let originalPattern = [];
$('body').keypress(function() {
  if (!check) {
$("#level-title").text("Level " + level);
    next();
    check = true;
  }
});

function next() {

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonArr[randomNumber];
  originalPattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
  playSound(randomChosenColour);
  }
  
  function animate(currentColor) {
  
   $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  
  function playSound(name) {
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  
  
  function startOver() 
  {
  
   level = 0;
    originalPattern = [];
    check = false;
  }

$(".btn").click(function() {
let userChosenColour = $(this).attr("id");

   userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animate(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (originalPattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === originalPattern.length){

        setTimeout(function () {
            next();
          }, 1000);

        }

      } else {
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
         $("#level-title").text("Game Over, Press Any Keyboard Key to Restart");
        startOver();

      }

}

