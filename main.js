/*---------AUDIO---------*/
const soundButtonId = document.getElementById('sound-icon-id');
const audio = document.querySelector('audio');
audio.loop = true;
audio.volume = 0.6;

var sound2 = new Audio();
sound2.src ="correct.wav";
sound2.volume = 0;

var sound3 = new Audio();
sound3.src ="hooray.mp3";
sound3.volume = 0;

var sound4 = new Audio();
sound4.src ="incorrect2.mp3";
sound4.volume = 0;

let isPlaying = false;

soundButtonId.onclick = () => {
  isPlaying ? audio.pause() : audio.play();

audio.onplaying = () => {
  isPlaying = true;
  soundButtonId.className = 'fas fa-volume-up';
  sound2.volume = 1;
  sound3.volume = 1;
  sound4.volume = 0.4;
}
audio.onpause = () => {
  isPlaying = false;
  soundButtonId.className = 'fas fa-volume-mute';
  sound2.volume = 0;
  sound3.volume = 0;
  sound4.volume = 0;
}
};

/*-----------------------*/

const cContainers = [document.getElementById('c-container-1'),document.getElementById('c-container-2'),document.getElementById('c-container-3'),
document.getElementById('c-container-4'),document.getElementById('c-container-5'),document.getElementById('c-container-6'),
document.getElementById('c-container-7'),document.getElementById('c-container-8'),document.getElementById('c-container-9'),
document.getElementById('c-container-10'),document.getElementById('c-container-11'),document.getElementById('c-container-12')];

const onePath = 'horse.png';
const twoPath = 'duck.png';
const threePath = 'cow.png';
const fourPath = 'sheep.png';
const fivePath = 'pig.png';
const sixPath = 'chicken.png';

let message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');

let picsArr = [onePath, twoPath, threePath, fourPath, fivePath, sixPath, onePath, twoPath, threePath, fourPath, fivePath, sixPath];
let shuffledArr; /* shuffled picsArr */

let card1 = document.getElementById('card-1');
let card2 = document.getElementById('card-2');
let card3 = document.getElementById('card-3');
let card4 = document.getElementById('card-4');
let card5 = document.getElementById('card-5');
let card6 = document.getElementById('card-6');
let card7 = document.getElementById('card-7');
let card8 = document.getElementById('card-8');
let card9 = document.getElementById('card-9');
let card10 = document.getElementById('card-10');
let card11 = document.getElementById('card-11');
let card12 = document.getElementById('card-12');
let cardArr = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];

function shuffleArray(array) {
  var copy = [].concat(array);
  copy.sort(function(){
    return 0.5 - Math.random();
  });
  /* console.log(copy); */
  shuffledArr = copy;
}
shuffleArray(picsArr);   /* fills shuffledArr */

card1.src = shuffledArr[0];
card2.src = shuffledArr[1];
card3.src = shuffledArr[2];
card4.src = shuffledArr[3];
card5.src = shuffledArr[4];
card6.src = shuffledArr[5];
card7.src = shuffledArr[6];
card8.src = shuffledArr[7];
card9.src = shuffledArr[8];
card10.src = shuffledArr[9];
card11.src = shuffledArr[10];
card12.src = shuffledArr[11];

console.log(picsArr);
console.log(shuffledArr);

let checkArr = []; /*Will only contain 0 - 2 elements */
let clickCount = 0;
let clickEnabled = true;
let matchedArr = [];

let inPlay1 = true;
let inPlay2 = true;
let inPlay3 = true;
let inPlay4 = true;
let inPlay5 = true;
let inPlay6 = true;
let inPlay7 = true;
let inPlay8 = true;
let inPlay9 = true;
let inPlay10 = true;
let inPlay11 = true;
let inPlay12 = true;
let inPlayArr = [inPlay1, inPlay2, inPlay3, inPlay4, inPlay5, inPlay6,
inPlay7, inPlay8, inPlay9, inPlay10, inPlay11, inPlay12];

function shakeMatchedPairsFirst () {
  for(let i = 0; i < cContainers.length; i++){
    for(let j = 0; j < matchedArr.length; j++){
      if(cContainers[i].children[1].firstElementChild === matchedArr[j]){
        cContainers[i].children[1].firstElementChild.style.animation = 'tilt-shaking 0.5s 0.5s';
      }
    }
  }
}

function shakeMatchedPairs () {
  for(let i = 0; i < cContainers.length; i++){
    for(let j = 0; j < matchedArr.length; j++){
  if(cContainers[i].children[1].firstElementChild === matchedArr[j]){
    cContainers[i].children[1].firstElementChild.style.animation = 'tilt-shaking 0.5s infinite';
      }
    }
  }
}

function removeShakeMatchedPairs () {
  for(let i = 0; i < cContainers.length; i++){
    for(let j = 0; j < matchedArr.length; j++){
  if(cContainers[i].children[1].firstElementChild === matchedArr[j]){
    cContainers[i].children[1].firstElementChild.style.animation = '';
      }
    }
  }
}

