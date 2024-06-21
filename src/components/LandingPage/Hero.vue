<template>
  <section class="bg-[#CAD8E3] w-full h-screen lg:h-[70vh] flex items-center">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center lg:gap-20">
        <!-- Logo DPM -->
        <div class="flex-shrink-0 lg:mx-10 mb-8 lg:mb-0">
          <img src="../../assets/images/logo_dpm.webp" alt="Logo DPM"
            class="w-[262px] h-[262px] lg:w-[300px] lg:h-[300px]" />
        </div>
        <!-- Text -->
        <div class="flex-grow text-center lg:text-left">
          <h1 class="text-[#1A5796] text-[30px] lg:text-[52.8px] font-bold font-poppins leading-tight">
            Dewan Perwakilan<br>Mahasiswa
          </h1>
          <p class="mt-4 text-[#1A5796] text-[18px] lg:text-[17.16px] font-medium font-poppins leading-snug">
            Merupakan organisasi internal kampus Politeknik<br>Statistika STIS yang menjalankan fungsi legislatif
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>