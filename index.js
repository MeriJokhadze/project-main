
'use strict'

// import axios from 'axios';

// IMPORT FILES 

import {faqInfo} from './FAQ.js';
faqInfo();





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


//slider panels

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

// BURGER BAR 

let burgerBar = document.getElementById('burger');
let line1 = document.querySelector('.line1');
let line3 = document.querySelector('.line3');
let line2 = document.querySelector('.line2');
let line = document.querySelector('.line');
// burgerBar.addEventListener('click', function(){
//     navBar.classList.toggle('activeNav');

// });

burgerBar.addEventListener('click', function(){
    line1.classList.toggle('line1Active');
    line3.classList.toggle('line3Active');
    line2.classList.toggle('line2NO');
    line.classList.toggle('lineAc');
})

let mery = "kata";
console.log(mery)