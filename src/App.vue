<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <Hero />
    <!-- Komponen lainnya -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero
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
