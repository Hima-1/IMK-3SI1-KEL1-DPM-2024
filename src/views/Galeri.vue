<template>
  <div>
    <section id="galeri">
       <GaleriList />
    </section>
  </div>
</template>

<script>
import GaleriList from "@/components/LandingPage/Galeri/GaleriList.vue";

export default {
  name: 'Galeri',
  components: {
    GaleriList,
  }
}
</script>

<style scoped>
</style>
