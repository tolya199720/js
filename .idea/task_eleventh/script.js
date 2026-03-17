// 2 зачада

fetch('https://dummyjson.com/recipes?limit=50')
    .then(res => res.json())
    .then( ObjResipts =>{
        const resipts = ObjResipts.recipes;
        console.log(resipts);
        let ol = document.createElement("ol")
        for (const resiptKey of resipts) {

                let li = document.createElement("li");
                li.innerText = `
                    name: ${resiptKey.name},
                    ingredients: ${resiptKey.ingredients.join(`,`)},
                     "instructions":${resiptKey.instructions.join(`,`)},
                    "prepTimeMinutes":${resiptKey.prepTimeMinutes},
                     "cookTimeMinutes":${resiptKey.cookTimeMinutes},
                     "servings":${resiptKey.servings},
                     "difficulty":${resiptKey.difficulty},
                     "cuisine":${resiptKey.cuisine},
                     "caloriesPerServing":${resiptKey.caloriesPerServing},
                     "tags":${resiptKey.tags.join(`,`)},
                     "userId":${resiptKey.userId},
                     "rating":${resiptKey.rating},
                     "reviewCount":${resiptKey.reviewCount},
                     "mealType":${resiptKey.mealType}
                    `
                    let img = document.createElement("img");
                    img.src = resiptKey.image;
                    li.appendChild(img);

                ol.appendChild(li);
        }
        document.body.appendChild(ol);
    });



















//1 зачада

// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then( ObjCars => {
//         const Objvalues = ObjCars.carts;
//         let div = document.createElement('div');
//
//         for (const cart of ObjCars.carts) {
//
//             for (const product of cart.products) {
//
//                 let wrapper = document.createElement('div');
//                 let img = document.createElement('img');
//                 img.src=product.thumbnail;
//                 wrapper.innerText = `
//             id: ${product.id}
//             title: ${product.title}
//             price: ${product.price}
//             quantity: ${product.quantity}
//             total: ${product.total}
//             discountPercentage:${product.discountPercentage} ,
//           discountedTotal: ${product.discountedTotal},
//         `;
//
//                 div.appendChild(wrapper);
//                 wrapper.appendChild(img);
//             }
//         }
//         document.body.appendChild(div);
//     });








































