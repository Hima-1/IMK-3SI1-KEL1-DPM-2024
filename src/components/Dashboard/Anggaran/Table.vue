<template>
  <div class="px-12 w-full flex flex-col overflow-x-auto">
    <TableSearch @search="handleSearchRows" />

    <div class="w-full mt-6 overflow-x-auto">
      <div class="min-w-[800px]">
        <TableHeader />

        <div class="border-t border-[#EBF3F5] w-full"></div>

        <div class="w-full flex flex-col">
          <TableRow
              v-for="row in paginatedRows"
              :key="row.no"
              :rowData="row"
              @navigateToDetail="handleNavigateToDetail"
          />
        </div>
      </div>
    </div>

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
import TableHeader from "@/components/Dashboard/Anggaran/TableHeader.vue";
import TableSearch from "@/components/Dashboard/Umum/TableSearch.vue";
import TableRow from "@/components/Dashboard/Anggaran/TableRow.vue";
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
    handleNavigateToDetail(id) {
      this.$emit('navigateToDetail', id);
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
