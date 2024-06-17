<template>
  <div class="min-h-fit">
    <div class="py-6">
      <!-- Judul dan Deskripsi -->
      <div class="grid grid-rows-2 gap-y-2 my-4">
        <h1 class="text-[#1A5796] font-poppins text-4xl">Informasi Rekening</h1>
        <p class="text-[#2F7DC1]">Pastikan isian rekening sudah benar, mencakup nomor rekening, nama bank yang digunakan, dan atas nama yang sesuai. Rekening mahasiswa harus atas nama pribadi dan pastikan rekening masih aktif</p>
      </div>

      <div>
        <div class="grid grid-cols-5 gap-x-5 text-[#6A6C7A]">
          <!-- Bank -->
          <div class="grid grid-cols-3 items-center">
            <p class="font-bold">Bank</p>
            <select v-model="selectedOption" class="col-span-2 select select-bordered select-md text-[17px] bg-[#F6F6F6] border-2 border-[#6A6C7A] w-full max-w-xl">
              <option disabled selected value="">Pilih Bank</option>
              <option value="BRI">BRI</option>
              <option value="Mandiri">Mandiri</option>
              <option value="BNI">BNI</option>
              <option value="BCA">BCA</option>
              <option value="BSI">BSI</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <!-- Nomor Rekening -->
          <div class="col-span-2 grid grid-cols-3 items-center">
            <p class="font-bold">Nomor rekening</p>
            <input type="text" placeholder="Type here" class="col-span-2 input input-bordered input-sm text-[17px] py-5 bg-[#F6F6F6] border-2 border-[#6A6C7A] px-2 rounded-lg w-full max-w-xl" />
          </div>

          <!-- Atas Nama -->
          <div class="col-span-2 grid grid-cols-4 items-center">
            <p class="font-bold">Atas Nama</p>
            <input type="text" placeholder="Type here" class="col-span-3 input input-bordered input-sm text-[17px] py-5 bg-[#F6F6F6] border-2 border-[#6A6C7A] px-2 rounded-lg w-full max-w-xl" />
          </div>
        </div>
      </div>

      <div v-if="selectedOption == 'Lainnya'" class="grid grid-cols-5 gap-x-5 mt-4">
        <div class="grid grid-cols-3 text-[#6A6C7A] items-center">
          <p class="font-bold">Lainnya</p>
          <input type="text" placeholder="Type here" class="col-span-2 input input-bordered input-sm text-[17px] py-5 bg-[#F6F6F6] border-2 border-[#6A6C7A] px-2 rounded-lg w-full max-w-xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: '',
    };
  },
};
</script>

<style scoped></style>
