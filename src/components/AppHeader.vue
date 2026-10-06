<script setup>
import { Command, Moon, Sun } from 'lucide-vue-next';
defineProps({
  dark: Boolean,
  menuOpen: Boolean,
  sections: Array,
  activeSection: String,
});
defineEmits(['update:dark', 'update:menuOpen', 'navigate', 'openCommand']);
</script>
<template>
  <header class="navbar">
    <button class="brand" @click="$emit('navigate', 'home')">
      <span class="brand-symbol">TH</span><span>Portfolio</span>
    </button>
    <nav class="nav-links">
      <button
        v-for="section in sections"
        :key="section"
        :class="{ active: activeSection === section }"
        @click="$emit('navigate', section)"
      >
        {{ section }}
      </button>
    </nav>
    <div class="nav-tools">
      <button class="command-hint" @click="$emit('openCommand')">
        <Command :size="14" /> K
      </button>
      <!-- <button
        class="theme-toggle"
        @click="$emit('update:dark', !dark)"
        :aria-label="dark ? 'Use light mode' : 'Use dark mode'"
      >
        <Sun v-if="dark" :size="17" /><Moon v-else :size="17" />
      </button> -->
      <button
        class="mobile-toggle"
        @click="$emit('update:menuOpen', !menuOpen)"
      >
        <span></span><span></span>
      </button>
    </div>
  </header>
  <div v-if="menuOpen" class="mobile-menu">
    <button
      v-for="section in sections"
      :key="section"
      @click="$emit('navigate', section)"
    >
      {{ section }}
    </button>
  </div>
</template>
