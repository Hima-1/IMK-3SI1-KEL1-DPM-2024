<template>
  <div class="bg-[#cddbe5] flex flex-col items-center justify-start w-full min-h-screen">
    <!-- Judul Berita -->
    <div class="w-full text-center my-10 hidden md:flex flex-col">
      <h1 class="text-[#1A5796] text-left font-poppins text-[25px] font-semibold leading-normal">
        Berita Utama Lainnya
      </h1>
      <div style="height: 5px; background-color: #F7941D; width: 275px; margin-top: 4px;"></div>
    </div>

    <!-- Wrapper Berita -->
    <div class="flex flex-wrap justify-center gap-6">
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
      <BeritaItem />
    </div>

    <!-- Page -->
    <div class="flex justify-center my-8">
      <div class="flex space-x-2">
        <button @click="prevPage" :disabled="currentPage === 1"
          class="w-[30px] h-[35px] flex items-center justify-center">
          <p class="text-[#1A5796] font-poppins text-[23px] md:text-[30px] font-semibold"><</p>
        </button>
        <button v-for="page in totalPages" :key="page" @click="setPage(page)"
          :class="['w-[35px] h-[35px] flex items-center justify-center', currentPage === page ? 'bg-[#EEA449] rounded-full' : '']">
          <p class="text-[#1A5796] font-poppins text-[23px] md:text-[25px] font-semibold">{{ page }}</p>
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages"
          class="w-[30px] h-[35px] flex items-center justify-center">
          <p class="text-[#1A5796] font-poppins text-[23px] md:text-[30px] font-semibold">></p>
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
      itemsPerPage: 5,
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