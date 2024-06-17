<template>
  <div class="bg-[#EBF3F5] min-h-full flex items-center justify-center py-10">
    <div class="wrapper flex flex-col items-center justify-center" style="width: 1127px; height: auto;">
      <div>
        <h1 class="struktur-bagan bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold p-5 text-[30px] md:text-[50px]">
          Struktur Organisasi
        </h1>
      </div>
      <div class="mt-8 p-4">
        <img src="@/assets/images/struktur_bagan.webp" class="hidden sm:block" alt="">
        <img src="@/assets/images/struktur_bagan_responsive.webp" class="md:hidden" alt="">
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