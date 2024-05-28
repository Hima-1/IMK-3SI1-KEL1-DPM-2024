<template>
  <div class="footer bg-[#1A5796] w-full h-[444px] flex-shrink-0 flex flex-col py-10 px-16">
    <!-- Dewan Perwakilan Mahasiswa -->
    <h2 class="text-[#F2BC43] font-poppins text-[45px] font-bold mb-4">
      Dewan Perwakilan Mahasiswa
    </h2>
    <!-- Garis -->
    <hr class="w-full border-t border-[rgba(206,219,229,0.90)] mb-8" />
    <!-- Contact -->
    <h3 class="text-[#EBF3F5] font-poppins text-[30px] font-bold mb-4">
      Contact
    </h3>
    <!-- Kontak Info -->
    <div class="flex space-x-16">
      <!-- Email -->
      <div class="flex items-center">
        <img src="../../assets/email-icon.png" alt="Email Icon" class="w-[39.144px] h-[31.315px] mr-4 fill-current text-[#EBF3F5]" />
        <a href="mailto:dpm@stis.ac.id" class="text-[#EBF3F5] font-poppins text-[24px] font-medium underline">
          dpm@stis.ac.id
        </a>
      </div>
      <!-- Website -->
      <div class="flex items-center">
        <img src="../../assets/web-icon.png" alt="Web Icon" class="w-[39px] h-[39px] mr-4" />
        <a href="https://dpm.stis.ac.id" class="text-[#EBF3F5] font-poppins text-[24px] font-medium underline">
          dpm.stis.ac.id
        </a>
      </div>
      <!-- Instagram -->
      <div class="flex items-center">
        <img src="../../assets/ig-icon.png" alt="IG Icon" class="w-[38px] h-[38px] mr-4 fill-current text-[#EBF3F5]" />
        <span class="text-[#EBF3F5] font-poppins text-[24px] font-medium">
          @dpmpolstatstis/
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.footer {
  width: 1920px;
  height: 444px;
}
</style>
