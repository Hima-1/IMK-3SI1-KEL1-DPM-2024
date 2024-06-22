<template>
  <div class="w-full min-w-[90rem] h-[4.875rem] flex bg-[#c8d6df] border-b border-[#EBF3F5]">
    <div class="flex items-center justify-between text-[#1A5796] font-poppins text-[1.4375rem] font-medium border-r border-[#EBF3F5] px-4" style="width: 7.17%;">
      <span>No</span>

    </div>
    <div class="flex items-center justify-between text-[#1A5796] font-poppins text-[1.4375rem] font-medium border-r border-[#EBF3F5] px-4" style="width: 25%;">
      <span>Kegiatan</span>

    </div>
    <div class="flex items-center justify-between text-[#1A5796] font-poppins text-[1.4375rem] font-medium border-r border-[#EBF3F5] px-4" style="width: 22%;">
      <span>Tanggal Pelaksanaan</span>

    </div>
    <div class="flex items-center justify-between text-[#1A5796] font-poppins text-[1.4375rem] font-medium border-r border-[#EBF3F5] px-4" style="width: 17.25%;">
      <span>Penyelenggara</span>

    </div>
    <div class="flex items-center justify-between text-[#1A5796] font-poppins text-[1.4375rem] font-medium border-r border-[#EBF3F5] px-4" style="width: 13.4%;">
      <span>Dana</span>

    </div>
    <div class="flex items-center justify-between text-[#1A5796] font-poppins text-[1.4375rem] font-medium px-4" style="width: 15.6%;">
      <span>Keterangan</span>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TableHeader'
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
    min-width: 65rem;
  }
  .h-\[4\.875rem\]{
    height: 3rem;
  }
}
</style>