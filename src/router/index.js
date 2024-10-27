import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/Home.vue'
import Education from '/src/Education.vue'
import Experience from '/src/Experiences.vue'
import Skills from '/src/Skills.vue'
import Projects from '/src/Projects.vue'
import Contact from '/src/Contact.vue'

const routes = [
  { path: '/Home', name: 'Home', component: Home },
  { path: '/Education', name: 'Education', component: Education },
  { path: '/Experiences', name: 'Experience', component: Experience },
  { path: '/Skills', name: 'Skills', component: Skills },
  { path: '/Projects', name: 'Projects', component: Projects },
  { path: '/Contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router