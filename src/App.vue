<template>
  <div id="app">
    <NavbarCompBV/>
    <router-view/>
    <FooterComp />
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue'
import NavbarCompBV from './components/NavbarCompBV.vue'

export default {
  name: "App",
  components: { NavbarCompBV, FooterComp },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700;800&family=Rubik:wght@300;400;700&display=swap');

* {
  font-family: 'Karla', sans-serif;
  color: #484F5D;
  overflow-x: hidden;
}
.btn-purple {
  background-color: #5241B8;
  color: #fff;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
