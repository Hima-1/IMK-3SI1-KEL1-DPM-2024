<template>
    <div class="bg-[#cddbe5] flex flex-col items-start justify-start min-h-screen">
        <div class="flex flex-wrap justify-center gap-8">
            <!-- Berita Utama-->
            <div class="bg-[#EBF3F5] rounded-[12px] flex-shrink-0 w-full h-auto">
                <!-- Bagian Atas Berita -->
                <div class="relative w-full h-[500px] rounded-t-[13px] object-cover"
                    style="background: linear-gradient(0deg, #041322 7.17%, rgba(102, 102, 102, 0.00) 96.17%);">
                    <!-- Foto Berita -->
                    <img src="@/assets/images/berita.webp" class="w-full h-full rounded-t-[13px] object-cover" />
                    <!-- Judul Foto -->
                    <div class="absolute bottom-0 left-0 w-full px-4 py-2 bg-[#041322B3] rounded-b-[13px]">
                        <h2 class="text-[#EBF3F5] font-poppins text-[22px] font-bold leading-normal">
                            Perpanjangan Open Recruitment Sekretaris, Bendahara, Pudmekraf, dan Tim IT DPM Periode
                            2023/2024
                        </h2>
                    </div>
                </div>

                <!-- Bagian Bawah Berita -->
                <div class="p-4">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <!-- Ikon Penulis -->
                            <img src="@/assets/icon/person.svg"
                                class="w-[23px] h-[23px] flex-shrink-0 text-[#15649D]" />
                            <!-- Nama Penulis -->
                            <p class="text-[#15649D] font-poppins text-[23px] font-medium ml-4">KAMIS, BLA BLA BLA</p>
                        </div>
                    </div>
                    <!-- Isi Berita -->
                    <p class="text-[#000] font-poppins text-[23px] mb-4">
                        Ini adalah contoh isi berita. Deskripsi berita akan ditampilkan di sini.
                    </p>
                    <!-- Tombol Selengkapnya -->
                    <button
                        class="bg-[#1A5796] text-white font-poppins text-[19px] font-medium rounded-[6px] w-[210px] h-[35px] flex items-center justify-center mt-10">
                        Selengkapnya
                        <img src="@/assets/icon/next.svg"
                            class="ml-4 w-[19px] h-[24px] flex-shrink-0 fill-[#EBF3F5]" />
                    </button>
                </div>

                <!-- Garis Horizontal -->
                <hr class="border-[#15649D]">

                <!-- Keterangan -->
                <div class="p-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <!-- Ikon Penulis -->
                            <img src="@/assets/icon/person.svg"
                                class="w-[14.183px] h-[15.697px] flex-shrink-0 text-[#15649D]" />
                            <!-- Nama Penulis -->
                            <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">Nama Penulis</p>
                        </div>
                        <div class="flex items-center">
                            <!-- Ikon Tanggal -->
                            <img src="@/assets/icon/time.svg"
                                class="w-[21.938px] h-[21.938px] flex-shrink-0 text-[#15649D]" />
                            <!-- Tanggal Berita -->
                            <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">12 Januari 2024</p>
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