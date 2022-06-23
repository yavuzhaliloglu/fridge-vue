<template>
    <div class="fridge-all my-5">
        <div class="fridge-container mx-auto">
            <div v-for="(product, item) in products" :key="item">
                <img class="product-img" :src='product.img' />
            </div>
            <div @click="toggleClass" class="fridge-kapak">
                <div class="kapak-inner">
                    <div class="kapak-back">
                        
                    </div>
                    <div class="kapak-front">
        
                    </div>

                </div>
            </div>
        </div>
    </div>
    <p>Kalan Hacim: {{ fridgevol }} Lt</p>
</template>

<script>

export default {
    props: {
        products: {
            type: Array,
            required: true
        },
        fridgevol: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
        };
    },
    methods: {
        toggleClass() {
            var element = document.querySelector(".fridge-kapak")
            element.classList.toggle("opendoor");
            setTimeout(this.setdisplaynone, 200);
        },
        setdisplaynone() {
            var element2 = document.querySelector(".kapak-front");
            element2.classList.toggle("display-none");
        }
    }

}
</script>

<style lang="scss" scoped>
.fridge-all {
    .fridge-container {
        border: .2px solid black;
        display: flex;
        flex-wrap: wrap;
        width: 400px;
        height: 500px;
        position: relative;

        .fridge-kapak {
            width: 400px;
            height: 500px;
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: left;
            transition: .4s ease-in-out all;

            .kapak-inner {
                position: relative;
                width: 100%;
                height: 100%;
                transform: .6s;
                transform-style: preserve-3d;

                .kapak-front,
                .kapak-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }

                .kapak-front {
                    background-color: red;
                    color: green;
                }

                .kapak-back {
                    background-color: blue;
                }

                .display-none {
                    display: none;
                }
            }
        }

        .opendoor {
            transform: perspective(1000px) rotateY(-180deg);
        }
    }

    .product-img {
        max-width: 100px;
        max-height: 100px;
    }
}
</style>