function determIfInPlay() {
  if(cContainers[0].children[1].firstElementChild === checkArr[0]){
    inPlay1 = false;
  }else{ inPlay1 = true;}
  if(cContainers[1].children[1].firstElementChild === checkArr[0]){
    inPlay2 = false;
  }else{ inPlay2 = true;}
  if(cContainers[2].children[1].firstElementChild === checkArr[0]){
    inPlay3 = false;
  }else{ inPlay3 = true;}
  if(cContainers[3].children[1].firstElementChild === checkArr[0]){
    inPlay4 = false;
  }else{ inPlay4 = true;}
  if(cContainers[4].children[1].firstElementChild === checkArr[0]){
    inPlay5 = false;
  }else{ inPlay5 = true;}
  if(cContainers[5].children[1].firstElementChild === checkArr[0]){
    inPlay6 = false;
  }else{ inPlay6 = true;}
  if(cContainers[6].children[1].firstElementChild === checkArr[0]){
    inPlay7 = false;
  }else{ inPlay7 = true;}
  if(cContainers[7].children[1].firstElementChild === checkArr[0]){
    inPlay8 = false;
  }else{ inPlay8 = true;}
  if(cContainers[8].children[1].firstElementChild === checkArr[0]){
    inPlay9 = false;
  }else{ inPlay9 = true;}
  if(cContainers[9].children[1].firstElementChild === checkArr[0]){
    inPlay10 = false;
  }else{ inPlay10 = true;}
  if(cContainers[10].children[1].firstElementChild === checkArr[0]){
    inPlay11 = false;
  }else{ inPlay11 = true;}
  if(cContainers[11].children[1].firstElementChild === checkArr[0]){
    inPlay12 = false;
  }else{ inPlay12 = true;}

  for(let i = 0; i < matchedArr.length; i++){
    if(cContainers[0].children[1].firstElementChild === matchedArr[i]){
        inPlay1 = false;
    }
    if(cContainers[1].children[1].firstElementChild === matchedArr[i]){
        inPlay2 = false;
    }
    if(cContainers[2].children[1].firstElementChild === matchedArr[i]){
        inPlay3 = false;
    }
    if(cContainers[3].children[1].firstElementChild === matchedArr[i]){
        inPlay4 = false;
    }
    if(cContainers[4].children[1].firstElementChild === matchedArr[i]){
        inPlay5 = false;
    }
    if(cContainers[5].children[1].firstElementChild === matchedArr[i]){
        inPlay6 = false;
    }
    if(cContainers[6].children[1].firstElementChild === matchedArr[i]){
        inPlay7 = false;
    }
    if(cContainers[7].children[1].firstElementChild === matchedArr[i]){
        inPlay8 = false;
    }
    if(cContainers[8].children[1].firstElementChild === matchedArr[i]){
        inPlay9 = false;
    }
    if(cContainers[9].children[1].firstElementChild === matchedArr[i]){
        inPlay10 = false;
    }
    if(cContainers[10].children[1].firstElementChild === matchedArr[i]){
        inPlay11 = false;
    }
    if(cContainers[11].children[1].firstElementChild === matchedArr[i]){
        inPlay12 = false;
    }
  }
}

