<template>
  <div class="bg-[#cddbe5] flex flex-col items-center justify-start min-h-screen py-20">
    <!-- Judul Berita -->
    <div class="w-full text-center mb-16">
      <h1 class="text-[#1A5796] text-center font-poppins text-[50px] font-bold leading-normal">
        Berita Bulanan DPM Polstat STIS
      </h1>
    </div>

    <!-- Wrapper Berita -->
    <div class="flex flex-wrap justify-center gap-8">
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
    </div>

    <!-- Wrapper Numbering -->
    <div class="flex justify-center mt-8">
      <div class="flex space-x-4">
        <div class="w-[154.096px] h-[55px] flex items-center justify-center">
          <p class="text-[#1A5796] font-poppins text-[30px] font-bold">1</p>
        </div>
        <div class="w-[55px] h-[55px] bg-[#EEA449] rounded-full flex items-center justify-center">
          <p class="text-[#1A5796] font-poppins text-[30px] font-bold">2</p>
        </div>
        <div class="w-[154.096px] h-[55px] flex items-center justify-center">
          <p class="text-[#1A5796] font-poppins text-[30px] font-bold">3</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BeritaItem from './BeritaItem.vue';

export default {
  name: 'BeritaList',
  components: {
    BeritaItem,
  },
};
</script>
