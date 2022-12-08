const foods = [
    {
        id: 0,
        name: "Meet",
        price: 1200,
        stock: 5,
        urlImage: "./assets/images/meet.jpg",
    },
    {
        id: 1,
        name: "Salad",
        price: 800,
        stock: 10,
        urlImage: "./assets/images/salad.jpg",
    },
    {
        id: 2,
        name: "Soup",
        price: 1600,
        stock: 5,
        urlImage: "./assets/images/soup.jpg",
    },
    {
        id: 3,
        name: "Tacos",
        price: 500,
        stock: 20,
        urlImage: "./assets/images/tacos.jpg",
    },
    {
        id: 4,
        name: "Hamburger",
        price: 1800,
        stock: 9,
        urlImage: "./assets/images/hamburger.jpg",
    },
    {
        id: 5,
        name: "Dessert",
        price: 1000,
        stock: 16,
        urlImage: "./assets/images/dessert.jpg",
    },
    {
        id: 6,
        name: "Meet",
        price: 1200,
        stock: 5,
        urlImage: "./assets/images/meet.jpg",
    },
    {
        id: 7,
        name: "Salad",
        price: 800,
        stock: 10,
        urlImage: "./assets/images/salad.jpg",
    },
    {
        id: 8,
        name: "Soup",
        price: 1600,
        stock: 5,
        urlImage: "./assets/images/soup.jpg",
    },
    {
        id: 9,
        name: "Tacos",
        price: 500,
        stock: 20,
        urlImage: "./assets/images/tacos.jpg",
    },
    {
        id: 10,
        name: "Hamburger",
        price: 1800,
        stock: 9,
        urlImage: "./assets/images/hamburger.jpg",
    },
    {
        id: 11,
        name: "Dessert",
        price: 1000,
        stock: 16,
        urlImage: "./assets/images/dessert.jpg",
    },
];

const contentFoods = document.querySelector(".contentFoods");
const iconCart = document.querySelector(".bx-cart-alt");
const contentCartShop = document.querySelector(".contentCartShop");
const contentCartShopItems = document.querySelector(".contentCartShop__items");

let objCartShop = {};

function printFoods() {
    let html = '';

    foods.forEach(({ id, name, price, stock, urlImage }) => {
        html += `
    <div class="food">
			<div class="food__img">
				<img src="${urlImage}" alt="${name}">
			</div>
			<div class="food__body">
				<h3>${name}</h3>
				<p><span>${price}</span> - Stock ${stock}</p>
			</div>
			<div class="food__option">
				<button class="btn btn__add" id="${id}">Agregar</button>
			</div>
		</div>
  
    `;
    });

    contentFoods.innerHTML = html;
}

function printFoodsInCart() {
    let html = '';

    const arrayCartShop = Object.values(objCartShop);

    arrayCartShop.forEach(({ id, name, price, amount, urlImage }) => {
        html += `
        <div class="food">
        <div class="food__img">
            <img src="${urlImage}" alt="${name}">
        </div>
        <div class="food__body">
            <h3>${name}</h3>
            <p><span>${price}</span> - cantidad <strong>${amount}</strong></p>
        </div>
        <div class="food__option">
            <button class="btn btn__rest" id="${id}">-</button>
            <button class="btn btn__add" id="${id}">+</button>
            <button class="btn btn__del" id="${id}">del</button>
        </div>
    </div>
    `;
    });

    contentCartShopItems.innerHTML = html;
}

printFoods();

contentFoods.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn__add')) {
        const idFood = Number(e.target.id);

        const currentFood = foods.find((food) => food.id === idFood);

        if (objCartShop[currentFood.id]) {
            if (currentFood.stock === objCartShop[idFood].amount)
                return alert("No hay mas productos en el stock");

            objCartShop[currentFood.id].amount++;

        } else {
            objCartShop[currentFood.id] = currentFood;
            objCartShop[currentFood.id].amount = 1;
        }

        printFoodsInCart();

    }
});

contentCartShopItems.addEventListener('click', (e) => {


    if (e.target.classList.contains("btn__add")) {
        const idFood = Number(e.target.id)

        const currentFood = foods.find((food) => food.id === idFood);

        if (currentFood.stock === objCartShop[idFood].amount)
            return alert("No hay mas productos en el stock");

        objCartShop[idFood].amount++;
    }
    if (e.target.classList.contains("btn__rest")) {
        const idFood = Number(e.target.id)

        if (objCartShop[idFood].amount === 1) {
            const op = confirm("quieres eliminar este producto?");
            if (op) {
                delete objCartShop[idFood];
            }
        } else {
            objCartShop[idFood].amount--;
        }
    }
    if (e.target.classList.contains("btn__del")) {
        const idFood = Number(e.target.id)

        const op = confirm("¿seguro que quieres eliminar este producto?")
        if (op) {
            delete objCartShop[idFood];
        }

    }

    printFoodsInCart();

});






iconCart.addEventListener("click", () => {
    contentCartShop.classList.toggle("contentCartShop__show");
});



