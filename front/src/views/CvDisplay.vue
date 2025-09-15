<template>
  <div class="flex justify-center w-full h-full align-middle">
    <a :href="url" target="_blank">
      <button class="btn btn-block btn-primary btn-large">Download</button>
    </a>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
const url = import.meta.env.BASE_URL + "/resume.pdf";
</script>
