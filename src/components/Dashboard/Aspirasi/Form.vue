<template>
  <div class="w-full max-w-[65.625rem] h-auto bg-white rounded-lg shadow-md">
    <div class="w-full h-[5.5625rem] bg-[rgba(38,125,194,0.18)] rounded-t-lg flex items-center px-6 title-wrap">
      <p class="text-[#1A5796] font-poppins text-[1.875rem] font-semibold leading-[2.81025rem] title">Form Sambatan</p>
    </div>
    <div class="p-6 bg-white">
      <div class="flex flex-col md:flex-row md:items-center mb-[2rem] mt-2 input-container">
        <label class="w-full md:w-[13.75rem] text-[#6A6C7A] font-poppins text-[1.25rem] leading-[1.875rem] label">Nama Pengirim</label>
        <input type="text" class="input w-full h-[3.125rem] mt-2 md:mt-0 md:ml-4 p-2 border border-[#D9D9D9] bg-white rounded-md" placeholder="Nama kamu, iya... kamu, boleh samaran">
      </div>
      <div class="flex flex-col md:flex-row md:items-center mb-[2rem] input-container">
        <label class="w-full md:w-[13.75rem] text-[#6A6C7A] font-poppins text-[1.25rem] leading-[1.875rem] label">Ditujukan kepada</label>
        <select v-model="selectedOption" class="select w-full h-[3.125rem] mt-2 md:mt-0 md:ml-4 p-2 border border-[#D9D9D9] bg-white rounded-md">
          <option>Kampus</option>
          <option>Ormawa</option>
          <option>Pengurus Tingkat</option>
          <option>Lainnya</option>
        </select>
      </div>
      <div v-if="selectedOption === 'Lainnya'" class="flex flex-col md:flex-row md:items-center mb-[2rem] input-container">
        <label class="w-full md:w-[13.75rem] text-[#6A6C7A] font-poppins text-[1.25rem] leading-[1.875rem] label">Lainnya</label>
        <input type="text" class="input w-full h-[3.125rem] mt-2 md:mt-0 md:ml-4 p-2 border border-[#D9D9D9] bg-white rounded-md" placeholder="Tuliskan penerima lainnya">
      </div>
      <div class="flex flex-col md:flex-row md:items-start mb-[2rem] input-container">
        <label class="w-full md:w-[13.75rem] text-[#6A6C7A] font-poppins text-[1.25rem] leading-[1.875rem] label">Isi Sambatan</label>
        <div class="relative w-full h-[9.375rem] mt-2 md:mt-0 md:ml-4">
          <textarea class="textarea w-full h-full p-2 border border-[#D9D9D9] bg-white rounded-md resize-none" rows="6" style="overflow-y: auto;"></textarea>
          <div class="absolute bottom-2 right-2">
            <img src="@/assets/icon/text-area.svg" alt="Text Area Icon" class="w-[1.5rem] h-[1.5rem]">
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <button @click="$emit('show-confirmation-popup')" class="btn w-[9.375rem] h-[3.125rem] text-white font-poppins text-[1.125rem] font-semibold leading-[1.875rem]" style="background-color: #1A5796; border-color: #1A5796; white-space: nowrap;">
          Yuk sambat!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      selectedOption: '',
    };
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.input,
.select,
.textarea {
  color: #6A6C7A;
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 2;
}
@media (max-width: 1280px){
  .title {
    font-size: 1.7rem;
  }

  .label {
    font-size: 1rem;
  }

  .input,
  .select,
  .textarea {
    font-size: 1rem;
  }

  .btn {
    font-size: 1rem;
  }

  .input-container {
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 1.125rem;
  }

  .label {
    font-size: 0.9375rem;
  }

  .input,
  .select,
  .textarea {
    font-size: 0.9375rem;
  }

  .btn {
    font-size: 0.9375rem;
  }
  .input-container {
    margin-bottom: 0.75rem;
  }
  .p-6{
    padding-top: 1rem;
  }
  .title-wrap{
    height: 4rem;
  }
}

@media (max-width: 425px){
  .btn{
    width: 8rem;
  }
}
</style>
