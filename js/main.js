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
  instantRamen: `You put your ramen in the microwave for 5 mins, but forget to put some water in it. You ramen catches fire and your microwave explodes launching you through your apartment wall. You land on your neighbor's cat killing him. Your neighbor in anger shoots you dead.`,
  bussStop: 'BussStop promt',
  bikeRide: 'Bikeride promt',
  run: 'Run prompt',
  death: 'You failed to get to work.'

  
};

const storyChoice = {
  home: {'button-one': 'Wake up', 'button-two': 'Brake alarm'},

  wakeup: {'button-one': 'take cold shower', 'button-two': 'Skip shower and get breakfast'},

  brakeAlarm: {'button-one': 'tend wound', 'button-two': 'lick wound'},

  kitchen: {'button-one': 'Gourmet meal', 'button-two': 'Instant ramen'},

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
const button1 = document.getElementById('button-one');
const button2 = document.getElementById('button-two');
//const buttons = document.getElementsByClassName('')


/*----- event listeners -----*/ 
document.getElementById('button-one').addEventListener('click', handleBOne);
document.getElementById('button-two').addEventListener('click', handleBTwo);
;
//document.getElementById('choices').addEventListener('click', handleClick);
document.querySelector('button').addEventListener('click', handleStart);

/*----- functions -----*/
init();

function handleStart(evt) {
  
  if (state === story.standby) {
     state = story.home;
    
  };
  render();
}

// function handleClick(evt) {
//   let choice = evt.target;
//   if (choice === storyChoice['Home']['button-one']) {
//   return state = story['Wakeup'];
// }
// }

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
        }
      }
    }
  }
  render();
  
}




function render() {
  msgEl.textContent = state;
  stateCheckingWithSwitch()
  // if (state === story['Home']) {
  //   button1.textContent = storyChoice['Home']['button-one'];
  //   button2.textContent = storyChoice['Home']['button-two'];

  // } else {
  //   if (state === story['Wakeup']) {
  //   button1.textContent = storyChoice['Wakeup']['button-one'];
  //   button2.textContent = storyChoice['Wakeup']['button-two'];
  //   } else {
  //     if (state === story['Brakealarm']) {
  //     button1.textContent = storyChoice['Brakealarm']['button-one'];
  //     button2.textContent = storyChoice['Brakealarm']['button-two'];
  //     } else {
  //       if (state === story['Kitchen']) {
  //         button1.textContent = storyChoice['Kitchen']['button-one'];
  //         button2.textContent = storyChoice['Kitchen']['button-two'];
  //       } else {
  //         if (state === story['BussStop']) {
  //           button1.textContent = storyChoice['BussStop']['button-one'];
  //           button2.textContent = storyChoice['BussStop']['button-two'];
  //         } else {
  //           if (state === story['Bike ride']) {
  //             button1.textContent = storyChoice['Bike ride']['button-one'];
  //             button2.textContent = storyChoice['Bike ride']['button-two'];

  //           } else {
  //             if (state === story['Shower']) {
  //               button1.textContent = storyChoice['Death']['button-one'];
  //               button2.textContent = storyChoice['Death']['button-two'];
  //             } else {
  //               if (state === story['Tend Wound']) {
  //                 button1.textContent = storyChoice['Death']['button-one'];
  //                 button2.textContent = storyChoice['Death']['button-two'];
  //               } else {
  //                 if (state === story['Lick Wound']) {
  //                   button1.textContent = storyChoice['Nocomment']['button-one'];
  //                   button2.textContent = storyChoice['Nocomment']['button-two'];
  //                 } else {
  //                   if (state === story['Instant ramen']) {
  //                     button1.textContent = storyChoice['Death']['button-one'];
  //                     button2.textContent = storyChoice['Death']['button-two'];
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   } 
  // } 
 
  


  
  
}


function stateCheckingWithSwitch () {
  switch (state) {
    case story.home:
       button1.textContent = storyChoice.home['button-one'];
       button2.textContent = storyChoice.home['button-two'];
      console.log('this is inside of the switch', story.home);
      break;
    case story.wakeup:
      button1.textContent = storyChoice.wakeup['button-one'];
       button2.textContent = storyChoice.wakeup['button-two'];
      console.log('switch', story.wakeup);
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
      break; 
    case story.tendWound:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      break;
    case story.lickWound:
      button1.textContent = storyChoice.noComment['button-one'];
      button2.textContent = storyChoice.noComment['button-two']; 
      break;  
    case story.instantRamen:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      break; 
    default:
      console.log('Sorry, we are out of ' + '.');
  }
  
}


function init() {
  state = story['standby'];
  render();

}