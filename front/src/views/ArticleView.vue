<template>
  <nav class="lg:h-3/12" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li class="inline-flex items-center">
        <RouterLink to="/articles" class="inline-flex items-center text-4xl font-bold text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
          Articles
        </RouterLink>
        <svg class="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
      </li>
      <li v-for="(elem, index) of $route.path.split('/').slice(2)">
        <div class="flex items-center">
          <RouterLink :to="getCalculatedPath(index)" class="m-1 text-4xl font-bold text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">{{decodeURI(elem)}}</RouterLink>
          <svg class="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </div>
      </li>
    </ol>
  </nav>
  <h1 v-if="!isLoaded">Loading...</h1>
  <div v-else class="lg:h-10/12">
    <div v-if="error.message">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Oh no! An error occurred while requesting Github API !</h1>
      <p class="my-4 text-lg text-gray-500">{{ error.message }}</p>
    </div>
    <div v-else>
      <ArticleFolder v-if="isFolder" :data="element"></ArticleFolder>
      <ArticleFile v-else :value="element"></ArticleFile>
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
      element: null as any,
      isFolder: true,
      isLoaded: false,
      error: {} as {message: string},
    }
  },
  mounted() {
    const route = useRoute();
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
  },
  methods: {
    getCalculatedPath(index: number) {
      let path = this.$route.path.split("/");
      const iter = path.length - (index +3);
      for(let cnt = 0; cnt < iter; cnt++) {
        path.pop();
      }
      return path.join('/');
    }
  }
});
</script>

<style scoped>

</style>
