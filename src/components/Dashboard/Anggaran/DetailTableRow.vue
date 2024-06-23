<template>
  <div class="flex min-w-[60rem] items-center border-b border-[#C8D6DF] h-[4.75rem]" v-if="!isSubtotalRow">
    <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 row-text" style="width: 4.25%;">
      <span>{{ rowData.no }}</span>
    </div>
    <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 row-text" style="width: 19.75%;">
      <span>{{ rowData.rincianPenggunaan }}</span>
    </div>
    <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 row-text" style="width: 13.94%;">
      <span>{{ rowData.hargaSatuan }}</span>
    </div>
    <div class="flex items-center justify-center text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 row-text" style="width: 9.81%;">
      <span>{{ rowData.pengali }}</span>
    </div>
    <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 row-text" style="width: 17.44%;">
      <span>{{ rowData.rincianAnggaran }}</span>
    </div>
    <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 row-text" style="width: 16.875%;">
      <span>{{ rowData.imapolstat }}</span>
    </div>
    <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 row-text" style="width: 16.875%;">
      <span>{{ rowData.lainnya }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    rowData: {
      type: Object,
      required: true
    },
    isSubtotalRow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    viewDetails() {
      this.$emit('viewDetails', this.rowData);
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
  .min-w-\[90rem\]{
    min-width: 50rem;
  }
  .h-\[4\.875rem\]{
    height: 3.5rem;
  }
  button{
    height: 2rem;
    width: 5rem;
  }
}

@media (max-width: 768px) {
  .row-text {
    font-size: 0.9375rem;
  }
  .min-w-\[90rem\]{
    min-width: 75rem;
  }
}
</style>
