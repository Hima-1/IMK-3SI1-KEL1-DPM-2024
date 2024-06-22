<template>
    <div class="bg-[#EBF3F5] rounded-[12px] flex-shrink-0 w-full h-full">
        <div>
            <!-- Judul -->
            <p class="text-[#15649D] font-poppins text-[20px] font-medium ml-4 py-2">Berita Populer</p>
            <!-- Garis Horizontal -->
            <hr class="border-[#15649D] my-2 md:my-1">
        </div>

        <!-- Wrapper Populer -->
        <div className="grid grid-cols-1 gap-4 pt-2 pb-4">
            <PopulerItem />
            <PopulerItem />
            <PopulerItem />
            <PopulerItem />
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