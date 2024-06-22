<template>
  <div class="bg-[#ebf3f5] p-6 pt-0 min-h-screen flex justify-center">
    <div class="w-full max-w-[1660px] flex flex-col overflow-x-auto">
      <ArsipHeader
          :showDetail="showDetail"
          :currentFolder="currentFolder"
          @toggleDetail="toggleDetail"
      />

      <div class="mt-10 w-full">
        <Table
            :rows="rows"
            :currentPage="currentPage"
            :totalPages="totalPages"
            @viewDetails="viewDetails"
            @update:currentPage="updateCurrentPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArsipHeader from "@/components/Dashboard/Arsip/Header.vue";
import Table from "@/components/Dashboard/Arsip/Table.vue";

export default {
  name: "AnggaranImpolstat",
  components: {
    ArsipHeader,
    Table,
  },
  data() {
    return {
      rows: [
        {
          no: 1,
          namaFolder: "AD/ART Imapolstat 21/22",
          waktu: "2021-12-09 08:16 WIB",
          tipe: "PDF Document",
          size: "223 kb",
        },
        {
          no: 2,
          namaFolder: "AD/ART Imapolstat 22/23",
          waktu: "2021-12-09 08:16 WIB",
          tipe: "PDF Document",
          size: "223 kb",
        },
      ],
      currentFolder: {},
      showDetail: false,
      currentPage: 1,
      totalPages: 5,
    };
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
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
</style>
