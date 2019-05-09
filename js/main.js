/*----- constants -----*/ 

const story = {
  standby: 'Go to work!',

  home: 'Alarm rings.',

  wakeup: 'You are awake. You feel hungry, but a shower is always good.',

  brakeAlarm: 'You smash your alarm in defiance and now your hand is bleeding furiously.',

  tendWound: 'You did not pay attention in first aid class. You die from blood loss.',

  lickWound: 'Your blood is delicious and realize the path you want to follow. You break from the chains of reality and set off to be like your hero Edward Cullen. However, you did not make it to work.',

  shower: 'While singing in the shower you attempt a power glide and break your neck in the process.',

  kitchen: 'You are feeling kind of lazy. What should you eat?',

  pancakes: `The pancakes were delicious...look at the time! You don't want to be late!`,

  getReady: 'You go into your closet. Man you have so many options.',

  instantRamen: `You put your ramen in the microwave for 5 mins, but forget to put some water in it. The ramen catches fire and your microwave explodes launching you through your apartment wall. You land on your neighbor's cat and kill it. Your neighbor, raged in anger, shoots you dead.`,

  headOut: 'You hurry out your apartment just wearing underware since thats how you like to sleep. Your skin shines bright in the sunlight due to all the moisturizer you have been using. A nearby driver is blinded by your radian skin. He loses control of his car and runs you over.',

  slacksShirt: `You look sharp! You head out and notice that it's raining. What should you ride today?`,

  shortAndT: 'You take no time getting ready and head out 15 minutes early. Awesome! Although cloudy, the weather is nice and cool. You want to take advantage of this and decide not to take the bus today.',

  busStop: `There are some friendly people at the bus stop today. The gentleman next to you says "good morning", however you are in a hurry and don't want to miss the bus.`,

  ignorebus: `You ignore the gentleman, and pop your headphones on to catch up on an audio book you’ve been listening to before bed. However, unconsciously your brain is now trained to fall asleep to the audio book. Unwillingly, you fall asleep as the bus approaches. The gentleman notices you’re asleep but since you ignored him, he doesn't bother to wake you up. You stay asleep all morning and never make it to work.`,

  uber: `Your uber arrives to pick you up. You guys hit it off great and talk about your favorite teams. He happens to be a fan of your team’s rival. Being a superfan, your instincts kick in.`,

  talkDown: 'Due to his anger issues, your uber driver has a rage outburst and slams on the gas. The car accelerates rapidly without giving you time to react. At 140mph the car hits an oncoming car head on. You die on impact.',

  stayQuiet: 'Your silence makes the driver talk even more, which distracts him from the road ahead. An 18 wheeler that happened to take a detour that day, swerves into your lane to avoid a pedestrian on a scooter that slipped on to  the road. Your driver, being distracted, does not notice and rams into the back of the trailer. You both die on impact.',

  startConvo: 'In the mid of the conversation the gentlemen notices the bus approaching. "We better get on the bus" he says. You have a pleasant ride so far, but just one stop before yours an elderly lady gets in. All the seats are taken.',

  ignoreLady: `Just so happens that the gods were taking a look at your life today. One had bet that you were a good person and would always to the right thing. The other suggested otherwize. If good, you would have been given health and prosperity, but if bad, the wrath of the gods would be bestowed upon you without mercy. The outcome: An explosion near by shot out a steel beam reaching mach 1. The beam pierced the bus’s walls like butter and impaled you through the heart. No one else was hurt.`,

  offerSeat: `"What a gentleman" she says. After you get to your stop you run of the bus and get to your building. You are boosting with confidence and check your watch. Awesome you're making great time!`,

  takeStairs: `Full of confidence you stride through the stairs looking forward to your day. You think to yourself “this is great, I should take the stairs more oft...” before you even finish your thought, you trip on the last step before your floor and jam your knee on the step edge. You scream in pain and as you try to get up, your other foot slips and you plow down the stairway. As you fall, your ribcage brakes and poncuters one of your lungs. You feel your life slipping away, as you agonzie on the floor below yours. Alone and cold, you think to yourself, “So much for healthy choices”.`,

  elevator: `Better be safe right? You don't want to pull anything. You get to your office, but notice a maintenance worker just outside on a ladder having some trouble with a ceiling fan.`,

  ignoreMaitness: `You can't help everyone right? Congratulations you made it to work! Hopefully your commute home will be as exciting.`,

  bikeRide: 'You ride like a pro, almost gliding through the air. 15 minutes into your commute the heavens open up and rain starts pouring on you! You think about slowing down to be safe, but you can also go hard and get to work faster.',

  slowDown: `You play it safe and hit your brakes to slow down. The car behind you, replies to his spouse telling her the road is dangerous and won’t be replying anymore. However, due to this last message, he fails to see you breaking and crashes into you. You are launched into the street, and hit your head. The impact kills you.`,

  goHard: 'You put those legs to work and pedal like there is no tomorrow. As your approach a red light it turns green in your favor. You keep the pace and pedal hard as you go through it. An incoming car on the turning lane tries to beat the light and turns just as you are coming in hot. You t-bone the car launching you in the air. You hit your head on the ground as you land. You die from the impact.',

  scooter: 'You take a shot at those scooters that have overtaken the city. As soon as you ride of your complex you panic and ride into oncoming traffic. An 18 wheeler that just so happen to have taken a detour that day, is not able to stop on time. He hits you killing you on the spot.',

  holdLatter: `You are on a roll, and decide to help a soul in need. While you hold the ladder, you ask the maintenance worker about his day. He turns down to look at you and loses his balance. Trying to get a hold of something he grabs onto the ceiling fan, which is not secured properly. The fan fails to hold the workers weight and comes down with him. On instinct you move to try to catch the worker as he falls, but you don’t make it in time. However, your heroic attempt moves you into the fans trajectory and hits you right on the head. You die from the hit.`,

  death: 'You failed to get to work.'

  };

  const storyChoice = {
  home: {'button-one': 'wake up', 'button-two': 'break alarm'},

  wakeup: {'button-one': 'take cold shower', 'button-two': 'skip shower and get breakfast'},

  brakeAlarm: {'button-one': 'tend wound', 'button-two': 'lick wound'},

  kitchen: {'button-one': 'pancakes', 'button-two': 'instant ramen'},

  pancakes: {'button-one': 'get ready', 'button-two': 'head out'},

  getReady: {'button-one': 'shorts and T-shirt', 'button-two': 'slacks and nice shirt'},

  slacksShirt: {'button-one': 'bus', 'button-two': 'uber'},

  busStop: {'button-one': 'ignore', 'button-two': 'start conversation'},

  uber: {'button-one': 'talk down on his team', 'button-two': 'be respectfull, stay quiet'},

  shortAndT: {'button-one': 'ride bike', 'button-two': 'ride scooter'},

  bikeRide: {'button-one': 'be safe, slow down', 'button-two': 'go hard, power through it'},

  startConvo: {'button-one': 'offer your seat', 'button-two': 'do nothing, you will get off soon anyway'},

  offerSeat: {'button-one': 'take elevator', 'button-two': 'get a morning workout! take stairs.'},

  elevator: {'button-one': 'offer to hold ladder', 'button-two': `ignore and walk into your office`},

  ignoreMaitness: {'button-one': 'You', 'button-two': 'Win!'},

  death: {'button-one': 'You', 'button-two': 'Died'},

  noComment: {'button-one': 'No', 'button-two': 'Comment'},


};

