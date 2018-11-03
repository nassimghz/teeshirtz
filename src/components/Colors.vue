<template>
    <div>
        <span>COLORS</span>
        <button class="rouge"></button>
        <button class="gris"></button>
        <button class="noir"></button>
        <button class="blanc"></button>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .rouge {
        background: firebrick;
        border: 1px solid black;
        width: 20px;
        height: 20px;
    }

    .gris {
        background: gray;
        border: 1px solid black;
        width: 20px;
        height: 20px;
    }

    .noir {
        background: black;
        border: 1px solid black;
        width: 20px;
        height: 20px;
    }

    .blanc {
        background: white;
        border: 1px solid black;
        width: 20px;
        height: 20px;
    }
</style>