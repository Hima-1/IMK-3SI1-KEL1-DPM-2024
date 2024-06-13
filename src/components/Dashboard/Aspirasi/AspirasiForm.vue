<template>
  <div class="w-full max-w-[65.625rem] h-[39rem] bg-white rounded-lg shadow-md">
    <div class="w-full h-[5.5625rem] bg-[rgba(38,125,194,0.18)] rounded-t-lg flex items-center px-6">
      <p class="text-[#1A5796] font-poppins text-[1.875rem] font-semibold leading-[2.81025rem]">Form Sambatan</p>
    </div>
    <div class="p-6 bg-white">
      <div class="flex items-center mb-[2.8125rem] mt-5">
        <label class="w-[13.75rem] text-[#6A6C7A] font-poppins text-[1.25rem] leading-[1.875rem]">Nama Pengirim</label>
        <input type="text" class="w-full h-[3.125rem] ml-4 p-2 border border-[#D9D9D9] bg-white rounded-md" placeholder="Nama kamu, iya... kamu, boleh samaran" style="color: #ACB4B6; font-family: Poppins; font-size: 1.125rem; font-weight: 400; line-height: 1.5;">
      </div>
      <div class="flex items-center mb-[2.8125rem]">
        <label class="w-[13.75rem] text-[#6A6C7A] font-poppins text-[1.25rem] leading-[1.875rem]">Ditujukan kepada</label>
        <select class="w-full h-[3.125rem] ml-4 p-2 border border-[#D9D9D9] bg-white rounded-md" style="color: #6A6C7A; font-family: Poppins; font-size: 1.125rem; font-weight: 400; line-height: 1.5;">
          <option>Kampus</option>
          <option>Ormawa</option>
          <option>Pengurus Tingkat</option>
          <option>Lainnya</option>
        </select>
      </div>
      <div class="flex items-start mb-[2.8125rem]">
        <label class="w-[13.75rem] text-[#6A6C7A] font-poppins text-[1.25rem] leading-[1.875rem]">Isi Sambatan</label>
        <div class="relative w-full h-[9.375rem] ml-4">
          <textarea class="w-full h-full bg-white p-2 border border-[#D9D9D9] rounded-md resize-none" rows="6" style="color: #6A6C7A; font-family: Poppins; font-size: 1.125rem; font-weight: 400; line-height: 1.5;"></textarea>
          <div class="absolute bottom-2 right-2">
            <img src="@/assets/icon/text-area.svg" alt="Text Area Icon" class="w-[1.5rem] h-[1.5rem]">
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <button @click="$emit('show-confirmation-popup')" class="w-[9.375rem] h-[3.125rem] bg-[#1A5796] text-white text-center font-poppins text-[1.125rem] font-semibold leading-[1.875rem] rounded-md">
          Yuk sambat!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
