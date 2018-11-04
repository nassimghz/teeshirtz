<template>
    <div>
        <label for="pricemax">PRICE MAX ({{ limit }}) </label>
        <br>
        <input
                type="range"
                min="0"
                max="50"
                v-model="limit"
                id="pricemax"
                @change="changePrice()"
        >
    </div>
</template>

<script>
    export default {
        data () {
            return {
                limit : 0
            }
        },
        methods: {
            changePrice() {
                this.$store.commit('setRange', this.limit);
            }
        },
        mounted () {
            this.$ebus.$on('resetFilter', () => {
                this.limit = 0;
            });
        }
    }
</script>

<style scoped>

</style>