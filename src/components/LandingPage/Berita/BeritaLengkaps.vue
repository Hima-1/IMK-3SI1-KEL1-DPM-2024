<template>
    <div class="bg-[#cddbe5] flex flex-col items-start justify-start min-h-screen">
        <div class="flex flex-wrap justify-center gap-8">
            <!-- Box -->
            <div class="rounded-[12px] w-full h-auto bg-[#EBF3F5] flex flex-col">
                <!-- Image container -->
                <div class="flex-shrink-0 relative w-full pb-[54%]">
                    <!-- Image -->
                    <img src="../../../assets/images/lain2.webp"
                        class="absolute top-0 left-0 w-full h-full rounded-t-[13px] object-cover" />
                </div>
                <!-- Content -->
                <div class="flex-grow p-4 md:px-7">
                    <!-- Tanggal Berita -->
                    <div class="flex items-center mb-2">
                        <!-- Ikon Tanggal -->
                        <img src="../../../assets/icon/bluecalendar.svg"
                            class="w-auto h-[20px] flex-shrink-0 text-[#15649D]" />
                        <!-- Tanggal -->
                        <p class="text-[#15649D] font-poppins text-[15px] md:text-[16px] font-semibold ml-2">JUMAT, 13
                            Juni 2024 10:58 WIB</p>
                    </div>
                    <!-- Isi -->
                    <p class="text-[#000] font-poppins text-[15px] break-words my-4">
                        Kuliah Umum tentang Komputasi Statistik merupakan sebuah forum yang krusial dalam dunia ilmu
                        data modern. Acara ini menyoroti peran penting komputasi dalam menganalisis dan mengolah data
                        statistik untuk mendukung inovasi di berbagai bidang. Komputasi statistik tidak sekadar tentang
                        pengolahan data, tetapi juga tentang bagaimana teknologi informasi dapat digunakan untuk
                        mengekstraksi wawasan mendalam dari data yang kompleks dan besar.
                        <br><br>
                        Para pembicara yang ahli dalam bidangnya membahas berbagai teknik komputasi terbaru, termasuk
                        penggunaan algoritma machine learning, analisis big data, dan visualisasi data yang memukau.
                        Mereka juga menyoroti tantangan etika dan keamanan yang terkait dengan penggunaan data dalam era
                        digital.
                        <br><br>
                        Peserta kuliah umum, terdiri dari akademisi, praktisi industri, dan mahasiswa, diundang untuk
                        mendapatkan pemahaman yang lebih dalam tentang bagaimana komputasi statistik mendorong
                        terciptanya solusi inovatif dalam berbagai disiplin ilmu. Melalui pendekatan ini, diharapkan
                        mampu mengoptimalkan pemanfaatan data untuk meningkatkan kehidupan dan pelayanan masyarakat
                        secara global. Kuliah umum ini tidak hanya memberikan pengetahuan baru, tetapi juga inspirasi
                        bagi mereka yang tertarik dengan potensi besar komputasi statistik dalam meramalkan masa depan
                        yang lebih baik.
                    </p>
                </div>
                <!-- Foot -->
                <div class="flex-shrink-0 flex flex-col">
                    <!-- Garis Horizontal -->
                    <hr class="border-[#15649D]">
                    <!-- Desc -->
                    <div class="flex items-center justify-between p-4 md:px-7">
                        <div class="flex items-center">
                            <!-- Ikon Penulis -->
                            <img src="../../../assets/icon/person.svg" class="w-auto h-[15px] flex-shrink-0 text-[#15649D]" />
                            <!-- Penulis -->
                            <p class="text-[#15649D] font-poppins text-[13px] md:text-[14px] font-medium ml-2">Loopy
                                ajaaah</p>
                        </div>
                        <div class="flex items-center">
                            <!-- Ikon Viewers -->
                            <img src="../../../assets/icon/blueeye.svg" class="w-auto h-[15px] flex-shrink-0 text-[#15649D]" />
                            <!-- Viewers -->
                            <p class="text-[#15649D] font-poppins text-[13px] md:text-[14px] font-medium ml-2">100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BeritaLengkaps',
};
</script>

<style scoped>
.aspect-ratio-54-100 {
    position: relative;
    width: 100%;
    padding-top: 54%;
}

.aspect-ratio-54-100 img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
}
</style>