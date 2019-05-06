/*----- constants -----*/ 

const story = {


  
};



/*----- app's state (variables) -----*/ 



/*----- cached element references -----*/ 



/*----- event listeners -----*/ 
document.getElementById('choices').addEventListener('click', handleClick);
//document.querySelector('button').addEventListener('click', init);

/*----- functions -----*/
init();

function handleClick(evt) {
  let choice = evt.target;
  console.log(choice);
}

function render() {
  
}

function init() {
  winner = null;
  render();

}