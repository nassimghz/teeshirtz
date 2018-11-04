<template>
  <div id="app">
    <div class="containall">
      <fixed-header class="head" :fixed.sync="isFixed" :threshold="300">
        <div :class="{ 'is-fixed': isFixed }">
          <div id="nav">
            <router-link to="/">TeeShirtz</router-link> |
            <router-link to="/about">About</router-link>
          </div>
          <router-view/>
        </div>
      </fixed-header>
      <div class="contain">
        <div class="items">
          <itemforsale  @click="$emit"> {{checkedItem}} </itemforsale>
        </div>
        <div class="filters">
          <filteritem></filteritem>
        </div>
      </div>
    </div>
    <footer>
      Nassim Ghazraoui ©
    </footer>
  </div>
</template>

<script>
    import FixedHeader from 'vue-fixed-header';
    import itemforsale from "@/components/Item.vue";
    import filteritem from "@/components/Filter.vue";


    export default {
        components: {
            FixedHeader,
            itemforsale,
            filteritem,
        },
        data() {
            return {
                isFixed: false,
                checkedItem: ''
            }
        },
        created() {
            this.$ebus.$on("checkedItem", payload => {
                this.checkedItem = payload;
                console.log(this.checkedItem);
            });
        }
    }
</script>


<style lang="scss" scoped>

  @import url('https://fonts.googleapis.com/css?family=Poppins:600');

  *{
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }
  .head{
    width: auto;
    height: 100px;
    background: cornflowerblue;
    display: flex;
    justify-content: center;
    padding: 30px;
    font-size: xx-large;
  }

  .contain {
    display: -webkit-box;
  }

  .filters {
    margin-left: 100px;
    margin-top: 30px;
  }


  .items {
    display: flex;
    width: 550px;
  }


  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: grey;
      }
    }
  }

  footer {

  }
</style>
