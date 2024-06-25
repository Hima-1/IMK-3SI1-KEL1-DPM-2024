<template>
    <div class="grid mt-8 rounded-[44px] gap-[50px] px-2">
        <div class="foto-dummy rounded-[44px]">
            <div class="image-container rounded-[44px]" @click="toggleFullscreen">
                <img :src="`/galeri/${foto.gambar}`" alt="Foto" class="w-full h-auto rounded-[13px]">
                <div class="textlay">
                    <div class="flex-grow text-center">
                        <h1 class="text-[#FFFFFF] font-poppins text-[25px] font-semibold leading-normal">
                            {{ foto.desk }}
                        </h1>
                        <p class="text-[#FFFFFF] text-[18px] font-normal font-poppins leading-snug">
                            {{ foto.tgl }}
                        </p>
                    </div>
                </div>
                <div v-if="showFullscreen"
                    class="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center overflow-hidden">
                    <div class="flex flex-col items-center text-center text-white">
                        <img :src="`/galeri/${foto.gambar}`" alt="Full Foto" class="w-auto lg:h-[80vh] object-contain">
                        <div class="mt-4">
                            <h1 class="text-[#FFFFFF] font-poppins text-[25px] font-semibold leading-normal">
                                {{ foto.desk }}
                            </h1>
                            <p class="text-[#FFFFFF] text-[18px] font-normal font-poppins leading-snug">
                                {{ foto.tgl }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GaleriItem',
    props: {
        foto: {
            type: Object,
        }
    },
    data() {
        return {
            showFullscreen: false
        };
    },
    methods: {
        toggleFullscreen() {
            this.showFullscreen = !this.showFullscreen;
        }
    }
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
    cursor: pointer;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.overlay-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: white;
}

.full-image {
    max-width: 100%;
    max-height: 80vh;
    /* Adjusted to leave space for the caption */
    object-fit: contain;
}

.image-caption {
    margin-top: 10px;
    font-size: 1.2em;
    padding: 0 10px;
    /* Optional: add padding for better readability */
}

.textlay {
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

.textlay:hover {
    opacity: 1;
}
</style>