<template>
    <div class="gallery-grid mt-8 rounded-[44px]">
        <div class="foto-dummy rounded-[44px]">
            <div class="image-container rounded-[44px]">
                <img src="@/assets/images/galeri.webp" alt="Foto" class="image rounded-[13px]">
                <div class="overlay">
                    <div class="flex-grow text-center">
                        <h1 class="text-[#FFFFFF] font-poppins text-[26px] lg:text-[26.4px] font-semibold leading-normal">
                            Berita Utama Lainnya
                        </h1>
                        <p class="text-[#FFFFFF] text-[18px] lg:text-[15.84px] font-medium font-poppins leading-snug">
                            ABCDE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GaleriItem',
};
</script>

<style scoped>
.foto-dummy {
    border-radius: 20px;
    position: relative;
    width: 350px;
    border-radius: 50%;
}

.gallery-grid {
    display: grid;
    gap: 50px;
}

.image-container {
    position: relative;
    width: 350px;
    border-radius: 44px;
}

.image {
    width: 100%;
    height: auto;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay:hover {
    opacity: 1;
}
</style>