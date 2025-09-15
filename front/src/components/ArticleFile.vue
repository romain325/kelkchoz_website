<template>
  <div
      ref="contentRef"
      class="overflow-y-auto max-h-full h-full w-full px-4 box-border"
  ></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { mdToHtml } from '@/services/githubApiService';

const props = defineProps<{
  value: { content: string };
}>();

const contentRef = ref<HTMLElement | null>(null);

onMounted(async () => {
  if (!props.value?.content) return;

  const decoded = decodeURIComponent(
      atob(props.value.content)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
  );

  try {
    const response = await mdToHtml(decoded);
    const html = await response.text();
    if (contentRef.value) {
      contentRef.value.innerHTML = html;
    }
  } catch (error) {
    console.error('Error converting markdown:', error);
  }
});
</script>

<style scoped>
/* Scrollbar customization (optional) */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
