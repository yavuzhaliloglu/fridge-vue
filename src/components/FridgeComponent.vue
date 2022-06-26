<template>
    <div class="fridge-all my-5">
        <div class="fridge-container">
            <div class="item" v-for="(product, index) in products" :key="index">
                <ProductinFridge :product="product" />
            </div>
            <div @click="toggleClass" class="fridge-kapak">
                <div class="kapak-inner">
                    <div class="kapak-back">
                        <div class="item" v-for="(product, index) in products2" :key="index">
                            <ProductinFridge :product="product" />
                        </div>
                    </div>
                    <div class="kapak-front">
                        <div class="kapak-front-ust"></div>
                        <div class="kapak-front-alt"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vol-text mt-3">
            <p>Kalan Hacim: <span class="fridgevol fw-bold">{{ fridgevol }} Lt</span></p>
        </div>
    </div>
</template>

<script>
import ProductinFridge from './ProductinFridge.vue';

export default {
    props: {
        products: {
            type: Array,
            required: true
        },
        fridgevol: {
            type: Number,
            required: true
        },
        products2: {
            type: Array,
            required: true
        }
    },
    data() {
        return {};
    },
    methods: {
        toggleClass() {
            var element = document.querySelector(".fridge-kapak");
            element.classList.toggle("opendoor");
            setTimeout(this.setdisplaynone, 200);
        },
        setdisplaynone() {
            var element2 = document.querySelector(".kapak-front");
            element2.classList.toggle("display-none");
        }
    },
    components: { ProductinFridge }
}
</script>

<style lang="scss" scoped>
.fridge-all {
    width: 60%;

    @media screen and (max-width:1200px) {
        width: 55%
    }

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .fridge-container {
        border: 4px solid black;
        width: 240px;
        height: 410px;
        position: relative;
        border-radius: 16px;
        background-color: rgb(162, 217, 247);

        // eklenecek ürün
        .item {
            display: inline-block;
            min-width: 75px;
            min-height: 75px;
            text-align: center;
            animation-name: addedproduct;
            animation-duration: .5s;
        }

        .fridge-kapak {
            margin: auto;
            width: 234px;
            height: 405px;
            position: absolute;
            top: 0;
            left: 0;
            transform-origin: left;
            transition: .4s ease-in-out all;
            border-radius: 16px;
            background-color: rgb(162, 217, 247);

            .kapak-inner {
                position: relative;
                width: inherit;
                height: 405px;
                transform: .6s ease all;
                transform-style: preserve-3d;
                border-radius: inherit;

                .kapak-front,
                .kapak-back {
                    position: absolute;
                    width: 100%;
                    height: inherit;
                    border-radius: 12px;
                    border: 4px solid #000;
                }

                .kapak-front {
                    background-color: rgb(48, 138, 91);

                    &::before {
                        content: "";
                        position: absolute;
                        top: 18px;
                        left: 12px;
                        height: 90%;
                        width: 16px;
                        background-color: rgb(111, 215, 161);
                        border-radius: 20px;
                    }

                    &-ust {
                        height: 125px;
                        width: 100%;
                        border-bottom: 4px solid #000;
                        position: relative;

                        //buzdolabı üst kısım mandalı
                        &::before {
                            content: "";
                            position: absolute;
                            height: 60px;
                            width: 10px;
                            top: 50px;
                            right: 15px;
                            background-color: #000;
                            border-radius: 6px 6px 90% 90%;
                        }
                    }

                    &-alt {
                        height: 280px;
                        width: 100%;
                        position: relative;

                        // buzdolabı alt kısım mandalı
                        &::before {
                            content: "";
                            position: absolute;
                            height: 72px;
                            width: 10px;
                            top: 20px;
                            right: 15px;
                            background-color: #000;
                            border-radius: 6px 6px 70% 70%;
                        }
                    }
                }
            }
        }
    }

    // hacim gösterme
    .vol-text {
        font-size: 22px;
    }

    // ürün eklenme animasyonu
    @keyframes addedproduct {
        0% {
            transform: scale(0);
        }

        50% {
            transform: scale(1.07);
        }

        100% {
            transform: scale(1);
        }
    }

    // kapı açılması için class
    .opendoor {
        transform: perspective(1000px) rotateY(-180deg);
    }

    // buzdolabının kapak yüzünü değiştirmek için class
    .display-none {
        display: none;
    }

}
</style>


