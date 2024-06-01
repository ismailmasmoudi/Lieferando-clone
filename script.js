let menus = [{
    'description': 'mit extra viel Thunfisch und roten Zwiebeln',
    'images': './menu1.jpg',
}, {
    'description': 'mit extra Mozzarella',
    'images': './menu2.jpg',
}, {
    'description': 'frischer, handgemachter Teig mit aromatischem Tomatenketchup als Basis und zart schmelzendem Mozzarella, saftig gegrilltes Burger Crumble (100% Rind), rote Zwiebeln, eingelegte Gurken, frische Tomaten, getoppt mit Romanasalat und cremiger Mayonnaise.',
    'images': './menu3.jpg',
}, {
    'description': 'mit frischen Champignons, Basilikum-Pesto und extra Mozzarella',
    'images': './menu4.jpg',
}, {
    'description': 'mit frischen Tomaten, Mozzarella-Kugeln und Basilikum-Pesto',
    'images': './menu5.jpg',
}, {
    'description': 'frischer, handgemachter Teig und Tomatensauce, belegt mit einer Extra-Portion zart schmelzendem Mozzarella und einem goldbraun gebackenen Käserand',
    'images': './menu6.jpg',
}, {
    'description': 'Teig und Mozzarella mit frischen Champignons, Mais, knackigem Broccoli, Paprika und aromatischen Cherrytomaten',
    'images': './menu7.jpg',
},
{
    'description': `
    Cheese Burger , Beilage nach Wahl ,alkoholfreies Getränk 0,33l nach Wahl `,
    'images': './menu8.jpg',
}, {
    'description': 'Nur für kurze Zeit: freu dich auf saftig gegrilltes Chicken (95g) und kräftigen Bergkäse, knusprigen Bacon und roten Zwiebeln, frischen Tomaten und Rucola im Sesam Bun serviert. Mit Mayonnaise und Chipotle Sauce raffiniert verfeinert',
    'images': './menu9.jpg',
}, {
    'description': 'frischer, handgemachter Teig mit aromatischem Tomatenketchup als Basis und zart schmelzendem Mozzarella, saftig gegrilltes Burger Crumble (100% Rind), rote Zwiebeln, eingelegte Gurken, frische Tomaten, getoppt mit Romanasalat und cremiger Mayonnaise.',
    'images': './menu10.jpg',
}, {
    'description': 'mit Zwiebeln, Tomaten, sauren Gurken, Salat, Ketchup und Mayonnaise',
    'images': './menu11.jpg',
}, {
    'description': 'mit zart schmelzendem Cheese, Zwiebeln, Tomaten, sauren Gurken, Salat, Ketchup und Mayonnaise',
    'images': './menu12.jpg',
}, {
    'description': 'mit Zwiebeln, Jalapenos, Salat und doppelt Käsesauce',
    'images': './menu13.jpg',
}, {
    'description': 'mit 125g Rindfleisch, Sesam Brötchen, Chipotle-Sauce, Tomaten, Bergkäse, zart schmelzendem Cheese, Emmentaler, roten Zwiebeln, Mayonnaise und Salat',
    'images': './menu14.jpg',
}, {
    'description': 'with tomato sauce and basil',
    'images': './menu15.jpg',
}, {
    'description': 'with garlic and hot tomato sauce',
    'images': './menu16.png',
}, {
    'description': 'with minced meat sauce',
    'images': './menu17.jpg',
}, {
    'description': 'with aromatic cream sauce and four cheese',
    'images': './menu18.jpg',
}, {
    'description': 'with aromatic cheese-cream sauce, cheddar and chicken breast fillet',
    'images': './menu19.jpg',
}, {
    'description': '',
    'images': './menu20.jpg',
}, {
    'description': '',
    'images': './menu21.jpg',
}, {
    'description': '',
    'images': './menu22.jpg',
}, {
    'description': '',
    'images': './menu23.jpg',
}, {
    'description': '',
    'images': './menu23.jpg',
}, {
    'description': '',
    'images': './menu25.jpg',
}, {
    'description': '',
    'images': './menu27.jpg',
}, {
    'description': '',
    'images': './menu27.jpg',
}
];

let menuNames = ["Pizza Tuna", "Pizza Margherita", 'Prime Burger Pizza', 'Pizza Funghi', 'Pizza Caprese', 'Pizza Cheese Crust Supreme', 'Pizza Veggie Supreme', 'Cheese Burger-Menü', 'Dreamy BBQ Burger', 'Hola Chicka Burger', 'Hamburger', 'Cheese Burger', 'Chiln Cheese Burger', 'Triple Cheese Burger', 'Pasta Napoli', 'Pasta Arrabiata (hot)', 'Pasta Bolognese', 'Pasta Quattro Formaggi', 'Pasta Cheesy Chicken', 'Cheesecake American-Style', 'Lava Cake', 'Dark Chocolate Muffin', 'Coca Cola 0,5l', 'Coca Cola Zero 0,5l', 'pepsi 0,33l', 'ViO Medium 0,5l', 'ViO Water still 0,5l'];
let prices = [13.49, 11.99, 14.99, 11.99, 11.99, 13.99, 12.99, 15.99, 10.99, 8.99, 8.99, 9.99, 9.99, 10.99, 9.99, 10.99, 10.90, 11.99, 12.90, 4.90, 4.90, 3.33, 3.05, 3.05, 2.55, 3.05, 3.05];
let Savedamounts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let shoppingBasket = [];
let Savedprices = [];
let BasketAsText = localStorage.getItem(`SavedNames`);

