<template>
  <div class="w-full flex flex-col overflow-x-auto">
    <TableSearch @search="handleSearchRows" />

    <!-- Responsive Table Container -->
    <div class="w-full mt-6 overflow-x-auto">
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
          @update:currentPage="handleUpdateCurrentPage"
      />
    </div>
  </div>
</template>

<script>
import TableHeader from "@/components/Dashboard/Arsip/TableHeader.vue";
import TableSearch from "@/components/Dashboard/Umum/TableSearch.vue";
import TableRow from "@/components/Dashboard/Arsip/ArsipTableRow.vue";
import TablePagination from "@/components/Dashboard/Umum/TablePagination.vue";
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: "Table",
  components: {
    TableHeader,
    TableSearch,
    TableRow,
    TablePagination,
  },
  computed: {
    ...mapState('anggaran', ['currentPage']),
    ...mapGetters('anggaran', ['paginatedRows', 'totalPages']),
  },
  methods: {
    ...mapActions('anggaran', ['updateCurrentPage', 'searchRows']),
    viewDetails(row) {
      this.$router.push({ name: 'DetailAnggaran', params: { id: row.id } });
    },
    handleUpdateCurrentPage(newPage) {
      this.updateCurrentPage(newPage);
    },
    handleSearchRows(query) {
      this.searchRows(query);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
</style>
