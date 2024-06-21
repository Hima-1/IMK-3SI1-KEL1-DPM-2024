<template>
  <div class="bg-[#cddbe5] flex flex-col items-start justify-start min-h-screen py-20 px-16">
    <!-- Judul -->
    <div class="w-full text-center mb-16">
      <h1
        class="judulpage bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold mt-8 p-5 text-[30px] lg:text-[33px]">
        Berita DPM Polstat STIS
      </h1>
    </div>

    <!-- Konten -->
    <div>
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-8">
        <section id="berita-utama" class="w-full lg:w-2/3">
          <BeritaUtama />
        </section>
        <section id="populer-list" class="w-full lg:w-1/3">
          <PopulerList />
        </section>
      </div>
      <section id="berita-lain">
        <BeritaLain />
      </section>
    </div>
  </div>
</template>

<script>
import BeritaUtama from "@/components/LandingPage/BeritaUtama.vue";
import BeritaLain from "@/components/LandingPage/BeritaLain.vue";
import PopulerList from "@/components/LandingPage/PopulerList.vue";

export default {
  name: 'Berita',
  components: {
    BeritaUtama,
    BeritaLain,
    PopulerList,
  }
}
</script>

<style scoped>
.judulpage {
  background-image: url('@/assets/icon/visi_misi.svg');
  margin-bottom: 25px;
}
</style>
