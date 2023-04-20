<template>
  <div class="avatar tooltip" :data-tip="props.tip">
    <a :class="`btn btn-square h-32 w-32 p-2 ${props.color ?? 'bg-base-100'} mask mask-squircle`" target="_blank" :href="props.link">
      <img class="mask mask-squircle" :src="props.image" />
    </a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  tip: string,
  link: string,
  image: string,
  color?: string,
}
const props = defineProps<Props>();
</script>

<style scoped>

</style>