<script setup lang="ts">
import ChatMessage from "@/components/ChatMessage.vue";

const infos = [
  [
    "Can you talk about yourself real quick?",
    "My name is Romain OLIVIER. I'm a " + (new Date().getFullYear() - 2001) + "-year-old French full-stack developer."
  ],
  [
    "What do you like in Computer Science?",
    "I really enjoy software architecture, backend development, low-level programming, DevOps — honestly, pretty much everything."
  ],
  [
    "Where did you study?",
    "I earned a DUT in Computer Science in 2021 from Clermont-Ferrand University, and completed my engineering degree in Computer Science at 3IL Limoges in 2024."
  ],
  [
    "Ok ok, aside from this, do you enjoy other things in life?",
    "I do a lot of sports, mostly gym. I love music of all genres — from jazz to hardstyle, metal, classical, and indie pop. I also play and compose music.\nArt in general is a really important part of my life."
  ],
  [
    "What are your strengths?",
    "I'm curious, I need to understand how things work, and I'm a fast learner."
  ],
  [
    "Thank you, we will reach out to you later.",
    "Thank you too! Here's my email if you need to contact me: romainolivier42@gmail.com"
  ]
];

</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="mockup-window bg-base-100 border border-base-300 w-4/5 h-4/5 p-6 overflow-x-hidden overflow-y-scroll">
      <div class="grid gap-2">
        <div v-for="info of infos" :key="info[0]">
          <ChatMessage>{{ info[0] }}</ChatMessage>
          <ChatMessage :is-recieved="false">{{ info[1] }}</ChatMessage>
        </div>
      </div>
    </div>
  </div>
</template>
