<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <Hero />
    <VisiMisi />
    <DaftarPengumuman />
    <Galeri />
    <!-- Komponen lainnya -->
  </div>
</template>

<script>
import Navbar from './components/LandingPage/Navbar.vue'
import Hero from './components/LandingPage/Hero.vue'
import VisiMisi from './components/LandingPage/VisiMisi.vue'
import DaftarPengumuman from "./components/LandingPage/Pengungumans.vue";
import Pengunguman from "./components/LandingPage/Pengunguman.vue";
import Galeri from "./components/LandingPage/Galeri.vue";

export default {
  name: 'App',
  components: {
    DaftarPengumuman,
    Navbar,
    Hero,
    VisiMisi,
    DaftarPengumuman,
    Pengunguman,
    Galeri
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
}
</style>
