<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <router-view />
    <Footer />
    <scroll-to-top />
  </div>
</template>

<script>
import Navbar from "../components/Dashboard/Navigasi/Navbar.vue";
import ScrollToTop from "../components/LandingPage/ScrollToTop.vue";
import Footer from "../components/Dashboard/Navigasi/Footer.vue";

export default {
  name: 'DashboardLayout',
  components: {
    Navbar,
    Footer,
    ScrollToTop
  }
}
</script>

<style scoped>
</style>
