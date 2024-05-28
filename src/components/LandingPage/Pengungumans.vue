<template>
  <div class="bg-[#ebf3f5] flex flex-col items-center justify-start min-h-screen py-20">
    <!-- Judul Pengumuman -->
    <div id="pengumuman" class="bg-[#ebf3f5] w-[1337px] h-[1091px] mt-16 mx-auto">
      <div class="flex items-center justify-center mt-8">
        <div class="bg-[#F8C147] w-[919px] h-[92px] rounded-[46px] flex items-center justify-center">
          <h1 class="text-[#1A5796] text-center font-poppins text-[50px] font-bold leading-normal">
            Pengumuman DPM Polstat STIS
          </h1>
        </div>
      </div>

      <!-- Pengumuman Dummy -->
      <div class="mt-8 space-y-8">
        <div class="pengumuman-box flex items-center justify-between p-8">
          <div class="flex items-center">
            <div class="date-circle flex items-center justify-center">
              <div class="text-center">
                <p class="date-text">27</p>
                <p class="month-text">Mei</p>
                <p class="year-text">2024</p>
              </div>
            </div>
          </div>
          <div class="flex-1 ml-8">
            <h2 class="judul-pengumuman">Pengumuman 1</h2>
            <a href="#" class="baca-selengkapnya">Baca selengkapnya</a>
          </div>
        </div>
        <div class="pengumuman-box flex items-center justify-between p-8">
          <div class="flex items-center">
            <div class="date-circle flex items-center justify-center">
              <div class="text-center">
                <p class="date-text">28</p>
                <p class="month-text">Mei</p>
                <p class="year-text">2024</p>
              </div>
            </div>
          </div>
          <div class="flex-1 ml-8">
            <h2 class="judul-pengumuman">Pengumuman 2</h2>
            <a href="#" class="baca-selengkapnya">Baca selengkapnya</a>
          </div>
        </div>
        <div class="pengumuman-box flex items-center justify-between p-8">
          <div class="flex items-center">
            <div class="date-circle flex items-center justify-center">
              <div class="text-center">
                <p class="date-text">29</p>
                <p class="month-text">Mei</p>
                <p class="year-text">2024</p>
              </div>
            </div>
          </div>
          <div class="flex-1 ml-8">
            <h2 class="judul-pengumuman">Pengumuman 3</h2>
            <a href="#" class="baca-selengkapnya">Baca selengkapnya</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DaftarPengunguman',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.pengumuman-box {
  width: 1337px;
  height: 267px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #CEDBE5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.date-circle {
  width: 183px;
  height: 183px;
  flex-shrink: 0;
  border: 6px solid #EBF3F5;
  border-radius: 50%;
}

.date-text {
  color: #1A5796;
  font-family: 'Poppins', sans-serif;
  font-size: 47px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.month-text,
.year-text {
  color: #1A5796;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.judul-pengumuman {
  width: 1017px;
  color: #1A5796;
  font-family: 'Poppins', sans-serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.baca-selengkapnya {
  color: #267DC2;
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>
