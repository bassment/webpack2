import _ from 'lodash';
import moment from 'moment';

function component () {
    let element = document.createElement('div');
    element.innerHTML = 'Hello About';
    return element;
}

function time () {
    let element = document.createElement('div');
    element.innerHTML = moment().format();
    return element;
}

document.body.appendChild(component());
document.body.appendChild(time());
