<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <RouterLink to="/articles" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          Articles
        </RouterLink>
      </li>
      <li>
        <div class="flex items-center">
          <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
        </div>
      </li>
      <li aria-current="page">
        <div class="flex items-center">
          <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
        </div>
      </li>
    </ol>
  </nav>
  <h1 v-if="!isLoaded">Loading...</h1>
  <div v-else class="lg:h-screen">
    <div v-if="error">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Oh no! An error occurred while requesting Github API !</h1>
      <p class="my-4 text-lg text-gray-500">{{ error.message }}</p>
    </div>
    <div v-else class="lg:h-screen">
      <ArticleFolder v-if="isFolder" :data="element"></ArticleFolder>
      <ArticleFile class="lg:h-screen" v-else :value="element"></ArticleFile>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {getFolder} from "@/services/githubApiService";
import {useRoute} from "vue-router";
import ArticleFile from "@/components/ArticleFile.vue";
import ArticleFolder from "@/components/ArticleFolder.vue";

export default defineComponent({
  name: "ArticleView",
  components: {ArticleFile, ArticleFolder},
  data() {
    return {
      element: null,
      isFolder: true,
      isLoaded: false,
      error: null,
    }
  },
  mounted() {
    const route = useRoute();
    console.log(route.params.id)
    let url = "/articles";
    for (let idElement of route.params.id) {
      url += ("/" + idElement);
    }
    getFolder(url).then(async res => {
      const result = await res.json();
      if(!res.ok) {
        this.error = result;
      } else {
        this.isFolder = Array.isArray(result);
        this.element = result;
      }

      this.isLoaded = true;
    });
  }
});
</script>

<style scoped>

</style>
