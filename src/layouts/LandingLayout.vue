<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <router-view />
    <Footer />
    <scroll-to-top />
  </div>
</template>

<script>
import Navbar from '@/components/LandingPage/Navigasi/Navbar.vue';
import Footer from '@/components/LandingPage/Navigasi/Footer.vue';
import ScrollToTop from "@/components/LandingPage/Navigasi/ScrollToTop.vue";

export default {
  name: 'LandingLayout',
  components: {
    Navbar,
    Footer,
    ScrollToTop
  }
}
</script>

<style scoped>
</style>
