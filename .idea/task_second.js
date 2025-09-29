// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
let books = {title: " ", pageCount: " ", genre: ""};
let books2 = {title: " ", pageCount: " ", genre: ""};
let books3 = {title: " ", pageCount: " ", genre: ""};
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors.\
// Поле “автори” – являється  масивом. Кожен автор має поля name та age.
let books4 = {
    title: " ",
    pageCount: " ",
    genre: "",
    authors: [
        {name: "", age: ""},
        {name: "", age: ""}
    ]
};
let books5 = {
    title: " ",
    pageCount: " ",
    genre: "",
    authors: [
        {name: "", age: ""},
        {name: "", age: ""}
    ]
};
let books6 = {
    title: " ",
    pageCount: " ",
    genre: "",
    authors: [
        {name: "", age: ""},
        {name: "", age: ""}
    ]
};
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let array = [{name: "", username: "", password: "123"}
    , {name: "", username: "", password: "23432e"}
    , {name: "", username: "", password: "fdvsdf"}
    , {name: "", username: "", password: "dsfvds"}
    , {name: "", username: "", password: "sdfv"}
    , {name: "", username: "", password: "sdfvf"}
    , {name: "", username: "", password: "sfdv"}
    , {name: "", username: "", password: "sdfv"}
    , {name: "", username: "", password: "aDF"}
    , {name: "", username: "", password: "ERFGE"}]
console.log(array[0].password);
console.log(array[1].password);
console.log(array[2].password);
console.log(array[2].password);
console.log(array[3].password);
console.log(array[4].password);
console.log(array[5].password);
console.log(array[6].password);
console.log(array[7].password);
console.log(array[8].password);
console.log(array[9].password);
// – описати масив, в якому буде зберігатись інформація про температуру вранці,
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration > 5){
    console.log(`супер`)
}
if(coursesAndDurationArray[1].monthDuration > 5){
    console.log(`супер`)
}
if(coursesAndDurationArray[2].monthDuration > 5){
    console.log(`супер`)
}
if(coursesAndDurationArray[3].monthDuration > 5){
    console.log(`супер`)
}
if(coursesAndDurationArray[4].monthDuration > 5){
    console.log(`супер`)
}
if(coursesAndDurationArray[5].monthDuration > 5){
    console.log(`супер`)
}
else if(a === b){
    console.log(b, a);
}
else{


    console.log(b);}
// вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати.
let dailyT = [
    {early: +"2231", dinner: +"", night: +""},
    {early: +"", dinner: +"", night: +""},
    {early: +"", dinner: +"", night: +""},
    {early: +"", dinner: +"", night: +""},
    {early: +"", dinner: +"", night: +""},
    {early: +"", dinner: +"", night: +""},
    {early: +"", dinner: +"", night: +""},
]

console.log(typeof (dailyT[0].early));

// – Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’,
// інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = +"-3";
console.log(typeof (x));
if (x !== 0) {
    console.log(`Вірно`);
} else {
    console.log(`Невірно`);
}
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
let time = 32;
if (time <= 15 && time >= 0) {
    console.log(`до 15`);
} else if (time >= 15 && time <= 30) {

    console.log(`від 15 до 30`);
} else if (time >= 31 && time <= 45) {
    console.log(`від 31 до 45 `);
} else if (time >= 45 && time <= 60) {
    console.log(`від 45 до 60`);
}
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду)
// місяця потрапляє це число (у першу, другу чи третю).
let day = 3;
if (day <= 10 && day >= 0) {

    console.log(`перша`)
} else if (day >= 11 && day <= 20) {
    console.log(`друга`)
} else if (day >= 21 && day <= 31) {
    console.log('третя')

}
// – Скласти розклад на тиждень за домопогою switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа,

// що заплановано на цей день (можна замість плану на день, назву дня англійською).

switch (``) {
    case 1:
        console.log(1);
        console.log(1);
        console.log(1);
        console.log(1);
        break;
    case 2:
        console.log(2);
        console.log(2);
        console.log(2);
        console.log(2);
        break;
    case 3:
        console.log(3);
        console.log(3);
        console.log(3);
        console.log(3);
        break;
    case 4:
        console.log(4);
        console.log(4);
        console.log(4);
        console.log(4);
        break;
    case 5:
        console.log(5);
        console.log(5);
        console.log(5);
        break;
    case 6:
        console.log(6);
        console.log(6);
        console.log(6);
        console.log(6);
        break;
    case 7:
        console.log(7);
        console.log(7);
        console.log(7);
        console.log(7);
        break;
    default:
        console.log(`  `);
}
// – Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати, коли введені рівні числа.
let a;
let b;
if(a > b){
    console.log(a);
}
