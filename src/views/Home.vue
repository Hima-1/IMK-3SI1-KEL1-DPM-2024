<template>
  <div>
    <section id="home">
      <Hero />
    </section>
    <section id="visi-misi">
      <VisiMisi />
    </section>
  </div>
</template>

<script>
import Hero from '@/components/LandingPage/Hero.vue';
import VisiMisi from '@/components/LandingPage/VisiMisi.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    VisiMisi,
  }
}
</script>

<style scoped>
</style>
