// const { random } = require("../../controllers/api");



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
    render();
}

/*------------------------------ render and render helper functions ----------------------------*/

function render(){
    let result = document.createElement('h3');
    result.textContent = "idea created";
    resultElem.appendChild(result);
}


/*------------------------------ controller functions ----------------------------*/

function randomButtonEvent(e){
    e.preventDefault();
    render();
}