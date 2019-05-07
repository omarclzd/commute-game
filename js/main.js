/*----- constants -----*/ 

const story = {
  'standby': 'Get to work!',
  'Home': 'Alarm rings.',
  'Wakeup': 'You are awake, but there is a funky smell.',
  'Brakealarm': 'You smash your alarm in defiance and now your hand is bleeding furiously.',
  'Tend Wound': 'You did not pay attention in first aid class. You die from blood loss.',
  'Lick Wound': 'You realize what you have been missing, and set off to be like your hero Edward Cullen. However, you did not make it to work.',
  'Shower': 'While singing in the shower you atempt a power glide and break your neck in the process.',
  'Kitchen': 'You are feeling kind of lazy. What should you eat?',
  'Instant ramen': `You put your ramen in the microwave for 5 mins, but forget to put some water in it. You ramen catches fire and your microwave explodes launching you through your apartment wall. You land on your neighbor's cat killing him. Your neighbor in anger shoots you dead.`,
  'BussStop': 'BussStop promt',
  'Bike ride': 'Bikeride promt',
  'Run': 'Run prompt',
  'Death': 'You failed to get to work.'

  
};

const storyChoice = {
  'Home': {'button-one': 'Wake up', 'button-two': 'Brake alarm'},

  'Wakeup': {'button-one': 'take cold shower', 'button-two': 'Skip shower and get breakfast'},

  'Brakealarm': {'button-one': 'tend wound', 'button-two': 'lick wound'},

  'Kitchen': {'button-one': 'Gourmet meal', 'button-two': 'Instant ramen'},

  'BussStop': {'button-one': 'Bchoice1', 'button-two': 'Bchoice2'},

  'Bike ride': {'button-one': 'Bikechoice1', 'button-two': 'Bikechoice2'},

  'Run': {'button-one': 'Rchoice1', 'button-two': 'Rchoice2'},

  'Death': {'button-one': 'You', 'button-two': 'Died'},

  'Nocomment': {'button-one': 'No', 'button-two': 'Comment'},

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
  
  if (state === story['standby']) {
     state = story['Home'];
    
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

  if (state === story['Home']) {
     state = story['Wakeup'];
  } else {
    if (state === story['Wakeup']) {
      state = story['Shower'];
    } else {
      if (state === story['Brakealarm']) {
        state = story['Tend Wound'];
      }
    }
  }
  render();
  

}


function handleBTwo(evt) {
  if (state === story['Home']) {
    state = story['Brakealarm'];
  } else {
    if (state === story['Brakealarm']) {
      state = story['Lick Wound'];
    } else {
      if (state === story['Wakeup']) {
        state = story['Kitchen'];
      } else {
        if (state === story['Kitchen']) {
          state = story['Instant ramen'];
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
    case story['Home']:
       button1.textContent = storyChoice['Home']['button-one'];
       button2.textContent = storyChoice['Home']['button-two'];
      console.log('this is inside of the switch', story['Home']);
      break;
    case story['Wakeup']:
      button1.textContent = storyChoice['Wakeup']['button-one'];
       button2.textContent = storyChoice['Wakeup']['button-two'];
      console.log('switch', story['Wakeup']);
      break;
    case story['Brakealarm']:
      button1.textContent = storyChoice['Brakealarm']['button-one'];
      button2.textContent = storyChoice['Brakealarm']['button-two']; 
      break; 
    case story['Kitchen']:
      button1.textContent = storyChoice['Kitchen']['button-one'];
      button2.textContent = storyChoice['Kitchen']['button-two']; 
      break; 
    case story['Shower']:
      button1.textContent = storyChoice['Death']['button-one'];
      button2.textContent = storyChoice['Death']['button-two']; 
      break; 
    case story['Tend Wound']:
      button1.textContent = storyChoice['Death']['button-one'];
      button2.textContent = storyChoice['Death']['button-two']; 
      break;
    case story['Lick Wound']:
      button1.textContent = storyChoice['Nocomment']['button-one'];
      button2.textContent = storyChoice['Nocomment']['button-two']; 
      break;  
    case story['Instant ramen']:
      button1.textContent = storyChoice['Death']['button-one'];
      button2.textContent = storyChoice['Death']['button-two']; 
      break; 
    default:
      console.log('Sorry, we are out of ' + '.');
  }
  
}


function init() {
  state = story['standby'];
  render();

}