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
      <FridgeComponent :fridgevol="fridgevol" />
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
    fridgevol(){
      return this.$store.getters.getFridgeVol
    }
  }
}
</script>

<style lang="scss" scoped>
</style>


