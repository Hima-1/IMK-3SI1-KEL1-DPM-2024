<template>
  <div class="bg-[#ebf3f5] p-6 pb-16 pt-0 min-h-screen flex justify-center anggaran">
    <div class="w-full max-w-full md:max-w-[1660px] flex flex-col">
      <AnggaranHeader />

      <hr class="border-0 border-t-[2px] border-[#C8D6DF] flex-shrink-0 mt-8 mb-8 w-full">

      <div class="grid grid-cols-8 md:grid-cols-12 gap-10 mb-16 px-12 margin justify-center items-center">
        <div class="h-full col-span-8 md:col-span-4 flex flex-col mb-4 md:mb-0 jumlah-dana-container">
          <JumlahDana />
        </div>
        <div class="col-span-8 md:col-span-8 flex flex-col dana-imapolstat-container">
          <DanaImapolstat />
        </div>
      </div>

      <Table
          :rows="paginatedRows"
          :currentPage="currentPage"
          :totalPages="totalPages"
          @navigateToDetail="navigateToDetail"
          @update:currentPage="updateCurrentPageHandler"
          @search="searchRowsHandler"
          @showChange="updateItemsPerPageHandler"
      />

    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import AnggaranHeader from "@/components/Dashboard/Anggaran/Header.vue";
import DanaImapolstat from "@/components/Dashboard/Anggaran/DanaImapolstat.vue";
import JumlahDana from "@/components/Dashboard/Anggaran/JumlahDana.vue";
import Table from "@/components/Dashboard/Anggaran/Table.vue";
import Kegiatan from "@/components/Dashboard/Anggaran/Kegiatan.vue";
import TentangKegiatan from "@/components/Dashboard/Anggaran/TentangKegiatan.vue";

export default {
  name: 'AnggaranImpolstat',
  components: {
    DanaImapolstat,
    TentangKegiatan,
    Kegiatan,
    JumlahDana,
    AnggaranHeader,
    Table,
  },
  computed: {
    ...mapState('anggaran', ['currentPage']),
    ...mapGetters('anggaran', ['paginatedRows', 'totalPages']),
  },
  data() {
    return {
      currentFolder: {},
      showDetail: false,
    };
  },
  methods: {
    ...mapActions('anggaran', ['updateCurrentPage', 'searchRows', 'updateItemsPerPage']),
    navigateToDetail(id) {
      this.currentFolder = this.paginatedRows.find(row => row.id === id);
      this.showDetail = true;
      this.$router.push({ name: 'DetailAnggaran', params: { id } }).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
          throw err;
        }
      });
    },
    toggleDetail() {
      this.showDetail = !this.showDetail;
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

@media (min-width: 1280px) {
  .anggaran {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }
}

@media (max-width: 1280px) and (min-width: 768px) {
  .mb-16{
    margin-bottom: 0rem;
  }
}

@media (max-width: 800px) {
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  .md\\:grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }

  .dana-imapolstat-container {
    grid-column: span 8 / span 8;
  }

  .jumlah-dana-container {
    grid-column: span 8 / span 8;
  }
}

@media (max-width: 425px) {
  .gap-10 {
    gap: 0px;
  }
  .px-12 {
    padding: 0;
  }
}
</style>
