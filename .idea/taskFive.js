let areaRectangle = (a, b) => a * b;
let areaR = (a) => 3.14 * Math.pow(2, a);
let areaCylinder = (a, b) => 2 * Math.PI * a * (a + b);
let arrWords = (arr) => {
    for (let i of arr) {
        console.log(i);
    }
};
let paragrafNew = (text) => document.write(`<p>${text}<\p>`);
let writeNewLi = (text) => document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li></ul>`);

let createUl = (text, value) => {
    for (let i = 0; i < value; i++) {
        document.write(`<ul>`)
        for (let i = 0; i < 3; i++) {
            document.write(`<li> ${text}</li>`)
        }
        document.write(`</ul>`);
    }
};
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age
// , та виводить їх в документ. Для кожного об’єкту окремий блок.
let arrr = [{
    id: 1,
    name: "A",
    age: 4,
},
    {
        id: 1,
        name: "A",
        age: 4,
    },
    {
        id: 1,
        name: "A",
        age: 4,
    }]
let writeArr  = (arr) =>{for ( let i of arr){
    document.write(`<div>${i.id}, ${i.name}, ${i.age} </div>`);
}}
 // – створити функцію, яка повертає найменше число з масиву
let lowNamber =(arr) => {
    let n = arr[0];
    for (let i in arr) {
        if(n > arr[i]){
            n = arr[i];
        }

    }
    return n;
}
let iDontNow = (...x) => {
    let n = 0;
    for (let i in x) {
        n+= x[i];
    }
    return n;
}
let swap = (arr, indexOne, indexTwo) => {
    let n = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = n;
    return arr;
}