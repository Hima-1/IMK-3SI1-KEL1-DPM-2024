<template>
  <div class="bg-[#cddbe5] flex flex-col items-center justify-start min-h-screen pt-10 pb-20">
    <!-- Judul Struktur -->
    <div class="w-full text-center mb-12">
      <h1 class="text-[#1A5796] text-center font-poppins text-[50px] font-bold leading-normal">Struktur</h1>
    </div>

    <!-- Struktur Button Group -->
    <div class="flex bg-white text-[#1A5796] mx-4 mb-12 p-4 font-medium rounded-[44px] first:rounded-tl-[44px] first:rounded-bl-[44px] last:rounded-tr-[44px] last:rounded-br-[44px] shadow-lg">
      <li v-for="item in items" class="list-none">
        <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">{{ item }}</button>
      </li>
    </div>

    <!-- Wrapper Struktur -->
    <div class="flex flex-wrap justify-center gap-8">
      <StrukturItem />
    </div>
  </div>
</template>

<script>
import StrukturItem from "./StrukturItem.vue";

export default {
  name: "StrukturList",
  components: {
    StrukturItem,
  },
  data() {
    return {
      items: ["Semua", "BPH", "Komisi I", "Komisi II", "Komisi III", "Komisi IV", "Pubmedkraf", "IT"],
    };
  },
};
</script>

<style scoped>
</style>
