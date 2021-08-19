<!--
 * @Description: 
 * @Author: caiwu
 * @CreateDate: 
 * @LastEditor: 
 * @LastEditTime: 2021-07-15 15:44:00
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/app3">Home</router-link> |
      <router-link to="/about3">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
  export default {
    created() {
      if (window.__isSandBox__) {
        // eslint-disable-next-line no-undef
        registerApp(this)
      }
    },
  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
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
        color: #42b983;
      }
    }
  }
</style>
