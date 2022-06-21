<template>
    <div class="fridge-container">
        <div class="fridge">
            
        </div>
        <p> {{fridgevol}} Lt</p>
    </div>
</template>

<script>
    export default {
        props:{
            fridgevol:{
                type:Number,
                required:true
            }
        },
        data(){
            return{

            }
        },

    }
</script>

<style lang="scss" scoped>
    .fridge{
        height: 50vh;
        border: 1px solid black;
        width: 50%;
        margin: auto;
    }
</style>