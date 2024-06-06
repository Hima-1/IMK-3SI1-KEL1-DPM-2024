<template>
  <div class="bg-[#ebf3f5] min-h-fit">
    <!-- Judul dan Deskripsi -->
    <div>
      <h1 class="text-[#1A5796]">Informasi Rekening</h1>
      <p class="text-[#2F7DC1]">Pastikan isian rekening sudah benar, mencakup nomor rekening, nama bank yang digunakan, dan atas nama yang sesuai. Rekening mahasiswa harus atas nama pribadi dan pastikan rekening masih aktif</p>
    </div>

    <div>
      <div class="grid grid-cols-3 text-[#6A6C7A]">
        <!-- Bank -->
        <div class="grid grid-cols-3">
          <p class="font-bold">Bank</p>
          <select class="col-span-2 select select-bordered w-full max-w-xs">
            <option disabled selected>Who shot first?</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>

        <!-- Nomor Rekening -->
        <div class="grid grid-cols-3">
          <p class="font-bold">Nomor rekening</p>
          <input type="text" placeholder="Type here" class="col-span-2 input input-bordered w-full max-w-xs" />
        </div>

        <!-- Atas Nama -->
        <div class="grid grid-cols-3">
          <p class="font-bold">Atas Nama</p>
          <input type="text" placeholder="Type here" class="col-span-2 input input-bordered w-full max-w-xs" />
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button>Simpan</button>
    </div>
  </div>
</template>
<script></script>
<style scoped></style>