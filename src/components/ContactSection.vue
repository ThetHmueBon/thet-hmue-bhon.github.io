<script setup>
import { ArrowUpRight } from 'lucide-vue-next';
defineProps({ form: Object, sent: Boolean });
defineEmits(['update:form', 'submit']);
</script>
<template>
  <section id="contact" class="section content-section contact-section">
    <div class="section-number reveal">04 / CONTACT</div>
    <div class="contact-layout">
      <div class="section-heading reveal">
        <p class="eyebrow">LET’S CONNECT</p>
        <h2>Have an idea?<br /><em>contact me</em></h2>
        <p class="contact-note">
          Interested in my work or want to connect?
Feel free to reach out. I’d be happy to hear from you.
        </p>
      </div>
      <form class="contact-form reveal" @submit.prevent="$emit('submit')">
        <p class="form-title">*Love to hear from you, —</p>
        <label
          ><span>Name</span
          ><input
            :value="form.name"
            type="text"
            placeholder="Your name"
            @input="
              $emit('update:form', { ...form, name: $event.target.value })
            " /></label
        ><label
          ><span>Email</span
          ><input
            :value="form.email"
            type="email"
            placeholder="you@example.com"
            @input="
              $emit('update:form', { ...form, email: $event.target.value })
            " /></label
        ><label
          ><span>Message</span
          ><textarea
            :value="form.message"
            rows="3"
            placeholder="Tell me about your idea..."
            @input="
              $emit('update:form', { ...form, message: $event.target.value })
            "
          ></textarea></label
        ><button class="button-primary" type="submit">
          {{ sent ? 'Message sent ✓' : 'Send message' }}
          <ArrowUpRight :size="15" />
        </button>
      </form>
    </div>
  </section>
</template>
