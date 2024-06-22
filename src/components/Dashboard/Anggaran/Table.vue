<template>
  <div class="mt-10 w-full margin">
    <TableSearch @search="searchRows" />

    <!-- Responsive Table Container -->
    <div class="w-full mt-6 overflow-x-auto margin">
      <div class="min-w-[800px]">
        <TableHeader />

        <!-- No Margin Between Header and Rows -->
        <div class="border-t border-[#EBF3F5] w-full"></div>

        <!-- Table Rows -->
        <div class="w-full flex flex-col">
          <TableRow
              v-for="row in paginatedRows"
              :key="row.no"
              :rowData="row"
              @view-details="viewDetails"
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
</template>

<script>
import TableHeader from "@/components/Dashboard/Anggaran/TableHeader.vue";
import TableSearch from "@/components/Dashboard/Umum/TableSearch.vue";
import TableRow from "@/components/Dashboard/Anggaran/TableRow.vue";
import TablePagination from "@/components/Dashboard/Umum/TablePagination.vue";

export default {
  name: "Table",
  components: {
    TableHeader,
    TableSearch,
    TableRow,
    TablePagination,
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: '',
      itemsPerPage: 10,
    };
  },
  computed: {
    filteredRows() {
      if (this.searchQuery) {
        return this.rows.filter(row => row.namaFolder.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
      return this.rows;
    },
    paginatedRows() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.filteredRows.slice(start, end);
    },
  },
  methods: {
    viewDetails(row) {
      this.$emit("view-details", row);
    },
    updateCurrentPage(newPage) {
      this.$emit("update:currentPage", newPage);
    },
    searchRows(query) {
      this.searchQuery = query;
      this.$emit("update:currentPage", 1);
    },
  },
};
</script>

<style scoped>
</style>
