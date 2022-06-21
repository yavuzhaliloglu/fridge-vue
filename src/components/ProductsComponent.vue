<template>
    <div class="products-container">
        <div class="product-item" v-for="(product, item) in products" :key="item">
            <img class="product-img" :src=product.img alt="" />
            <div>{{ product.name }}</div>
            <button class="addProduct">Ekle</button>
            <button class="removeProduct">Çıkar</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.products-container {
    display: flex;
    flex-wrap: wrap;

    .product-item {
        margin: 0 30px;
    }

    .product-img {
        max-width: 100px;
        max-height: 100px;
    }
}
</style>