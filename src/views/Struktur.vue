<template>
  <div class="">
    <section id="struktur-bagan" class="bg-[#EBF3F5] px-2 xl:px-7 lg:max-xl:px-14">
      <StrukturBagan />
    </section>
    <section id="struktur-list" class="bg-[#cddbe5] px-2 min-[425px]:px-4">
      <StrukturList />
    </section>
  </div>
</template>

<script>
import StrukturBagan from '@/components/LandingPage/StrukturBagan.vue';
import StrukturList from '@/components/LandingPage/StrukturList.vue';

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