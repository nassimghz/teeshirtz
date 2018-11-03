<template>
    <div>
        <label for="pricemax">PRICE MAX</label>
        <br>
        <input type="range" min="0" max="50" v-model="limit" id="pricemax">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                limit : 0,
            }
        }
    }
</script>

<style scoped>

</style>