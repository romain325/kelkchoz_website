<template>
  <div class="drawer lg:drawer-open">
    <!-- Mobile menu toggle -->
    <input id="drawer-toggle" type="checkbox" class="drawer-toggle" />

    <!-- Main content area -->
    <div class="drawer-content flex flex-col">
      <!-- Navbar for mobile -->
      <div class="navbar bg-base-100 lg:hidden fixed top-0 left-0 right-0 z-50 shadow-md">
        <div class="flex-none">
          <label for="drawer-toggle" class="btn btn-square btn-ghost">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-1">
          <a class="btn btn-ghost text-xl font-extrabold">KELKCHOZ</a>
        </div>
      </div>

      <!-- Main content -->
      <main class="flex-1 bg-base-200 lg:p-6 pt-20 px-6 pb-6">
        <router-view />
      </main>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side">
      <label for="drawer-toggle" class="drawer-overlay"></label>
      <aside class="min-h-full w-80 bg-base-100 text-base-content">
        <!-- Logo section -->
        <div class="p-4 border-b border-base-300">
          <div class="flex items-center space-x-2">
            <div class="avatar">
              <div class="w-10 rounded-full bg-primary">
                <div class="flex items-center justify-center h-full text-primary-content font-bold">
                  <img src="@/assets/kelkchoz.svg"  alt="logo"/>
                </div>
              </div>
            </div>
            <span class="text-xl font-extrabold">KELKCHOZ</span>
          </div>
        </div>

        <!-- Navigation menu -->
        <div class="p-4">
          <ul class="menu menu-vertical w-full space-y-2">

            <li
                        v-for="allRoute of router.getRoutes().filter(f => f.meta.show).sort((a,b) => a.meta.index - b.meta.index)"
                        :class="allRoute.name == route.name ? 'underline' : ''"
            >

              <router-link
                  :to="allRoute.meta.displayUrl ?? allRoute.path"
                  class="flex items-center space-x-3 p-3 rounded-lg hover:bg-base-200 transition-colors"
                  active-class="text-primary-content"
                  exact-active-class="text-primary-content"
              >
                <span>{{allRoute.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Footer section in sidebar -->
        <div class="absolute bottom-0 w-full p-4 border-t border-base-300">
          <div class="text-sm text-base-content opacity-60">
            ©{{new Date().getFullYear()}} kelkchoz
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const route = useRoute();

onMounted(() => {
  router.afterEach(() => {
    const drawerToggle = document.getElementById('drawer-toggle');
    if(drawerToggle) drawerToggle.checked = false;
  })
});
</script>

<style scoped>
/* Ensure the layout takes full height */
.drawer {
  min-height: 100vh;
}

/* Smooth transitions */
.drawer-side {
  transition: transform 0.3s ease;
}

/* Content area styling */
main {
  min-height: calc(100vh - 64px); /* Subtract navbar height on mobile */
}

@media (min-width: 1024px) {
  main {
    min-height: 100vh;
  }
}

@media (max-width: 1023px) {
  main {
    padding-top: 5rem; /* Account for fixed navbar (navbar is 4rem/64px high) */
    min-height: calc(100vh - 80px);
  }

  /* Ensure content is properly spaced from fixed navbar */
  .drawer-content {
    padding-top: 0;
  }
}
</style>