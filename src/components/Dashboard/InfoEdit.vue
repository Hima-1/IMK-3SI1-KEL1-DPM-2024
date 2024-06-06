<template>
  <div class="bg-[#ebf3f5] min-h-fit">
    <!-- Judul halaman -->
    <div class="flex items-center space-x-6 my-4">
      <img src="../../assets/icon/edit.svg" alt="Edit Icon" class="w-12 h-12 text-[#1A5796]" />
      <h1 class="text-[#1A5796] font-poppins text-4xl" style="line-height: 60px">My Profile</h1>
    </div>

    <!-- Informasi Teks User -->
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <div class="grid grid-cols-3">
          <p>Email</p>
          <input type="text" placeholder="You can't touch this" class="col-span-2 input input-bordered w-full max-w-md" disabled />
        </div>

        <div class="grid grid-cols-3">
          <p>Nama</p>
          <input type="text" placeholder="You can't touch this" class="col-span-2 input input-bordered w-full max-w-md" disabled />
        </div>

        <div class="grid grid-cols-3">
          <p>NIM</p>
          <input type="text" placeholder="You can't touch this" class="col-span-2 input input-bordered w-full max-w-md" disabled />
        </div>

        <div class="grid grid-cols-3">
          <p>Kelas</p>
          <input type="text" placeholder="You can't touch this" class="col-span-2 input input-bordered w-full max-w-md" disabled />
        </div>

        <div class="grid grid-cols-3">
          <p>No. HP</p>
          <input type="text" placeholder="Type here" class="col-span-2 input input-bordered w-full max-w-md" />
        </div>

        <div class="grid grid-cols-3">
          <p>Provider</p>
          <input type="text" placeholder="Type here" class="col-span-2 input input-bordered w-full max-w-md" />
        </div>
      </div>

      <!-- Foto User -->
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-2 justify-self-end">
          <img src="../../assets/icon/account.svg" alt="User Photo" class="" />
        </div>
        <div>Foto Profil</div>
        <div>
          <input type="file" class="file-input file-input-bordered w-full max-w-xs" />
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped></style>
