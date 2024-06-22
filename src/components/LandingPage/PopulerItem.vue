<template>
    <div class="px-4 md:px-6 flex">
        <!-- Foto -->
        <div class="flex-shrink-0 w-[110px] h-[68px] overflow-hidden mr-4 mt-2 bg-white">
            <img src="@/assets/images/berita.webp" alt="Foto Berita Populer" class="w-full h-full object-cover">
        </div>
        <!-- Konten -->
        <div class="flex-1 flex flex-col justify-between">
            <!-- Judul -->
            <div class="mb-2">
                <p class="text-[#15649D] font-poppins text-[14px] font-medium">
                    Perpanjangan Open Recruitment Staff Ahli DPM Periode 2023/2024
                </p>
            </div>
            <!-- Keterangan -->
            <div class="flex justify-between items-center">
                <!-- Tanggal -->
                <div class="flex items-center">
                    <!-- Ikon Tanggal -->
                    <img src="@/assets/icon/blackcalendar.svg"
                        class="w-auto h-[12px] flex-shrink-0 text-[#15649D]" />
                    <!-- Tanggal -->
                    <p class="text-[#6A6C7A] font-poppins text-[12px] ml-2">12 Juni 2024</p>
                </div>
                <!-- Viewers -->
                <div class="flex items-center">
                    <!-- Ikon Dot -->
                    <img src="@/assets/icon/dot.svg" class="w-auto h-[2px] md:h-[4px] flex-shrink-0 text-[#15649D]" />
                    <!-- Ikon Viewers -->
                    <img src="@/assets/icon/blackeye.svg"
                        class="w-auto h-[12px] flex-shrink-0 text-[#15649D] ml-2" />
                    <!-- Viewers -->
                    <p class="text-[#6A6C7A] font-poppins text-[12px] ml-2">692</p>
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