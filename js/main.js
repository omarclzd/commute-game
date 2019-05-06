/*----- constants -----*/ 

const story = {
  'standby': 'Get to work!',
  'Home': 'Alarm rings.',
  'Wakeup': 'You are away, but theres a funky smell.',
  'Snoose': 'Promt for snoose',
  'Brakealarm': 'You smash your alarm in defiance and now your hand is bleeding furiously.',
  'Shower': 'While singing in the shower you atempt a power glide and break your neck in the process.',
  'Kitchen': 'Kitchen promt',

  
};

const storyChoice = {
  'Home': {'button-one': 'Wake up', 'button-two': 'Snoose', 'button-three': 'Brake alarm'},

  'Wakeup': {'button-one': 'take cold shower', 'button-two': 'Skip shower and make breakfast','button-three': 'Choice 3.'},

  'Snoose': {'button-one': 'Choice1', 'button-two': 'Choice2', 'button-three': 'Choice3'},

  'Brakealarm': {'button-one': 'tend wound', 'button-two': 'lick wound', 'button-three': 'ignore'},

  'Kitchen': {'button-one': 'Kchoice1', 'button-two': 'Kchoice2', 'button-three': 'Kchoice3'},

  'death': {'button-one': 'You', 'button-two': 'Have', 'button-three': 'Died'},

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
  if (state === story['standby']) {
    return state = story['Home'];
  } 
  render();
}

function handleBOne(evt) {
  if (state === story['Home']) {
    return state = story['Wakeup'];
  }
  render();
}

function handleBTwo(evt) {
  if (state === story['Home']) {
    return state = story['Snoose'];
  }
  render();
}

function handleBThree(evt) {
  if (state === story['Home']) {
    return state = story['Brakealarm'];
  }
  render();
}


function render() {
  msgEl.textContent = state;
  if (state === story['Home']) {
    button1.textContent = storyChoice['Home']['button-one'];
    button2.textContent = storyChoice['Home']['button-two'];
    button3.textContent = storyChoice['Home']['button-three'];

  } else {
    if (state === story['Wakeup']) {
    button1.textContent = storyChoice['Wakeup']['button-one'];
    button2.textContent = storyChoice['Wakeup']['button-two'];
    button3.textContent = storyChoice['Wakeup']['button-three'];
    } else {
      if (state === story['Snoose']) {
      button1.textContent = storyChoice['Snoose']['button-one'];
      button2.textContent = storyChoice['Snoose']['button-two'];
      button3.textContent = storyChoice['Snoose']['button-three'];
      } else {
        if (state === story['Brakealarm']) {
          button1.textContent = storyChoice['Brakealarm']['button-one'];
          button2.textContent = storyChoice['Brakealarm']['button-two'];
          button3.textContent = storyChoice['Brakealarm']['button-three'];
        }
      }
    } 
  } 
 
  


  
  
}

function init() {
  state = story['standby'];
  render();

}