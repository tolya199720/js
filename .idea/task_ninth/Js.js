// – Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Cтворити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

// for(let value of coursesArray) {
//     let divWrap = document.createElement('div');
//     divWrap.classList.add('wrap');
//     divWrap.innerHTML = `<p> ${value.title}</p>`;
//
//     let title = document.createElement('div');
//     title.classList.add('title');
//
//
//     let month = document.createElement('div');
//     month.classList.add('month');
//     let monthDuration = document.createElement('div');
//     monthDuration.innerHTML = `<p> ${value.monthDuration} </p>`;
//
//     monthDuration.classList.add('monthDuration');
//     let hourDuration = document.createElement('div');
//     hourDuration.innerHTML = `<p>${value.hourDuration}</p>>`;
//
//     hourDuration.classList.add('hourDuration');
//     let modulus = document.createElement('div');
//
//     modulus.classList.add('modulus');
//     let ul = document.createElement('ul');
//     modulus.appendChild(ul);
//     for (let mod of value.modules) {
//         let li = document.createElement('li');
//         li.innerHTML = `<p> ${mod} </p>`;
//         ul.appendChild(li);
//     }
//     document.body.appendChild(divWrap);
//     divWrap.append(title, month, modulus);
//     month.append(monthDuration, hourDuration);
// }
// ------------------------------------------------------------
function createCard() {
    const card = {};

    card.wrap = document.createElement('div');
    card.wrap.classList.add('wrap');

    card.title = document.createElement('div');
    card.title.classList.add('title');

    card.month = document.createElement('div');
    card.month.classList.add('month');

    card.monthDuration = document.createElement('div');
    card.monthDuration.classList.add('monthDuration');

    card.hourDuration = document.createElement('div');
    card.hourDuration.classList.add('hourDuration');

    card.modulus = document.createElement('div');
    card.modulus.classList.add('modulus');

    card.month.append(card.monthDuration, card.hourDuration);
    card.wrap.append(card.title, card.month, card.modulus);

    return card;
}

for (const course of coursesArray) {
    let card = createCard();
    card.title.textContent = course.title;
    card.monthDuration.textContent = course.monthDuration;
    card.hourDuration.textContent = course.hourDuration;

    if(course.modules) {
        let ul = document.createElement('ul');
        for (let mod of course.modules) {
            let li = document.createElement('li');
            li.textContent = mod;
            ul.appendChild(li);
        }
        card.modulus.appendChild(ul);
    }

    document.body.appendChild(card.wrap);
}







// #8Nmt60ZT
// – створити блок,
// – додати йому класи wrap, collapse, alpha, beta
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
// – додати цей блок в body.
// – клонувати його повністю, та додати клон в body.

// document.body.style.cssText = "width: 100vw; height: 100vh  ";
// let iv = document.createElement('div' );
// iv.style.cssText =  "width: 100px; height: 100px; border:100px; margin:100px; display:flex; justify-content: center; align-items: center; color:red; border: 2px solid red;";
// iv.classList.add('wrap', `collaps`, `alpha`, `beta`);
// iv.textContent = 'sdfgadsf';
// document.body.appendChild(iv);
//  let clone = iv.cloneNode(true);
//  document.body.appendChild(clone);

// #OPLI89c9G
// – Є масив:
//     Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
//   let Arr =[`‘Main’`,`’Products’`,`’About us’`,`Contacts`];
// let Ul =document.createElement('ul')
// Ul.style.cssText = "width: 100vw; height: 100vh  ";
//  document.body.appendChild(Ul);
//   for (let value of  Arr) {
//       let s = document.createElement('li')
//       s.textContent= value;
//      Ul.appendChild(s);
//   }


/*#jeBqHV525U5
– Є масив
Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/
// let coursesAndDurationArray = [
//     {title: `JavaScript Complex’`, monthDuration: 5},
//     {title: `Java Complex `, monthDuration: 6},
//     {title: `Python Complex `, monthDuration: 6},
//     {title: `QA Complex`, monthDuration: 4},
//     {title: `FullStack `, monthDuration: 7},
//     {title: `Frontend` , monthDuration: 4}
// ];
//
// for ( let value of coursesAndDurationArray ) {
//
//     let di = document.createElement('div');
//     di.style.cssText = "display: flex;  width:100px; height:100px; border: 2px solid black;";
//     di.appendChild(document.createElement("p")).textContent = value.title;
//     di.appendChild(document.createElement('p')).textContent = value.monthDuration;
//     document.body.appendChild(di);
// }





