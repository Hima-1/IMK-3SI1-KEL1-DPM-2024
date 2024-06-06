<template>
  <div>
    <section id="struktur-bagan">
      <StrukturBagan />
    </section>
    <section id="struktur-list">
      <StrukturList />
    </section>
  </div>
</template>

<script>
import StrukturBagan from '../components/LandingPage/StrukturBagan.vue';
import StrukturList from '../components/LandingPage/StrukturList.vue';

export default {
  name: 'Struktur',
  components: {
    StrukturBagan,
    StrukturList
  }
}
</script>

<style scoped>

</style>