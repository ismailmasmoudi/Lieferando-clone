let menus = [{
    'description': 'mit extra viel Thunfisch und roten Zwiebeln',
    'images': './menu1.jpg',
}, {
    'description': 'mit extra Mozzarella',
    'images': './menu2.jpg',
}, {
    'description': 'frischer, handgemachter Teig mit aromatischem Tomatenketchup als Basis und zartschmelzendem Mozzarella, saftig gegrilltes Burger Crumble (100% Rind), rote Zwiebeln, eingelegte Gurken, frische Tomaten, getoppt mit Romanasalat und cremiger Mayonnaise.',
    'images': './menu3.jpg',
}, {
    'description': 'mit frischen Champignons, Basilikum-Pesto und extra Mozzarella',
    'images': './menu4.jpg',
}, {
    'description': 'mit frischen Tomaten, Mozzarella-Kugeln und Basilikum-Pesto',
    'images': './menu5.jpg',
}, {
    'description': 'frischer, handgemachter Teig und Tomatensauce, belegt mit einer Extra-Portion zartschmelzendem Mozzarella und einem goldbraun gebackenen Käserand',
    'images': './menu6.jpg',
}, {
    'description': 'Teig und Mozzarella mit frischen Champignons, Mais, knackigem Broccoli, Paprika und aromatischen Cherrytomaten',
    'images': './menu7.jpg',
},
{
    'description': `<ul>
    <li>Cheese Burger</li>
    <li>Beilage nach Wahl</li>
    <li> alkoholfreies Getränk 0,33l nach Wahl</li> </ul>`,
    'images': './menu8.jpg',
}, {
    'description': 'Nur für kurze Zeit: freu dich auf saftig gegrilltes Chicken (95g) und kräftigen Bergkäse, knusprigen Bacon und roten Zwiebeln, frischen Tomaten und Rucola im Sesam Bun serviert. Mit Mayonnaise und Chipotle Sauce raffiniert verfeinert',
    'images': './menu9.jpg',
}, {
    'description': 'frischer, handgemachter Teig mit aromatischem Tomatenketchup als Basis und zartschmelzendem Mozzarella, saftig gegrilltes Burger Crumble (100% Rind), rote Zwiebeln, eingelegte Gurken, frische Tomaten, getoppt mit Romanasalat und cremiger Mayonnaise.',
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
let amounts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let shoppingBasket = [];
let Savedamounts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let Savedprices = [];
let BasketAsText = localStorage.getItem(`SavedNames`);
// let SavedBasketProducts = JSON.parse(BasketAsText);


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
    for (i = 0; i < 7; i++) {
        menuPizza.innerHTML += htmlCodeRenderMenus(i);
        renderSavedBasket(i);
    }

    for (i = 7; i < 14; i++) {
        menuBurger.innerHTML += htmlCodeRenderMenus(i);
        renderSavedBasket(i);
    }

    for (i = 14; i < 19; i++) {
        menuPasta.innerHTML += htmlCodeRenderMenus(i);
        renderSavedBasket(i);
    }

    for (i = 19; i < 22; i++) {
        menuDessert.innerHTML += htmlCodeRenderMenus(i);
        renderSavedBasket(i);
    }
    for (i = 22; i < menus.length; i++) {
        menuDrinks.innerHTML += htmlCodeRenderMenus(i);
        renderSavedBasket(i);
    }
}

function htmlCodeRenderMenus(i) {
    let menu = menus[i];
    let name = menuNames[i];
    let price = prices[i];
    let description = menu['description'];
    let image = menu['images'];
    return /*html*/`
     <div class="menu-card" id="menu-card${i}" >
         <div class="menu-card-left">
             <div class="menu-name">${name}</div>
             <div class="menu-description">${description}</div>
             <div class="menu-price">${price} €</div>
         </div>
         <div class="menu-crad-right">
             <img class="menu-image" src="${image}">
             <div  id='add-to-basket${i}'><div  class="quantity-product" onclick="addToBasket(${i})">+</div></div>
         </div>
     </div>
     `
}

function delelteProduct(i , j) {
    loadBasketsFromLocalStorage();
    quantityElement = Savedamounts[j] ;
    if (quantityElement === 1) {
        shoppingBasket.splice(j, 1);
        Savedprices.splice(j, 1);
        Savedamounts.splice(j, 1);
    }
    else {
        quantityElement = Savedamounts[j] - 1;
        Savedamounts[j] = quantityElement;
    }
    if (shoppingBasket.length == 0) {
        let priceTable = document.getElementById("total-price-table");
        priceTable.innerHTML = returnHtmlEmptyTable();
    }
    else {
        let add = document.getElementById(`add-to-basket${i}`);
        add.innerHTML = /*html*/`
        <div class="quantity-product" onclick="addToBasketSavedorNot(${i},${j})">${quantityElement}</div>`;
    }
    saveBasket();
    renderBasket(i);
}

function  returnHtmlEmptyTable() {
    return `
    <div class="basket-empty-container">
    <div><img class="baket-image" src="./shoppingbag.png" alt=""></div>
    <div class="basket-empty-p-title">
        <p>Fülle deinen Warenkorb</p>
    </div>
    <div class="basket-empty-p">Füge einige leckere Gerichte aus der <br> Speisekarte hinzu und bestelle
        dein Essen.</div>
</div>
    `;
}
function addToBasketSavedorNot(i, j) {
    if (BasketAsText) {
        loadBasketsFromLocalStorage();
        let itemName = shoppingBasket[j];
        let itemPrice = Savedprices[j];
        quantityElement = Savedamounts[j] // zyda
        let indexOfProduct = shoppingBasket.indexOf(itemName);
        if (indexOfProduct === -1) {
            shoppingBasket.push(itemName);
            Savedprices.push(itemPrice);
            quantityElement = 1
        }
        else {
            quantityElement = Savedamounts[j] + 1;
            Savedamounts[j] = quantityElement;
        }
        let add = document.getElementById(`add-to-basket${i}`);
        add.innerHTML = /*html*/`
        <div class="quantity-product" onclick="addToBasket(${i},${j})">${quantityElement}</div>`;
        saveBasket();
        renderBasket(i);
    }
    else {
        addToBasket(i);
    }
}


// function checkIndexInSavedProducts (checkedProduct , i) {

//     let menu = menus[i];

//   return checkedProduct.name === menu.name;
// }


/// adds from array menu to array ShoppingBasket
function addToBasket(i) {
    loadBasketsFromLocalStorage();
    let itemName = menuNames[i];
    let itemPrice = prices[i];
    let indexOfProduct = shoppingBasket.indexOf(itemName);

    if (indexOfProduct === -1) {
        shoppingBasket.push(itemName);
        Savedprices.push(itemPrice);
        quantityElement = 1
    }
    else {
        quantityElement = Savedamounts[indexOfProduct] + 1;
        Savedamounts[indexOfProduct] = quantityElement;
    }
    let add = document.getElementById(`add-to-basket${i}`);
    add.innerHTML = /*html*/`
        <div class="quantity-product" onclick="addToBasket(${i})">${quantityElement}</div>`;
    saveBasket();
    renderBasket(i);
}

// function getMenuIndex(itemName){
//     let indexOfProduct = shoppingBasket.indexOf(itemName);
//     return indexOfProduct ;

// }
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

function renderSavedBasket(i) {
    let basketList = document.getElementById("basket-list");
    basketList.innerHTML = '';
    loadBasketsFromLocalStorage();
    if (BasketAsText) {
        for (j = 0; j < shoppingBasket.length; j++) {
            names = shoppingBasket[j];
            price = Savedprices[j];
            quantityProduct = Savedamounts[j];
            basketList.innerHTML += returnHtmlSavedBasket(i, names, price, quantityProduct, j);
            let priceTable = document.getElementById("total-price-table");
            priceTable.innerHTML = returnHtmlPrices();
            updateShoppingBasket(j);

        }
    }
}

// renders Shoppingbasket
function renderBasket(i) {
    let basketList = document.getElementById("basket-list");
    basketList.innerHTML = '';
    loadBasketsFromLocalStorage();
    for (j = 0; j < shoppingBasket.length; j++) {
        // loadBasketsFromLocalStorage(j);
        names = shoppingBasket[j];
        price = Savedprices[j];
        quantityProduct = Savedamounts[j];
        basketList.innerHTML += returnHtmlSavedBasket(i, names, price, quantityProduct, j);
        let priceTable = document.getElementById("total-price-table");
        priceTable.innerHTML = returnHtmlPrices();
        updateShoppingBasket(j);
    }
}


function returnHtmlSavedBasket(i, names, price, quantityProduct, j) {
    return `
    <table class="total-price-table" >
        <tr>
            <td class="name-basket">${names}</td>
            <td>${price} €</td>
        </tr>
    </table>
    <div class="edit-ur-order">
        <div class="add-note"><a> Anmerkung <br> hinzufügen</a></div>
        <div class="number-of-products" >
        <img onclick="delelteProduct(${i} , ${j})" class="delete-icon" src="./delete-icon.png">
         <p>${quantityProduct}</p>
        <img onclick="addToBasketSavedorNot(${i} , ${j})" class="add-icon" src="./add-icon.png"></div>
        </div>
        <div  class="horizontal-line"></div>
    `;
}

function returnHtmlPrices() {
    return `
    </div>
    <table class="total-price-table">
        <tr>
            <td >Zwischensumme</td>
            <td id="subtotal" class="total-name"></td>
        </tr>
        <tr>
            <td >Lieferkosten</td>
            <td id="shipping-price" class="total-name"></td>
        </tr>
        <tr>
            <td ><b>Gesamt</b></td>
            <td id="total" class="total-name"> </td>
        </tr>
    </table>
    <div class="checkout-container">
        <button class="checkout-button" id="checkout-button"></button>
    </div>`;

}


// Calculates the total of all products in Shoppingbasket
function updateShoppingBasket(j) {
    loadBasketsFromLocalStorage();
    let sum = 0;
    // Product = shoppingBasket[j];
    totalProduct = prices[j] * Savedamounts[j];
    sum += totalProduct;
    let deliverycosts = 4.99;
    let finalSum = sum + deliverycosts;
    if (sum > 10) {
        deliverycosts = 0;
        document.getElementById("shipping-price").innerHTML = `Kostenlos`;
        finalSum = sum + deliverycosts;
    } else {
        document.getElementById("shipping-price").innerHTML = `${deliverycosts} €`;
    }
    let finalTotalrounded = parseFloat(finalSum).toFixed(2);
    let sumRounded = parseFloat(sum).toFixed(2);
    document.getElementById("subtotal").innerHTML = `${sumRounded} €`;
    document.getElementById("total").innerHTML = `<b>${finalTotalrounded} €</b>`;
    document.getElementById("checkout-button").innerHTML = `Bezahlen (${finalTotalrounded} €)`;
}