function togglemessage() {
  if(matchedArr.length !== 12){
      message.innerHTML = 'Match each card to win the game';
  }
}

  cContainers[0].onclick = () => {
    shakeMatchedPairsFirst();
    togglemessage();
    determIfInPlay();
    if(inPlay1){
        noDuplicate(card1);
        if(clickEnabled){
        cContainers[0].classList.toggle("flip");
        clickCount ++;
        checkArr.push(card1);
        determine(0);
      }
    }
}
  cContainers[1].onclick = () => {
    togglemessage();
    determIfInPlay();
    if(inPlay2){
      noDuplicate(card2);
      if(clickEnabled){
        cContainers[1].classList.toggle("flip");
        clickCount ++;
        checkArr.push(card2);
        determine(1);
      }
    }
}
  cContainers[2].onclick = () => {
    togglemessage();
    determIfInPlay();
    if(inPlay3){
      noDuplicate(card3);
      if(clickEnabled){
        cContainers[2].classList.toggle("flip");
        clickCount ++;
        checkArr.push(card3);
        determine(2);
      }
    }
}
cContainers[3].onclick = () => {
  togglemessage();
  determIfInPlay();
  if(inPlay4){
    noDuplicate(card4);
    if(clickEnabled){
      cContainers[3].classList.toggle("flip");
      clickCount ++;
      checkArr.push(card4);
      determine(3);
    }
  }
}
cContainers[4].onclick = () => {
  togglemessage();
  determIfInPlay();
  if(inPlay5){
    noDuplicate(card5);
    if(clickEnabled){
      cContainers[4].classList.toggle("flip");
      clickCount ++;
      checkArr.push(card5);
      determine(4);
    }
  }
}
cContainers[5].onclick = () => {
  togglemessage();
  determIfInPlay();
  if(inPlay6){
    noDuplicate(card6);
    if(clickEnabled){
      cContainers[5].classList.toggle("flip");
      clickCount ++;
      checkArr.push(card6);
      determine(5);
    }
  }
}
cContainers[6].onclick = () => {
  togglemessage();
  determIfInPlay();
  if(inPlay7){
    noDuplicate(card7);
    if(clickEnabled){
      cContainers[6].classList.toggle("flip");
      clickCount ++;
      checkArr.push(card7);
      determine(6);
    }
  }
}
cContainers[7].onclick = () => {
  togglemessage();
  determIfInPlay();
  if(inPlay8){
    noDuplicate(card8);
    if(clickEnabled){
      cContainers[7].classList.toggle("flip");
      clickCount ++;
      checkArr.push(card8);
      determine(7);
    }
  }
}
cContainers[8].onclick = () => {
  togglemessage();
  determIfInPlay();
  if(inPlay9){
    noDuplicate(card9);
    if(clickEnabled){
      cContainers[8].classList.toggle("flip");
      clickCount ++;
      checkArr.push(card9);
      determine(8);
    }
  }
}
cContainers[9].onclick = () => {
  togglemessage();
  determIfInPlay();
  if(inPlay10){
    noDuplicate(card10);
    if(clickEnabled){
      cContainers[9].classList.toggle("flip");
      clickCount ++;
      checkArr.push(card10);
      determine(9);
    }
  }
}
cContainers[10].onclick = () => {
  togglemessage();
  determIfInPlay();
  if(inPlay11){
    noDuplicate(card11);
    if(clickEnabled){
      cContainers[10].classList.toggle("flip");
      clickCount ++;
      checkArr.push(card11);
      determine(10);
    }
  }
}
cContainers[11].onclick = () => {
  togglemessage();
  determIfInPlay();
  if(inPlay12){
    noDuplicate(card12);
    if(clickEnabled){
      cContainers[11].classList.toggle("flip");
      clickCount ++;
      checkArr.push(card12);
      determine(11);
    }
  }
}

function determine (index) {
  if(checkArr.length === 2 && checkArr[0].src === checkArr[1].src){
    matchedArr.push(checkArr[0]);
    matchedArr.push(checkArr[1]);
    clickCount = 0;
    shiftTwice(checkArr);
    sound2.play();
  }
  if(checkArr.length === 2 && checkArr[0] !== checkArr[1]){
    setTimeout(flipAuto, 1500, index);
    sound4.play();
  }
  shakeMatchedPairsFirst();
  victory();
  appearResetButton();
}

function flipAuto(index) {
      cContainers[index].classList.toggle("flip");
  for(let i = 0; i < cContainers.length;i++){
    if(cContainers[i].children[1].firstElementChild === checkArr[0]){
      cContainers[i].classList.toggle("flip");
      clickCount = 0;
      shiftTwice(checkArr);
    }
  }
}

function shiftTwice(arr){
  arr.shift();
  arr.shift();
}

function noDuplicate(card){
  if( card === checkArr[0]){
    clickEnabled = false;
  }
  if(clickCount >= 2){
    clickEnabled = false;
  }
  if(clickCount < 2){
    clickEnabled = true;
  }
}

function shiftTwice(arr){
  arr.shift();
  arr.shift();
}

console.log(card12.parentNode.parentNode);
console.log(cContainers[0].children[1].firstElementChild);

function victory () {
  if(matchedArr.length > 11) {
    shakeMatchedPairs();
    sound3.play();
    message.style.visibility = 'visible';
    message.innerHTML = 'WELL DONE!';
    message.style.transform = 'scale(1.1)';
  }
}

function flipToFrontFace() {
  for(let i = 0; i < cContainers.length; i++){
    for(let j = 0; j < matchedArr.length; j++){
        if(cContainers[i].children[1].firstElementChild === matchedArr[j]){
            cContainers[i].classList.toggle("flip");
        }
    }
  }
      matchedArr = [];
}

function newShuffledDeck () {
    shuffleArray(picsArr);
    card1.src = shuffledArr[0];
    card2.src = shuffledArr[1];
    card3.src = shuffledArr[2];
    card4.src = shuffledArr[3];
    card5.src = shuffledArr[4];
    card6.src = shuffledArr[5];
    card7.src = shuffledArr[6];
    card8.src = shuffledArr[7];
    card9.src = shuffledArr[8];
    card10.src = shuffledArr[9];
    card11.src = shuffledArr[10];
    card12.src = shuffledArr[11];
    console.log(shuffledArr);
}

function appearResetButton() {
  if(message.innerHTML === 'WELL DONE!'){
    resetButton.style.visibility = 'visible';
  }
}

function reset () {
  removeShakeMatchedPairs();
  message.style.visibility = 'visible';
  message.style.transform = 'scale(1.0)';
  message.innerHTML = 'Click a card to begin';
  flipToFrontFace();
  resetButton.style.visibility = 'hidden';
  setTimeout(newShuffledDeck, 1000);
}

resetButton.onclick = () => {
  reset();
}
