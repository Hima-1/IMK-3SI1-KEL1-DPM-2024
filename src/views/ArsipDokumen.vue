<template>
  <div class="bg-[#ebf3f5] p-6 min-h-screen flex justify-center">
    <div class="w-[1660px] flex flex-col">
      <!-- Folder Icon and Arsip Dokumen Text -->
      <div class="flex items-center mt-12 space-x-6">
        <img
            src="@/assets/icon/folder.svg"
            alt="Folder Icon"
            class="w-12 h-12"
        />
        <h1 class="text-[#1A5796] font-poppins text-4xl" style="line-height: 60px;">
          Arsip Dokumen
        </h1>
      </div>

      <div v-if="showDetail" class="flex items-center bg-[#EBF3F5] p-4 mt-6">
        <img src="@/assets/icon/return.svg" alt="Return Icon" class="w-[56px] h-[56px] flex-shrink-0 cursor-pointer" @click="toggleDetail"/>
        <div class="ml-4">
          <p class="text-[#267DC2] font-poppins text-[30px] font-semibold leading-normal">{{ currentFolder.namaFolder }}</p>
        </div>
      </div>

      <div class="mt-10 w-full">
        <TableSearch />
      </div>

      <div class="w-full mt-6">
        <TableHeader />
      </div>

      <!-- No Margin Between Header and Rows -->
      <div class="border-t border-[#EBF3F5] w-full"></div>

      <!-- Table Rows -->
      <div class="w-full flex flex-col">
        <TableRow
            v-for="row in rows"
            :key="row.no"
            :rowData="row"
            @viewDetails="viewDetails"
        />
      </div>

      <!-- Pagination -->
      <div class="mt-10 w-full flex justify-center">
        <TablePagination
            :currentPage="currentPage"
            :totalPages="totalPages"
            @update:currentPage="updateCurrentPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TableHeader from "@/components/Dashboard/TableHeader.vue";
import TableSearch from "@/components/Dashboard/TableSearch.vue";
import TableRow from "@/components/Dashboard/TableRow.vue";
import TablePagination from "@/components/Dashboard/TablePagination.vue";

export default {
  name: 'AnggaranImpolstat',
  components: {
    TableHeader,
    TableSearch,
    TableRow,
    TablePagination
  },
  data() {
    return {
      rows: [
        {
          no: 1,
          namaFolder: 'AD/ART Imapolstat 21/22',
          waktu: '2021-12-09 08:16 WIB',
          tipe: 'PDF Document',
          size: '223 kb',
        },
        {
          no: 2,
          namaFolder: 'AD/ART Imapolstat 22/23',
          waktu: '2021-12-09 08:16 WIB',
          tipe: 'PDF Document',
          size: '223 kb',
        },
      ],
      currentFolder: {},
      showDetail: false,
      currentPage: 1,
      totalPages: 5
    }
  },
  methods: {
    viewDetails(row) {
      this.currentFolder = row;
      this.showDetail = true;
    },
    toggleDetail() {
      this.showDetail = false;
    },
    updateCurrentPage(newPage) {
      this.currentPage = newPage;
      // Fetch new data based on newPage if needed
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
