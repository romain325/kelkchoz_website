import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CvDisplay from "@/views/CvDisplay.vue";
import ArticleFolderView from "@/views/ArticleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        index: 1,
        show: true,
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        index: 3,
        show: true,
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cv',
      name: 'Curriculum',
      meta: {
        index: 2,
        show: true,
      },
      component: CvDisplay
    },
    {
      path: '/articles/:id*',
      name: 'Articles',
      meta: {
        index: 4,
        show: true,
        displayUrl: '/articles'
      },
      component: () => import('../views/ArticleView.vue')
    },
    {
      path: '/socials',
      name: 'Socials',
      meta: {
        index: 5,
        show: true,
      },
      component: () => import('../views/Socials.vue')
    }
  ]
})

export default router
