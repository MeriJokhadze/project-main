
'use strict'

// IMPORT FILES 

import {faqInfo} from './FAQ.js';
faqInfo();




// HEADER SEARCH BAR//

let searchBtn = document.querySelector('.search-bar-btn');

searchBtn.addEventListener('click', ()=> {
    document.querySelector('.search-input').classList.toggle("activeBtn");
    document.querySelector('.icon-bar').classList.toggle("activeBtn");
})



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



