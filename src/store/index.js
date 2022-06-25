import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        fridgevol: 600,
        totalvol: 600,
        products: [
            { id: 1, vol: 10, name: "yumurta", img: 'https://pngimg.com/uploads/egg/egg_PNG40783.png' },
            { id: 2, vol: 15, name: "su", img: 'https://pngimg.com/uploads/water_bottle/water_bottle_PNG98951.png' },
            { id: 3, vol: 20, name: "peynir", img: 'https://pngimg.com/uploads/cheese/cheese_PNG25292.png' },
            { id: 4, vol: 20, name: "süt", img: 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/34281/milk-drink-clipart-md.png' },
            { id: 5, vol: 15, name: "jambon", img: 'https://freepngimg.com/thumb/bacon/152484-bacon-jamon-free-png-hq.png' },
            { id: 6, vol: 15, name: "muz", img: 'https://pngimg.com/uploads/banana/banana_PNG852.png' },
            { id: 7, vol: 20, name: "karpuz", img: 'https://pngimg.com/uploads/watermelon/watermelon_PNG234.png' },
        ],
        productsinfridge: [],
        productsinkapak: []
    },
    mutations: {
        ADD_PRODUCT: (state, item) => {
            let fridgevol = state.productsinfridge.length;
            let kapakvol = state.productsinkapak.length;

            if (fridgevol === 15 && kapakvol === 15) {
                return
            }
            if ((item.id === 1 && kapakvol !== 15) || fridgevol === 15) {
                state.productsinkapak.push(item);
            }
            else if (item.id !== 1) {
                state.productsinfridge.push(item)
            }

        },
        REMOVE_PRODUCT: (state, item) => {
            let array = state.productsinfridge;
            let kapakarray = state.productsinkapak;

            if (array.includes(item)) {
                array.splice(array.indexOf(item), 1);
                return
            }

            if (kapakarray.includes(item)) {
                kapakarray.splice(kapakarray.indexOf(item), 1);
                return
            }
        },
    },
    actions: {
        addProductToFridge: ({ commit }, product) => {
            commit('ADD_PRODUCT', product);
        },
        removeProductFromFridge: ({ commit }, product) => {
            commit('REMOVE_PRODUCT', product);
        },

    },
    getters: {
        getFridgeVol(state) {
            return state.fridgevol;
        },
        getProducts(state) {
            return state.products;
        },
        getFridgeProducts(state) {
            return state.productsinfridge;
        },
        getKapakProducts(state) {
            return state.productsinkapak;
        },
    }


})

export default store