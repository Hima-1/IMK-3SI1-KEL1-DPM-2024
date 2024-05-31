<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <section id="home">
      <Hero />
    </section>
    <section id="visi-misi">
      <VisiMisi />
    </section>
    <section id="pengumuman">
      <DaftarPengumuman />
    </section>
    <section id="galeri">
      <DaftarGaleri />
    </section>
    <section id="berita">
      <DaftarBerita />
    </section>
    <section id="login">
      <!-- Log In section or component -->
    </section>
    <Footer />
    <ScrollToTop />
  </div>
</template>

<script>
import Navbar from '../components/LandingPage/Navbar.vue';
import Hero from '../components/LandingPage/Hero.vue';
import VisiMisi from '../components/LandingPage/VisiMisi.vue';
import DaftarGaleri from "../components/LandingPage/GaleriList.vue";
import DaftarBerita from "../components/LandingPage/BeritaList.vue";
import Footer from "../components/LandingPage/Footer.vue";
import ScrollToTop from "../components/LandingPage/ScrollToTop.vue";

export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Hero,
    VisiMisi,
    DaftarPengumuman,
    DaftarGaleri,
    DaftarBerita,
    Footer,
    ScrollToTop,
  }
}
</script>

<style scoped>
</style>
