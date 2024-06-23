<template>
  <div class="w-full min-w-[60rem] h-[6.06rem] flex bg-[#1a5796] border-b border-[#EBF3F5]">
    <div class="flex items-center justify-center text-[#EBF3F5] font-poppins text-[1.4375rem] font-medium border-r border-[#EBF3F5] px-4 header-text" style="width: 4.25%;">
      <span>No</span>
    </div>
    <div class="flex items-center justify-center text-[#EBF3F5] font-poppins text-[1.4375rem] font-medium border-r border-[#EBF3F5] px-4 header-text" style="width: 19.75%;">
      <span>Rincian Penggunaan</span>
    </div>
    <div class="flex items-center justify-center text-[#EBF3F5] font-poppins text-[1.4375rem] font-medium border-r border-[#EBF3F5] px-4 header-text" style="width: 13.94%;">
      <span>Harga Satuan</span>
    </div>
    <div class="flex items-center justify-center text-[#EBF3F5] font-poppins text-[1.4375rem] font-medium border-r border-[#EBF3F5] px-4 header-text" style="width: 9.81%;">
      <span>Pengali</span>
    </div>
    <div class="flex items-center justify-center text-[#EBF3F5] font-poppins text-[1.4375rem] font-medium border-r border-[#EBF3F5] px-4 header-text" style="width: 17.44%;">
      <span>Rincian Anggaran</span>
    </div>
    <div class="flex flex-col" style="width: 33.75%;">
      <div class="flex items-center justify-center text-[#EBF3F5] font-poppins text-[1.4375rem] font-medium border-b border-[#EBF3F5] h-1/2 header-text">
        <span>Pemakaian Sumber Dana</span>
      </div>
      <div class="flex items-center justify-between h-1/2">
        <div class="flex items-center justify-center text-[#EBF3F5] font-poppins text-[1.4375rem] font-medium border-r border-[#EBF3F5] px-4 header-text" style="width: 50%;">
          <span>Imapolstat</span>
        </div>
        <div class="flex items-center justify-center text-[#EBF3F5] font-poppins text-[1.4375rem] font-medium px-4 header-text" style="width: 50%;">
          <span>Lainnya</span>
        </div>
      </div>
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

@media (max-width: 768px) {
  .header-text {
    font-size: 0.9375rem;
  }
  .min-w-\[90rem\]{
    min-width: 75rem;
  }
}
@media (max-width: 1280px) {
  .font-poppins {
    font-size: 1rem;
  }
  .min-w-\[90rem\]{
    min-width: 50rem;
  }
  .h-\[4\.875rem\]{
    height: 3rem;
  }
  button{
    height: 2rem;
    width: 5rem;
  }
}
</style>
