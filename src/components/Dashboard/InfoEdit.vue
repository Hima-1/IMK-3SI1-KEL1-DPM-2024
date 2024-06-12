<template>
  <div class="min-h-fit text-[#6A6C7A]">
    <div class="py-6">
      <!-- Judul halaman -->
      <div class="flex items-center space-x-6 my-4">
        <img src="../../assets/icon/edit.svg" alt="Edit Icon" class="w-12 h-12 text-[#1A5796]" />
        <h1 class="text-[#1A5796] font-poppins text-4xl" style="line-height: 60px">My Profile/Edit</h1>
      </div>

      <!-- Informasi Teks User -->
      <div class="grid grid-cols-3">
        <div class="grid col-span-2 text-[18px]">
          <div class="grid grid-cols-5 items-center">
            <p class="font-bold">Email</p>
            <input type="text" placeholder="You can't touch this" class="col-span-4 input-sm text-[17px] py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] px-2 rounded-lg w-full max-w-xl" disabled />
          </div>

          <div class="grid grid-cols-5 items-center">
            <p class="font-bold">Nama</p>
            <input type="text" placeholder="You can't touch this" class="col-span-4 input-sm text-[17px] py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] px-2 rounded-lg w-full max-w-xl" disabled />
          </div>

          <div class="grid grid-cols-5 items-center">
            <p class="font-bold">NIM</p>
            <input type="text" placeholder="You can't touch this" class="col-span-4 input-sm text-[17px] py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] px-2 rounded-lg w-full max-w-xl" disabled />
          </div>

          <div class="grid grid-cols-5 items-center">
            <p class="font-bold">Kelas</p>
            <input type="text" placeholder="You can't touch this" class="col-span-4 input-sm text-[17px] py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] px-2 rounded-lg w-full max-w-xl" disabled />
          </div>

          <div class="grid grid-cols-5 items-center">
            <p class="font-bold">No. HP</p>
            <input type="text" placeholder="Type here" class="col-span-4 input-sm text-[17px] py-5 bg-[#F6F6F6] border-2 border-[#6A6C7A] px-2 rounded-lg w-full max-w-xl" />
          </div>

          <div class="grid grid-cols-5 items-center">
            <p class="font-bold">Provider</p>
            <select class="col-span-4 select select-bordered select-md text-[17px] bg-[#F6F6F6] border-2 border-[#6A6C7A] w-full max-w-xl">
              <option disabled selected>Pilih Provider</option>
              <option>Axis</option>
              <option>Indosat</option>
              <option>Telkomsel</option>
              <option>Tri</option>
              <option>XL</option>
              <option>By.U</option>
              <option>Smartfren</option>
            </select>
          </div>
        </div>

        <!-- Foto User -->
        <div class="grid grid-cols-3 gap-4 text-[18px] items-center">
          <div class="col-span-2 col-start-2 col-end-4">
            <img src="../../assets/icon/account.svg" alt="User Photo" class="border-2 border-[#6A6C7A] p-2 w-[300px] object-center object-contain" />
          </div>

            <div class="font-bold">Foto Profil</div>
            <div class="col-span-2">
              <input type="file" class="file-input file-input-md file-input-bordered w-full file:bg-[#C8D6DF] file:border-none file:text-[#6A6C7A] bg-[#F6F6F6] border-2 border-[#6A6C7A]"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped></style>
