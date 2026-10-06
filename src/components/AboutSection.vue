<script setup>
import { ArrowUpRight } from 'lucide-vue-next';
</script>
<template>
  <section id="about" class="section content-section">
    <div class="section-number reveal">01 / ABOUT</div>
    <div class="about-layout">
      <div class="section-heading reveal">
        <p class="eyebrow">A LITTLE ABOUT ME</p>
  <div class="about-photo">
    <div class="photo-frame">
<img src="/profile.JPG" alt="Thet Hmue Bhon" />
    </div>

  </div>
      </div>
      <div class="about-main reveal">
        
          <div class="about-stats">
            <div class="stat-card">
              <strong>2+</strong>
              <span>YEARS EXP.</span>
            </div>

            <div class="stat-card">
              <strong>10+</strong>
              <span>PROJECTS</span>
            </div>
          </div>
        <div class="about-copy">
          <p class="lead">
            I’m a software engineer focused on building reliable and maintainable web applications. 
          </p>
          <p>
            I work across frontend and backend development, specializing in Vue 3, Java, Spring Boot, and practical API design. 
            I focus on writing clean, maintainable code and building practical solutions that are reliable and scalable. 
            I’m always looking for ways to simplify software, improve quality, and continuously grow as an engineer.

            
          </p>
          <div class="about-stats">
            <div><span>ROLE</span><strong>Full Stack Engineer</strong></div>
            <div>
              <span>APPROACH</span><strong>Learn · Build · Improve</strong>
            </div>
          </div>
          <a class="button-primary" href="/public/Thet-Hmue-Bhon-CV.png" download
            >Download CV <ArrowUpRight :size="15"
          /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.about-photo {
  margin-top: 2rem;
}

.photo-frame {
  position: relative;
  width: 250px;
  height: 280px;
  padding: 6px;
  border: 1px solid var(--border);
  border-radius: 20px;
  box-sizing: border-box;
}

.photo-frame img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 14px;
}
/* .photo-frame {
  position: relative;
  width: 220px;
  height: 280px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 20px;
}

.photo-frame img {
  width: 100%;
  height: 80%;
  object-fit: cover;
  display: block;
} */
</style>