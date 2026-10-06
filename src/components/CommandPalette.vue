<script setup>
import { ArrowRight } from 'lucide-vue-next';
defineProps({ open: Boolean, sections: Array });
defineEmits(['close', 'navigate']);
</script>
<template>
  <div v-if="open" class="overlay" @click.self="$emit('close')">
    <div class="command-modal">
      <div class="command-title">
        <span>QUICK NAVIGATION</span><kbd>ESC</kbd>
      </div>
      <button
        v-for="section in sections"
        :key="section"
        @click="$emit('navigate', section)"
      >
        <span>{{ section }}</span
        ><ArrowRight :size="16" />
      </button>
    </div>
  </div>
</template>
