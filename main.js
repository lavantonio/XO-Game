let box = document.querySelector('.box');


var newDiv = document.createElement('div')
newDiv.id = 'textEnd';
document.body.appendChild(newDiv);



let text = "";
symbol = 'O';
createTable()

function createTable() {

  let timer = setInterval(function() {
    text += '<div class="xo"> </div>';
    box.innerHTML = text;
    let stopInterval = setInterval(function() {
      clearInterval(timer)
    }, 800)
  }, 100)
}


var theEnd = setInterval(function() {

  var boxes = document.querySelectorAll(".xo");

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', insertSymbol)
  }

  var lines = [
    [boxes[0], boxes[1], boxes[2]],
    [boxes[3], boxes[4], boxes[5]],
    [boxes[6], boxes[7], boxes[8]],
    [boxes[0], boxes[3], boxes[6]],
    [boxes[1], boxes[4], boxes[7]],
    [boxes[2], boxes[5], boxes[8]],
    [boxes[0], boxes[4], boxes[8]],
    [boxes[6], boxes[4], boxes[2]],
  ];


  function insertSymbol() {
    if (symbol == 'O') {
      symbol = 'X';
    } else {
      symbol = 'O';
    }
    this.innerHTML = symbol;
    checkLine();
    checkDraw();
  }

  function checkLine() {
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];


      if (line[0].innerHTML == line[1].innerHTML && line[0].innerHTML == line[2].innerHTML && line[2].innerHTML !== " " && line[0].innerHTML == 'X') {
        line[0].style.background = "tomato";
        line[1].style.background = "tomato";
        line[2].style.background = "tomato";
        var textFirst = document.createTextNode("Prvi igrac je pobedio");
        newDiv.appendChild(textFirst);
      } else if (line[0].innerHTML == line[1].innerHTML && line[0].innerHTML == line[2].innerHTML && line[2].innerHTML !== " " && line[0].innerHTML == 'O') {
        line[0].style.background = "tomato";
        line[1].style.background = "tomato";
        line[2].style.background = "tomato";
        var textSecond = document.createTextNode("Drugi igrac je pobedio");
        newDiv.appendChild(textSecond);
      }
    }
  }

  function checkDraw() {
    if (boxes[0].innerHTML == boxes[1].innerHTML && boxes[1].innerHTML == boxes[2].innerHTML || boxes[3].innerHTML == boxes[4].innerHTML &&
      boxes[4].innerHTML == boxes[5].innerHTML || boxes[6].innerHTML == boxes[7].innerHTML && boxes[7].innerHTML == boxes[8].innerHTML ||
      boxes[0].innerHTML == boxes[3].innerHTML && boxes[3].innerHTML == boxes[6].innerHTML || boxes[1].innerHTML == boxes[4].innerHTML &&
      boxes[4].innerHTML == boxes[7].innerHTML || boxes[2].innerHTML == boxes[5].innerHTML && boxes[5].innerHTML == boxes[8].innerHTML ||
      boxes[0].innerHTML == boxes[4].innerHTML && boxes[4].innerHTML == boxes[8].innerHTML || boxes[6].innerHTML == boxes[4].innerHTML &&
      boxes[4].innerHTML == boxes[2].innerHTML || boxes[0].innerHTML == " " || boxes[1].innerHTML == " " || boxes[2].innerHTML == " " ||
      boxes[3].innerHTML == " " || boxes[4].innerHTML == " " || boxes[5].innerHTML == " " || boxes[6].innerHTML == " " || boxes[7].innerHTML == " " ||
      boxes[8].innerHTML == " ") {
      console.log("true");
    } else {
      var textDraw = document.createTextNode("Nereseno je");
      newDiv.appendChild(textDraw);
    }
  }

  clearInterval(theEnd)
}, 1000)
