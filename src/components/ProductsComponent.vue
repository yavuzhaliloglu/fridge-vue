<template>
    <div class="products-container">
        <div class="product-item" v-for="(product, item) in products" :key="item">
            <ProductForFridge :product="product"/>
        </div>
    </div>
</template>

<script>
import ProductForFridge from "./ProductForFridge.vue";
export default {
    props: {
        products: {
            type: Array,
            required: true
        },
    },
    data() {
        return {};
    },
    components: { ProductForFridge }
}
</script>

<style lang="scss" scoped>
.products-container {
    display: flex;
    flex-wrap: wrap;

    .product-item {
        margin: 0 30px;
    }

}
</style>