// displays all arrays in body
function render() {
    let menuPizza = document.getElementById('menu-list-pizza');
    let menuBurger = document.getElementById('menu-list-burger');
    let menuPasta = document.getElementById('menu-list-pasta');
    let menuDessert = document.getElementById('menu-list-dessert');
    let menuDrinks = document.getElementById('menu-list-drinks');
    menuPizza.innerHTML = '';
    menuBurger.innerHTML = '';
    menuPasta.innerHTML = '';
    menuDessert.innerHTML = '';
    menuDrinks.innerHTML = '';
    renderMenus(menuPizza, menuBurger, menuPasta, menuDessert, menuDrinks);
}

// displays Menus arrays in body
function renderMenus(menuPizza, menuBurger, menuPasta, menuDessert, menuDrinks) {
    for (i = 0; i < 7; i++) {
        menuPizza.innerHTML += htmlCodeRenderMenus(i);
    }
    for (i = 7; i < 14; i++) {
        menuBurger.innerHTML += htmlCodeRenderMenus(i);
    }
    for (i = 14; i < 19; i++) {
        menuPasta.innerHTML += htmlCodeRenderMenus(i);
    }

    for (i = 19; i < 22; i++) {
        menuDessert.innerHTML += htmlCodeRenderMenus(i);
    }
    for (i = 22; i < menus.length; i++) {
        menuDrinks.innerHTML += htmlCodeRenderMenus(i);
    }
    renderBasket();
}

/// delete or decrease quantityt of product from array ShoppingBasket
function delelteProduct(j) {
    loadBasketsFromLocalStorage();
    quantityElement = Savedamounts[j];
    let itemName = shoppingBasket[j];
    let indexOfProduct = menuNames.indexOf(itemName);
    let add = document.getElementById(`add-to-basket${indexOfProduct}`);
    removeOrDecrease(quantityElement, indexOfProduct, add, j);
    if (shoppingBasket.length == 0) {
        let priceTable = document.getElementById("total-price-table");
        priceTable.innerHTML = returnHtmlEmptyTable();
    } 
    saveBasket();
    renderBasket();
}

function removeOrDecrease(quantityElement, indexOfProduct, add, j) {
    if (quantityElement === 1) {
        shoppingBasket.splice(j, 1);
        Savedprices.splice(j, 1);
        Savedamounts.splice(j, 1);
        add.innerHTML = /*html*/`
        <div class="quantity-product" onclick="addFromBody(${indexOfProduct})">+</div>`;
    }
    else {
        quantityElement = Savedamounts[j] - 1;
        Savedamounts[j] = quantityElement;
        add.innerHTML = /*html*/`
        <div class="quantity-product" onclick="addFromBody(${indexOfProduct})">${quantityElement}</div>`;
    }
}



/// adds from array menu to array ShoppingBasket or increase qunatity of a product in ShoppingBasket
function addFromBody(i) {
    loadBasketsFromLocalStorage();
    let itemName = menuNames[i];
    let indexOfProduct = shoppingBasket.indexOf(itemName);
    quantityElement = Savedamounts[indexOfProduct];
    if (indexOfProduct === -1) {
        pushToBasket(i);
    }
    else {
        icreaseProductInBody(i);
    }
    let add = document.getElementById(`add-to-basket${i}`);
    add.innerHTML = /*html*/`
        <div class="quantity-product" onclick="icreaseProductInBody(${i})">${quantityElement}</div>`;
    saveBasket();
    renderBasket();
}

// displays a quantity of a product in body
function icreaseProductInBody(i) {
    let itemName = menuNames[i];
    let indexOfProduct = shoppingBasket.indexOf(itemName);
    let quantityElement = Savedamounts[indexOfProduct] + 1;
    Savedamounts[indexOfProduct] = quantityElement;
    let add = document.getElementById(`add-to-basket${i}`);
    add.innerHTML = /*html*/`
         <div class="quantity-product" onclick="icreaseProductInBody(${i})">${quantityElement}</div>`;
    saveBasket();
    renderBasket();
}

// increase qunatity of a product in ShoppingBasket
function icreaseProductInBasket(j) {
    let itemName = shoppingBasket[j];
    let indexOfProduct = menuNames.indexOf(itemName);
    let add = document.getElementById(`add-to-basket${indexOfProduct}`);
    let quantityElement = Savedamounts[j] + 1;
    Savedamounts[j] = quantityElement;
    add.innerHTML = /*html*/`
    <div class="quantity-product" onclick="addFromBody(${indexOfProduct})">${quantityElement}</div>`;
    saveBasket();
    renderBasket();
}

