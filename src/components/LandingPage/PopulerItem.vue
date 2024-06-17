<template>
    <div class="px-4 mb-4 flex">
        <!-- Bagian Kiri -->
        <div class="flex-shrink-0 w-[110px] h-[68px] overflow-hidden mr-4 mt-2 bg-white"></div>
        <!-- Bagian Kanan -->
        <div class="flex-1 flex flex-col justify-between">
            <!-- Bagian Atas (Judul) -->
            <div class="mb-2">
                <p class="text-[#15649D] font-poppins text-[23px] font-medium">Rapat Futuristis
                    Diresmikan oleh Ketua DPM Berjalan dengan Baik</p>
            </div>
            <!-- Bagian Bawah (Keterangan) -->
            <div class="flex justify-between items-center">
                <!-- Bagian Tanggal -->
                <div>
                    <p class="text-[#15649D] font-poppins text-[18px]">12 Januari 2024</p>
                </div>
                <!-- Bagian Viewers -->
                <div>
                    <p class="text-[#15649D] font-poppins text-[18px]">Viewers: 1000</p>
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