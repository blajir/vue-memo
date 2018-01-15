<template>
  <div id="app">
    <header-component/>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header";

export default {
  components: {
    HeaderComponent,
  },
  name: 'app',
}
</script>

<style>
body {
  background-color: #f0f0f0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 100px;
  box-sizing: border-box;
}
</style>
