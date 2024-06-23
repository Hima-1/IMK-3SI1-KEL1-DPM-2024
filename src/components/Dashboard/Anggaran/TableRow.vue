<template>
  <div>
    <div class="flex min-w-[90rem] items-center border-b border-[#C8D6DF] h-[4.875rem]">
      <div class="flex items-center justify-center text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 w-[7.17%]">
        <span>{{ rowData.no }}</span>
      </div>
      <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 w-[25%]">
        <span>{{ rowData.namaFolder || rowData.namaFile }}</span>
      </div>
      <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 w-[22%]">
        <span>{{ rowData.waktu }}</span>
      </div>
      <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 w-[17.25%]">
        <span>{{ rowData.tipe }}</span>
      </div>
      <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4 w-[13.4%]">
        <span>{{ rowData.size }}</span>
      </div>
      <div class="flex items-center justify-center px-4 w-[15.6%]">
        <button @click="navigateToDetail" class="w-[6.625rem] h-[2.25rem] flex-shrink-0 rounded-[0.375rem] bg-[#1A5796] text-[#EBF3F5] font-poppins text-[1.25rem] font-bold flex items-center justify-center">
          Detail
        </button>
      </div>
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
    }
  },
  methods: {
    navigateToDetail() {
      this.$emit('navigateToDetail', this.rowData.id);
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 768px) {
  .view-icon, .download-icon {
    width: 1.5rem;
    height: auto; /* Keep aspect ratio */
  }
}

@media (max-width: 1280px) {
  .font-poppins {
    font-size: 1rem;
  }
  .min-w-\[90rem\]{
    min-width: 65rem;
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
  .font-poppins {
    font-size: 0.9375rem;
  }
  .min-w-\[90rem\]{
    min-width: 65rem;
  }
}
</style>
