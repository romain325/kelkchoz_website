<template>
  <div class="flex h-full flex-col justify-evenly" >
    <div class="flex flex-row justify-evenly">
      <SocialBadge
        link="https://www.instagram.com/rooomaaaiiiiin/"
        tip="Personal instagram"
        color="bg-purple-400"
        image="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
      />
      <SocialBadge
          link="https://www.linkedin.com/in/romain-olivier-39388a198/"
          tip="Linkedin"
          color="bg-violet-400"
          image="https://cdn-icons-png.flaticon.com/512/174/174857.png"
      />
      <SocialBadge
          link="https://stackoverflow.com/users/12937433/rom1"
          tip="Stack overflow"
          color="violet-400"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
      />
    </div>
    <div class="flex flex-row justify-evenly">
      <SocialBadge
          link="https://github.com/romain325"
          tip="Github"
          color="violet-400"
          image="https://cdn-icons-png.flaticon.com/512/38/38401.png"
      />
      <SocialBadge
          link="https://exercism.org/profiles/romain325"
          tip="Exercism"
          color="violet-400"
          image="https://i.imgur.com/037qDHj.jpg"
      />
      <SocialBadge
          link="https://www.instagram.com/romain.kelkchoz/"
          tip="Tattoo instagram"
          color="bg-blue-400"
          image="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
      />
    </div>
  </div>
  <div class="bg-purple-400"></div>
</template>

<script setup lang="ts">
import SocialBadge from "@/components/SocialBadge.vue"
</script>

<style scoped>

</style>