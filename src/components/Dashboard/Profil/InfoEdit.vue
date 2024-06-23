<template>
  <div class="min-h-fit text-[#6A6C7A]">
    <div class="grid lg:grid-rows-1 pb-12 text-[1.15rem] leading-[1.875rem]">
      <!-- Judul halaman -->
      <div class="flex items-center space-x-6 my-4">
        <img src="@/assets/icon/edit.svg" alt="Edit Icon" class="w-8 lg:w-10 h-8 lg:h-10" />
        <h1 class="text-[#1A5796] font-poppins text-[1.85rem]" style="line-height: 60px">My Profile/Edit</h1>
      </div>

      <!-- Informasi Teks User -->
      <div class="grid lg:grid-cols-3 lg:max-xl:gap-x-12 xl:gap-x-2">
        <!-- Foto Device Small -->
        <div class="grid lg:hidden justify-center">
          <div class="relative w-fit mb-6">
            <img :src="`/mahasiswa/${mahasiswa.foto}`" alt="User Photo" class="border-4 border-[#6A6C7A] rounded-full w-[200px] md:w-[250px] h-[200px] md:h-[250px] object-center object-cover" />
            <button @click="triggerFileInput" class="absolute bottom-1 md:bottom-4 right-1 rounded-full p-5 w-fit">
              <img src="@/assets/icon/camera.svg" alt="User Photo" class="scale-150" />
            </button>
            <input type="file" ref="fileInput" @change="handleFileChange" class="hidden" />
          </div>
        </div>

        <div class="grid lg:col-span-2 gap-y-3">
          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">Email</p>
            <input
              v-model="mahasiswa.email"
              type="text"
              placeholder="Email"
              class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 input-sm text-[1rem] px-2 py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl"
              disabled
            />
          </div>

          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">Nama</p>
            <input
              v-model="mahasiswa.namaLengkap"
              type="text"
              placeholder="Nama Lengkap"
              class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 input-sm text-[1rem] px-2 py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl"
              disabled
            />
          </div>

          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">NIM</p>
            <input
              v-model="mahasiswa.nim"
              type="text"
              placeholder="NIM"
              class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 input-sm text-[1rem] px-2 py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl"
              disabled
            />
          </div>

          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">Kelas</p>
            <input
              v-model="mahasiswa.kelas"
              type="text"
              placeholder="Kelas"
              class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 input-sm text-[1rem] px-2 py-5 bg-[#C8D6DF] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl"
              disabled
            />
          </div>

          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">No. HP</p>
            <input
              v-model="mahasiswa.noHp"
              type="text"
              placeholder="Type here"
              class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 input-sm text-[1rem] px-2 py-5 bg-[#F6F6F6] border-2 border-[#6A6C7A] rounded-lg w-full max-w-xl"
            />
          </div>

          <div class="grid min-[425px]:grid-cols-8 lg:grid-cols-5 items-center">
            <p class="min-[425px]:col-span-2 lg:col-span-1 font-bold">Provider</p>
            <select class="min-[425px]:col-start-3 min-[425px]:col-end-9 lg:col-span-4 select select-bordered select-md text-[1rem] bg-[#F6F6F6] border-2 border-[#6A6C7A] w-full max-w-xl">
              <option disabled selected>Pilih Provider</option>
              <option v-for="provider in providers">{{ provider }}</option>
            </select>
          </div>
        </div>

        <!-- Foto User -->
        <div class="hidden lg:grid grid-cols-4 xl:gap-y-3 items-center">
          <div class="col-span-3 lg:max-xl:col-span-4 col-start-2 grid justify-center rounded-none border-2 border-[#6A6C7A] p-2 lg:relative lg:max-xl:mb-4">
            <img :src="`/mahasiswa/${mahasiswa.foto}`" alt="User Photo" class="rounded-full w-[300px] object-center object-cover" />
          </div>

          <div class="grid lg:grid-cols-4 lg:col-span-4 items-center w-full ">
            <div class="grid lg:col-span-4 xl:col-span-1 font-bold">Foto Profil</div>
            <label for="file-upload" class="grid grid-flow-col lg:col-span-4 xl:col-start-2 xl:col-span-3 cursor-pointer text-[1rem]">
              <span class="grid col-span-3 bg-[#F6F6F6] border-2 rounded-tl-lg rounded-bl-lg border-[#6A6C7A] p-2">Pilih file...</span>
              <span class="grid bg-[#C8D6DF] border-2 border-l-0 rounded-tr-lg rounded-br-lg border-[#6A6C7A] p-2 text-center">Browse</span>
              <input id="file-upload" type="file" class="hidden" accept=".jpeg,.jpg,.webp,.png" @change="onFileChange" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "InfoEdit",
  computed: {
    ...mapState("mahasiswa", ["mahasiswa"]),
    ...mapGetters("mahasiswa", ["mahasiswa"]),
  },
  data() {
    return {
      fileName: "",
      providers: ["Axis", "Indosat", "Telkomsel", "Tri", "XL", "By.U", "Smartfren"],
    };
  },
  methods: {
    ...mapActions("mahasiswa", ["updateMahasiswa"]),
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      const validImageTypes = ["image/gif", "image/jpeg", "image/png", "image/webp"];

      if (file) {
        if (validImageTypes.includes(file.type)) {
          this.fileName = file.name;
          this.errorMessage = "";
        } else {
          this.fileName = "";
          this.errorMessage = "Hanya file gambar yang diperbolehkan!";
        }
      }
    },
  },
};
</script>

<style scoped></style>
