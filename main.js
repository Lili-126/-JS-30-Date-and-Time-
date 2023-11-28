const wrapper = document.querySelector('.wrapper');
let days = '';
let hours = '';
let minutes = '';
let seconds = '';

const title = document.createElement('h1')
title.classList.add('title');
wrapper.append(title);
title.textContent = 'Happy New Year';
title.style.fontSize = '6.5rem';

const myDate = document.createElement('div'); // текущая дата
myDate.classList.add('my-date');
wrapper.append(myDate);

const time = document.createElement('div'); // текущее время
time.classList.add('time');
wrapper.append(time);

function showTime() {
    setTimeout( () => {
        showTime(),
        setMyDate(),
        setTime()
    }, 1000);
};
showTime();

function setMyDate() {
    let date = new Date();
    let object = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    myDate.textContent = date.toLocaleString('en-GB', object);
    myDate.style.fontSize = '4rem';
    myDate.style.paddingTop = '5rem';
    myDate.style.paddingLeft = '7rem';
}
setMyDate();

function setTime() {
    let date = new Date();
    time.textContent = date.toLocaleTimeString();
    time.style.fontSize = '6rem';
    time.style.paddingLeft = '14rem';
}
setTime();

const text = document.createElement('h2')
text.classList.add('text');
wrapper.append(text);
text.textContent = 'Before the New Year';
text.style.fontSize = '5rem';
text.style.paddingTop = '5rem';


function calcTime() {
let date = new Date();
let endYear = new Date(2023, 11, 31, 23, 59, 59, 999);
let result = (Date.parse(endYear) - Date.parse(date));
days = Math.round(result / (24 * 60 * 60 * 1000));
hours = Math.floor((result / (60 * 60 * 1000)) % 24);
minutes = Math.floor((result / (60 * 1000)) % 60);
seconds = Math.floor((result / 1000) % 60);
}
calcTime();

let timer = document.createElement('div');
timer.classList.add('timer');
wrapper.append(timer);

function showTimer() {
    days = `${days} days`;
    hours = `${hours}:`;
    minutes = `${minutes}:`;
    timer.textContent = `${days}  ${hours}${minutes}${seconds}`;
    timer.style.fontSize = '4rem';

}
showTimer();





