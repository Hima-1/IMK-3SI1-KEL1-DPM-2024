<template>
  <div>
    <section id="berita-utama">
      <BeritaUtama />
    </section>
    <section id="berita-lain">
      <BeritaLain />
    </section>
  </div>
</template>

<script>
import BeritaUtama from "../components/LandingPage/BeritaUtama.vue";
import BeritaLain from "../components/LandingPage/BeritaLain.vue";

export default {
  name: 'Berita',
  components: {
    BeritaUtama,
    BeritaLain
  }
}
</script>

<style scoped>
</style>
