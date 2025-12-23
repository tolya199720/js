function areaRectangle(){
    if( arguments.length === 2){
        return a + b
    }
}
function areaCircle(){
    if( arguments.length === 1){
        return  3.14 * Math.pow(arguments, 2)
    }
}
function arrType(arr){
    for (let arrElement of arr) {
        document.write(arrElement[arrElement.length-1]);
    }
}
function textP(text){
    document.write( `<p>${text}</p>`);
}
function TextLi(a ){
    document.write(`<ul>
                        <li>${a}</li>
                        <li>${a }</li>
                        <li>${a}</li>    
                    </ul>`);
}
function TextLi2(a , s){
    document.write(`<ul>`)
    let d = a;
    for (let i = 0; i <s; i++) {
        document.write(`<li>${d}</li>`);
    }
    document.write(`</ul>`)
}

function ArrLi(a){
    document.write(`<ul>`)
    for (let i = 0; i <a.length; i++) {
        document.write(`<li>${a[i]}</li>`);
    }
    document.write(`</ul>`)

}

// – створити функцію, яка приймає масив об’єктів
// з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об’єкту окремий блок.
let person =[
    {
        id: 1,
        name: "John",
        age: 5,
    },
    {
        id: 2,
        name: "Joe",
        age: 5,
    },
    {
        id: 3,
        name: "John",
        age: 5,
    },
    {
        id: 4,
        name: "John",
        age: 5,
    },
    {
        id: 5,
        name: "John",
        age: 5,
    }
    ]
function objectLi(arr){
    for ( let value of arr){
            document.write(`<div>${value.id}, ${value.name}, ${value.age} </div>`);
    }
}



