<script setup>
import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
defineProps({ project: Object });
defineEmits(['close', 'previous', 'next']);
</script>
<template>
  <div v-if="project" class="overlay" @click.self="$emit('close')">
    <article class="case-modal">
      <button class="modal-close" @click="$emit('close')">×</button>
      <p class="eyebrow">{{ project.category }} · {{ project.year }}</p>
      <h3>{{ project.title }}</h3>
      <p>{{ project.detail }}</p>
      <div class="case-stack">
        <span v-for="item in project.stack" :key="item">{{ item }}</span>
      </div>
      <div class="case-nav">
        <button @click="$emit('previous')">
          <ArrowLeft :size="16" /> Previous</button
        ><button @click="$emit('next')">Next <ArrowRight :size="16" /></button>
      </div>
    </article>
  </div>
</template>
