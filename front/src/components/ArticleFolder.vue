<template>
  <div>
    <ul class="list bg-base-100 rounded-box shadow-md">
      <li class="list-row" v-for="elem of $props.data">
        <RouterLink :to="$route.path + '/' + elem.name">{{
          elem.name
        }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArticleFolder",
  props: {
    data: Array<any>,
  },
});
</script>

<style scoped></style>
