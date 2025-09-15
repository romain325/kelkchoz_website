<template>
  <div :class="'chat ' + (props.isRecieved ? 'chat-start' : 'chat-end')">
    <div :class="'chat-bubble ' + (props.isRecieved ? '' : 'chat-bubble-info')">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
interface Props {
  isRecieved?: boolean
}
const props = withDefaults(defineProps<Props>(), {isRecieved: true});
</script>