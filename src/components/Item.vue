<template>
    <div class="contain">
        <div class="row" v-for="(item, n) in itemForSale" :key="n">
            <div class="card">
                <img class="cardimg" :src="item.image" :alt="item.name">
                <div class="cardcontain">
                    <h4 class="cardtitle">{{item.name}}</h4>
                    <div class="cardtext">{{item.price}}€</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                itemForSale: [
                    {brand: 'Nike', name: 'T-Shirt Nike Blanc', image: require("../assets/nikeblanc.jpeg"), price: 20},
                    {brand: 'Nike', name: 'T-Shirt Nike Rouge', image: require("../assets/nikerouge.jpeg"), price: 20},
                    {
                        brand: 'Adidas',
                        name: 'T-Shirt Adidas Blanc',
                        image: require("../assets/adidasblanc.jpeg"),
                        price: 23
                    },
                    {brand: 'Reebok', name: 'T-Shirt Reebok', image: require("../assets/reebok.jpeg"), price: 25},
                    {brand: 'Puma', name: 'T-Shirt Puma Blanc', image: require("../assets/pumablanc.jpeg"), price: 20},
                    {brand: 'Puma', name: 'T-Shirt Puma Noir', image: require("../assets/pumanoir.jpeg"), price: 20},
                    {brand: 'Nike', name: 'T-Shirt Nike gris', image: require("../assets/nikegris.jpeg"), price: 15},
                    {brand: 'Fila', name: 'T-Shirt Fila', image: require("../assets/fila.jpeg"), price: 30},
                    {
                        brand: 'Adidas',
                        name: 'T-Shirt Adidas Noir',
                        image: require("../assets/adidasnoir.jpeg"),
                        price: 25
                    },
                ],

                props: ['brand']
            }
        }
    }
</script>

<style scoped lang="scss">

    .contain {
        width: 550px;
    }

    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.5s;
        padding: 0 10px;
    }

    .row {
        margin: 0 -5px;
        display: inline-block;
        padding: 10px;
    }

    .card:hover {
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.3);
    }

    .cardimg {
        padding: 5px;
        width: 120px;
        height: 120px;
    }

</style>