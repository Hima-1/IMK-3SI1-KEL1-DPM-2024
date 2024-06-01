<template>
  <div class="basis-1/5 bg-[#EBF3F5] rounded-[13px] flex-shrink-0 w-[491px] h-[430px] drop-shadow-md hover:scale-105 ease-in-out duration-300">
    <!-- Bagian Atas Struktur -->
    <div class="relative w-full rounded-t-[13px]" style="background: linear-gradient(0deg, #041322 7.17%, rgba(102, 102, 102, 0) 96.17%)">
      <!-- Foto -->
      <img src="../../assets/images/berita.webp" class="w-full h-full rounded-t-[13px]" />
      <!-- Jabatan -->
      <div class="content-center bottom-0 left-0 w-full h-1/5 px-4 py-2 bg-gradient-to-t from-black to-90% rounded-b-[25px]">
        <h2 class="text-[#EBF3F5] font-poppins text-[25px] font-bold text-center leading-normal">JABATAN</h2>
      </div>
    </div>

    <!-- Bagian Bawah Struktur -->
    <div class="mt-4">
      <div class="flex-col items-center justify-center text-center">
        <!-- Nama -->
        <h4 class="text-[#15649D] font-poppins text-[20px] font-bold mb-1">Himacad Rijifen</h4>
        <!-- NIM -->
        <p class="text-[#000] font-poppins text-[20px] font-medium">222112999</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StrukturItem",
};
</script>
