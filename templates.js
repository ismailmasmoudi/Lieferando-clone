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
             <div  id='add-to-basket${i}'><div  class="quantity-product" onclick="addFromBody(${i})">+</div></div>
         </div>
     </div>
     `
}

function returnHtmlSavedBasket(names, price, quantityProduct, j) {
    return `
    <table class="total-price-table" >
        <tr>
            <td class="name-basket">${names}</td>
            <td class="total-name">${price} €</td>
        </tr>
    </table>
    <div class="edit-ur-order">
        <div class="number-of-products" >
        <img onclick="delelteProduct(${j})" class="delete-icon" src="./delete-icon.png">
         <p>${quantityProduct}</p>
        <img onclick="icreaseProductInBasket(${j})" class="add-icon" src="./add-icon.png"></div>
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
        <button class="checkout-button" id="checkout-button" onclick="pay()"></button>
    </div>`;

}

function returnHtmlEmptyTable() {
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