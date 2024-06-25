<template>
  <div class="w-full flex flex-col overflow-x-auto">
    <TableSearch @search="searchRows" />

    <div class="w-full mt-6 overflow-x-auto">
      <div class="min-w-[800px]">
        <TableHeader />

        <div class="border-t border-[#EBF3F5] w-full"></div>

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
import TableHeader from "@/components/Dashboard/Arsip/TableHeader.vue";
import TableSearch from "@/components/Dashboard/Umum/TableSearch.vue";
import TableRow from "@/components/Dashboard/Arsip/TableRow.vue";
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
  methods: {
    viewDetails(row) {
      this.$emit("viewDetails", row);
    },
    updateCurrentPage(newPage) {
      this.$emit("update:currentPage", newPage);
    },
    searchRows(query) {
      this.$emit("search", query);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
</style>
