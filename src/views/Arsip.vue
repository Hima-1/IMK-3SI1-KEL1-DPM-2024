<template>
  <div class="bg-[#ebf3f5] p-6 pb-16 pt-0 min-h-screen flex justify-center arsip">
    <div class="w-full max-w-[1660px] flex flex-col overflow-x-auto">
      <ArsipHeader
          :showDetail="showDetail"
          :currentFolder="currentFolder"
          @toggleDetail="toggleDetail"
      />

      <div class="mt-10 w-full">
        <Table
            :rows="displayedRows"
            :currentPage="currentPage"
            :totalPages="totalPages"
            @viewDetails="viewDetails"
            @update:currentPage="updateCurrentPageHandler"
            @search="searchRowsHandler"
            @showChange="updateItemsPerPageHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import ArsipHeader from "@/components/Dashboard/Arsip/Header.vue";
import Table from "@/components/Dashboard/Arsip/Table.vue";

export default {
  name: "Arsip",
  components: {
    ArsipHeader,
    Table,
  },
  computed: {
    ...mapState('arsip', ['currentPage']),
    ...mapGetters('arsip', ['paginatedRows', 'totalPages']),
    displayedRows() {
      if (this.showDetail) {
        return this.currentFolder.isiFolder.map((item, index) => {
          return {
            ...item,
            no: index + 1
          };
        });
      } else {
        return this.paginatedRows;
      }
    }
  },
  data() {
    return {
      currentFolder: {},
      showDetail: false,
    };
  },
  methods: {
    ...mapActions('arsip', ['updateCurrentPage', 'searchRows', 'updateItemsPerPage']),
    viewDetails(row) {
      this.currentFolder = row;
      this.showDetail = true;
    },
    toggleDetail() {
      this.showDetail = false;
      this.currentFolder = {};
    },
    updateCurrentPageHandler(newPage) {
      this.updateCurrentPage(newPage);
    },
    searchRowsHandler(query) {
      this.searchRows(query);
    },
    updateItemsPerPageHandler(newNumber) {
      this.updateItemsPerPage(newNumber);
    },
  },
};
</script>

<style scoped>
@media (min-width: 1280px) {
  .arsip {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}
</style>