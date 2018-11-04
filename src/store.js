import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        itemForSale: [
            {brand: 'Nike', name: 'T-Shirt Nike Blanc', image: require("./assets/nikeblanc.jpeg"), price: 20},
            {brand: 'Nike', name: 'T-Shirt Nike Rouge', image: require("./assets/nikerouge.jpeg"), price: 20},
            {brand: 'Adidas', name: 'T-Shirt Adidas Blanc', image: require("./assets/adidasblanc.jpeg"), price: 23},
            {brand: 'Reebok', name: 'T-Shirt Reebok', image: require("./assets/reebok.jpeg"), price: 25},
            {brand: 'Puma', name: 'T-Shirt Puma Blanc', image: require("./assets/pumablanc.jpeg"), price: 20},
            {brand: 'Puma', name: 'T-Shirt Puma Noir', image: require("./assets/pumanoir.jpeg"), price: 20},
            {brand: 'Nike', name: 'T-Shirt Nike gris', image: require("./assets/nikegris.jpeg"), price: 15},
            {brand: 'Fila', name: 'T-Shirt Fila', image: require("./assets/fila.jpeg"), price: 30},
            {brand: 'Adidas', name: 'T-Shirt Adidas Noir', image: require("./assets/adidasnoir.jpeg"), price: 25}
        ],

        filterBy: {
            range: 0,
            brands: []
        }
    },

    getters: {
        getItemForSale: (state) => {
            return state.itemForSale;
        },

        getFilteredItemForSale: (state) => {
            let filterdResult = state.itemForSale.filter( item => {

                // Range filter
                if(state.filterBy.range > 0 && item.price > state.filterBy.range){
                    return false;
                }

                // Brands filter
                if(state.filterBy.brands.length > 0
                    && state.filterBy.brands.indexOf(item.brand) === -1
                ) {
                    return false;
                }

                // Color filter

                return true;
            });

            return filterdResult;
        }
    },

    mutations: {
        setRange(state, price) {
            state.filterBy.range = price;
        },

        setBrands(state, brands) {
            state.filterBy.brands = brands;
        },

        resetFilter(state) {
            state.filterBy.brands = [];
            state.filterBy.range = 0;
        },
    },

})
