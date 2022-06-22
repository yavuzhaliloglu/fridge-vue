<!-- <script setup>
import FridgeComponent from '../components/FridgeComponent.vue';
import ProductsComponent from '../components/ProductsComponent.vue';
import { ref, computed } from '@vue/reactivity';

const products = ref(this.$store.state.products)

const getproducts = computed(() => {return products.value})
</script> -->

<template>
  <main>
    <div>
      <FridgeComponent :products="productsinfridge" :fridgevol="fridgevol" />
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
    fridgevol() {
      let fvol = this.$store.state.fridgevol;
      let total = 0;
      this.productsinfridge.forEach(item=>{
          total+=item.vol
      });
      return fvol - total;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>


