Vue.component("products", {
    data() {
      return {
        imgCatalog: "https://place-hold.it/200x150",
      };
    },
    props: ["filtered"],
    methods: {},
    mounted() {
      // this.$parent.getJson(`${API + this.catalogUrl}`).then((data) => {
      //   for (let el of data) {
      //     this.products.push(el);
      //     this.filtered.push(el);
      //   }
      // });
    },
    template: `
          <div class="products">
              <product ref="product" v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
          </div>
      `,
  });
  
  Vue.component("product", {
    props: ["product", "img"],
    template: `
      <div class="product-item">
                  <img :src="img" alt="Some img">
                  <div class="desc">
                      <h3>{{product.product_name}}</h3>
                      <p>{{product.price}}₽</p>
                           <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
  <!-- 2                    <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>-->
                  </div>
              </div>
      `,
  });