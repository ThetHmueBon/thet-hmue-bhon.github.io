<script setup>
defineProps({
  selectedSkill: String,
  skills: Object,
  currentSkills: Array,
  orbitSkills: Array,
});
defineEmits(['update:selectedSkill']);
</script>
<template>
  <section id="skills" class="section content-section skills-section">
    <div class="section-number reveal">02 / SKILLS</div>
    <div class="skills-top">
      <div class="section-heading reveal">
        <p class="eyebrow">MY TECHNICAL STACK</p>
        <h2>Skills<span>.</span></h2>
        <div class="skill-category-tabs">
          <button
            v-for="(_, category) in skills"
            :key="category"
            :class="{ active: selectedSkill === category }"
            @click="$emit('update:selectedSkill', category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
      <div class="orbit-board reveal">
        <div class="orbit-circle outer"></div>
        <div class="orbit-circle inner"></div>
        <div class="orbit-center">
          <small>SELECTED</small><strong>{{ selectedSkill }}</strong>
        </div>
        
        <div
          v-for="item in orbitSkills"
          :key="item.name"
          class="orbit-node"
          :style="{ left: `${item.x}%`, top: `${item.y}%` }"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="skill-list reveal">
      <div v-for="(item, index) in currentSkills" :key="item" class="skill-row">
        <span>0{{ index + 1 }}</span
        ><strong>{{ item }}</strong
        ><i></i><small>{{ selectedSkill }}</small>
      </div>
    </div>
  </section>
</template>
