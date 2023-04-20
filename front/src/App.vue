<template >
  <header class="leading-6 max-h-screen lg:flex lg:place-items-center ">
    <div class="lg:w-32  lg:mr-6">
      <img class="lg:hover:scale-75  ease-[cubic-bezier(0.80,0.10,0.60,0.040)] duration-700 transition" src="@/assets/kelkchoz.png" />
    </div>

    <div class="lg:flex lg:place-items-start lg:flex-wrap">
      <nav class="w-full lg:flex lg:flex-col">
        <RouterLink v-for="route of router.getRoutes().filter(f => f.meta.show).sort((a,b) => a.meta.index - b.meta.index)" :to="route.meta.displayUrl ?? route.path">{{route.name}}</RouterLink>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cv">Curriculum</RouterLink>
        <RouterLink to="/about">Me</RouterLink>
        <RouterLink to="/articles">Articles</RouterLink>
        <RouterLink to="/socials">Socials</RouterLink> -->
      </nav>
    </div>
  </header>

  <div class="lg:h-screeen lg:flex lg:flex-col lg:justify-center">
    <RouterView :key="route.path"/>
  </div>
</template>

<script setup lang="ts">
import {RouterLink, RouterView, useRoute, useRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {defineComponent} from "vue";

const route = useRoute();
const router = useRouter();


</script>

<style scoped>

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

@media (min-width: 1024px) {
  nav {
    margin-left: -1rem;
    font-size: 1.2rem;
  }
}
</style>
