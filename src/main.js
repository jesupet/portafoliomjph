import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue from "vue";

createApp(App).use(store).use(router).mount('#app')

new Vue({
  el: '#navbar',
  data () {
    return {
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(){
      if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  },
})
