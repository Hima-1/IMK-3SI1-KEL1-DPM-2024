<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <router-view />
    <Footer />
    <scroll-to-top />
  </div>
</template>

<script>
import Navbar from '../components/LandingPage/Navbar.vue';
import Footer from '../components/LandingPage/Footer.vue';
import ScrollToTop from "../components/LandingPage/ScrollToTop.vue";

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
