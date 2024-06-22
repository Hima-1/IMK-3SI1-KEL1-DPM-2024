<template>
  <div class="kegiatan-container max-w-xl w-full h-auto shrink-0 bg-white shadow-md rounded-md p-6 md:p-12">
    <div class="flex items-start mb-4">
      <div class="icon-container w-14 h-14 shrink-0">
        <img src="@/assets/icon/nama-kegiatan.svg" alt="Nama Kegiatan Icon" class="icon w-full h-full">
      </div>
      <div class="ml-4 md:ml-7 deskripsi">
        <h1 class="text-[#5A5C6B] text-lg md:text-xl font-semibold leading-tight" style="font-family: 'Poppins', sans-serif;">Nama Kegiatan</h1>
        <p class="text-[#6A6C7A] text-base md:text-lg font-normal leading-snug" style="font-family: 'Poppins', sans-serif;">Welcome Party Unit Kesenian 2024</p>
      </div>
    </div>
    <div class="flex items-start mb-5">
      <div class="icon-container w-14 h-14 shrink-0">
        <img src="@/assets/icon/penyelenggara.svg" alt="Penyelenggara Icon" class="icon w-full h-full">
      </div>
      <div class="ml-4 md:ml-7 deskripsi">
        <h1 class="text-[#5A5C6B] text-lg md:text-xl font-semibold leading-tight" style="font-family: 'Poppins', sans-serif;">Penyelenggara</h1>
        <p class="text-[#6A6C7A] text-base md:text-lg font-normal leading-snug" style="font-family: 'Poppins', sans-serif;">Unit Kesenian</p>
      </div>
    </div>
    <div class="flex items-start mb-5">
      <div class="icon-container w-14 h-14 shrink-0">
        <img src="@/assets/icon/jenis-kegiatan.svg" alt="Jenis Kegiatan Icon" class="icon w-full h-full">
      </div>
      <div class="ml-4 md:ml-7 deskripsi">
        <h1 class="text-[#5A5C6B] text-lg md:text-xl font-semibold leading-tight" style="font-family: 'Poppins', sans-serif;">Jenis Kegiatan</h1>
        <p class="text-[#6A6C7A] text-base md:text-lg font-normal leading-snug" style="font-family: 'Poppins', sans-serif;">Offline</p>
      </div>
    </div>
    <div class="flex items-start mb-5">
      <div class="icon-container w-14 h-14 shrink-0">
        <img src="@/assets/icon/pelaksanaan.svg" alt="Pelaksanaan Icon" class="icon w-full h-full">
      </div>
      <div class="ml-4 md:ml-7 deskripsi">
        <h1 class="text-[#5A5C6B] text-lg md:text-xl font-semibold leading-tight" style="font-family: 'Poppins', sans-serif;">Pelaksanaan</h1>
        <p class="text-[#6A6C7A] text-base md:text-lg font-normal leading-snug" style="font-family: 'Poppins', sans-serif;">9 Desember 2021</p>
      </div>
    </div>
    <div class="flex items-start">
      <div class="icon-container w-14 h-14 shrink-0">
        <img src="@/assets/icon/target-peserta.svg" alt="Target Peserta Icon" class="icon w-full h-full">
      </div>
      <div class="ml-4 md:ml-7 deskripsi">
        <h1 class="text-[#5A5C6B] text-lg md:text-xl font-semibold leading-tight" style="font-family: 'Poppins', sans-serif;">Target Peserta</h1>
        <p class="text-[#6A6C7A] text-base md:text-lg font-normal leading-snug" style="font-family: 'Poppins', sans-serif;">Mahasiswa Politeknik Statistika STIS</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kegiatan'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.kegiatan-container {
  width: 100%;
  max-width: 29.8125rem;
  height: auto;
  flex-shrink: 0;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.4375rem;
  padding: 1.5rem;
}

.icon-container {
  width: 3.5rem;
  height: 3.5rem;
}

.icon {
  width: 100%;
  height: 100%;
}

@media (min-width: 1440px) {
  .kegiatan-container {
    width: 29.8125rem;
    height: 43.5rem;
    padding: 3.19rem;
  }

  .icon-container {
    width: 2.75rem;
    height: 2.75rem;
  }

  h1 {
    font-size: 1.5625rem;
  }

  p {
    font-size: 1.4375rem;
  }

  .flex.items-start.mb-4,
  .flex.items-start.mb-5 {
    margin-bottom: 3.5rem;
  }
}

@media (max-width: 1280px) {
  .kegiatan-container {
    padding: 2rem;
  }
  .icon-container {
    width: 1.5rem;
    height: 2rem;
    flex-shrink: 0;
  }

  .icon {
    width: 1.5rem;
    height: 2rem;
  }

  h1 {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }

  .deskripsi {
    margin-left: 1.5rem;
  }
}

@media (max-width: 1024px) {
  .icon-container {
    width: 1.75rem;
    height: 1.75rem;
    flex-shrink: 0;
  }

  .icon {
    width: 1.75rem;
    height: 1.75rem;
  }

  h1 {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }

  .deskripsi {
    margin-left: 2rem;
  }
}

@media (max-width: 768px) {
  .kegiatan-container{
    margin-bottom: 1rem;
  }
}
</style>
