<template>
    <div class="grid mt-8 rounded-[44px] gap-[50px] px-2">
        <div class="foto-dummy rounded-[44px]">
            <div class="image-container rounded-[44px]">
                <img src="../../assets/images/galeri.webp" alt="Foto" class="w-full h-auto rounded-[13px]">
                <div class="overlay">
                    <div class="flex-grow text-center">
                        <h1 class="text-[#FFFFFF] font-poppins text-[25px] font-semibold leading-normal">
                            Sambutan Ketua
                        </h1>
                        <p class="text-[#FFFFFF] text-[18px] font-normal font-poppins leading-snug">
                            25 Februari 2024
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

.image-container {
    position: relative;
    width: 350px;
    border-radius: 44px;
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