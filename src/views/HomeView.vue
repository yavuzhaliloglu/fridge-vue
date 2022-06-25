<template>
  <main>
    <div class="main">
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
      let fvol = this.$store.state.fridgevol;
      let total = 0;
      this.productsinfridge.forEach(item => {
        total += item.vol;
      });
      this.productsinkapak.forEach(item =>{
        total+=item.vol;
      })
      return fvol - total;

    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  display: flex;
  flex-wrap: wrap;
}
</style>


