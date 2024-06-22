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
            :rows="paginatedRows"
            :currentPage="currentPage"
            :totalPages="totalPages"
            @viewDetails="viewDetails"
            @update:currentPage="updateCurrentPageHandler"
            @search="searchRowsHandler"
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
  },
  data() {
    return {
      currentFolder: {},
      showDetail: false,
    };
  },
  methods: {
    ...mapActions('arsip', ['updateCurrentPage', 'searchRows']),
    viewDetails(row) {
      this.currentFolder = row;
      this.showDetail = true;
    },
    toggleDetail() {
      this.showDetail = false;
    },
    updateCurrentPageHandler(newPage) {
      this.updateCurrentPage(newPage);
    },
    searchRowsHandler(query) {
      this.searchRows(query);
    },
  },
};
</script>
