<template>
  <div class="w-full mt-6 overflow-x-auto padding px-12">
    <div class="">
      <TableHeader />

      <div class="border-t border-[#EBF3F5] w-full"></div>

      <div class="w-full flex flex-col">
        <TableRow
            v-for="row in rows"
            :key="row.no"
            :rowData="row"
            @viewDetails="viewDetails"
        />
        <div class="w-full overflow-x-auto flex items-center h-[5.3125rem] bg-[#C8D6DF] subtotal-row min-w-[60rem]">
          <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] font-bold px-4" style="width: 4.25%;">
            <span>Subtotal</span>
          </div>
          <div class="flex items-center justify-between px-4" style="width: 19.75%;"></div>
          <div class="flex items-center justify-between px-4" style="width: 13.94%;"></div>
          <div class="flex items-center justify-between px-4" style="width: 9.81%;"></div>
          <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] font-bold px-4 subtotal-text" style="width: 17.44%;">
            <span>{{ formatCurrency(subtotal.rincianAnggaran) }}</span>
          </div>
          <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] font-bold px-4 subtotal-text" style="width: 16.875%;">
            <span>{{ formatCurrency(subtotal.imapolstat) }}</span>
          </div>
          <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] font-bold px-4 subtotal-text" style="width: 16.875%;">
            <span>{{ formatCurrency(subtotal.lainnya) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableHeader from "@/components/Dashboard/Anggaran/DetailTableHeader.vue";
import TableRow from "@/components/Dashboard/Anggaran/DetailTableRow.vue";

export default {
  name: "DetailTable",
  components: {
    TableHeader,
    TableRow,
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
  computed: {
    subtotal() {
      return this.rows.reduce((acc, row) => {
        acc.rincianAnggaran += row.rincianAnggaran;
        acc.imapolstat += row.imapolstat;
        acc.lainnya += row.lainnya;
        return acc;
      }, { rincianAnggaran: 0, imapolstat: 0, lainnya: 0 });
    }
  },
  methods: {
    viewDetails(row) {
      this.$emit("viewDetails", row);
    },
    formatCurrency(value) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(value);
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
  .h-\[5\.3125rem\]{
    height: 3.5rem;
  }
  button{
    height: 2rem;
    width: 5rem;
  }
  @media (min-width: 1280px) {
    .padding{
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
}

@media (max-width: 768px) {

  .content-wrapper > div {
    width: 100%;
    margin: 0 0 1rem 0;
  }

  .subtotal-row {
    height: 3rem;
  }

  .subtotal-text {
    font-size: 0.9375rem;
  }
  .px-12{
    padding: 0 0;
  }
}
</style>
