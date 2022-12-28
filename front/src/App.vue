<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="leading-6 max-h-screen lg:flex lg:place-items-center ">
    <div class="lg:w-32  lg:mr-6">
      <img class="lg:hover:scale-75  ease-[cubic-bezier(0.80,0.10,0.60,0.040)] duration-700 transition" src="@/assets/kelkchoz.png" />
    </div>

    <div class="lg:flex lg:place-items-start lg:flex-wrap">
      <nav class="w-full lg:flex lg:flex-col">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cv">Curriculum</RouterLink>
        <RouterLink to="/about">Me</RouterLink>
      </nav>
    </div>
  </header>

  <div class="lg:h-screen lg:flex lg:flex-col lg:justify-center">
    <RouterView />
  </div>
</template>

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
