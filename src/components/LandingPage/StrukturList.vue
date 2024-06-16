<template>
  <div class="bg-[#cddbe5] flex flex-col items-center justify-start min-h-screen pt-10 pb-20">
    <!-- Judul Struktur -->
    <div class="w-full text-center mb-12">
      <h1 class="text-[#1A5796] text-center font-poppins text-[26px] md:text-[50px] font-bold leading-normal">Susunan Pengurus</h1>
    </div>

    <!-- Struktur Button Group Dengan Layar Maksimal 1024px -->
    <select class="flex lg:hidden bg-white text-[#1A5796] text-[18px] mb-12 shadow-lg rounded-[44px] select select-md border-none font-bold text-center max-w-xl">
      <option v-for="item in items">{{ item }}</option>
    </select>

    <!-- Struktur Button Group -->
    <div class="hidden lg:flex bg-white text-[#1A5796] text-[18px] mx-4 mb-12 p-4 font-medium rounded-[44px] first:rounded-tl-[44px] first:rounded-bl-[44px] last:rounded-tr-[44px] last:rounded-br-[44px] shadow-lg">
      <li v-for="item in items" class="list-none">
        <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">{{ item }}</button>
      </li>
    </div>

    <!-- Wrapper Struktur -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 grid-auto-rows justify-center gap-y-8">
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

<style scoped></style>
