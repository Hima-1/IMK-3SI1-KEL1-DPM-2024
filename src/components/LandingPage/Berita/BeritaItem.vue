<template>
  <div class="bg-[#EBF3F5] rounded-[12px] flex-shrink-0 w-[320px] md:w-[350px] h-auto flex flex-col">
    <div class="relative w-full h-[250px] rounded-t-[13px]"
      style="background: linear-gradient(0deg, #041322 7.17%, rgba(102, 102, 102, 0.00) 96.17%);">
      <img src="../../../assets/images/berita.webp" class="w-full h-full rounded-t-[13px]" />
      <div
        class="absolute bottom-0 left-0 w-full h-full px-5 py-4 bg-gradient-to-t from-black to-90% flex items-end justify-center">
        <h2 class="text-[#EBF3F5] font-poppins text-[15px] font-bold leading-normal">
          Perpanjangan Open Recruitment Staff Ahli DPM Periode 2023/2024
        </h2>
      </div>
    </div>

    <div class="flex flex-col py-4 px-5 flex-grow">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <img src="../../../assets/icon/person.svg" class="w-auto h-[16px] flex-shrink-0 text-[#15649D]" />
          <p class="text-[#15649D] font-poppins text-[13px] font-medium ml-2">Pororo ajaaah</p>
        </div>
        <div class="flex items-center">
          <img src="../../../assets/icon/bluecalendar.svg" class="w-auto h-[16px] flex-shrink-0 text-[#15649D]" />
          <p class="text-[#15649D] font-poppins text-[13px] font-medium ml-2">12 Juni 2024</p>
        </div>
      </div>
      <p class="text-[#000] font-poppins text-[13px] mb-4 flex-grow">
        Dewan Perwakilan Mahasiswa (DPM) mengumumkan perpanjangan masa Open Recruitment untuk posisi
        Staff Ahli periode 2023/2024 ...
      </p>
      <!-- Tombol Selengkapnya -->
      <div class="mt-1">
        <router-link to="/berita/1"
          class="bg-[#1A5796] text-white font-poppins text-[13px] font-medium rounded-[6px] w-[150px] h-[35px] flex items-center justify-center">
          <button
            class="bg-[#1A5796] text-white font-poppins text-[13px] font-medium rounded-[6px] w-[150px] h-[35px] flex items-center justify-center">
            Selengkapnya
            <img src="../../../assets/icon/next.svg" class="ml-2 w-[15px] h-auto flex-shrink-0 fill-[#FFFFFF]" />
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BeritaItem',
};
</script>

<style scoped>
.judulpage {
  background-image: url('@assets/icon/visi_misi.svg');
}
</style>