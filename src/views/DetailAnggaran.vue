<template>
  <div class="bg-[#ebf3f5] p-6 pb-16 min-h-screen flex justify-center">
    <div class="w-full max-w-[1660px] flex flex-col overflow-x-auto">
      <Header />
      <div class="content-wrapper flex w-full justify-between mb-6 padding px-12">
        <div class="w-2/8 mr-3 flex flex-col">
          <Kegiatan />
        </div>
        <div class="w-5/8 ml-5 flex flex-col">
          <TentangKegiatan />
        </div>
      </div>

      <!-- Title -->
      <div class="padding text-[#267DC2] font-poppins text-[1.875rem] font-bold mb-0 mt-6 title-text px-12">
        Detail Anggaran Kegiatan
      </div>

      <!-- Detail Table -->
      <DetailTable :rows="rows" @viewDetails="viewDetails" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Dashboard/Anggaran/DetailHeader.vue";
import Kegiatan from "@/components/Dashboard/Anggaran/Kegiatan.vue";
import TentangKegiatan from "@/components/Dashboard/Anggaran/TentangKegiatan.vue";
import DetailTable from "@/components/Dashboard/Anggaran/DetailTable.vue";

export default {
  name: 'DetailAnggaran',
  components: {
    Header,
    Kegiatan,
    TentangKegiatan,
    DetailTable
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
  methods: {
    viewDetails(row) {
      console.log(row);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

@media (max-width: 1280px) {
  .font-poppins {
    font-size: 1rem;
  }
  button{
    height: 2rem;
    width: 5rem;
  }
  .text-\[1\.875rem\]{
    font-size: 2rem;
  }
  @media (min-width: 1280px) {
    .padding{
      padding-left: 3rem;
      padding-right: 3rem;
    }
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
  .px-12{
    padding: 0;
  }
}
</style>