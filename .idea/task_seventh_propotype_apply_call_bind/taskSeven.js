function User(id, name, surname, email, phone) {
 this.id = id;
 this.name = name;
 this.surname = surname;
 this.email = email;
 this.phone = phone;
}
// Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
let  users = [
    new User(12,`ogirok`,`ogir`,`ogir2001@gmai.com`, '+380501111111'),
    new User(2, "Olena", "Shevchenko", "olena2@mail.com", "+380502222222"),
    new User(3, "Andrii", "Koval", "andrii3@mail.com", "+380503333333"),
    new User(4, "Iryna", "Bondar", "iryna4@mail.com", "+380504444444"),
    new User(5, "Mykola", "Tkachenko", "mykola5@mail.com", "+380505555555"),
    new User(6, "Natalia", "Marchenko", "natalia6@mail.com", "+380506666666"),
    new User(7, "Oleh", "Melnyk", "oleh7@mail.com", "+380507777777"),
    new User(8, "Svitlana", "Romanenko", "svitlana8@mail.com", "+380508888888"),
    new User(9, "Dmytro", "Hrytsenko", "dmytro9@mail.com", "+380509999999"),
    new User(10, "Kateryna", "Polishchuk", "katya10@mail.com", "+380501010101")];

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

console.log(users.filter((user) => {
    return user.id % 2 === 0
}));

//– Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
function Sort(user1, user2) {
    return user2.id < user1.id;
}

console.log(users.sort(Sort));

//– створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client

function Customer(id,name,surname,email,phone, ...order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
const customers = [
    new Customer(1, "Ivan", "Petrenko", "ivan@mail.com", "+380501111111", "pizza", "cola"),
    new Customer(2, "Olena", "Shevchenko", "olena@mail.com", "+380502222222", "burger", "coffee", "coffee"),
    new Customer(3, "Andrii", "Koval", "andrii@mail.com", "+380503333333", "sushi", "tea", "coffee"),
    new Customer(4, "Iryna", "Bondar", "iryna@mail.com", "+380504444444", "coffee", "coffee", "coffee", "coffee", "coffee"),
    new Customer(5, "Mykola", "Tkachenko", "mykola@mail.com", "+380505555555", "pizza", "coffee", "juice"),
    new Customer(6, "Natalia", "Marchenko", "natalia@mail.com", "+380506666666", "cake", "coffee"),
    new Customer(7, "Oleh", "Melnyk", "oleh@mail.com", "+380507777777", "steak"),
    new Customer(8, "Svitlana", "Romanenko", "svitlana@mail.com", "+380508888888", "salad", "water"),
    new Customer(9, "Dmytro", "Hrytsenko", "dmytro@mail.com", "+380509999999", "pasta", "coffee", "coffee", "coffee", "coffee", "coffee", "coffee", "coffee"),
    new Customer(10, "Kateryna", "Polishchuk", "katya@mail.com", "+380501010101", "pizza", "cola", "dessert")
];
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
console.log(customers.sort((user1, user2) => {
    return user1.order.length - user2.order.length;
}));
// – Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску
// , максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
function car(model,made,year,maxSpeed,engin){
    this.model = model;
    this.made = made;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engin = engin;
    this.driver = [];
}
const car1 = new car("BMW", "Germany", 2020, 250, "2.0 turbo");
const car2 = new car("Audi", "Germany", 2022, 240, "2.0 TFSI");
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
 car.prototype.drive = function(){
     console.log( `їдемо зі швидкістю ${this.maxSpeed} на годину`)
 }
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
 car.prototype.info = function(){
     for(let [kay, value] of Object.entries(this)) {
         console.log( kay, value );
     }
 }
// car.prototype.infoTwo = function(){
//      for(const kay in this){
//          if (this.hasOwnProperty(key)) {
//              console.log(key, this[key]);
//          }
//      }
// }
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
car.prototype.speed = function(value){
    console.log(this.maxSpeed += value);

}
car1.speed(-200);
//     — changeYear (newValue) – змінює рік випуску на значення newValue

car.prototype.changeYear = function(newValue) {
    this.year = newValue;
}
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
car.prototype.addDriver = function(driver) {
   return this.driver = driver;
}
let driver = ['dima',`vitalik`,'igir'];
car1.addDriver(driver);
console.log(car1.driver);

// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, ShoeFindSize) {
        this.name = name;
        this.age = age;
        this.ShoeFindSize = ShoeFindSize;
    }
}
const prince = new Prince('vitia',18,39);
const cinderellas = [
    new Cinderella('Anna', 18, 39),
    new Cinderella('Maria', 19, 36),
    new Cinderella('Olena', 20, 37),
    new Cinderella('Katya', 21, 38),
    new Cinderella('Ira', 22, 39),
    new Cinderella('Oksana', 23, 34),
    new Cinderella('Nadia', 24, 40),
    new Cinderella('Yulia', 25, 41),
    new Cinderella('Svitlana', 26, 42),
    new Cinderella('Diana', 27, 39)
];
let g = [];
for (const i of Object.values(cinderellas)){
    if (i.footSize === prince.ShoeFindSize)

    {
        g.push(i);
    }
}
console.log(g);
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку
g = [];
function f( arr1, arr2 ) {
    if (arr1.footSize === arr2.ShoeFindSize)

    {
        g.push(i);
    }
}
let arg = cinderellas.find (function (cinderellas){
    return cinderellas.footSize === this.ShoeFindSize;
},prince);
console.log(arg);
let arg2 = cinderellas.filter(function (cinderellas){
    return cinderellas.footSize === this.ShoeFindSize;
},prince); wse [d]
console.log(arg2);

//*Через Array.prototype. створити власний foreach, filter
Array.prototype.myForEach = function (callback,thisArg) {
    for (let i = 0 ; i < this.length; i++) {
        if(i in this){
            callback.call(thisArg, this[i],i,this);
        }
    }
}
