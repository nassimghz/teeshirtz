<template>
    <div class="filtercard">
        <button @click="resetfields">reset filters</button>
        <hr>
        <range v-model="value"></range>
        <hr>
        <brands></brands>
        <hr>
        <colors></colors>
    </div>
</template>


<script>
    import colors from "@/components/Colors.vue";
    import range from "@/components/Range.vue";
    import brands from "@/components/Brands.vue";

    export default {
        data (){
            return {
                value : 0
            }
        },
        components : {
            colors,
            range,
            brands
             },
        methods: {
            resetfields: function () {
                console.log(this.value);
            },
        }
    }
</script>

<style scoped>
    .filtercard {
        border: 1px solid black;
        height: 345px;
        width: 250px;
    }

    ul {
        list-style: none;
    }
</style>