<template>
  <section class="bg-[#CAD8E3] h-screen flex items-center pt-[90px]">
    <div class="container mx-auto px-6 text-center md:text-left">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Logo DPM -->
        <div class="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img src="../assets/logo_dpm.jpg" alt="Logo DPM" class="w-[481px] h-[480px] rounded shadow-lg" />
        </div>
        <!-- Text Section -->
        <div class="md:w-1/2">
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.shadow-custom {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
}
</style>
