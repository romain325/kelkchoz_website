<template>
  <div>
    <ul>
      <li v-for="elem of $props.data">
        <RouterLink :to="$route.path + '/' + elem.name">{{elem.name}}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ArticleFolder",
  props: {
    data: Array
  }
})
</script>

<style scoped>

</style>
