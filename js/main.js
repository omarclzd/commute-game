/*----- constants -----*/ 

const story = {
  standby: 'Get to work!',

  home: 'Alarm rings.',

  wakeup: 'You are awake, but there is a funky smell.',

  brakeAlarm: 'You smash your alarm in defiance and now your hand is bleeding furiously.',

  tendWound: 'You did not pay attention in first aid class. You die from blood loss.',

  lickWound: 'You realize what you have been missing, and set off to be like your hero Edward Cullen. However, you did not make it to work.',

  shower: 'While singing in the shower you atempt a power glide and break your neck in the process.',

  kitchen: 'You are feeling kind of lazy. What should you eat?',

  pancakes: `The pancakes were deliciouse...look at the time! You don't want to be late!`,

  instantRamen: `You put your ramen in the microwave for 5 mins, but forget to put some water in it. The ramen catches fire and your microwave explodes launching you through your apartment wall. You land on your neighbor's cat killing him. Your neighbor, raged in anger, shoots you dead.`,

  headOut: 'You hurry out your apartment shirtless, and walk to your car. Your skin shines bright in the sunlight due to all the moisturizer you have been using. A nearby driver is blinded by your radian skin. He looses control of his car and runs you over',

  bussStop: 'BussStop promt',

  bikeRide: 'Bikeride promt',

  run: 'Run prompt',

  death: 'You failed to get to work.'

  
};

const storyChoice = {
  home: {'button-one': 'Wake up', 'button-two': 'Brake alarm'},

  wakeup: {'button-one': 'take cold shower', 'button-two': 'Skip shower and get breakfast'},

  brakeAlarm: {'button-one': 'tend wound', 'button-two': 'lick wound'},

  kitchen: {'button-one': 'Pancakes', 'button-two': 'Instant ramen'},

  pancakes: {'button-one': 'Get ready', 'button-two': 'Head out'},

  bussStop: {'button-one': 'Bchoice1', 'button-two': 'Bchoice2'},

  bikeRide: {'button-one': 'Bikechoice1', 'button-two': 'Bikechoice2'},

  run: {'button-one': 'Rchoice1', 'button-two': 'Rchoice2'},

  death: {'button-one': 'You', 'button-two': 'Died'},

  noComment: {'button-one': 'No', 'button-two': 'Comment'},

};

/*----- app's state (variables) -----*/ 
var winner, state;


/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');
const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('header');
const footerEl = document.querySelector('footer');
const button1 = document.getElementById('button-one');
const button2 = document.getElementById('button-two');
//const buttons = document.getElementsByClassName('')


/*----- event listeners -----*/ 
document.getElementById('button-one').addEventListener('click', handleBOne);
document.getElementById('button-two').addEventListener('click', handleBTwo);
document.getElementById('start').addEventListener('click', handleStart);
document.getElementById('reset').addEventListener('click', handleReset);

/*----- functions -----*/
init();

function handleStart(evt) {
  
  if (state === story.standby) {
     state = story.home;
    
  };
  render();
}

function handleReset(evt) {
  window.location.reload();
}



function handleBOne(evt) {
  choice = evt.target;

  if (state === story.home) {
     state = story.wakeup;
  } else {
    if (state === story.wakeup) {
      state = story.shower;
    } else {
      if (state === story.brakeAlarm) {
        state = story.tendWound;
      } else {
        if (state === story.kitchen) {
          state = story.pancakes;
        }
      }
    }
  }
  render();
  

}


function handleBTwo(evt) {
  if (state === story.home) {
    state = story.brakeAlarm;
  } else {
    if (state === story.brakeAlarm) {
      state = story.lickWound;
    } else {
      if (state === story.wakeup) {
        state = story.kitchen;
      } else {
        if (state === story.kitchen) {
          state = story.instantRamen;
        } else {
          if (state === story.pancakes) {
            state = story.headOut;
          }
        }
      }
    }
  }
  render();
  
}




function render() {
  msgEl.textContent = state;
  stateCheckingWithSwitch()
}


function stateCheckingWithSwitch () {
  switch (state) {
    case story.home:
      button1.textContent = storyChoice.home['button-one'];
      button2.textContent = storyChoice.home['button-two'];
      break;
    case story.wakeup:
      button1.textContent = storyChoice.wakeup['button-one'];
      button2.textContent = storyChoice.wakeup['button-two'];
      break;
    case story.brakeAlarm:
      button1.textContent = storyChoice.brakeAlarm['button-one'];
      button2.textContent = storyChoice.brakeAlarm['button-two']; 
      break; 
    case story.kitchen:
      button1.textContent = storyChoice.kitchen['button-one'];
      button2.textContent = storyChoice.kitchen['button-two']; 
      break; 
    case story.shower:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two'];
      bodyEl.style.backgroundColor = '#8e160e';
      bodyEl.style.color = 'black';
      msgEl.style.color = 'black';
      headerEl.textContent = 'Fatality';
      button1.style.fontSize = '50px';
      button2.style.fontSize = '50px';
      break; 
    case story.tendWound:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two'];
      bodyEl.style.backgroundColor = '#8e160e';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Fatality';
      button1.style.fontSize = '50px';
      button2.style.fontSize = '50px';
      break;
    case story.lickWound:
      button1.textContent = storyChoice.noComment['button-one'];
      button2.textContent = storyChoice.noComment['button-two']; 
      break;  
    case story.instantRamen:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      bodyEl.style.backgroundColor = '#8e160e';
      bodyEl.style.color = 'black';
      msgEl.style.color = 'black';
      headerEl.textContent = 'Fatality';
      button1.style.fontSize = '50px';
      button2.style.fontSize = '50px';
      break;
    case story.pancakes:
      button1.textContent = storyChoice.pancakes['button-one'];
      button2.textContent = storyChoice.pancakes['button-two']; 
      break; 
    case story.headOut:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      bodyEl.style.backgroundColor = '#8e160e';
      bodyEl.style.color = 'black';
      msgEl.style.color = 'black';
      headerEl.textContent = 'Fatality';
      button1.style.fontSize = '50px';
      button2.style.fontSize = '50px';
      break;   
    default:
  } 
}


function init() {
  state = story.standby;
  render();
}