/*----- app's state (variables) -----*/ 
var state;


/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');
const secEl = document.querySelector('section');
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
        } else {
          if (state === story.pancakes) {
            state = story.getReady;
          } else {
            if (state === story.slacksShirt) {
              state = story.busStop;
            } else {
              if (state === story.startConvo) {
                state = story.offerSeat;
              } else {
                if (state === story.offerSeat) {
                  state = story.elevator;
                } else {
                  if (state === story.elevator) {
                    state = story.holdLatter;
                  } else {
                    if (state === story.getReady) {
                      state = story.shortAndT;
                    } else {
                      if (state === story.shortAndT) {
                        state = story.bikeRide;
                      } else {
                        if (state === story.bikeRide) {
                          state = story.slowDown;
                        } else {
                          if (state === story.uber) {
                            state = story.talkDown;
                          } else {
                            if (state === story.busStop) {
                              state = story.ignorebus;
                            } 
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
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
          } else {
            if (state === story.getReady) {
            state = story.slacksShirt;
            } else {
              if (state === story.busStop) {
                state = story.startConvo;
              } else {
                if (state === story.elevator) {
                  state = story.ignoreMaitness;
                } else {
                  if (state === story.bikeRide) {
                    state = story.goHard;
                  } else {
                    if (state === story.shortAndT) {
                      state = story.scooter;
                    } else {
                      if (state === story.slacksShirt) {
                        state = story.uber;
                      } else {
                        if (state === story.uber) {
                          state = story.stayQuiet;
                        } else {
                          if (state === story.offerSeat) {
                            state = story.takeStairs;
                          } else {
                            if (state === story.startConvo) {
                              state = story.ignoreLady;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
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
      secEl.style.backgroundColor = '#a01e14';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break; 
    case story.tendWound:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two'];
      secEl.style.backgroundColor = '#a01e14';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break;
    case story.lickWound:
      button1.textContent = storyChoice.noComment['button-one'];
      button2.textContent = storyChoice.noComment['button-two']; 
      break;  
    case story.instantRamen:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      secEl.style.backgroundColor = '#a01e14';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break;
    case story.pancakes:
      button1.textContent = storyChoice.pancakes['button-one'];
      button2.textContent = storyChoice.pancakes['button-two']; 
      break; 
    case story.getReady:
      button1.textContent = storyChoice.getReady['button-one'];
      button2.textContent = storyChoice.getReady['button-two']; 
      break; 
    case story.slacksShirt:
      button1.textContent = storyChoice.slacksShirt['button-one'];
      button2.textContent = storyChoice.slacksShirt['button-two']; 
      break; 
    case story.shortAndT:
      button1.textContent = storyChoice.shortAndT['button-one'];
      button2.textContent = storyChoice.shortAndT['button-two']; 
      break; 
    case story.bikeRide:
      button1.textContent = storyChoice.bikeRide['button-one'];
      button2.textContent = storyChoice.bikeRide['button-two']; 
      break; 
    case story.slowDown:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      secEl.style.backgroundColor = '#a01e14';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break;
    case story.goHard:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      secEl.style.backgroundColor = '#a01e14';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break;
    case story.scooter:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      secEl.style.backgroundColor = '#a01e14';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break;
    case story.headOut:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      secEl.style.backgroundColor = '#a01e14';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break;
    case story.uber:
      button1.textContent = storyChoice.uber['button-one'];
      button2.textContent = storyChoice.uber['button-two']; 
      break;  
    case story.talkDown:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      secEl.style.backgroundColor = '#a01e14';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break; 
    case story.stayQuiet:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      secEl.style.backgroundColor = '#a01e14';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break; 
    case story.busStop:
      button1.textContent = storyChoice.busStop['button-one'];
      button2.textContent = storyChoice.busStop['button-two']; 
      break;  
    case story.startConvo:
      button1.textContent = storyChoice.startConvo['button-one'];
      button2.textContent = storyChoice.startConvo['button-two']; 
      break;  
    case story.ignorebus:
      button1.textContent = storyChoice.noComment['button-one'];
      button2.textContent = storyChoice.noComment['button-two']; 
      headerEl.textContent = 'To Bad';
      break;  
    case story.ignoreLady:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      secEl.style.backgroundColor = '#a01e14';
      secEl.style.fontSize = '2.5vmin';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break; 
    case story.offerSeat:
      button1.textContent = storyChoice.offerSeat['button-one'];
      button2.textContent = storyChoice.offerSeat['button-two']; 
      break;  
    case story.takeStairs:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      secEl.style.backgroundColor = '#a01e14';
      secEl.style.fontSize = '2.5vmin';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break; 
    case story.elevator:
      button1.textContent = storyChoice.elevator['button-one'];
      button2.textContent = storyChoice.elevator['button-two']; 
      break;  
    case story.holdLatter:
      button1.textContent = storyChoice.death['button-one'];
      button2.textContent = storyChoice.death['button-two']; 
      secEl.style.backgroundColor = '#a01e14';
      secEl.style.fontSize = '2.5vmin';
      bodyEl.style.color = 'black'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Game Over';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      button1.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';;
      button2.style.textShadow = '1px 1px #a01e14, 3px 3px #a01e14, 5px 5px #a01e14';
      break; 
    case story.ignoreMaitness:
      button1.textContent = storyChoice.ignoreMaitness['button-one'];
      button2.textContent = storyChoice.ignoreMaitness['button-two'];
      secEl.style.backgroundColor = 'yellow';
      bodyEl.style.color = 'yellow'; 
      msgEl.style.color = 'black';
      headerEl.textContent = 'Congratulations!';
      headerEl.style.fontWeight = 'bold';
      button1.style.fontSize = '40px';
      button2.style.fontSize = '40px';
      headerEl.style.textShadow = '1px 1px white, 3px 3px white, 5px 5px white';
      button1.style.textShadow = 'none';
      button2.style.textShadow = 'none'; 
      break;  
    default:
  } 
}


function init() {
  state = story.standby;
  render();
}