<template>
  <div v-for="anggota in anggotas" :key="anggota.id" class="grid grid-flow-row grid-auto-rows md:grid-rows-auto mx-7 bg-[#EBF3F5] rounded-3xl drop-shadow-md hover:scale-105 ease-in-out duration-300">
    <!-- Bagian Atas Struktur -->
    <div class="relative rounded-t-[13px]" style="background: linear-gradient(0deg, #041322 7.17%, rgba(102, 102, 102, 0) 96.17%)">
      <!-- Foto -->
      <img :src="anggota.foto" class="object-contain rounded-t-[13px]" />
      <!-- Jabatan -->
      <div class="absolute content-end bottom-0 left-0 w-full h-1/2 py-3 bg-gradient-to-t from-black to-90%">
        <h2 class="text-[#EBF3F5] font-poppins text-[16px] lg:text-[20px] font-bold text-center">{{ anggota.jabatan }}</h2>
      </div>
    </div>

    <!-- Bagian Bawah Struktur -->
    <div class="grid mt-4 mb-4">
      <div class="flex-col items-center justify-center text-center text-[14px] lg:text-[18px]">
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
  data() {
    return {
      anggotas: [
        { id: 1, nama: "Saifullah Fatah", nim: "212011313", foto: "src/assets/images/ketua.webp", jabatan: "KETUA DPM", divisi: "BPH" },
        { id: 2, nama: "Faqih Indra Lesmana", nim: "222112039", foto: "src/assets/images/waketu.webp", jabatan: "WAKIL KETUA DPM", divisi: "BPH" },
        { id: 3, nama: "Adinda Batrisyibazla", nim: "212212444", foto: "src/assets/images/bend1.webp", jabatan: "BENDAHARA I", divisi: "BPH" },
        { id: 4, nama: "Aurelia Dini Syafnadiva", nim: "212313007", foto: "src/assets/images/bend2.webp", jabatan: "BENDAHARA II", divisi: "BPH" },
        { id: 5, nama: "Masna Novita Rahmaniar", nim: "222011296", foto: "src/assets/images/sekre1.webp", jabatan: "SEKRETARIS I", divisi: "BPH" },
        { id: 6, nama: "Yohana Herdianly Br Nainggolan", nim: "112313432", foto: "src/assets/images/sekre2.webp", jabatan: "SEKRETARIS II", divisi: "BPH" },
      ],
    };
  },
};
</script>
