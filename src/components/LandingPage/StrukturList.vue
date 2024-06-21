<template>
  <div class="bg-[#cddbe5] flex flex-col items-center justify-start min-h-screen pt-10 pb-20">
    <!-- Judul Struktur -->
    <div class="w-full text-center mb-12">
      <h1 class="text-[#1A5796] text-center font-poppins text-[26px] md:text-[33px] font-bold leading-normal">Susunan Pengurus</h1>
    </div>

    <!-- Struktur Button Group Dengan Layar Maksimal 1024px -->
    <div class="flex lg:hidden justify-center w-full">
      <select class="flex bg-[#EBF3F5] text-[#1A5796] text-[18px] mb-12 shadow-lg rounded-[44px] select select-md lg:select-lg border-none font-bold text-center min-[425px]:text-left min-[425px]:pl-6 max-w-xl min-[425px]:w-1/2 md:w-1/3">
        <option v-for="item in items">{{ item }}</option>
      </select>
    </div>

    <!-- Struktur Button Group -->
    <div class="hidden lg:flex bg-[#EBF3F5] text-[#1A5796] text-[15px] xl:text-[18px] mx-4 mb-12 p-4 font-medium rounded-[44px] first:rounded-tl-[44px] first:rounded-bl-[44px] last:rounded-tr-[44px] last:rounded-br-[44px] shadow-lg">
      <li v-for="item in items" class="list-none">
        <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">{{ item }}</button>
      </li>
    </div>

    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center max-lg:gap-x-2 gap-y-8">
        <StrukturItem />
      </div>
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
