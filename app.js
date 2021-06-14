(function () {
  var matches = 0;
  var images = [];
  var flippedCards = [];
  var modalGameOver = document.querySelector("#modalGameOver");
  var imgMatchSign = document.querySelector("#imgMatchSign");

  for (var i = 0; i < 16; i++){
    var img = {
      src: "imagens/" + i + ".png",
      id: i % 8
    };
    images.push(img);
  }
  startGame();
  
  function startGame() {
    matches = 0;

    var flippedCards = [];
    images = randomSort(images);

    var frontFaces = document.getElementsByClassName("front");
    var backFaces = document.getElementsByClassName("back");

    for (var i = 0; i < 16; i++){
      frontFaces[i].classList.remove("flipped", "match");
      backFaces[i].classList.remove("flipped", "match");

      var card = document.querySelector("#card" + i);
      card.style.left = i % 8 === 0 ? 5 + "px" : i % 8 * 165 + 5 + "px";
      card.style.top = i < 8 ? 5 + "px" : 250 + "px";

      card.addEventListener("click", flipCard, false);

      frontFaces[i].style.background = "url('" + images[i].src + "')";
      frontFaces[i].setAttribute("id", images[i].id);
    }
    modalGameOver.style.zIndex = -2;
    modalGameOver.removeEventListener("click", startGame, false);
  }
  function randomSort(oldArray) {
    var newArray = [];
    while (newArray.length !== oldArray.length) {
      var i = Math.floor(Math.random() * oldArray.length);
      if (newArray.indexOf(oldArray[i]) < 0) {
        newArray.push(oldArray[i]);
      }
    }
    return newArray;
  }

  function flipCard() {
    if (flippedCards.length < 2) {
      var faces = this.getElementsByClassName("face");
      if (faces[0].classList.length > 2) {
        return;
      }

      faces[0].classList.toggle("flipped");
      faces[1].classList.toggle("flipped");

      flippedCards.push(this);
      if(flippedCards.length === 2){
        if (flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id) {
          flippedCards[0].childNodes[1].classList.toggle("match");
          flippedCards[0].childNodes[3].classList.toggle("match");
          flippedCards[1].childNodes[1].classList.toggle("match");
          flippedCards[1].childNodes[3].classList.toggle("match");

          matchCardSign();
          matches++;
          flippedCards = [];
          if (matches === 8) {
            gameOver();
          }
        }
      }

    } else {
      flippedCards[0].childNodes[1].classList.toggle("flipped");
      flippedCards[0].childNodes[3].classList.toggle("flipped");
      flippedCards[1].childNodes[1].classList.toggle("flipped");
      flippedCards[1].childNodes[3].classList.toggle("flipped");
      flippedCards = [];
    }

  }

  function gameOver() {
    modalGameOver.style.zIndex = 10;
    modalGameOver.addEventListener("click", startGame, false);
  }
  function matchCardSign() {
    imgMatchSign.style.zIndex = 1;
    imgMatchSign.style.top = 150 + "px";
    imgMatchSign.style.opacity = 0;
    setTimeout(function () {
      imgMatchSign.style.zIndex = -1;
      imgMatchSign.style.top = 200 + "px";
      imgMatchSign.style.opacity = 1;
    }, 1500);
  }

}());

let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];




function iniciar() {
  
  let x = document.getElementsByClassName("fig");
  let i;
  let k;
  for (k = 0; k < arr.length; k++) {
    for (i = 0; i < x.length; i++) {
      x[i].innerHTML = arr[k++];
    }
    
  }

}
function embaralhar() {
  let i, j, k;
  for (i = arr.length - 1; i > 0; i++){
    j = Math.floor(Math.random() * i);
    k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
    return arr;
  }
  
}

function clique() {
  var x = document.getElementsByClassName("fig");
  
  var i;
 
  for (i = 0; i < x.length;i++ ) {
    if (x[i].style.display == "block") {
      x[i].style.display = "none";
      
    
    } else {
      x[i].style.display = "block";
      
    
    }
    break;
  }
  
}

document.getElementsByClassName("fig").addEventListener("click", clique);




