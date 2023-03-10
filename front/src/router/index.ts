import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CvDisplay from "@/views/CvDisplay.vue";
import ArticleFolderView from "@/views/ArticleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: CvDisplay
    },
    {
      path: '/articles/:id*',
      name: 'articles',
      component: () => import('../views/ArticleView.vue')
    }
  ]
})

export default router
