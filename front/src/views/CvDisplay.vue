<template>
  <h1 v-if="!loaded">Loading....</h1>
  <div class="flex justify-evenly">
    <button class="btn" @click="setSource('/pdf/cv_fr.pdf')">🇫🇷</button>
    <button class="btn" @click="setSource('/pdf/cv_en.pdf')">🇬🇧</button>
  </div>
  <div :style="{visibility: !loaded ? 'hidden' : 'visible'}" class="block h-full w-full overflow-y-scroll" ref="pdfHolder">
    <vue-pdf-embed
        :source="source"
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

<script lang="ts">
import VuePdfEmbed from "vue-pdf-embed";
import {defineComponent} from "vue";

export default defineComponent({
  components: {
    VuePdfEmbed
  },
  data() {
    return {
      width: 500,
      loaded: false,
      source: '/pdf/cv_fr.pdf'
    }
  },
  mounted() {
    window.addEventListener("resize", this.resizeHandler);
    this.width = this.$refs.pdfHolder.clientWidth;
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    resizeHandler(e : UIEvent) {
      if(this.$refs.pdfHolder.clientWidth !== this.width && this.loaded) {
        if(this.loaded){
          this.width = this.$refs.pdfHolder.clientWidth;
          this.loaded = false;
        }
      }
    },
    setRendered() {
      this.loaded = true;
    },
    setSource(source: string) {
      this.loaded = false;
      this.source = source;
    }
  }
});
</script>

