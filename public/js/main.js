// const { random } = require("../../controllers/api");
import * as randomAPI from '../utils/randomApiService'


/*----- app's state (variables) -----*/

/*----- cached element references -----*/
const randomButtonElem = document.getElementById('random-button');
const resultElem = document.getElementById('result');

/*----- init function -----*/
initialize();
function initialize(){
    /*----- event listeners -----*/
    console.log(randomButtonElem, "button firing");
    randomButtonElem.addEventListener('click', randomButtonEvent);
    
}

/*------------------------------ render and render helper functions ----------------------------*/

function render(){
    randomAPIcall();
    resultElem.innerHTML = '';
    let result = document.createElement('h3');
    let num = Math.floor(Math.random() * 33);
    result.textContent = "idea created " + num;
    resultElem.appendChild(result);
}

async function randomAPIcall(){
    const data = await randomAPI.getRandomIdea()
    console.log(data, "API Call <----");
}

/*------------------------------ controller functions ----------------------------*/

function randomButtonEvent(e){
    e.preventDefault();
    render();
}