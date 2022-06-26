<template>
  <main>
    <div class="main">
      <div class="main-content mx-auto mt-4">
        <h1>Buzdolabımızın Hacmini Test Edin</h1>
        <p>Buzdolabımızın hacmini mağazamıza gelmeden test edebilirsiniz. Yandaki ürünleri buzdolabına ekleyin veya
          çıkartın.</p>
      </div>
      <FridgeComponent :products="productsinfridge" :products2="productsinkapak" :fridgevol="fridgevol" />
      <ProductsComponent :products="products" />
    </div>
  </main>
</template>

<script>
import FridgeComponent from '../components/FridgeComponent.vue';
import ProductsComponent from '../components/ProductsComponent.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    FridgeComponent, ProductsComponent
  },
  computed: {
    products() {
      return this.$store.getters.getProducts
    },
    productsinfridge() {
      return this.$store.getters.getFridgeProducts
    },
    productsinkapak() {
      return this.$store.getters.getKapakProducts
    },
    fridgevol() {
      this.$store.dispatch('updateFridgeVol')
      return this.$store.getters.getFridgeVol
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-wrap: wrap;

  &-content h1,p{
    text-align: center;
  }
}
</style>


