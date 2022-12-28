<template>
  <h1 v-if="!loaded">Loading....</h1>

  <button @click="setSource('/pdf/cv_fr.pdf')">FR</button>
  <button @click="setSource('/pdf/cv_en.pdf')">EN</button>

  <div :style="{visibility: !loaded ? 'hidden' : 'visible'}" class="block h-full w-full overflow-y-scroll" ref="pdfHolder">
    <vue-pdf-embed
        :source="source"
        :width="width"
        @rendered="setRendered"
    />
  </div>
</template>

<script lang="ts">
import VuePdfEmbed from "vue-pdf-embed";

export default {
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
}
</script>

<style scoped>

</style>
