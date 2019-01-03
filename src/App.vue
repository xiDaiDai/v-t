<template>
  <div id="app">
    <Header></Header>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <Footer msg="Footer"></Footer>

  </div>
</template>

<script>
import Footer from 'components/Footer.vue'
import Header from 'components/Header.vue'
import index from './pages/index.vue'

export default {
  name: 'app',
  components: {
      Header,
      Footer,
  }
}
</script>

<style>
  body {
    margin: 0px;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
