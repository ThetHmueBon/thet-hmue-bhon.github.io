<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import MarqueeBar from './components/MarqueeBar.vue';
import AboutSection from './components/AboutSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
import AppFooter from './components/AppFooter.vue';
import CommandPalette from './components/CommandPalette.vue';
import ProjectModal from './components/ProjectModal.vue';
import {
  marqueeItems,
  orbitSkills,
  projects,
  sections,
  skills,
} from './data/portfolio';

gsap.registerPlugin(ScrollToPlugin);

const dark = ref(false);
const menuOpen = ref(false);
const commandOpen = ref(false);
const activeSection = ref('home');
const projectIndex = ref(0);
const selectedSkill = ref('Frontend');
const selectedProject = ref(null);
const sent = ref(false);
const cursorX = ref(-100);
const cursorY = ref(-100);
const form = ref({ name: '', email: '', message: '' });

const currentProject = computed(() => projects[projectIndex.value]);
const currentSkills = computed(() => skills[selectedSkill.value]);
const currentOrbitSkills = computed(() => {
  const items = orbitSkills[selectedSkill.value] || []
  const count = items.length

  return items.map((item, index) => {
    const angle = (360 / count) * index - 90
    const radius = 44

    const x = 50 + Math.cos((angle * Math.PI) / 180) * radius
    const y = 50 + Math.sin((angle * Math.PI) / 180) * radius

    return {
      ...item,
      x,
      y,
    }
  })
})

function goTo(id) {
  menuOpen.value = false;
  commandOpen.value = false;
  gsap.to(window, {
    duration: 0.9,
    scrollTo: { y: `#${id}`, offsetY: 0 },
    ease: 'power3.out',
  });
}
function nextProject() {
  projectIndex.value = (projectIndex.value + 1) % projects.length;
}
function previousProject() {
  projectIndex.value =
    (projectIndex.value - 1 + projects.length) % projects.length;
}
function submitForm() {
  if (!form.value.name || !form.value.email || !form.value.message) return;
  sent.value = true;
  setTimeout(() => {
    sent.value = false;
    form.value = { name: '', email: '', message: '' };
  }, 3500);
}
function handleKeydown(event) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    commandOpen.value = !commandOpen.value;
  }
  if (event.key === 'Escape') {
    commandOpen.value = false;
    selectedProject.value = null;
    menuOpen.value = false;
  }
  if (selectedProject.value && event.key === 'ArrowRight') nextProject();
  if (selectedProject.value && event.key === 'ArrowLeft') previousProject();
}
function handleMouse(event) {
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
}
function handleScroll() {
  const marker = window.scrollY + window.innerHeight * 0.35;
  for (const id of sections) {
    const element = document.getElementById(id);
    if (
      element &&
      marker >= element.offsetTop &&
      marker < element.offsetTop + element.offsetHeight
    ) {
      activeSection.value = id;
      break;
    }
  }
}
let observer;
onMounted(async () => {
  window.addEventListener('keydown', handleKeydown);
  window.addEventListener('mousemove', handleMouse);
  window.addEventListener('scroll', handleScroll, { passive: true });
  await nextTick();
  gsap.from('.hero-copy > *', {
    y: 35,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: 'power3.out',
  });
  observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 },
  );
  document
    .querySelectorAll('.reveal')
    .forEach((element) => observer.observe(element));
});
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
  window.removeEventListener('mousemove', handleMouse);
  window.removeEventListener('scroll', handleScroll);
  observer?.disconnect();
});
</script>

<template>
  <div class="app" :class="{ dark }">
    <div class="grain"></div>
    <div
      class="cursor-glow"
      :style="{ left: `${cursorX}px`, top: `${cursorY}px` }"
    ></div>
    <AppHeader
      v-model:dark="dark"
      v-model:menu-open="menuOpen"
      :sections="sections"
      :active-section="activeSection"
      @navigate="goTo"
      @open-command="commandOpen = true"
    />
    <main>
      <HeroSection @navigate="goTo" />
      <MarqueeBar :items="marqueeItems" />
      <AboutSection />
      <SkillsSection
        v-model:selected-skill="selectedSkill"
        :skills="skills"
        :current-skills="currentSkills"
        :orbit-skills="currentOrbitSkills"
      />
      <MarqueeBar :items="marqueeItems" reverse />
      <ProjectsSection
        :project="currentProject"
        :project-index="projectIndex"
        :project-count="projects.length"
        @previous="previousProject"
        @next="nextProject"
        @select="projectIndex = $event"
        @open-case-study="selectedProject = currentProject"
      />
      <ContactSection v-model:form="form" :sent="sent" @submit="submitForm" />
    </main>
    <AppFooter />
    <CommandPalette
      :open="commandOpen"
      :sections="sections"
      @close="commandOpen = false"
      @navigate="goTo"
    />
    <ProjectModal
      :project="selectedProject"
      @close="selectedProject = null"
      @previous="previousProject"
      @next="nextProject"
    />
  </div>
</template>
