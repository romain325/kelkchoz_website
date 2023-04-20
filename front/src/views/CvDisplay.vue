<template>
  <h1 v-if="!loaded">Loading....</h1>
  <div class="flex justify-evenly">
    <button class="btn" @click="setSource('/cv_fr.pdf')">🇫🇷</button>
    <button class="btn" @click="setSource('/cv_en.pdf')">🇬🇧</button>
  </div>
  <div :style="{visibility: !loaded ? 'hidden' : 'visible'}" class="block h-full w-full overflow-y-scroll" ref="pdfHolder" >
    <vue-pdf-embed
        :source="currentSource"
        :width="width"
        @rendered="setRendered"
    />
  </div>
</template>

<style scoped>
.btn {
  @apply bg-primary rounded font-bold py-2 px-4 mb-4 mt-4;
}
</style>

<script setup lang="ts">
import VuePdfEmbed from "vue-pdf-embed";
import { onMounted, onUnmounted, ref} from "vue";
import { raw_github_url, repo, user} from "@/config/ghApiConf";

const CV_FR = "/cv_fr.pdf";
const CV_EN = "/cv_en.pdf";

const width = ref(500);
const loaded = ref(false);
const currentSource = ref<string>("");
const pdfHolder = ref<HTMLDivElement>()

onMounted(() => {
  window.addEventListener("resize", resizeHandler);
  width.value = pdfHolder.value?.clientWidth || 500;

  setSource(CV_FR);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeHandler);
})

function resizeHandler(e : UIEvent) {
  if(pdfHolder.value?.clientWidth !== width.value && loaded.value) {
    if(loaded.value && pdfHolder.value){
      width.value = pdfHolder.value.clientWidth;
      loaded.value = false;
    }
  }
}


const setRendered = () => loaded.value = true;

function setSource(newSource: string) {
  loaded.value = false;
  currentSource.value = `${raw_github_url}/${user}/${repo}/main/cv${newSource}`;
}


</script>

