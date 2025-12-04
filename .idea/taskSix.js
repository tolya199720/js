 let text =  `hello world`
 let textTwo = `lorem ipsum`
 let textThree = `javascript is cool`
// – Знайти та вивести довжину наступних стрінгових значень
 console.log(text.length);
 console.log(textThree.length);
 console.log(textThree.length);

 let b = text.length + textThree.length + textThree.length;
// – Перевести до великого регістру наступні стрінгові значення
 console.log(text.toUpperCase());
 console.log(textTwo.toUpperCase());
 console.log(textThree.toUpperCase());
// – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
//  let str = ` dirty string   `
//  let strClean = ' ';
//  for(let value of str){
//      if(value !== ` `){
//          strClean += value;
//      }
//  }
//  console.log(strClean);

// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
 let str = `Ревуть воли як ясла повні`;

 function stringToarray(str){
     let a = ``;
     let b = [ ];
    for( let value of str){
        if(value !== ` `){
            a+= value;
        }
        else {
            b.push(a);
            a = ` `;
        }

    }
     return b;
 }

 console.log(stringToarray(str));
 //
 // – створити функцію sortNums(array,direction), яка приймає масив чисел,
 //     та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.

 let nums = [11,21,3];

 function sortNums(array,direction){
     if(direction === 'ascending'){
         array.sort((a,b) => a-b);
     }
     else{
         array.sort((a,b) => b-a);
     }
 }
 // — відсортувати його за спаданням за monthDuration
 //
 //  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
 //
 //  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 let coursesAndDurationArray = [

     {title: `JavaScript Complex`, monthDuration: 5},

 {title: `Java Complex`, monthDuration: 6},

 {title: `Python Complex`, monthDuration: 6},

 {title: `QA Complex`, monthDuration: 4},

 {title: `FullStack`, monthDuration: 7},

 {title: `Frontend`, monthDuration: 4}
 ];

