import { createStore } from 'vuex'

const store = createStore({
    state: {
        fridgevol:200,
        products: [
            {id:1,vol:5,name:"yumurta",img:'https://pngimg.com/uploads/egg/egg_PNG40783.png'},
            {id:2,vol:15,name:"su",img:'https://pngimg.com/uploads/water_bottle/water_bottle_PNG98959.png'},
            {id:3,vol:20,name:"peynir",img:'https://pngimg.com/uploads/cheese/cheese_PNG25292.png'},
            {id:4,vol:20,name:"süt",img:'https://pngimg.com/uploads/bottle/bottle_PNG2931.png'},
            {id:5,vol:15,name:"jambon",img:'https://pngimg.com/uploads/ham/ham_PNG51.png'},
            {id:6,vol:10,name:"muz",img:'https://pngimg.com/uploads/banana/banana_PNG852.png'},
            {id:7,vol:25,name:"karpuz",img:'https://pngimg.com/uploads/watermelon/watermelon_PNG234.png'},
        ],
        productsinfridge:[]
    },
    mutations:{

    },
    actions:{

    },
    getters:{
        getFridgeVol(state){
            return state.fridgevol;
        },
        getProducts(state){
            return state.products;
        }
    }


})

export default store