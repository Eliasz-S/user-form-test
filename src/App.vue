<template>
  <Header />
  <div class="wrapper">
    <RouterView />
  </div>
  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/UI/HeaderComponent.vue'
import Footer from '@/components/UI/FooterComponent.vue'
</script>

<style scoped></style>
