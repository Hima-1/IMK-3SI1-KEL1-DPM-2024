<template>
  <div class="bg-[#EBF3F5] min-h-full flex items-center justify-center">
    <div class="wrapper flex flex-col items-center justify-center" style="width: 1127px; height: auto;">
      <div>
        <h1 class="struktur-bagan bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold mt-8 p-5 text-[23px] md:text-[33px]">
          Struktur Organisasi
        </h1>
      </div>
      <div class="mt-6 p-4">
        <img src="@/assets/images/struktur_bagan.webp" class="hidden md:block" alt="">
        <img src="@/assets/images/struktur_bagan_responsive.webp" class="block md:hidden" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StrukturBagan'
};
</script>

<style scoped>
.struktur-bagan {
  background-image: url('@/assets/icon/visi_misi.svg');
}
</style>