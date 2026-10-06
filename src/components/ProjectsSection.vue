<script setup>
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-vue-next';
defineProps({ project: Object, projectIndex: Number, projectCount: Number });
defineEmits(['previous', 'next', 'select', 'openCaseStudy']);
</script>
<template>
  <section id="projects" class="section content-section projects-section">
    <div class="section-number reveal">03 / PROJECTS</div>
    <div class="projects-head reveal">
      <div class="section-heading">
        <p class="eyebrow">SELECTED WORK</p>
        <h2>Projects<span>.</span></h2>
      </div>
      <div class="project-controls">
        <button @click="$emit('previous')"><ArrowLeft :size="17" /></button
        ><span
          >{{ project.number }} /
          {{ String(projectCount).padStart(2, '0') }}</span
        ><button @click="$emit('next')"><ArrowRight :size="17" /></button>
      </div>
    </div>
    <article class="project-card reveal">
      <div class="project-preview" :class="`visual-${project.visual}`">
        <div class="browser-bar">
          <span></span><span></span><span></span
          ><small
            >{{ project.title.toLowerCase().replaceAll(' ', '-') }}.dev</small
          >
        </div>
        <div class="mock-dashboard">
          <div class="mock-sidebar"><i v-for="n in 4" :key="n"></i></div>
          <div class="mock-content">
            <div class="mock-header"><span></span><b></b></div>
            <div class="mock-cards"><i v-for="n in 3" :key="n"></i></div>
            <div class="mock-table"><i v-for="n in 5" :key="n"></i></div>
          </div>
        </div>
      </div>
      <div class="project-detail">
        <div class="project-meta">
          <span>{{ project.category }}</span
          ><span>{{ project.year }}</span>
        </div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="stack">
          <span v-for="item in project.stack" :key="item">{{ item }}</span>
        </div>
        <div class="project-bottom">
          <strong>{{ project.number }}</strong
          ><button class="text-link" @click="$emit('openCaseStudy')">
            View case study <ArrowUpRight :size="16" />
          </button>
        </div>
      </div>
    </article>
    <div class="project-dots">
      <button
        v-for="(_, index) in projectCount"
        :key="index"
        :class="{ active: index === projectIndex }"
        @click="$emit('select', index)"
      ></button>
    </div>
  </section>
</template>
