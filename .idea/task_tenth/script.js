// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження,
//     які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

let FirstGetOn = (localStorage.getItem('maneyTime'));
if(!FirstGetOn){
    localStorage.setItem('maney', JSON.stringify(100));
    let dataHour =new Date().getHours();
    let dataMinute = new Date().getMinutes();
    let dataSecond = new Date().getSeconds();
    let time = dataHour * 3600 + dataMinute * 60 + dataSecond;
    localStorage.setItem('maneyTime', time);
    let box =  document.querySelector('.box');
    box.innerHTML = '100';

}
window.addEventListener("load", function(){
    let maneyTime = +localStorage.getItem('maneyTime');
    let dataHour =new Date().getHours();
    let dataMinute = new Date().getMinutes();
    let dataSecond = new Date().getSeconds();
    let time = dataHour * 3600 + dataMinute * 60 + dataSecond;
    let current = time - maneyTime;
    if (current > 10) {
        let addManey = +localStorage.getItem('maney');
        addManey +=10;
        current -= 10;
        localStorage.setItem('maney', JSON.stringify(addManey));
        localStorage.setItem('maneyTime', time);
        let box =  document.querySelector('.box');
        box.innerHTML = addManey.toString();
    }
    else {
        let addManey = +localStorage.getItem('maney');
        let box =  document.querySelector('.box');
        box.innerHTML = addManey.toString();
    }

})


// – Створити довільний елемент з id= text та створити кнопку.Використовуючи JavaScript
//         , зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
let btn = document.getElementById('dtn');
btn.onclick = function () {
    let text = document.getElementsByTagName('div')[0];

    text.remove();
    btn.remove();
}
// створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
let btnTwo = document.querySelector('#buttonForm');
btnTwo.onclick = function () {
    let imp = document.querySelector('#inputFrom').value;
    if ( imp  < 18  ) {
        alert(`ого такий дорослий!`)
    }
    else
        alert(`elder`);
}
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів,
//  та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

let formThree = document.querySelector('#buttonFormThree');
function ClassFormThree(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
};
formThree.onclick = function () {
    let first = document.forms.formThree.First.value;
    let last = document.forms.formThree.Last.value;
    let age = document.forms.formThree.Age.value;
    let  cover= new ClassFormThree(first, last, age);
    console.log(cover);
}
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let TaskFour = document.querySelector('#TaskFour');
let TaskFourCurrent =  +localStorage.getItem('namber')||[];
TaskFourCurrent+=1;
localStorage.setItem('namber',TaskFourCurrent);
TaskFour.innerHTML = localStorage.getItem('namber');
// TaskFour.document.createElement('div');
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList
// зберігається інформація про дату та час відвідування сторінки. Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої
// потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM

function data (){
    const now = new Date();
    this.year= now.getFullYear();
    this.month= now.getMonth();
    this.day= now.getDate();
    this.hour= now.getHours();
    this.minute= now.getMinutes();
    this.second= now.getSeconds();
}
let TaskFiveCurrent =JSON.parse(localStorage.getItem('data')) || [];

TaskFiveCurrent.push(new data());
let localDataSrorage = localStorage.setItem('data', JSON.stringify(TaskFiveCurrent));

// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
//     При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let inp = document.querySelector('#kg');
let funt;
inp.oninput = function () {
    let funt = +inp.value * 2.20462;
    let p = document.getElementById('pSix');
    p.innerText = funt.toFixed(3);
}

// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції –addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage  (arrayName,objToAdd){
    if(!arrayName){
        throw new Error('oy');
    }
    arrayName = JSON.parse(localStorage.getItem(arrayName));
    let neeArr = arrayName.push(objToAdd);
    localStorage.setItem(arrayName,neeArr);
}

// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
let btnt = document.getElementById('buttonFormEight');
btnt.onclick = function () {
    const numRows = +document.getElementById('rows').value;
    const numCols = +document.getElementById('cols').value;
    const content = document.getElementById('content').value;
    let table = document.createElement("table");
    for (let i = 0; i < numRows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < numCols; j++) {
            let td = document.createElement("td");
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
