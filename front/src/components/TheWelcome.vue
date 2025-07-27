<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import IconQuestion from "@/components/icons/IconQuestion.vue";
import IconGraduationCap from "@/components/icons/IconGraduationCap.vue";
import IconPeace from "@/components/icons/IconPeace.vue";
import IconSport from "@/components/icons/IconSport.vue";
import IconDocumentation from "@/components/icons/IconDocumentation.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <IconPeace class="w-6"/>
    </template>
    <template #heading>Me</template>

    <p>Hey, I'm Romain OLIVIER a {{new Date().getFullYear() - 2001}} years old french full-stack developer. Even if I have a preference for backend development I do appreciate both aspects.</p>
    <p>I also like low level development, DevOps and other aspects of programmation which I explore on my personal time.</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconGraduationCap class="w-6" />
    </template>
    <template #heading>Studies</template>

    <p>
      I graduated high school in 2019 and obtained a BAC S with "mention bien".
      <br>
      Then I obtained a "DUT Informatique" in 2021 at Clermont-Ferrand university.
      <br>
      After that I started a Computer Science engineer degree in 3IL Limoges and obtained it in 2024.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconSport class="w-6" />
    </template>
    <template #heading>Hobbies</template>

    <p>I do a lot of sport, mostly the gym and I'm training to get my rail back into martial arts
      <br>
      I love music of all genres from jazz to tekno, metal, classic, indie-pop. I do play music too from time to time and try to compose some.
      <br>
      Art in general is a really important part of my life and I like it through a lot of vectors and one especially which is Tattoo.
    </p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconDocumentation/>
    </template>
    <template #heading>Work experience</template>

    I had a few work experiences, multiple short term mission with Dalkia.
    <br>
    A three months intership at SOeMAN.
    <br>
    And a three year internship that {{new Date() < new Date(2024, 9-1, 1) ? "will end" : "ended"}} on september 2024.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <IconQuestion class="w-4" />
    </template>
    <template #heading>Is this the default Vue component ?</template>

    And you're absolutely right mate, once again I'm not the best designer you've ever seen so sometimes it's cool to keep what's already built!
  </WelcomeItem>
</template>
