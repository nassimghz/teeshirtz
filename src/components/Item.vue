<template>
    <div class="contain">
        <transition-group name="fade">
            <div class="row" v-for="(item, n) in itemForSale" :key="n">
                <div class="card">
                    <img class="cardimg" :src="item.image" :alt="item.name">
                    <div class="cardcontain">
                        <h4 class="cardtitle">{{item.name}}</h4>
                        <div class="cardtext">{{item.price}}€</div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        computed: {
            itemForSale() {
                return this.$store.getters.getFilteredItemForSale;
            }
        },

        mounted() {
            // console.log(this.itemForSale);
        }
    }
</script>

<style scoped lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

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