<template>
  <div>
    <div class="flex min-w-[90rem] items-center border-b border-[#C8D6DF] h-[4.875rem]">
      <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4" style="width: 7.17%;">
        <span>{{ rowData.no }}</span>
      </div>
      <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4" style="width: 25%;">
        <span>{{ rowData.namaFolder }}</span>
      </div>
      <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4" style="width: 22%;">
        <span>{{ rowData.waktu }}</span>
      </div>
      <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4" style="width: 17.25%;">
        <span>{{ rowData.tipe }}</span>
      </div>
      <div class="flex items-center justify-between text-[#6A6C7A] font-poppins text-[1.4375rem] px-4" style="width: 13.4%;">
        <span>{{ rowData.size }}</span>
      </div>
      <div class="flex items-center justify-center px-4 space-x-12" style="width: 15.6%;">
        <img @click="viewDetails" src="@/assets/icon/seen.svg" alt="View Icon" class="view-icon w-[2.8125rem] h-[1.9375rem] flex-shrink-0 cursor-pointer"/>
        <img src="@/assets/icon/download.svg" alt="Download Icon" class="download-icon ml-4 w-[2.625rem] h-[2.3125rem] flex-shrink-0"/>
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
    viewDetails() {
      this.$emit('viewDetails', this.rowData);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 1280px) {
  .font-poppins {
    font-size: 1rem;
  }
  .min-w-\[90rem\]{
    min-width: 80rem;
  }
  .h-\[4\.875rem\]{
    height: 3.5rem;
  }
  .view-icon, .download-icon {
    width: 2rem;
    height: auto;
  }
}

@media (max-width: 768px) {
  .view-icon, .download-icon {
    width: 1.5rem;
    height: auto;
  }
  .font-poppins {
    font-size: 0.9375rem;
  }
  .min-w-\[90rem\]{
    min-width: 75rem;
  }
}
</style>
