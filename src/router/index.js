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
  routes
})

export default router
