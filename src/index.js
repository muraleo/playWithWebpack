import _ from 'lodash';
import './style.css';
import printMe from './print';
import { cube } from './math.js'

function component(){
    let element = document.createElement("pre");
    let btn = document.createElement("button");

    element.innerHTML = _.join(["Hello webpack", "5 cbued in equal to " + cube(5)],);
    btn.innerHTML="click me!";
    btn.onclick = printMe;

    element.classList.add('hello');
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}