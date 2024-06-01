<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <router-view />
    <Footer />
    <scroll-to-top />
  </div>
</template>

<script>
import Navbar from "../components/Dashboard/Navbar.vue";
import ScrollToTop from "../components/LandingPage/ScrollToTop.vue";
import Footer from "../components/Dashboard/Footer.vue";

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
