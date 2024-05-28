<template>
  <div class="bg-[#cddbe5] flex flex-col items-center justify-start min-h-screen py-20">
    <!-- Judul Berita -->
    <div class="w-full text-center mb-16">
      <h1 class="text-[#1A5796] text-center font-poppins text-[50px] font-bold leading-normal">
        Berita Bulanan DPM Polstat STIS
      </h1>
    </div>

    <!-- Wrapper Berita -->
    <div class="flex flex-wrap justify-center gap-8">
      <div class="berita-item bg-[#EBF3F5] rounded-[12px] flex-shrink-0 w-[491px] h-[619px] p-4">
        <!-- Bagian Atas Berita -->
        <div class="w-full h-[376.689px] rounded-t-[13px] bg-gradient-to-t from-[#041322] via-transparent to-transparent relative">
          <!-- Foto Berita -->
          <div class="w-full h-full rounded-t-[13px] bg-cover bg-no-repeat bg-center" style="background-image: url('../../assets/berita.png');"></div>
          <!-- Judul Foto -->
          <div class="absolute bottom-0 left-0 w-full px-4 py-2">
            <h2 class="text-[#EBF3F5] font-poppins text-[22px] font-bold leading-normal">
              Judul Foto Berita
            </h2>
          </div>
        </div>

        <!-- Bagian Bawah Berita -->
        <div class="mt-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <!-- Ikon Penulis -->
              <svg class="w-[14.183px] h-[15.697px] flex-shrink-0 stroke-current text-[#15649D]" stroke-width="2" fill="none" viewBox="0 0 24 24"></svg>
              <!-- Nama Penulis -->
              <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">Nama Penulis</p>
            </div>
            <div class="flex items-center">
              <!-- Ikon Tanggal -->
              <svg class="w-[21.938px] h-[21.938px] flex-shrink-0 fill-current text-[#15649D]" viewBox="0 0 24 24"></svg>
              <!-- Tanggal Berita -->
              <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-0">12 Januari 2024</p>
            </div>
          </div>
          <!-- Isi Berita -->
          <p class="text-[#000] font-poppins text-[19px] mb-4">
            Ini adalah contoh isi berita. Deskripsi berita akan ditampilkan di sini.
          </p>
          <!-- Tombol Selengkapnya -->
          <button class="bg-[#1A5796] text-white font-poppins text-[19px] font-medium rounded-[6px] w-[206px] h-[37px]">
            Selengkapnya
          </button>
        </div>
      </div>

      <!-- Duplicate the above berita-item for more news items -->
      <div class="berita-item bg-[#EBF3F5] rounded-[12px] flex-shrink-0 w-[491px] h-[619px] p-4">
        <!-- Bagian Atas Berita -->
        <div class="w-full h-[376.689px] rounded-t-[13px] bg-gradient-to-t from-[#041322] via-transparent to-transparent relative">
          <!-- Foto Berita -->
          <div class="w-full h-full rounded-t-[13px] bg-cover bg-no-repeat bg-center" style="background-image: url('../../assets/berita.png');"></div>
          <!-- Judul Foto -->
          <div class="absolute bottom-0 left-0 w-full px-4 py-2">
            <h2 class="text-[#EBF3F5] font-poppins text-[22px] font-bold leading-normal">
              Judul Foto Berita
            </h2>
          </div>
        </div>

        <!-- Bagian Bawah Berita -->
        <div class="mt-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <!-- Ikon Penulis -->
              <svg class="w-[14.183px] h-[15.697px] flex-shrink-0 stroke-current text-[#15649D]" stroke-width="2" fill="none" viewBox="0 0 24 24"></svg>
              <!-- Nama Penulis -->
              <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">Nama Penulis</p>
            </div>
            <div class="flex items-center">
              <!-- Ikon Tanggal -->
              <svg class="w-[21.938px] h-[21.938px] flex-shrink-0 fill-current text-[#15649D]" viewBox="0 0 24 24"></svg>
              <!-- Tanggal Berita -->
              <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">12 Januari 2024</p>
            </div>
          </div>
          <!-- Isi Berita -->
          <p class="text-[#000] font-poppins text-[19px] mb-4">
            Ini adalah contoh isi berita. Deskripsi berita akan ditampilkan di sini.
          </p>
          <!-- Tombol Selengkapnya -->
          <button class="bg-[#1A5796] text-white font-poppins text-[19px] font-medium rounded-[6px] w-[206px] h-[37px]">
            Selengkapnya
          </button>
        </div>
      </div>

      <div class="berita-item bg-[#EBF3F5] rounded-[12px] flex-shrink-0 w-[491px] h-[619px] p-4">
        <!-- Bagian Atas Berita -->
        <div class="w-full h-[376.689px] rounded-t-[13px] bg-gradient-to-t from-[#041322] via-transparent to-transparent relative">
          <!-- Foto Berita -->
          <div class="w-full h-full rounded-t-[13px] bg-cover bg-no-repeat bg-center" style="background-image: url('../../assets/berita.png');"></div>
          <!-- Judul Foto -->
          <div class="absolute bottom-0 left-0 w-full px-4 py-2">
            <h2 class="text-[#EBF3F5] font-poppins text-[22px] font-bold leading-normal">
              Judul Foto Berita
            </h2>
          </div>
        </div>

        <!-- Bagian Bawah Berita -->
        <div class="mt-4">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <!-- Ikon Penulis -->
              <svg class="w-[14.183px] h-[15.697px] flex-shrink-0 stroke-current text-[#15649D]" stroke-width="2" fill="none" viewBox="0 0 24 24"></svg>
              <!-- Nama Penulis -->
              <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">Nama Penulis</p>
            </div>
            <div class="flex items-center">
              <!-- Ikon Tanggal -->
              <svg class="w-[21.938px] h-[21.938px] flex-shrink-0 fill-current text-[#15649D]" viewBox="0 0 24 24"></svg>
              <!-- Tanggal Berita -->
              <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">12 Januari 2024</p>
            </div>
          </div>
          <!-- Isi Berita -->
          <p class="text-[#000] font-poppins text-[19px] mb-4">
            Ini adalah contoh isi berita. Deskripsi berita akan ditampilkan di sini.
          </p>
          <!-- Tombol Selengkapnya -->
          <button class="bg-[#1A5796] text-white font-poppins text-[19px] font-medium rounded-[6px] w-[206px] h-[37px]">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>

    <!-- Wrapper Numbering -->
    <div class="flex justify-center mt-8">
      <div class="flex space-x-4">
        <div class="w-[154.096px] h-[55px] flex items-center justify-center">
          <p class="text-[#1A5796] font-poppins text-[30px] font-bold">1</p>
        </div>
        <div class="w-[55px] h-[55px] bg-[#EEA449] rounded-full flex items-center justify-center">
          <p class="text-[#1A5796] font-poppins text-[30px] font-bold">2</p>
        </div>
        <div class="w-[154.096px] h-[55px] flex items-center justify-center">
          <p class="text-[#1A5796] font-poppins text-[30px] font-bold">3</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Berita',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.berita-item {
  width: 491px;
  height: 619px;
  background: #EBF3F5;
  border-radius: 12px;
  flex-shrink: 0;
}

.berita-atas {
  width: 100%;
  height: 376.689px;
  background: linear-gradient(0deg, #041322 7.17%, rgba(102, 102, 102, 0.00) 96.17%);
  border-radius: 13px 13px 0px 0px;
  position: relative;
}

.foto-berita {
  width: 100%;
  height: 100%;
  background: url('../../assets/berita.png') lightgray 50% / cover no-repeat;
  border-radius: 13px 13px 0px 0px;
}

.judul-berita {
  width: 416.875px;
  color: #EBF3F5;
  font-family: 'Poppins', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
