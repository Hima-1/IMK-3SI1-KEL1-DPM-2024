<template>
    <div class="bg-[#cddbe5] flex flex-col items-start justify-start min-h-screen">
        <div class="flex flex-wrap justify-center gap-8">
            <!-- Box -->
            <div class="rounded-[12px] w-full h-auto bg-[#EBF3F5] flex flex-col">
                <!-- Image -->
                <div class="flex-shrink-0 relative w-full pb-[54%]">
                    <!-- Image container -->
                    <img src="../../assets/images/berita.webp"
                        class="absolute top-0 left-0 w-full h-full rounded-t-[13px] object-cover" />
                </div>
                <!-- Content -->
                <div class="flex-grow p-4">
                    <!-- Tanggal Berita -->
                    <div class="flex items-center mb-2">
                        <!-- Ikon Tanggal -->
                        <img src="../../assets/icon/time.svg" class="w-[23px] h-[23px] flex-shrink-0 text-[#15649D]" />
                        <!-- Tanggal Berita -->
                        <p class="text-[#15649D] font-poppins text-[23px] font-semibold ml-2">12 Januari 2024</p>
                    </div>
                    <!-- Isi -->
                    <p class="text-[#000] font-poppins text-[23px] break-words">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris commodo augue ac est accumsan laoreet.
                        Suspendisse ultricies sem ut diam rhoncus, eget blandit turpis fermentum.
                        Proin sodales, ex id maximus luctus, urna neque ultricies lacus, quis blandit mauris nibh sed
                        augue.
                        Nullam maximus lorem eget magna laoreet auctor.
                        Vestibulum fermentum nulla metus, tempor fringilla ex laoreet a.
                        Nunc bibendum est eros, nec lacinia elit eleifend fringilla.
                        Suspendisse mauris dolor, mattis in massa sit amet, faucibus sollicitudin tortor.
                    </p>
                </div>
                <!-- Foot -->
                <div class="flex-shrink-0 flex flex-col">
                    <!-- Garis Horizontal -->
                    <hr class="border-[#15649D]">
                    <!-- Desc -->
                    <div class="flex items-center justify-between p-4">
                        <div class="flex items-center">
                            <!-- Ikon Penulis -->
                            <img src="../../assets/icon/person.svg"
                                class="w-[14.183px] h-[15.697px] flex-shrink-0 text-[#15649D]" />
                            <!-- Nama Penulis -->
                            <p class="text-[#15649D] font-poppins text-[18px] font-medium ml-2">Nama Penulis</p>
                        </div>
                        <div class="flex items-center">
                            <!-- Ikon Tanggal -->
                            <img src="../../assets/icon/time.svg"
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
    name: 'BeritaLengkap',
};
</script>

<style scoped>
.aspect-ratio-54-100 {
    position: relative;
    width: 100%;
    padding-top: 54%;
    /* This sets the height to 54% of the width */
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