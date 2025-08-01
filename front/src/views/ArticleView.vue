<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <!-- Breadcrumb navigation -->
    <nav class="shrink-0 p-4 overflow-x-auto">
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <RouterLink
              to="/articles"
              class="inline-flex items-center text-2xl font-bold text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            Articles
          </RouterLink>
          <svg class="w-6 h-6 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
            <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
            />
          </svg>
        </li>
        <li v-for="(elem, index) in pathElements" :key="index">
          <div class="flex items-center">
            <RouterLink
                :to="getCalculatedPath(index)"
                class="text-2xl font-bold text-gray-700 md:ml-2 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              {{ decodeURI(elem) }}
            </RouterLink>
            <svg class="w-6 h-6 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
              />
            </svg>
          </div>
        </li>
      </ol>
    </nav>

    <!-- Main content area -->
    <div class="flex-1 overflow-hidden">
      <div v-if="!isLoaded" class="p-4">
        <h1 class="text-2xl">Loading...</h1>
      </div>

      <div v-else class="h-full">
        <div v-if="error.message" class="p-4">
          <h1 class="mb-4 text-3xl font-bold text-red-600">
            Oh no! An error occurred while requesting Github API!
          </h1>
          <p class="text-gray-500">{{ error.message }}</p>
        </div>

        <div v-else class="h-full">
          <ArticleFolder v-if="isFolder" :data="element" />
          <ArticleFile v-else :value="element" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { getFolder } from "@/services/githubApiService";
import ArticleFile from "@/components/ArticleFile.vue";
import ArticleFolder from "@/components/ArticleFolder.vue";

// state
const element = ref<any>(null);
const isFolder = ref(true);
const isLoaded = ref(false);
const error = ref<{ message: string }>({ message: "" });

const route = useRoute();

// breadcrumb logic
const pathElements = computed(() => route.path.split("/").slice(2));

const getCalculatedPath = (index: number): string => {
  const path = route.path.split("/");
  const iter = path.length - (index + 3);
  for (let cnt = 0; cnt < iter; cnt++) {
    path.pop();
  }
  return path.join("/");
};

async function load() {
  let url = "/articles";
  for (const idElement of route.params.id as string[]) {
    url += `/${idElement}`;
  }

  try {
    const res = await getFolder(url);
    const result = await res.json();

    if (!res.ok) {
      error.value = result;
    } else {
      isFolder.value = Array.isArray(result);
      element.value = result;
    }
  } catch (e) {
    error.value.message = "Unknown error occurred.";
  } finally {
    isLoaded.value = true;
  }
}

onMounted(async () => {
  await load();
});

// load data on mount
onUpdated(async () => {
  await load();
});
</script>

<style scoped></style>
