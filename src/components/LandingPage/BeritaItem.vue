<template>
  <div class="bg-[#EBF3F5] rounded-[12px] flex-shrink-0 w-[350px] h-[517.06px] flex flex-col">
    <!-- Bagian Atas Berita -->
    <div class="relative w-full h-[376.689px] rounded-t-[13px]" style="background: linear-gradient(0deg, #041322 7.17%, rgba(102, 102, 102, 0.00) 96.17%);">
      <!-- Foto Berita -->
      <img src="@/assets/images/berita.webp" class="w-full h-full rounded-t-[13px]" />
      <!-- Judul Foto -->
      <div class="absolute bottom-0 left-0 w-full px-4 py-2 bg-[#041322B3] rounded-b-[13px]">
        <h2 class="text-[#EBF3F5] font-poppins text-[22px] font-bold leading-normal">
          Perpanjangan Open Recruitment Sekretaris, Bendahara, Pudmekraf, dan Tim IT DPM Periode 2023/2024
        </h2>
      </div>
    </div>

    <!-- Bagian Bawah Berita -->
    <div class="flex flex-col p-4 flex-grow">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <!-- Ikon Penulis -->
          <img src="@/assets/icon/person.svg" class="w-[14.18px] h-[15.7px] flex-shrink-0 text-[#15649D]" />
          <!-- Nama Penulis -->
          <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">Nama Penulis</p>
        </div>
        <div class="flex items-center">
          <!-- Ikon Tanggal -->
          <img src="@/assets/icon/bluecalendar.svg" class="w-[19px] h-[18.52px] flex-shrink-0 text-[#15649D]" />
          <!-- Tanggal Berita -->
          <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">12 Januari 2024</p>
        </div>
      </div>
      <!-- Isi Berita -->
      <p class="text-[#000] font-poppins text-[19px] mb-4 flex-grow">
        Ini adalah contoh isi berita. Deskripsi berita akan ditampilkan di sini.
      </p>
      <!-- Tombol Selengkapnya -->
      <div class="mt-auto">
        <button class="bg-[#1A5796] text-white font-poppins text-[19px] font-medium rounded-[6px] w-[206px] h-[37px] flex items-center justify-center">
          Selengkapnya
          <img src="@/assets/icon/next.svg" class="ml-2 w-[19px] h-[12px] flex-shrink-0 fill-[#EBF3F5]" />
        </button>
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
  background-image: url('@/assets/icon/visi_misi.svg');
}
</style>