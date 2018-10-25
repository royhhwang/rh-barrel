// import { people } from '../data/data.js';

var data = [
    { 'icon': '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22.3 22.3" style="enable-background:new 0 0 22.3 22.3; fill:#bd3131;" xml:space="preserve"><title>74 all</title><path d="M19.6,3.9h-1.8V3c0-1.2-1-2.3-2.3-2.3H3.3C2.1,0.7,1,1.7,1,3v15.7c0,1.6,1.3,3,3,3h14.9c1.4,0,2.5-1.1,2.5-2.5V5.7C21.4,4.7,20.6,3.9,19.6,3.9z M4,20.3c-0.9,0-1.6-0.7-1.6-1.6V3c0-0.5,0.4-0.9,0.9-0.9h12.2c0.5,0,0.9,0.4,0.9,0.9v16.1c0,0.4,0.1,0.8,0.3,1.1H4z M20,19.1c0,0.6-0.5,1.1-1.1,1.1s-1.1-0.5-1.1-1.1V5.3h1.8c0.2,0,0.5,0.2,0.5,0.5V19.1z"/><path d="M4.2,11.1h5.7c0.4,0,0.7-0.3,0.7-0.7V4.6c0-0.4-0.3-0.7-0.7-0.7H4.2C3.8,4,3.5,4.3,3.5,4.6v5.7C3.5,10.8,3.9,11.1,4.2,11.1zM4.9,5.3h4.3v4.4H4.9V5.3z"/><path d="M14.6,15.9H4.4c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h10.2c0.4,0,0.7-0.3,0.7-0.7S15,15.9,14.6,15.9z"/><path d="M14.6,12.9H4.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h10.2c0.4,0,0.7-0.3,0.7-0.7C15.3,13.2,15,12.9,14.6,12.9z"/><path d="M14.6,6.8H12c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h2.7c0.4,0,0.7-0.3,0.7-0.7C15.3,7.1,15,6.8,14.6,6.8z"/><path d="M14.6,9.8H12c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h2.7c0.4,0,0.7-0.3,0.7-0.7C15.3,10.1,15,9.8,14.6,9.8z"/><path d="M14.6,4.1H12c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h2.7c0.4,0,0.7-0.3,0.7-0.7C15.3,4.4,15,4.1,14.6,4.1z"/></svg>', 'age': '34', 'image': 'http://example3.jpg' }
]


var template = document.getElementById('article-template').innerHTML
var anchor = document.createElement('span')

data.forEach((article) => {

    var el = document.createElement('div');
    el.innerHTML = template;

    el.getElementsByClassName('article__img')[0].appendChild(document.createElementNS(article.icon));
    el.getElementsByClassName('article__icon')[0].appendChild(document.createTextNode(article.image));
    el.getElementsByClassName('article__text')[0].appendChild(document.createTextNode(article.age));

    // el.getElementsByClassName('image')[0].setAttribute('src', person.image)

    anchor.appendChild(el)
})

document.getElementById('articles').appendChild(anchor)

export default function tmplContent() { }