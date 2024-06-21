<template>
  <div class="bg-[#ebf3f5] p-6 pt-0 min-h-screen flex justify-center">
    <div class="w-full max-w-full md:max-w-[1660px] flex flex-col">
      <AnggaranHeader />

      <hr class="border-0 border-t-[2px] border-[#C8D6DF] flex-shrink-0 mt-10 mb-10 w-full">

      <div class="grid grid-cols-8 md:grid-cols-12 gap-6 mb-6 px-12">
        <div class="col-span-8 md:col-span-4 flex flex-col mb-4 md:mb-0 jumlah-dana-container">
          <JumlahDana />
        </div>
        <div class="col-span-8 md:col-span-1 flex flex-col h-0">
        </div>
        <div class="col-span-8 md:col-span-7 flex flex-col dana-imapolstat-container">
          <DanaImapolstat />
        </div>
      </div>

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
                @view-details="navigateToDetail"
            />
          </div>
        </div>
      </div>

      <div v-if="showDetail" class="flex items-center bg-[#EBF3F5] p-4 pl-0 mt-6">
        <img src="@/assets/icon/return.svg" alt="Return Icon" class="w-[56px] h-[56px] flex-shrink-0 cursor-pointer" @click="toggleDetail" />
        <div class="ml-4">
          <p class="text-[#267DC2] font-poppins text-[30px] font-semibold leading-normal">{{ currentFolder.namaFolder }}</p>
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
  </div>
</template>

<script>
import AnggaranHeader from "@/components/Dashboard/Anggaran/Header.vue";
import DanaImapolstat from "@/components/Dashboard/Anggaran/DanaImapolstat.vue";
import JumlahDana from "@/components/Dashboard/Anggaran/JumlahDana.vue";
import TableHeader from "@/components/Dashboard/Anggaran/TableHeader.vue";
import TableSearch from "@/components/Dashboard/Umum/TableSearch.vue";
import TableRow from "@/components/Dashboard/Anggaran/TableRow.vue";
import TablePagination from "@/components/Dashboard/Umum/TablePagination.vue";
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
    TableHeader,
    TableSearch,
    TableRow,
    TablePagination,
  },
  data() {
    return {
      rows: [
        {
          id: 1,
          no: 1,
          namaFolder: 'AD/ART Imapolstat 21/22',
          waktu: '2021-12-09 08:16 WIB',
          tipe: 'PDF Document',
          size: '223 kb',
        },
        {
          id: 2,
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
      totalPages: 5,
    };
  },
  methods: {
    navigateToDetail(id) {
      this.currentFolder = this.rows.find(row => row.id === id);
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
    updateCurrentPage(newPage) {
      this.currentPage = newPage;
      // Logic to handle pagination change
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.min-w-[800px] {
  min-width: 800px; /* Ensure minimum width for table container */
}

@media (max-width: 1280px) {
  
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
</style>
