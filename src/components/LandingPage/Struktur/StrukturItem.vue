<template>
  <div :class="`basis-3/4 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5`" class="mx-4 bg-[#EBF3F5] rounded-3xl drop-shadow-md hover:scale-105 ease-in-out duration-300">
    <!-- Bagian Atas Struktur -->
    <div class="relative rounded-t-[13px] " style="background: linear-gradient(0deg, #041322 7.17%, rgba(102, 102, 102, 0) 96.17%)">
      <!-- Foto -->
      <img :src="`/mahasiswa/${anggota.foto}`" class=" object-cover w-full h-[252px] rounded-t-[13px]" />
      <!-- Jabatan -->
      <div class="absolute flex items-end justify-center bottom-0 left-0 w-full h-1/2 py-3 bg-gradient-to-t from-black to-90%">
        <h2 class="text-[#EBF3F5] font-poppins text-[16px] min-[375px]:text-[23px] min-[425px]:text-[27px] sm:text-[20px] font-bold text-center">{{ anggota.jabatan }}</h2>
      </div>
    </div>

    <!-- Bagian Bawah Struktur -->
    <div class="grid mt-4 mb-4">
      <div class="flex-col items-center justify-center text-center text-[14px] min-[375px]:text-[17px] lg:text-[18px]">
        <!-- Nama -->
        <h4 class="text-[#15649D] font-poppins font-bold mb-1 px-3">{{ anggota.nama }}</h4>
        <!-- NIM -->
        <p class="text-[#000] font-poppins font-medium">{{ anggota.nim }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "StrukturItem",
  props: {
    anggota: {
      type: Object,
    }
  }
};
</script>
