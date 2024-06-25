<template>
    <div class="bg-[#cddbe5] flex flex-col items-start justify-start">
        <div class="flex flex-wrap justify-center gap-8">
            <div class="bg-[#EBF3F5] rounded-[13px] flex-shrink-0 w-full h-full">
                <div class="relative w-full h-[350px] rounded-t-[13px] object-cover"
                    style="background: linear-gradient(0deg, #041322 7.17%, rgba(102, 102, 102, 0.00) 96.17%);">
                    <img src="@/assets/images/berita.webp" class="w-full h-full rounded-t-[13px] object-cover" />
                    <!-- Judul Foto -->
                    <div
                        class="absolute content-end bottom-0 left-0 w-full px-8 py-6 h-full bg-gradient-to-t from-black to-90%">
                        <h2 class="text-[#EBF3F5] font-poppins text-[20px] font-bold leading-normal">
                            Perpanjangan Open Recruitment Staff Ahli DPM Periode 2023/2024
                        </h2>
                    </div>
                </div>

                <div class="py-4 px-8">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <img src="@/assets/icon/bluecalendar.svg"
                                class="w-auto h-[20px] flex-shrink-0 text-[#15649D]" />
                            <p class="text-[#15649D] font-poppins text-[16px] font-semibold ml-2">KAMIS, 12 Juni 2023
                                08:48 WIB</p>
                        </div>
                    </div>
                    <p class="text-[#000] font-poppins text-[16px] mb-4">
                        Dewan Perwakilan Mahasiswa (DPM) mengumumkan perpanjangan masa Open Recruitment untuk posisi
                        Staff Ahli periode 2023/2024. Langkah ini diambil untuk memberikan kesempatan lebih luas bagi
                        mahasiswa yang ingin bergabung dan berkontribusi dalam organisasi kampus ...
                    </p>
                    <!-- Tombol Selengkapnya -->
                    <router-link to="/berita/1"
                        class="bg-[#1A5796] text-white font-poppins text-[14px] font-medium rounded-[6px] w-[150px] h-[35px] flex items-center justify-center">
                        <button
                            class="bg-[#1A5796] text-white font-poppins text-[14px] font-medium rounded-[6px] w-[150px] h-[35px] flex items-center justify-center">
                            Selengkapnya
                            <img src="@/assets/icon/next.svg"
                                class="ml-2 w-[15px] h-auto flex-shrink-0 fill-[#FFFFFF]" />
                        </button>
                    </router-link>
                </div>

                <hr class="border-[#15649D]">

                <div class="py-4 px-8">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <img src="@/assets/icon/person.svg" class="w-auto h-[18px] flex-shrink-0 text-[#15649D]" />
                            <p class="text-[#15649D] font-poppins text-[13px] font-medium ml-2">Pororo ajaaah</p>
                        </div>
                        <div class="flex items-center">
                            <img src="@/assets/icon/blueeye.svg" class="w-auto h-[13px] flex-shrink-0 text-[#15649D]" />
                            <p class="text-[#15649D] font-poppins text-[13px] font-medium ml-2">692</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BeritaUtama',
};
</script>

<style scoped>
.judulpage {
    background-image: url('@/assets/icon/visi_misi.svg');
}
</style>