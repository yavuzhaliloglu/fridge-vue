<template>
    <div class="product">
        <ProductinFridge :product="product"/>
        <p class="product-name my-2">{{ product.name }}</p>
        <div class="product-buttons">
            <button @click="addProduct()" class="btn me-1 btn-sm btn-success">Ekle</button>
            <button @click="removeProduct()" class="btn btn-sm btn-outline-danger">Çıkar</button>
        </div>
    </div>
</template>

<script>
import ProductinFridge from './ProductinFridge.vue'
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data() {
        return {};
    },
    methods: {
        addProduct() {
            this.$store.dispatch("addProductToFridge", this.product);
        },
        removeProduct() {
            this.$store.dispatch("removeProductFromFridge", this.product);
        }
    },
    components: { ProductinFridge }
}
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 150px;
    align-items: center;

    &-img {
        width: 75px;
        height: 75px;
    }

    &-name {
        font-size: 18px;
    }

    &-buttons {
        margin-top: auto;
        margin-bottom: 10px;
    }

}
</style>