// adds from array menu to array ShoppingBasket
function pushToBasket(i) {
    let itemName = menuNames[i];
    let itemPrice = prices[i];
    shoppingBasket.push(itemName);
    Savedprices.push(itemPrice);
    quantityElement = 1
}

// Saves shoppingBasket array to local storage 
function saveBasket() {
    let basketObject = shoppingBasket;
    let BasketAsText = JSON.stringify(basketObject);
    localStorage.setItem(`SavedNames`, BasketAsText);

    let amountsObject = Savedamounts;
    let amountsAsText = JSON.stringify(amountsObject);
    localStorage.setItem(`Savedamounts`, amountsAsText);

    let pricesObject = Savedprices;
    let pricesAsText = JSON.stringify(pricesObject);
    localStorage.setItem(`Savedprices`, pricesAsText);

}

// load shoppingBasket array from local storage in body
function loadBasketsFromLocalStorage() {
    let BasketAsText = localStorage.getItem(`SavedNames`);
    let pricesAsText = localStorage.getItem(`Savedprices`);
    let amountsAsText = localStorage.getItem(`Savedamounts`);
    if (BasketAsText) {
        shoppingBasket = JSON.parse(BasketAsText);
    }
    if (pricesAsText) {
        Savedprices = JSON.parse(pricesAsText);
    }
    if (amountsAsText) {
        Savedamounts = JSON.parse(amountsAsText);
    }
}

// renders Shoppingbasket
function renderBasket() {
    let basketList = document.getElementById("basket-list");
    basketList.innerHTML = '';
    loadBasketsFromLocalStorage();
    if (shoppingBasket.length > 0) {
        for (j = 0; j < shoppingBasket.length; j++) {
            names = shoppingBasket[j];
            price = Savedprices[j];
            quantityProduct = Savedamounts[j];
            basketList.innerHTML += returnHtmlSavedBasket(names, price, quantityProduct, j);
            let priceTable = document.getElementById("total-price-table");
            priceTable.innerHTML = returnHtmlPrices();

        }
        calculateShoppingsBaskt();
    }
}

// Calculates the total of all products in Shoppingbasket
function calculateShoppingsBaskt() {
    loadBasketsFromLocalStorage();
    let sum = 0;
    if (sum = 0) {
        let priceTable = document.getElementById("total-price-table");
        priceTable.innerHTML = returnHtmlEmptyTable();
    }
    else {
        for (j = 0; j < shoppingBasket.length; j++) {
            sum += Savedprices[j] * Savedamounts[j];
        }
        let deliverycosts = 4.99;
        let finalSum = sum + deliverycosts;
        updateShoppingBasket(sum, deliverycosts, finalSum);
    }
}

// update the total of all products in Shoppingbasket
function updateShoppingBasket(sum, deliverycosts, finalSum) {
    if (sum > 10) {
        deliverycosts = 0;
        document.getElementById("shipping-price").innerHTML = `Kostenlos`;
        finalSum = sum + deliverycosts;
    } else {
        document.getElementById("shipping-price").innerHTML = `4,99 €`;
    }
    let finalTotalrounded = parseFloat(finalSum).toFixed(2);
    let sumRounded = parseFloat(sum).toFixed(2);
    document.getElementById("subtotal").innerHTML = `${sumRounded} €`;
    document.getElementById("total").innerHTML = `<b>${finalTotalrounded} €</b>`;
    document.getElementById("checkout-button").innerHTML = `Bezahlen (${finalTotalrounded} €)`;
    document.getElementById("add-total-to-basket-button").innerHTML = ` Basket (${finalTotalrounded} €)`;
}

// empty the Shoppingsbasket
function pay() {
    let priceTable = document.getElementById("total-price-table");
    priceTable.innerHTML = returnHtmlEmptyTable();
    alert("Danke für deine Bestellung .");
    Savedamounts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    shoppingBasket = [];
    Savedprices = [];
    saveBasket();
    closeBasket();
    render();
}

// displays shoppingsbasket
function displayBasket() {
    let basketRight = document.getElementById("basket-right-side");
    basketRight.classList.add("pay-button");
    let basket = document.getElementById("basket");
    basket.classList.add("pay-button");
    let addToCart = document.getElementById("add-to-basket-responsive");
    addToCart.classList.add("n-display");
    let closeCart = document.getElementById("close");
    closeCart.classList.add("f-display");
}

//closes shoppingbasket
function closeBasket() {
    let basketRight = document.getElementById("basket-right-side");
    basketRight.classList.remove("pay-button");
    let basket = document.getElementById("basket");
    basket.classList.remove("pay-button");
    let addToCart = document.getElementById("add-to-basket-responsive");
    addToCart.classList.remove("n-display");
    let closeCart = document.getElementById("close");
    closeCart.classList.remove("f-display");
    document.getElementById("add-total-to-basket-button").innerHTML = `Basket`;
    render();
}

