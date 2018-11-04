<template>
    <div class="filtercard">
        <button @click="resetfields">reset filters</button>
        <hr>
        <range></range>
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
            }
        },

        components : {
            colors,
            range,
            brands
        },
        methods: {
            resetfields() {
                this.$store.commit('resetFilter');
                this.$ebus.$emit('resetFilter');
            }
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