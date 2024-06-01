<template>
  <div v-for="anggota in anggotas" :key="anggota.id" class="basis-1/5 bg-[#EBF3F5] rounded-[13px] flex-shrink-0 w-[491px] h-[450px] drop-shadow-md hover:scale-105 ease-in-out duration-300">
    <!-- Bagian Atas Struktur -->
    <div class="relative w-full rounded-t-[13px]" style="background: linear-gradient(0deg, #041322 7.17%, rgba(102, 102, 102, 0) 96.17%)">
      <!-- Foto -->
      <img src="../../assets/images/berita.webp" class="w-full h-full rounded-t-[13px]" />
      <!-- Jabatan -->
      <div class="content-center bottom-0 left-0 w-full h-1/5 px-4 py-2 bg-gradient-to-t from-black to-90% rounded-b-[25px]">
        <h2 class="text-[#EBF3F5] font-poppins text-[25px] font-bold text-center leading-normal">{{ anggota.jabatan }}</h2>
      </div>
    </div>

    <!-- Bagian Bawah Struktur -->
    <div class="mt-4">
      <div class="flex-col items-center justify-center text-center">
        <!-- Nama -->
        <h4 class="text-[#15649D] font-poppins text-[20px] font-bold mb-1 px-2">{{ anggota.nama }}</h4>
        <!-- NIM -->
        <p class="text-[#000] font-poppins text-[20px] font-medium">{{ anggota.nim }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StrukturItem",
  data() {
    return {
      anggotas: [
        { id: 1, nama: "Ferlinda Novia Ardhitasari", nim: "222112057", jabatan: "JABATAN 1" },
        { id: 2, nama: "Himawan Wahid Ikhwansyah", nim: "222112094", jabatan: "JABATAN 2" },
        { id: 3, nama: "Inafianti Klaristania Rilano", nim: "222112110", jabatan: "JABATAN 3" },
        { id: 4, nama: "Irsyad Fadhil Asyraf", nim: "222112116", jabatan: "JABATAN 4" },
        { id: 5, nama: "Jihan Maisaroh", nim: "222112122", jabatan: "JABATAN 5" },
        { id: 6, nama: "Hua", nim: "222222222", jabatan: "JABATAN 6" },
      ],
    };
  },
};
</script>
