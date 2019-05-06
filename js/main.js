/*----- constants -----*/ 

const story = {
  'Home': 'You are at home.',
  'Floor': 'The floor is dirty.',
  'Kitchen': 'Make breakfast',
  'Window': 'Its raining outside.'

  
};

const storyChoice = {
  'Home': {'button-one': 'Look at window.', 'button-two': 'Go to kitchen', 'button-three': 'look at floor'},

  'Floor': {'button-one': 'Go home', 'button-two': 'Go to kitchen','button-three': 'Look at window.'},

  'Kitchen': {'button-one': 'Go home', 'button-two': 'Look at window', 'button-three': 'look at floor'},

  'Window': {'button-one': 'Go home', 'button-two': 'look at floor', 'button-three': 'Go to kitchen'},

};

/*----- app's state (variables) -----*/ 
var winner, state;


/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');
const button1 = document.getElementById('button-one');
const button2 = document.getElementById('button-two');
const button3 = document.getElementById('button-three');
//const buttons = document.getElementsByClassName('')


/*----- event listeners -----*/ 
document.getElementById('button-one').addEventListener('click', handleBOne);
document.getElementById('button-two').addEventListener('click', handleBTwo);
document.getElementById('button-three').addEventListener('click', handleBThree);

document.querySelector('button').addEventListener('click', handleStart);

/*----- functions -----*/
init();

function handleStart(evt) {
  if (state !== story['Home']) {
    return state = story['Home'];
  }

render();
}

function handleBOne(evt) {
  if (state !== story['Window']) {
    return state = story['Window'];
  }

  render();
}

function handleBTwo(evt) {
 
}

function handleBThree(evt) {
  let choice = evt.target;


}


function render() {
  msgEl.textContent = state;
  if (state === story['Home']) {
    button1.textContent = storyChoice['Home']['button-one'];
    button2.textContent = storyChoice['Home']['button-two'];
    button3.textContent = storyChoice['Home']['button-three'];

  } else {
    if (state === story['Window']) {
    button1.textContent = storyChoice['Window']['button-one'];
    button2.textContent = storyChoice['Window']['button-two'];
    button3.textContent = storyChoice['Window']['button-three'];
    }
  }
 
  


  
  
}

function init() {
  state = story[''];
  render();

}