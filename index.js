
'use strict'

// import axios from 'axios';

// IMPORT FILES 

import {faqInfo} from './FAQ.js';
import {singVal} from './singUp.js';
faqInfo();
singVal();




// HEADER SEARCH BAR//

let searchBtn = document.querySelector('.search-bar-btn');

searchBtn.addEventListener('click', ()=> {
    document.querySelector('.search-input').classList.toggle("activeBtn");
    document.querySelector('.icon-bar').classList.toggle("activeBtn");
})

// axios.get('https://perenual.com/api/species-list?key=sk-Y7Fv650c3525611912185')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })


// POP UP //

let popup = document.querySelector('.popup');
let closePop = document.querySelector('.close');
window.onload = function(){
    setTimeout(function(){
       popup.classList.add('popAct')
    }, 1000)
}

closePop.addEventListener('click', () => {
    popup.classList.remove('popAct')
})

const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
    panel.addEventListener('click', ()=> {
        removeActive();
        panel.classList.add('active');
    })
})

function removeActive() {
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}