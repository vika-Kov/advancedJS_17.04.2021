'use strict';
const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title='Notebook', price=20000) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
}

const renderProducts = (list=products) => {
    const productListHTML = list.map((item) => renderProduct(item.title, item.price));
    console.log(productListHTML);
    document.querySelector('.products').innerHTML = productListHTML.join('');
}

renderProducts();
