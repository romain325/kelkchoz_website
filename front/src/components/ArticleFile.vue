<template>
    <div ref="test" class="overflow-y-scroll"></div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {mdToHtml} from "@/services/githubApiService";

export default defineComponent({
  name: "ArticleFile",
  props: {
    value: Object
  },
  data() {
    return {
      content: "",
    }
  },
  mounted() {
    if(!this.$props.value)return;
    this.content = decodeURIComponent(atob(this.$props.value.content).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    mdToHtml(this.content).then(res => {
      res.text().then(txt => {
        this.content = txt;
        (<HTMLElement>this.$refs.test).innerHTML = txt;
      })
    });
  }
});
</script>

<style scoped>

</style>
