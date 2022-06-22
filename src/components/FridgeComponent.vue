<template>
    <div class="fridge-container">
        <div class="fridge" v-for="(product,item) in products" :key="item">
            <img class="product-img" :src='product.img' />
        </div>
    </div>
    <p> {{fridgevol}} Lt</p>
</template>

<script>
    export default {
    props: {
        products: {
            type: Array,
            required: true
        },
        fridgevol:{
            type:Number,
            required:true
        }
    },
    data() {
        return {
        };
    },
    computed:{
        // calcFridgeVol(){
        //     let fvol = this.$store.state.fridgevol;
        //     let total = 0;
        //     this.products.forEach(item=>{
        //         total+=item.vol
        //     });
        //     return fvol - total;
        //     this.$store.dispatch('showVol',this.products)
        // },
    }
}
</script>

<style lang="scss" scoped>
    .fridge-container{
        display: flex;
        flex-wrap: wrap;
        height: 50vh;
        border: 1px solid black;
        width: 50%;
        margin: auto;
    }

    .product-img{
        max-width: 100px;
        max-height: 100px;
    }
</style>