<template>
    <div class="product">
        <img class="product-img" :src='product.img' alt="" />
        <p class="product-name my-2">{{ product.name }}</p>
        <div class="product-buttons">
            <button @click="addProduct()" class="btn me-1 btn-sm btn-success">Ekle</button>
            <button @click="removeProduct(product)" class="btn btn-sm btn-outline-danger">Çıkar</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
        addProduct() {
            this.$store.dispatch('addProductToFridge', this.product)
        },
        removeProduct(product) {
            this.$store.dispatch('removeProductFromFridge', product)
        }
    }
}
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 180px;
    min-height: 200px;
    align-items: center;

    &-img {
        max-width: 100px;
        height: 100px;
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