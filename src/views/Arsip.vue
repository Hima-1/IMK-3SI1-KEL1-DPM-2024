<template>
  <div class="bg-[#ebf3f5] p-6 pt-0 min-h-screen flex justify-center">
    <div class="w-full max-w-[1660px] flex flex-col overflow-x-auto">
      <ArsipHeader
          :showDetail="showDetail"
          :currentFolder="currentFolder"
          @toggleDetail="toggleDetail"
      />

      <div class="mt-10 w-full">
        <TableSearch />
      </div>

      <!-- Responsive Table Container -->
      <div class="w-full mt-6 overflow-x-auto">
        <div class="min-w-[800px]">
          <TableHeader />

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
        </div>
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
import ArsipHeader from "@/components/Dashboard/Arsip/Header.vue";
import TableHeader from "@/components/Dashboard/Arsip/TableHeader.vue";
import TableSearch from "@/components/Dashboard/Umum/TableSearch.vue";
import TableRow from "@/components/Dashboard/Arsip/ArsipTableRow.vue";
import TablePagination from "@/components/Dashboard/Umum/TablePagination.vue";

export default {
  name: "AnggaranImpolstat",
  components: {
    ArsipHeader,
    TableHeader,
    TableSearch,
    TableRow,
    TablePagination,
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

.font-poppins {
  font-family: "Poppins", sans-serif;
}

.min-w-[800px] {
  min-width: 800px; /* Ensure minimum width for table container */
}

@media (max-width: 1024px) {
  .flex-wrap {
    flex-direction: column;
    align-items: flex-start;
  }

  .search-container,
  .show-container {
    width: 100%;
  }

  .search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
  }

  .show-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}

@media (max-width: 640px) {
  .search-text,
  .show-text,
  .documents-text,
  .number-text {
    font-size: 0.9375rem;
  }

  .container {
    padding: 0 0; /* Ensure padding inside the container */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
    width: 100%;
  }

  .search-box {
    width: 100%; /* Adjust to full width on smaller screens */
    max-width: 17.75rem; /* Maximum width constraint */
    height: 2.1875rem;
    flex-shrink: 0;
    font-size: 0.9375rem;
  }

  .number-box {
    width: 100%; /* Adjust to full width on smaller screens */
    max-width: 5.3125rem; /* Maximum width constraint */
    height: 2.1875rem;
    flex-shrink: 0;
    font-size: 0.9375rem;
  }
}
</style>
