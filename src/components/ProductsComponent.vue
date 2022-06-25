<template>
    <div class="products-container mx-auto my-5">
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
    width: 30%;
    @media screen and(max-width:1200px){
        width: 45%;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .product-item {
        margin: 0 30px;
    }

}
</style>