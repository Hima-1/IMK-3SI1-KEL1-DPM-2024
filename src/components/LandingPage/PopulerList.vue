<template>
    <div class="bg-[#EBF3F5] rounded-[12px] flex-shrink-0 w-full h-full">
        <div>
            <!-- Judul -->
            <p class="text-[#15649D] font-poppins text-[20px] font-semibold ml-4 md:ml-6 pt-4 pb-2 md:pb-4">Berita Populer</p>
            <!-- Garis Horizontal -->
            <hr class="border-[#15649D] my-2 md:my-1">
        </div>

        <!-- Wrapper Populer -->
        <div className="grid grid-cols-1 gap-10 pt-6 pb-8">
            <router-link to="/berita/selengkapnya" class="hover:bg-white"><PopulerItem /></router-link>
            <router-link to="/berita/selengkapnya" class="hover:bg-white"><PopulerItem /></router-link>
            <router-link to="/berita/selengkapnya" class="hover:bg-white"><PopulerItem /></router-link>
            <router-link to="/berita/selengkapnya" class="hover:bg-white"><PopulerItem /></router-link>
        </div>
    </div>
</template>

<script>
import PopulerItem from './PopulerItem.vue';

export default {
    name: 'PopulerList',
    components: {
        PopulerItem,
    },
};
</script>

<style scoped></style>