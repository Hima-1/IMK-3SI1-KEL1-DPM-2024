<template>
    <div class="bg-[#cddbe5] flex flex-col items-start justify-start min-h-screen py-10 px-6 md:px-12 lg:px-16">
        <!-- Tombol Back -->
        <router-link to="/berita">
            <a href="#" class="flex items-center">
                <!-- Button -->
                <button class="w-[35px] h-[35px] bg-[#FAC950] text-black rounded-full flex items-center justify-center">
                    <img src="../assets/icon/back.svg" class="w-auto h-[15px]" />
                </button>
                <!-- Title -->
                <h1 class="text-[#267DC2] text-left font-poppins text-5xl font-semibold p-5 text-[20px]">
                    Berita DPM Polstat STIS
                </h1>
            </a>
        </router-link>

        <!-- Judul Berita -->
        <div class="w-full text-center mb-5">
            <h1
                class="judulpage bg-center bg-no-repeat text-[#1A5796] text-center font-poppins text-5xl font-bold py-8 md:p-10 text-[25px]">
                Perpanjangan Open Recruitment Staff <br class="hidden lg:flex"> Ahli DPM Periode 2023/2024
            </h1>
        </div>

        <!-- Konten -->
        <div class="flex flex-wrap lg:flex-nowrap justify-center gap-8 mb-8">
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
    name: 'Selengkapnya',
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