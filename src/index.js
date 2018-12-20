import _ from 'lodash';
import './style.css';
import printMe from './print'

function component(){
    let element = document.createElement("div");
    let btn = document.createElement("button");

    element.innerHTML = _.join(["Hello", "Webpack"], " ");
    btn.innerHTML="click me!";
    btn.onclick = printMe;

    element.classList.add('hello');
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());