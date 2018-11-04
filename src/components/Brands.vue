<template>
    <div>
        <span >BRANDS</span>
        <div>
            <ul>
                <input type="checkbox" id="nike" name="feature"
                       value="Nike" v-model="checkedItem"/>
                <label for="nike">Nike</label>
                <br>
                <input type="checkbox" id="Adidas" name="feature"
                       value="Adidas" v-model="checkedItem"/>
                <label for="Adidas">Adidas</label>
                <br>
                <input type="checkbox" id="Reebok" name="feature"
                       value="Reebok" v-model="checkedItem"/>
                <label for="Reebok">Reebok</label>
                <br>
                <input type="checkbox" id="Puma" name="feature"
                       value="Puma" v-model="checkedItem"/>
                <label for="Puma">Puma</label>
                <br>
                <input type="checkbox" id="Fila" name="feature"
                       value="Fila" v-model="checkedItem"/>
                <label for="Fila">Fila</label>
                <br>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                checkedItem: []
            };
        },

        created() {
            // this.$ebus.$emit("checkedItem", this.checkedItem);
            this.$ebus.$on('resetFilter', () => {
                this.checkedItem = [];
            });
        },
        watch: {
            'checkedItem': function(newVal) {
                this.$store.commit('setBrands', newVal);
            }
        }
    }
</script>

<style scoped>

</style>