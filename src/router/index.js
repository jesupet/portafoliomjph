import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import ContactForm from '../views/ContactForm.vue'

const routes = [
  {
    path: '/',
    name: 'mainpage',
    component: MainPage
  },
  {
    path: '/contact-form',
    name: 'contactform',
    component: ContactForm
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
          return savedPosition;

      }

      if (to.hash) {
          return { selector: to.hash };
      }
      return { x: 0, y: 0 }
    }
})

export default router
