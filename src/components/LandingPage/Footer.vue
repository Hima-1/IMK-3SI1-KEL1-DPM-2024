<template>
  <div class="bg-[#1A5796] w-full flex-shrink-0 flex flex-col py-5 px-4 md:py-10 md:px-16">
    <!-- Dewan Perwakilan Mahasiswa -->
    <h2 class="text-[#F2BC43] font-poppins text-[1.125rem] md:text-[45px] font-bold mb-2 md:mb-4">
      Dewan Perwakilan Mahasiswa
    </h2>
    <!-- Garis -->
    <hr class="w-full border-t border-[rgba(206,219,229,0.90)] my-4 md:mb-8" />
    <!-- Contact -->
    <h3 class="text-[#EBF3F5] font-poppins text-[1rem] md:text-[30px] font-bold mb-2 md:mb-4">
      Contact
    </h3>
    <!-- Kontak Info -->
    <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8">
      <!-- Email -->
      <div class="flex items-center md:mb-0">
        <img src="@/assets/icon/email.svg" alt="Email Icon" class="icon w-[1.125rem] h-[0.93888rem] md:w-[39.144px] md:h-[31.315px] mr-2 md:mr-4 flex-shrink-0" />
        <a href="mailto:dpm@stis.ac.id" class="link text-[#EBF3F5] underline font-poppins text-[0.9375rem] md:text-[24px] font-medium">
          dpm@stis.ac.id
        </a>
      </div>
      <!-- Website -->
      <div class="flex items-center md:mb-0">
        <img src="@/assets/icon/internet.svg" alt="Web Icon" class="icon w-[1.125rem] h-[1.125rem] md:w-[39px] md:h-[39px] mr-2 md:mr-4 flex-shrink-0" />
        <a href="https://dpm.stis.ac.id" class="link text-[#EBF3F5] underline font-poppins text-[0.9375rem] md:text-[24px] font-medium">
          dpm.stis.ac.id
        </a>
      </div>
      <!-- Instagram -->
      <div class="flex items-center md:mb-0">
        <img src="@/assets/icon/instagram.svg" alt="IG Icon" class="icon w-[1.125rem] h-[1.125rem] md:w-[38px] md:h-[38px] mr-2 md:mr-4 flex-shrink-0" />
        <a href="https://www.instagram.com/dpmpolstatstis/" class="link text-[#EBF3F5] underline font-poppins text-[0.9375rem] md:text-[24px] font-medium">
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

@media (min-width: 765px) and (max-width: 850px) {
  .icon {
    width: 0.9rem !important;
    height: 0.9rem !important;
  }
  .link {
    font-size: 0.85rem !important;
  }
}

@media (min-width: 920px) {
  .md\\:flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .md\\:mb-0 {
    margin-bottom: 0;
  }
}
</style>
