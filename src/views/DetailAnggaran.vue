<template>
  <div class="bg-[#ebf3f5] p-6 min-h-screen flex justify-center">
    <div class="w-full max-w-[1660px] flex flex-col overflow-x-auto">
      <Header />
      <div class="content-wrapper flex w-full justify-between mb-6">
        <div class="w-2/8 mr-3 flex flex-col">
          <Kegiatan />
        </div>
        <div class="w-5/8 ml-5 flex flex-col">
          <TentangKegiatan />
        </div>
      </div>

      <!-- Title -->
      <div class="text-[#267DC2] font-poppins text-[1.875rem] font-bold mb-10 mt-10 title-text">
        Detail Anggaran Kegiatan
      </div>

      <!-- Responsive Table Container -->
      <div class="w-full mt-6 overflow-x-auto">
        <div class="min-w-[800px]">
          <!-- Table Header -->
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
            <!-- Subtotal Row -->
            <div class="flex items-center h-[5.3125rem] bg-[#C8D6DF] subtotal-row min-w-[90rem]">
              <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] font-bold px-4" style="width: 4.25%;">
                <span>Subtotal</span>
              </div>
              <div class="flex items-center justify-between px-4" style="width: 19.75%;"></div>
              <div class="flex items-center justify-between px-4" style="width: 13.94%;"></div>
              <div class="flex items-center justify-between px-4" style="width: 9.81%;"></div>
              <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] font-bold px-4 subtotal-text" style="width: 17.44%;">
                <span>{{ subtotal.rincianAnggaran }}</span>
              </div>
              <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] font-bold px-4 subtotal-text" style="width: 16.875%;">
                <span>{{ subtotal.imapolstat }}</span>
              </div>
              <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] font-bold px-4 subtotal-text" style="width: 16.875%;">
                <span>{{ subtotal.lainnya }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Dashboard/Anggaran/DetailHeader.vue";
import Kegiatan from "@/components/Dashboard/Anggaran/Kegiatan.vue";
import TentangKegiatan from "@/components/Dashboard/Anggaran/TentangKegiatan.vue";
import TableHeader from "@/components/Dashboard/Anggaran/DetailTableHeader.vue";
import TableRow from "@/components/Dashboard/Anggaran/DetailTableRow.vue";

export default {
  name: 'DetailAnggaran',
  components: {
    Header,
    Kegiatan,
    TentangKegiatan,
    TableHeader,
    TableRow
  },
  data() {
    return {
      rows: [
        {
          id: 1,
          no: 1,
          rincianPenggunaan: 'Banner Backdrop',
          hargaSatuan: 'Rp460.000',
          pengali: 1,
          rincianAnggaran: 'Rp460.000',
          imapolstat: 'Rp150.000',
          lainnya: ''
        },
        {
          id: 2,
          no: 2,
          rincianPenggunaan: 'Makanan Ringan',
          hargaSatuan: 'Rp200.000',
          pengali: 3,
          rincianAnggaran: 'Rp600.000',
          imapolstat: 'Rp200.000',
          lainnya: ''
        }
      ]
    }
  },
  computed: {
    subtotal() {
      return {
        rincianPenggunaan: 'Subtotal',
        hargaSatuan: '',
        pengali: '',
        rincianAnggaran: this.calculateSubtotal('rincianAnggaran'),
        imapolstat: this.calculateSubtotal('imapolstat'),
        lainnya: this.calculateSubtotal('lainnya')
      };
    }
  },
  methods: {
    calculateSubtotal(key) {
      return this.rows.reduce((sum, row) => {
        return sum + (parseFloat(row[key].replace(/[^0-9.-]+/g, "")) || 0);
      }, 0).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'});
    },
    viewDetails(row) {

      console.log(row);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.text-title {
  color: #267DC2;
  font-family: Poppins, sans-serif;
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

@media (max-width: 1280px) {
  .font-poppins {
    font-size: 1rem;
  }
  .min-w-\[90rem\]{
    min-width: 80rem;
  }
  .h-\[5\.3125rem\]{
    height: 3.5rem;
  }
  button{
    height: 2rem;
    width: 5rem;
  }
  .text-\[1\.875rem\]{
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }

  .content-wrapper > div {
    width: 100%;
    margin: 0 0 1rem 0;
  }

  .title-text {
    font-size: 1.125rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .subtotal-row {
    height: 3rem;
  }

  .subtotal-text {
    font-size: 0.9375rem;
  }
}

.table-container {
  overflow-x: auto;
}
</style>