<template>
    <div class="px-4 flex">
        <!-- Foto -->
        <div class="flex-shrink-0 w-[110px] h-[68px] overflow-hidden mr-4 mt-2 bg-white"></div>
        <!-- Konten -->
        <div class="flex-1 flex flex-col justify-between">
            <!-- Judul -->
            <div class="mb-2">
                <p class="text-[#15649D] font-poppins text-[23px] font-medium">Rapat Futuristis
                    Diresmikan oleh Ketua DPM Berjalan dengan Baik</p>
            </div>
            <!-- Keterangan -->
            <div class="flex justify-between items-center">
                <!-- Tanggal -->
                <div class="flex items-center">
                    <!-- Ikon Tanggal -->
                    <img src="../../assets/icon/blackcalendar.svg"
                        class="w-[16.41px] h-[16px] flex-shrink-0 text-[#15649D]" />
                    <!-- Tanggal -->
                    <p class="text-[#6A6C7A] font-poppins text-[18px] ml-2">12 Juni 2024</p>
                </div>
                <!-- Viewers -->
                <div class="flex items-center">
                    <!-- Ikon Dot -->
                    <img src="../../assets/icon/dot.svg"
                        class="w-[7px] h-[7px] flex-shrink-0 text-[#15649D]" />
                    <!-- Ikon Viewers -->
                    <img src="../../assets/icon/blackeye.svg"
                        class="w-[17px] h-[12.47px] flex-shrink-0 text-[#15649D] ml-2" />
                    <!-- Viewers -->
                    <p class="text-[#6A6C7A] font-poppins text-[18px] ml-2">1000</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopulerItem',
};
</script>