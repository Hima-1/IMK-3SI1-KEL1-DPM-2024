<template>
  <div class="">
    <div class="py-6 text-[1rem] leading-[1.875rem]">
      <!-- Judul dan Deskripsi -->
      <div class="my-4">
        <h1 class="font-poppins text-[#1A5796] text-[1.85rem]">Informasi Rekening</h1>
        <p class="my-4 text-[#2F7DC1]">Pastikan isian rekening sudah benar, mencakup nomor rekening, nama bank yang digunakan, dan atas nama yang sesuai. Rekening mahasiswa harus atas nama pribadi dan pastikan rekening masih aktif</p>
      </div>

      <div class="mt-6">
        <div class="grid grid-cols-1 lg:grid-cols-8 gap-y-3 lg:gap-y-0 lg:gap-x-5 text-[#6A6C7A]">
          <!-- Bank -->
          <div class="col-span-3 lg:col-span-2 grid min-[425px]:grid-cols-8 lg:grid-cols-3 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">Bank</p>
            <select v-model="selectedOption" class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-2 select select-bordered bg-[#F6F6F6] select-md text-[1rem] border-2 border-[#6A6C7A] w-full max-w-xl">
              <option disabled selected value="">Pilih Bank</option>
              <option value="BRI">BRI</option>
              <option value="Mandiri">Mandiri</option>
              <option value="BNI">BNI</option>
              <option value="BCA">BCA</option>
              <option value="BSI">BSI</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div v-if="selectedOption == 'Lainnya'" class="grid lg:hidden grid-cols-1 min-[425px]:max-lg:grid-cols-8">
            <div class="col-span-8 min-[425px]:col-span-6 grid min-[425px]:col-start-3 items-center text-[#6A6C7A]">
              <input type="text" placeholder="Bank Lainnya" class="grid input input-bordered input-sm text-[1rem] px-2 py-5 bg-[#F6F6F6] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl" />
            </div>
          </div>

          <!-- Nomor Rekening -->
          <div class="col-span-3 grid min-[425px]:grid-cols-8 lg:grid-cols-3 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 text-wrap xl:text-nowrap font-bold">Nomor rekening</p>
            <input type="text" placeholder="" class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-2 input input-bordered input-sm text-[1rem] lg:text-[15px] px-2 py-5 bg-[#F6F6F6] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl" />
          </div>

          <!-- Atas Nama -->
          <div class="col-span-3 grid min-[425px]:grid-cols-8 lg:grid-cols-4 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">Atas Nama</p>
            <input type="text" placeholder="" class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-3 input input-bordered input-sm text-[1rem] px-2 py-5 bg-[#F6F6F6] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl" />
          </div>
        </div>
      </div>

      <div v-if="selectedOption == 'Lainnya'" class="hidden lg:grid grid-cols-8 gap-x-5 mt-4">
        <div class="col-span-2 grid grid-cols-3 text-[#6A6C7A] items-center">
          <input type="text" placeholder="Bank Lainnya" class="col-span-2 col-start-2 input input-bordered input-sm text-[17px] px-2 py-5 bg-[#F6F6F6] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoRekening",
  data() {
    return {
      data: { email: "lutfirm@stis.ac.id", nama: "Saifullah Fatah", nim: "212011313", foto: "ketua.webp", jabatan: "KETUA DPM", divisi: "BPH" },
      selectedOption: '',
    };
  },
};
</script>

<style scoped></style>
