<template>
  <div class="bg-[#1A5796] w-full flex-shrink-0 flex flex-col py-5 px-4 md:py-10 md:px-16">
    <!-- Dewan Perwakilan Mahasiswa -->
    <h2 class="text-[#F2BC43] font-poppins text-3xl md:text-[45px] font-bold mb-2 md:mb-4">
      Dewan Perwakilan Mahasiswa
    </h2>
    <!-- Garis -->
    <hr class="w-full border-t border-[rgba(206,219,229,0.90)] my-4 md:mb-8" />
    <!-- Contact -->
    <h3 class="text-[#EBF3F5] font-poppins text-2xl md:text-[30px] font-bold mb-2 md:mb-4">
      Contact
    </h3>
    <!-- Kontak Info -->
    <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-8">
      <!-- Email -->
      <div class="flex items-center">
        <img src="@/assets/icon/email.svg" alt="Email Icon" class="w-10 h-8 mr-2 md:w-[39.144px] md:h-[31.315px] md:mr-4" />
        <a href="mailto:dpm@stis.ac.id" class="text-[#EBF3F5] font-poppins text-lg md:text-[24px] font-medium">
          dpm@stis.ac.id
        </a>
      </div>
      <!-- Website -->
      <div class="flex items-center">
        <img src="@/assets/icon/internet.svg" alt="Web Icon" class="w-10 h-10 mr-2 md:w-[39px] md:h-[39px] md:mr-4" />
        <a href="https://dpm.stis.ac.id" class="text-[#EBF3F5] font-poppins text-lg md:text-[24px] font-medium">
          dpm.stis.ac.id
        </a>
      </div>
      <!-- Instagram -->
      <div class="flex items-center">
        <img src="@/assets/icon/instagram.svg" alt="IG Icon" class="w-9 h-9 mr-2 md:w-[38px] md:h-[38px] md:mr-4" />
        <a href="https://www.instagram.com/dpmpolstatstis/" class="text-[#EBF3F5] font-poppins text-lg md:text-[24px] font-medium">
          @dpmpolstatstis
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>
