<template>
  <div class="bg-[#cddbe5] flex flex-col items-center justify-start min-h-screen pb-10 md:pb-0 px-16">
    <div class="w-full text-center mb-10">
      <h1
        class="judulpage bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold mt-8 p-5 text-[30px] lg:text-[33px]">
        Berita DPM Polstat STIS
      </h1>
    </div>

    <div>
      <div class="w-full flex flex-wrap lg:flex-nowrap justify-center gap-8 hidden md:flex">
        <section id="berita-utama" class="w-full lg:w-2/3">
          <BeritaUtama />
        </section>
        <section id="populer-list" class="w-full lg:w-1/3">
          <PopulerList />
        </section>
      </div>
      <section id="berita-lain" class="md:mb-8">
        <BeritaLain />
      </section>
      <section id="populer-small" class="mb-8 md:hidden">
        <PopulerList />
      </section>
    </div>
  </div>
</template>

<script>
import BeritaUtama from "@/components/LandingPage/Berita/BeritaUtama.vue";
import BeritaLain from "@/components/LandingPage/Berita/BeritaLain.vue";
import PopulerList from "@/components/LandingPage/Berita/PopulerList.vue";

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
