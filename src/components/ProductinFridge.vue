<template>
    <div class="item-container">
        <img class="product-img" :src='product.img' />
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
    }
}
</script>

<style lang="scss" scoped>
.item-container{
    width: 75px;
    height: 70px;
}
.product-img{
    max-width: 75px;
    max-height: 70px;
}
</style>