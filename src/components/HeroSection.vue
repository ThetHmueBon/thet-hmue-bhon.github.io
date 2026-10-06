<script setup>
import { ArrowDown, Github, Instagram, Linkedin, Mail } from 'lucide-vue-next';
defineEmits(['navigate']);
</script>
<template>
  <section id="home" class="hero section">
    <div class="constellation c-one"><i v-for="n in 5" :key="n"></i></div>
    <div class="constellation c-two"><i v-for="n in 4" :key="n"></i></div>
    <div class="hero-grid"></div>
    <div class="hero-copy">
      <p class="eyebrow">HELLO THERE! <span>✦</span></p>
      <h1>I’m <strong>Thet Hmue Bhon</strong></h1>
      <p class="role"><span>FULL - STACK</span> SOFTWARE ENGINEER</p>
      <p class="hero-intro">
        I build clean, maintainable software with thoughtful architecture, <br> reliable systems, and a focus on continuous improvement.  
      </p>
<div class="socials">
  <a
    href="https://github.com/ThetHmueBon"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <Github :size="18" />
  </a>

  <a
    href="https://www.linkedin.com/in/thet-hmue-bhon-845b8a282/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <Linkedin :size="18" />
  </a>

  <a
    href="mailto:thethmuebgon37@gmail.com"
    aria-label="Email"
  >
    <Mail :size="18" />
  </a>
</div>
    </div>
    <div class="hero-orbit" aria-hidden="true">
      <div class="hero-orbit-ring ring-a"></div>
      <div class="hero-orbit-ring ring-b"></div>
      <!-- <div class="hero-orbit-core">THB</div> -->
    </div>
    <button class="scroll-cue" @click="$emit('navigate', 'about')">
      <span>SCROLL TO EXPLORE</span><ArrowDown :size="15" />
    </button>
    <div class="hero-location">
  <span>TECH STACK</span>
  <strong>VUE · JAVA · SPRING BOOT</strong>
</div>
  </section>
</template>
