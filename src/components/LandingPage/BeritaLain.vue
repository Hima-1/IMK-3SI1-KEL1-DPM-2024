<template>
  <div class="bg-[#cddbe5] flex flex-col items-center justify-start min-h-screen">
    <!-- Judul Berita -->
    <div class="w-full text-center my-16">
      <h1 class="text-[#1A5796] text-left font-poppins text-[40px] font-semibold leading-normal">
        Berita Utama Lainnya
      </h1>
      <div style="height: 9px; background-color: #F7941D; width: 436px; margin-top: 4px;"></div>
    </div>

    <!-- Wrapper Berita -->
    <div class="flex flex-wrap justify-center gap-8">
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
    </div>

    <!-- Page -->
    <div class="flex justify-center mt-8">
      <div class="flex space-x-4">
        <button @click="prevPage" :disabled="currentPage === 1" class="w-[154.096px] h-[55px] flex items-center justify-center">
          <p class="text-[#1A5796] font-poppins text-[30px] font-bold"><</p>
        </button>
        <button v-for="page in totalPages" :key="page" @click="setPage(page)" :class="['w-[55px] h-[55px] flex items-center justify-center', currentPage === page ? 'bg-[#EEA449] rounded-full' : '']">
          <p class="text-[#1A5796] font-poppins text-[30px] font-bold">{{ page }}</p>
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="w-[154.096px] h-[55px] flex items-center justify-center">
          <p class="text-[#1A5796] font-poppins text-[30px] font-bold">></p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import BeritaItem from './BeritaItem.vue';

export default {
  name: 'BeritaList',
  components: {
    BeritaItem,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 6,
      items: Array(12).fill({}),
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.items.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    setPage(page) {
      this.currentPage = page;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>