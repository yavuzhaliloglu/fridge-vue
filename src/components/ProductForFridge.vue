<template>
    <div>
        <img class="product-img" :src=product.img alt="" />
        <div>{{ product.name }}</div>
        <button @click="addProduct()" class="addProduct">Ekle</button>
        <button @click="removeProduct(product)" class="removeProduct">Çıkar</button>
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
    data(){
        return{

        }
    },
    methods:{
        addProduct(){
            this.$store.dispatch('addProductToFridge',this.product)
        },
        removeProduct(product){
            this.$store.dispatch('removeProductFromFridge',product)
        }
    }
}
</script>

<style lang="scss" scoped>
.product-img {
    max-width: 100px;
    max-height: 100px;
}
</style>