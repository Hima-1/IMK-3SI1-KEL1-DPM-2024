<template>
    <div class="bg-[#cddbe5] flex flex-col items-start justify-start">
        <div class="flex flex-wrap justify-center gap-8">
            <!-- Berita Utama-->
            <div class="bg-[#EBF3F5] rounded-[12px] flex-shrink-0 w-full h-auto">
                <!-- Bagian Atas Berita -->
                <div class="relative w-full h-[410px] rounded-t-[13px] object-cover"
                    style="background: linear-gradient(0deg, #041322 7.17%, rgba(102, 102, 102, 0.00) 96.17%);">
                    <!-- Foto Berita -->
                    <img src="@/assets/images/berita.webp" class="w-full h-full rounded-t-[13px] object-cover" />
                    <!-- Judul Foto -->
                    <div class="absolute bottom-0 left-0 w-full px-4 py-2 bg-[#041322B3] rounded-b-[13px]">
                        <h2 class="text-[#EBF3F5] font-poppins text-[22px] font-bold leading-normal">
                            Perpanjangan Open Recruitment Staff Ahli DPM Periode 2023/2024
                        </h2>
                    </div>
                </div>

                <!-- Bagian Bawah Berita -->
                <div class="p-4">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center">
                            <!-- Ikon Tanggal -->
                            <img src="@/assets/icon/bluecalendar.svg"
                                class="w-auto h-[20px] flex-shrink-0 text-[#15649D]" />
                            <!-- Tanggal -->
                            <p class="text-[#15649D] font-poppins text-[20px] font-medium ml-4">KAMIS, 12 Juni 2023 08:48 WIB</p>
                        </div>
                    </div>
                    <!-- Isi Berita -->
                    <p class="text-[#000] font-poppins text-[20px] mb-4">
                        Ini adalah contoh isi berita. Deskripsi berita akan ditampilkan di sini. Mang eak. Masih kurang kah. Tiga baris euy. Masiiiihhh. Hadehhhh. Dah nih tiga baris.
                    </p>
                    <!-- Tombol Selengkapnya -->
                    <button
                        class="bg-[#1A5796] text-white font-poppins text-[18px] font-medium rounded-[6px] w-[230px] h-[37px] flex items-center justify-center mt-5">
                        Selengkapnya
                        <img src="@/assets/icon/next.svg"
                            class="ml-4 w-[18px] h-auto flex-shrink-0 fill-[#FFFFFF]" />
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
                                class="w-auto h-[24px] flex-shrink-0 text-[#15649D]" />
                            <!-- Nama Penulis -->
                            <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">Pororo ajaaah</p>
                        </div>
                        <div class="flex items-center">
                            <!-- Ikon Tanggal -->
                            <img src="@/assets/icon/blueeye.svg"
                                class="w-auto h-[18px] flex-shrink-0 text-[#15649D]" />
                            <!-- Tanggal Berita -->
                            <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">692</p>
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