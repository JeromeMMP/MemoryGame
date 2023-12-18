const gameContainer = document.getElementById("game");
let clicks = 0
let location1 = null
let location2 = null
const allDivs = document.querySelectorAll('#game > div');
const restart = document.querySelector('#restart');


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];  //temp se convierte ultimo elemento  
    array[counter] = array[index]; // ultimo elemento se convierte en la posición random
    array[index] = temp; // [posición random se vuelve en ultimo elemento]
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
   
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);



  }
}

// TODO: Implement this function!
function handleCardClick(e) {
  // you can use event.target to see which element was clicked
  const square = e.target
  console.log("you just clicked", e.target);
  console.log(e.target.NamedNodeMap);
  
// changing background color 
function changeBackgroundColor (color){
  e.target.style.backgroundColor = color; 
}
const squareColor = e.target.getAttribute('class');
// changing back to none function
function  none(){
location1.style.backgroundColor = 'rgba (0,0,0,0)'
location2.style.backgroundColor = 'rgba (0,0,0,0)'
}


//deafault action


// listening for 2 clicks and restoring to cero

function twoClicks(e){
clicks += 1;
function setToCero(){
location1.style.backgroundColor = 'rgba(0,0,0,0)'
location2.style.backgroundColor = 'rgba(0,0,0,0)'
  clicks = 0}
console.log(clicks);
if (clicks === 1){
  changeBackgroundColor(squareColor)
  location1 = e.target;
  }

else if (clicks === 2){
   location2 = e.target;
   changeBackgroundColor(squareColor)
  // prevent double clicking
  if (location1 === location2){
      clicks = 1
    }
    // if failed attempt
  else if (location1.getAttribute('class')!==location2.getAttribute('class')){
      function prev(){clicks = 0}
      setTimeout(setToCero,1000);
      setTimeout(prev,1000)
    }
    // if matched 
    else if (location1.getAttribute('class')===location2.getAttribute('class')){
      clicks=0
    
    }
    console.log(clicks);        
  }
} 
twoClicks(e);


}

// when the DOM loads
createDivsForColors(shuffledColors);


gameContainer.addEventListener('mousedown',function(e){
// preventing extraclicks function 

  
// resetting backgrounds 

   
 })

