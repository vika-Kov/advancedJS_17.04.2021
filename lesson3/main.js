
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
 //Переделайте makeGETRequest() так, чтобы она использовала промисы.
    // let getRequest = (url, cb) => {
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('GET', url, true);
    //     xhr.onreadystatechange = () => {
    //         if (xhr.readyState === 4) {
    //             if (xhr.status !== 200) {
    //                 console.log('Error');
    //             } else {
    //                 cb(xhr.responseText);
    //             }
    //         }
    //     };
    //     xhr.send();
    // };

    // fetch('tel.json')
    // .then((response) => {
    //     // console.log(response);
    //     return response.json();
    // })
    // .then((data) => {
    //     document
    //         .querySelector('#ajax-block')
    //         .insertAdjacentHTML('afterbegin', `<p>${data.name} - <strong>${data.tel}</strong></p>`);
    // })
    // .catch();




    class ProductList {
        constructor(container = '.products') {
            this.container = container;
            this._goods = [];
            this._allProducts = [];
            // this._sum = 0; // Bad
            // this._fetchGoods();
            // this._render(); 
    
            this._getProducts()
                .then((data) => {
                    this._goods = data;
                    this._render();
                });
        }
    
        sum() {}

    

        _getProducts() {
            return fetch(`${API}/catalogData.json`)
                .then((response) => response.json())
                .catch((error) => {
                    console.log(error);
                });
        }
    
        _render() {
            const block = document.querySelector(this.container);
    
            for (const good of this._goods) {
                const productObject = new ProductItem(good);
                // console.log(productObject);
                this._allProducts.push(productObject);
                block.insertAdjacentHTML('afterbegin', productObject.render());
                // adding Event Listener to button
                block.querySelector(".buy-btn").addEventListener("click", ()=>{
                    gl.addGoods(productObject.items, 1);
                    gl.render();
                })
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

    get items(){
        return {
            title: this.title,
            price: this.price,
            id: this.id, 
            img: this.img,
        }
    }
}

class GoodsList{
    #goods;
    // #allProducts;
    #prop;

    constructor(container = '.shopping-cart') {
        this.container = container;
        this.#goods = [];
        // this.#allProducts = [];
        this.render();
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
        return this.#goods.reduce((sum, current)=>sum+current.price*current.quantity,0);
    }
    
    addGoods(item, quantity){
        this.#goods.push({...item, quantity});
    }
    
    render(){
        const block = document.querySelector(this.container);
    
        for (const good of this.#goods) {
            const productObject = new ProductItem(good);
            block.insertAdjacentHTML('afterbegin', productObject.render());
        }
    }    
    
    removeGoods(){}

    showGoods(){
        console.log(this.#goods);
    }
}

const gl = new GoodsList();
const pl = new ProductList();



