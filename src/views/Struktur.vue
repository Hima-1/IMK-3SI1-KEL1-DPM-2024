<template>
    <div class="bg-[#cddbe5] flex flex-col items-start justify-start min-h-screen py-20 px-16">
        <!-- Tombol Back -->
        <a href="#" class="flex items-center">
            <!-- Button -->
            <button class="w-12 h-12 bg-[#FAC950] text-black rounded-full flex items-center justify-center">
                <img src="../assets/icon/next.svg" class="w-6 h-6" />
            </button>
            <!-- Title -->
            <h1 class="text-[#1A5796] text-left font-poppins text-5xl font-semibold p-5 text-[30px]">
                Berita DPM Polstat STIS
            </h1>
        </a>

        <!-- Judul Berita -->
        <div class="w-full text-center mb-16">
            <h1
                class="judulpage bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold p-10 text-[35px]">
                Perpanjangan Open Recruitment Sekretaris, Bendahara, Pudmekraf, dan Tim IT DPM Periode 2023/2024
            </h1>
        </div>

        <div class="flex flex-wrap lg:flex-nowrap justify-center gap-8">
            <section id="lengkap" class="w-full lg:w-2/3">
                <BeritaLengkap />
            </section>
            <section id="populer" class="w-full lg:w-1/3">
                <PopulerList />
            </section>
        </div>
    </div>
</template>

<script>
import BeritaLengkap from "../components/LandingPage/BeritaLengkap.vue";
import PopulerList from "../components/LandingPage/PopulerList.vue";

export default {
    name: 'Struktur',
    components: {
        BeritaLengkap,
        PopulerList,
    }
}
</script>

<style scoped>
.judulpage {
    background-image: url('../assets/icon/visi_misi.svg');
}
</style>