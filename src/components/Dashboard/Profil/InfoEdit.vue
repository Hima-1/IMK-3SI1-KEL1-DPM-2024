<template>
  <div class="min-h-fit text-[#6A6C7A]">
    <div class="py-6">
      <!-- Judul halaman -->
      <div class="flex items-center space-x-6 my-4">
        <img src="@/assets/icon/edit.svg" alt="Edit Icon" class="w-8 lg:w-12 h-8 lg:h-12 text-[#1A5796]" />
        <h1 class="text-[#1A5796] font-poppins text-2xl lg:text-4xl" style="line-height: 60px">My Profile/Edit</h1>
      </div>

      <!-- Informasi Teks User -->
      <div class="grid lg:grid-cols-3 lg:max-xl:gap-x-12 xl:gap-x-2">
        <!-- Foto Device Small -->
        <div class="grid lg:hidden justify-center">
          <div class="relative w-fit mb-6">
            <img src="@/assets/icon/account.svg" alt="User Photo" class="border-4 border-[#6A6C7A] rounded-full w-[200px] md:w-[250px] h-[200px] md:h-[250px] object-center object-cover" />
            <div class="absolute bottom-1 md:bottom-4 right-1 bg-[#1A5796] rounded-full p-5 w-fit">
              <img src="@/assets/icon/camera.svg" alt="User Photo" class="scale-150" />
            </div>
          </div>
        </div>

        <div class="grid lg:col-span-2 gap-y-3 text-[18px]">
          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">Email</p>
            <input
              v-model="mahasiswa.email"
              type="text"
              placeholder="Email"
              class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 input-sm text-[16px] md:text-[17px] px-2 py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl"
              disabled
            />
          </div>

          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">Nama Lengkap</p>
            <input
              v-model="mahasiswa.namaLengkap"
              type="text"
              placeholder="Nama Lengkap"
              class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 input-sm text-[16px] md:text-[17px] px-2 py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl"
              disabled
            />
          </div>

          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">NIM</p>
            <input
            v-model="mahasiswa.nim"
              type="text"
              placeholder="NIM"
              class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 input-sm text-[16px] md:text-[17px] px-2 py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl"
              disabled
            />
          </div>

          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">Kelas</p>
            <input
            v-model="mahasiswa.kelas"
              type="text"
              placeholder="Kelas"
              class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 input-sm text-[16px] md:text-[17px] px-2 py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl"
              disabled
            />
          </div>

          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">No. HP</p>
            <input v-model="mahasiswa.noHp" type="text" placeholder="Type here" class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 input-sm text-[16px] md:text-[17px] px-2 py-5 bg-[#F6F6F6] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl" />
          </div>

          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">Provider</p>
            <select class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 select select-bordered select-md text-[16px] md:text-[17px] bg-[#F6F6F6] border-2 border-[#6A6C7A] w-full max-w-xl">
              <option disabled selected>Pilih Provider</option>
              <option v-for="provider in providers">{{ provider }}</option>
            </select>
          </div>
        </div>

        <!-- Foto User -->
        <div class="hidden lg:grid grid-cols-4 gap-y-5 items-center text-[18px]">
          <div class="col-span-3 lg:max-xl:col-span-4 col-start-2 grid justify-center lg:relative lg:max-xl:mb-4">
            <img src="@/assets/icon/account.svg" alt="User Photo" class="border-2 rounded-none border-[#6A6C7A] p-2 w-[300px] object-center object-cover" />
          </div>

          <div class="grid lg:max-xl:grid-rows-2 col-span-4 items-center">
            <div class="grid lg:max-xl:col-span-4 font-bold pr-3">Foto Profil</div>
            <input type="file" class="lg:max-xl:col-span-4 col-start-2 grid file-input file-input-md file-input-bordered w-full file:bg-[#C8D6DF] file:border-none file:text-[#6A6C7A] bg-[#F6F6F6] border-2 border-[#6A6C7A]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: "InfoEdit",
  computed: {
    ...mapState('mahasiswa', ['mahasiswa']),
    ...mapGetters('mahasiswa', ['mahasiswa']),
  },
  data() {
    return {
      providers: ["Axis", "Indosat", "Telkomsel", "Tri", "XL", "By.U", "Smartfren"],
    };
  },
  methods: {
    ...mapActions('mahasiswa', ['updateMahasiswa']),
  },
};
</script>

<style scoped></style>
