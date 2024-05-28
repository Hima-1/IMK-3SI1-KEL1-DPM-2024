<template>
  <div class="bg-[#cddbe5] flex flex-col items-center justify-start min-h-screen py-20">
    <!-- Judul Galeri -->
    <div class="w-full text-center mb-16">
      <h1 class="text-[#1A5796] text-center font-poppins text-[50px] font-bold leading-normal">
        Galeri DPM Polstat STIS
      </h1>
    </div>

    <!-- Foto Dummy -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="foto-dummy"></div>
      <div class="foto-dummy"></div>
      <div class="foto-dummy"></div>
      <div class="foto-dummy"></div>
      <div class="foto-dummy"></div>
      <div class="foto-dummy"></div>
      <div class="foto-dummy"></div>
      <div class="foto-dummy"></div>
      <div class="foto-dummy"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Galeri',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.foto-dummy {
  width: 536px;
  height: 358px;
  flex-shrink: 0;
  background: url('../../assets/galeri.png') lightgray 50% / cover no-repeat;
}
</style>
