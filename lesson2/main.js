class ProductList {
    #goods;
    #allProducts;
    #prop;

    constructor(container = '.products') {
        this.container = container;
        this.#goods = [];
        this.#allProducts = [];

        this.#fetchGoods();
        this.#render();
    }

    get property() {
        return this.#prop;
    }

    set property(value) {
        this.#prop = value;
    }

    #fetchGoods() {
        this.#goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    #render() {
        const block = document.querySelector(this.container);

        for (const good of this.#goods) {
            const productObject = new ProductItem(good);
            // console.log(productObject);
            this.#allProducts.push(productObject);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
    }

}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                      <img src="${this.img}" alt="Some img">
                      <div class="desc">
                          <h3>${this.title}</h3>
                          <p>${this.price} \u20bd</p>
                          <button class="buy-btn">Купить</button>
                      </div>
                  </div>`;
    }
}
/*1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.*/

class GoodsList{
    #goods;
    #allProducts;
    #prop;

    constructor(container = '.shopping-cart') {
        this.container = container;
        this.#goods = [];
        this.#allProducts = [];
    }

    get property() {
        return this.#prop;
    }

    set property(value) {
        this.#prop = value;
    }

    get quantity(){}
    
    /*2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров. */
    get sum(){
        return this.#goods.reduce((sum, current)=>sum+current.price*current.quantity)
    }
    
    addGoods(item, quantity){
        this.#goods.push({...item, quantity})


    }
    
    render(){}    
    
    removeGoods(){}


}

const products = new ProductList();
const goodsList = new GoodsList();
