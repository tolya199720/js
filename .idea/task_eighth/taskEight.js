let coursesAndDurationArray = [
    {title: `JavaScript Complex`, monthDuration: 5},
    {title: `Java Complex`, monthDuration: 6},
    {title: `Python Complex`, monthDuration: 6},
    {title: `QA Complex`, monthDuration: 4},
    {title: `FullStack`, monthDuration: 7},
    {title: `Frontend`, monthDuration: 4},
];
// за допомогою map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомогою інлайн конструкції
coursesAndDurationArray.map( (value, index) => ({...value, id: index +1}));

const products = [
    {title: "Phone", price: 500},
    {title: "Laptop", price: 1200}
];
let m = new Map(products.map((value,index,arr)=> [index + 1, {...value}] ));

console.log(m);

// Створити функцію, яка робить глибоку копію об’єкта.
//     Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

    function f(obj) {
        if(obj){
        let clon = JSON.parse(JSON.stringify(obj))
            for(let key in obj) {
                if (typeof obj[key] === "function") {
                    clon[key]  = obj.kay.bind({});
                }
        }
        throw new Error("op");
     }
     return clon;
    }   // треба фідбек по цьому кодові цікаво чи він має правильну логіку відносно умови!