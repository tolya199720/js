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

 // описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
 // Після опису, використовуючи функції масивів:
 //   – знайти піковий туз
 // – всі шістки
 // – всі червоні карти
 // – всі буби
 // – всі трефи від 9 та більше
 // Прикла д моделі об’єкту карти:
 // {   cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
 //     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
 //     color:”, // ‘red’,’black’}

 let cardSuit = [`spade`, `diamond`,`heart`, `clubs`];
 let values = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
 // let color = [`red`, `black`];
 let deck =[];
 for( let cards of cardSuit){
     for (let value of values){
        if(cards === `spade` || cards === `diamond`){
            deck.push(
                {
                    card: cards,
                    value: value,
                    color: `red`
                }
                );

         }
             else deck.push(
                {
                card: cards,
                value: value,
                color: `black`
                }
        );
     }
 }
 /*--знайти піковий туз*/
 console.log(deck.find(x  => x.card === "heart"|| x.value === `A`));
 // – всі шістки
 console.log(deck.filter(x=> x.value === "6") );
 //// – всі червоні карти
 console.log(deck.filter(x=> x.color === "red"));
 // черви всі
 console.log(deck.filter(x=> x.card ==="heart"));
 //всі трефи від 9 та більше
 console.log(deck.filter(function (x) {
     let value = parseInt(x.value);
     if (value >= 9){
         return x.value;
     }
     else if (x.value === 'J' || x.value === 'Q' || x.value === 'K' || x.value === 'A'){
         return x.value;
     }
 }));
 //Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
 console.log(deck.reduce(function (previousValue, currentValue)   {
     previousValue[currentValue.card].push(currentValue);
     return previousValue; // я довго йшов до того що б написати таку структуру без else if))
 }, {
         spade: [],
         diamond: [],
         clubs: [],
         heart: []
 }))
 console.log({}.__proto__);
