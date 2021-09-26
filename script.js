const letters = 'abcdefghijklmnopqrtsuvwxyz';
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector('.letters');

lettersArray.forEach(letter => {

  let span = document.createElement('span');
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = 'letter-box';
  lettersContainer.appendChild(span);
});

const words = {
  programing:["PHP","javascript","go","scala","fortran","mysql","python"],
  movies:["prestige","inception","parasite","interstellar","whiplach"],
  people:["Albert einstein","Hitchcock","Alexander","Cleopatra","Mahatma ghandi"],
  countries:["Morocco","Yemen","Seria","Egypt","Qatar"]
}

let allkeys = Object.keys(words);



let randomPropNumber = Math.floor(Math.random() * allkeys.length);
let randomPropName = allkeys[randomPropNumber];
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomvalueValue = randomPropValue[randomValueNumber];

// console.log(randomPropValue);
// console.log(randomValueNumber); 
// console.log(randomvalueValue);

document.querySelector('.game-info span').innerHTML = randomPropName;

lettersGuessContainer = document.querySelector('.letters-guess');
lettersAndSpace = Array.from(randomvalueValue);

// console.log(lettersAndSpace);

lettersAndSpace.forEach(letter => {

  let emptySpan = document.createElement('span');

  if(letter === ' '){
    emptySpan.className = 'with-space';
  }
  lettersGuessContainer.appendChild(emptySpan);
});

let guessSlan = document.querySelectorAll('.letters-guess span');
let wrongAttempts = 0;
let theDrow = document.querySelector('.hangman-drow');

document.addEventListener("click", (e) =>{
  let theStatus = false;
  if(e.target.className === 'letter-box'){
    e.target.classList.add("clicked");

    let theClickedLetter = e.target.innerHTML.toLowerCase();
    let theChosenWord = Array.from(randomvalueValue.toLowerCase());

    // console.log(theClickedLetter);

    theChosenWord.forEach((wordLetter, index) => {
      if(theClickedLetter == wordLetter){
          theStatus = true;
        guessSlan.forEach((span,spanIndex) => {
          if(index === spanIndex){
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });
    if(theStatus !== true){

      wrongAttempts ++;
      theDrow.classList.add(`wrong-${wrongAttempts}`);

      document.getElementById('fail').play();

      if(wrongAttempts === 8){
        endGame();
        lettersContainer.classList.add('finished');
      }
    }else{
      document.getElementById('success').play();
    }
  }
});

function endGame(){
  let div = document.createElement('div');
  let divText = document.createTextNode(`Game Over | the word is: ${randomvalueValue}`);
  div.appendChild(divText);
  div.className = 'popup';
  document.body.appendChild(div);
}