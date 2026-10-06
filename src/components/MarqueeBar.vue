<script setup>
defineProps({ items: Array, reverse: Boolean });
</script>
<template>
  <div
    class="marquee"
    :class="{ 'marquee-reverse': reverse }"
    aria-hidden="true"
  >
    <div class="marquee-track">
      <template v-for="copy in 2" :key="copy"
        ><span v-for="item in items" :key="`${copy}-${item}`"
          >{{ item }} <b>✦</b></span
        ></template
      >
    </div>
  </div>
</template>
