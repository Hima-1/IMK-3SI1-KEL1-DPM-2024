<template>
  <section class="bg-[#CAD8E3] h-[93vh] flex items-center">
    <div class="container mx-auto px-6 text-center md:text-left">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Logo DPM -->
        <div class="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img src="@/assets/images/logo_dpm.webp" alt="Logo DPM" class="w-[481px] h-[480px] rounded" />
        </div>
        <!-- Text Section -->
        <div class="md:w-7/12">
          <h1 class="text-[#1A5796] text-[80px] font-bold font-poppins leading-tight">
            Dewan Perwakilan
          </h1>
          <h1 class="text-[#1A5796] text-[80px] font-bold font-poppins leading-tight">
            Mahasiswa
          </h1>
          <p class="mt-4 text-[#1A5796] text-[26px] font-medium font-poppins leading-snug">
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