<template>
    <div class="bg-[#cddbe5] flex flex-col items-start justify-start min-h-screen">
        <div class="flex flex-wrap justify-center gap-8">
            <div class="rounded-[12px] w-full h-auto bg-[#EBF3F5] flex flex-col">
                <div class="flex-shrink-0 relative w-full pb-[54%]">
                    <img src="../../assets/images/berita.webp"
                        class="absolute top-0 left-0 w-full h-full rounded-t-[13px] object-cover" />
                </div>
                <div class="flex-grow p-4 md:px-7">
                    <div class="flex items-center mb-2">
                        <img src="@/assets/icon/bluecalendar.svg"
                            class="w-auto h-[20px] flex-shrink-0 text-[#15649D]" />
                        <p class="text-[#15649D] font-poppins text-[15px] md:text-[16px] font-semibold ml-2">KAMIS, 12
                            Juni 2024 08:48 WIB</p>
                    </div>
                    <p class="text-[#000] font-poppins text-[15px] break-words my-4">
                        Dewan Perwakilan Mahasiswa (DPM) mengumumkan perpanjangan masa Open Recruitment untuk posisi
                        Staff Ahli periode 2023/2024. Langkah ini diambil untuk memberikan kesempatan lebih luas bagi
                        mahasiswa yang ingin bergabung dan berkontribusi dalam organisasi kampus. Posisi Staff Ahli
                        memiliki peran penting dalam mendukung perumusan kebijakan, analisis data, dan pengembangan
                        program kerja sesuai visi dan misi DPM.
                        <br><br>
                        Dengan perpanjangan waktu ini, diharapkan calon pendaftar dapat mempersiapkan berkas-berkas
                        seperti CV, surat motivasi, dan proposal kontribusi dengan lebih matang. DPM juga akan
                        mengadakan sesi informasi dan workshop untuk memberikan pemahaman mendalam tentang tugas dan
                        tanggung jawab seorang Staff Ahli serta membekali calon dengan pengetahuan dan keterampilan
                        dasar yang diperlukan.
                        <br><br>
                        Seleksi akan melibatkan panel penilai dari dosen dan alumni berpengalaman, melalui beberapa
                        tahap mulai dari seleksi administrasi, tes tertulis, hingga wawancara mendalam. Setiap tahap
                        akan dinilai cermat untuk memastikan kandidat terpilih memenuhi kriteria yang ditetapkan.
                        <br><br>
                        Respons positif terlihat dari meningkatnya minat dan pertanyaan yang masuk ke panitia.
                        DPM berharap perpanjangan ini memotivasi lebih banyak mahasiswa untuk ikut serta, memberikan
                        pengalaman berharga, dan terlibat dalam proses pengambilan keputusan yang berdampak luas bagi
                        civitas akademika.
                    </p>
                </div>
                <div class="flex-shrink-0 flex flex-col">
                    <hr class="border-[#15649D]">
                    <div class="flex items-center justify-between p-4 md:px-7">
                        <div class="flex items-center">
                            <img src="@/assets/icon/person.svg" class="w-auto h-[15px] flex-shrink-0 text-[#15649D]" />
                            <p class="text-[#15649D] font-poppins text-[13px] md:text-[14px] font-medium ml-2">Pororo
                                ajaaah</p>
                        </div>
                        <div class="flex items-center">
                            <img src="@/assets/icon/blueeye.svg" class="w-auto h-[15px] flex-shrink-0 text-[#15649D]" />
                            <p class="text-[#15649D] font-poppins text-[13px] md:text-[14px] font-medium ml-2">692</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BeritaLengkap',
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