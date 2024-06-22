<template>
  <div class="bg-[#EBF3F5] rounded-[12px] flex-shrink-0 w-[320px] md:w-[350px] h-auto flex flex-col">
    <!-- Bagian Atas Berita -->
    <div class="relative w-full h-[250px] rounded-t-[13px]"
      style="background: linear-gradient(0deg, #041322 7.17%, rgba(102, 102, 102, 0.00) 96.17%);">
      <!-- Foto Berita -->
      <img src="@/assets/images/berita.webp" class="w-full h-full rounded-t-[13px]" />
      <!-- Judul Foto -->
      <div class="absolute bottom-0 left-0 w-full px-5 py-2 bg-[#041322B3] rounded-b-[13px]">
        <h2 class="text-[#EBF3F5] font-poppins text-[15px] font-bold leading-normal">
          Perpanjangan Open Recruitment Staff Ahli DPM Periode 2023/2024
        </h2>
      </div>
    </div>

    <!-- Bagian Bawah Berita -->
    <div class="flex flex-col py-4 px-5 flex-grow">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <!-- Ikon Penulis -->
          <img src="@/assets/icon/person.svg" class="w-auto h-[16px] flex-shrink-0 text-[#15649D]" />
          <!-- Nama Penulis -->
          <p class="text-[#15649D] font-poppins text-[13px] font-medium ml-2">Pororo ajaaah</p>
        </div>
        <div class="flex items-center">
          <!-- Ikon Tanggal -->
          <img src="@/assets/icon/bluecalendar.svg" class="w-auto h-[16px] flex-shrink-0 text-[#15649D]" />
          <!-- Tanggal Berita -->
          <p class="text-[#15649D] font-poppins text-[13px] font-medium ml-2">12 Juni 2024</p>
        </div>
      </div>
      <!-- Isi Berita -->
      <p class="text-[#000] font-poppins text-[13px] mb-4 flex-grow">
        Dewan Perwakilan Mahasiswa (DPM) mengumumkan perpanjangan masa Open Recruitment untuk posisi
        Staff Ahli periode 2023/2024.
      </p>
      <!-- Tombol Selengkapnya -->
      <router-link to="/berita/selengkapnya">
        <div class="mt-1">
          <button
            class="bg-[#1A5796] text-white font-poppins text-[13px] font-medium rounded-[6px] w-[150px] h-[35px] flex items-center justify-center">
            Selengkapnya
            <img src="@/assets/icon/next.svg" class="ml-2 w-[15px] h-auto flex-shrink-0 fill-[#FFFFFF]" />
          </button>
        </div>
      </router-link>
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
  background-image: url('@/assets/icon/visi_misi.svg');
}
</style>