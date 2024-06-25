<template>
  <div class="bg-[#ebf3f5] justify-center">
    <div :class="['h-auto', 'bg-[#EBF3F5]', 'rounded-lg', 'p-8', 'pt-0', 'md:px-0', widthClass]" class="grid lg:grid-rows-1 pb-12 lg:mx-20 sm:text-[1.15rem] leading-[1.875rem] text-[#1A5796]">
      <!-- Edit Icon and My Profile Text -->
      <div class="flex items-center space-x-6 my-4">
        <img src="@/assets/icon/edit.svg" alt="Edit Icon" class="w-8 md:w-10 h-8 md:h-10" />
        <h1 class="ml-5 font-poppins text-[1.85rem]" style="line-height: 60px">My Profile</h1>
      </div>

      <!-- My Profile -->
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:h-4/5">
        <!-- Foto Profil, Nama, dan NIM -->
        <div class="grid-flow-col lg:col-span-1 items-center py-8 lg:py-auto bg-[#FFFFFF] rounded-lg lg:rounded-none shadow-lg">
          <div class="grid lg:grid-rows-auto items-center">
            <div class="grid lg:row-span-4 items-center justify-center mb-7">
              <img :src="`/mahasiswa/${mahasiswa.foto}`" alt="User Photo" class="w-[200px] lg:p-4 lg:w-[300px] rounded-full object-cover" />
            </div>
            <div class="grid grid-flow-row items-center text-center">
              <p class="grid font-bold text-[1.5rem]">{{ mahasiswa.namaLengkap }}</p>
              <p class="grid text-[1.25rem]">{{ mahasiswa.nim }}</p>
            </div>
          </div>
        </div>

        <!-- Detail Profil -->
        <div class="lg:row-span-1 grid lg:col-span-2 bg-[#FFFFFF] my-8 lg:my-0 lg:ml-16 rounded-lg lg:rounded-none shadow-lg">
          <!-- Tab Detail Profil dan Ubah Password -->
          <div class="grid grid-cols-2 lg:grid-cols-3 font-semibold text-[#ebf3f5]">
            <button
              @click="activeTabOne"
              class="text-wrap sm:text-nowrap p-2 py-4 border-b-2"
              :class="{ 'border-b-[#1A5796] text-[#1A5796]': activeTab === 'detailProfile', 'border-b-2': activeTab !== 'detailProfile' }"
              aria-selected="activeTab === 'detailProfile'"
            >
              Detail Profile
            </button>

            <button @click="activeTabTwo" class="text-wrap sm:text-nowrap p-2 py-4 border-b-2" :class="{ 'border-b-[#1A5796] text-[#1A5796]': activeTab === 'ubahPassword', 'border-b-2': activeTab !== 'ubahPassword' }">Ubah Password</button>

            <div class="hidden lg:grid lg:col-span-1 lg:border-b-2"></div>
          </div>

          <div class="grid grid-rows-1">
            <!-- Tab Detail Profil -->
            <div v-if="activeTab === 'detailProfile'" class="grid grid-rows-1 m-8" role="tab">
              <!-- Informasi User -->
              <div class="grid grid-rows-5 gap-y-5 lg:gap-y-8 text-[#6A6C7A]">
                <!-- Nama Lengkap -->
                <div class="grid lg:grid-cols-5">
                  <p class="lg:col-span-2 font-bold">Nama</p>
                  <p class="lg:col-span-3">{{ mahasiswa.namaLengkap }}</p>
                </div>

                <!-- Kelas -->
                <div class="grid lg:grid-cols-5">
                  <p class="lg:col-span-2 font-bold">Kelas</p>
                  <p class="lg:col-span-3">{{ mahasiswa.kelas }}</p>
                </div>

                <!-- NIM -->
                <div class="grid lg:grid-cols-5">
                  <p class="lg:col-span-2 font-bold">NIM</p>
                  <p class="lg:col-span-3">{{ mahasiswa.nim }}</p>
                </div>

                <!-- Email -->
                <div class="grid lg:grid-cols-5">
                  <p class="lg:col-span-2 font-bold">Email</p>
                  <p class="lg:col-span-3">{{ mahasiswa.email }}</p>
                </div>

                <!-- No HP -->
                <div class="grid lg:grid-cols-5">
                  <p class="lg:col-span-2 font-bold">No HP</p>
                  <p class="lg:col-span-3">{{ mahasiswa.noHp }}</p>
                </div>

                <!-- Button Edit Profile -->
                <div class="grid justify-end grid-cols-6 md:grid-cols-7 lg:grid-cols-5">
                  <router-link
                    to="/dashboard/edit-profile"
                    class="grid col-start-4 col-end-7 md:col-start-6 md:col-span-2 nav-link lg:col-start-4 lg:col-end-6 bg-[#1A5796] text-center text-[#FFFFFF] rounded-md"
                    :active-class="'active-link'"
                  >
                    <button class="py-2 md:p-4 font-semibold">Edit Profil</button>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Tab Ubah Password -->
            <div v-if="activeTab === 'ubahPassword'" class="grid grid-rows-1 m-8" role="tab">
              <form @submit.prevent="validateForm" class="grid lg:grid-rows-auto gap-y-5 lg:gap-y-4 text-[#6A6C7A]">
                <!-- Password Lama -->
                <div class="grid xl:grid-cols-3 items-center">
                  <label>Password Lama</label>
                  <div class="col-span-2 grid grid-cols-7 w-full items-center border-2 rounded-lg focus-within:border-[#6A6C7A]" :class="inputClass(passwordLamaError)">
                    <input v-model="passwordLama" :type="passwordLamaVisible ? 'text' : 'password'" placeholder="Masukkan password lama" class="col-span-6 bg-transparent input focus:outline-none focus:outline-0 focus:border-none w-full" />
                    <div class="grid w-full justify-center object-center">
                      <img v-if="passwordLamaVisible === false" @click="togglePasswordLamaVisibility" src="@/assets/icon/invisible.svg" class="h-10 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                      <img v-if="passwordLamaVisible === true" @click="togglePasswordLamaVisibility" src="@/assets/icon/visible.svg" class="h-9 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                    </div>
                  </div>
                  <span v-if="passwordLamaError" class="label-text-alt text-red-500">{{ passwordLamaError }}</span>
                </div>

                <!-- Password Baru -->
                <div class="grid xl:grid-cols-3 items-center">
                  <label>Password Baru</label>
                  <div class="col-span-2 grid grid-cols-7 w-full items-center border-2 rounded-lg focus-within:border-[#6A6C7A]" :class="inputClass(passwordBaruError)">
                    <input v-model="passwordBaru" :type="passwordBaruVisible ? 'text' : 'password'" placeholder="Masukkan password baru" class="col-span-6 bg-transparent input focus:outline-none focus:outline-0 focus:border-none w-full" />
                    <div class="grid w-full justify-center object-center">
                      <img v-if="passwordBaruVisible === false" @click="togglePasswordBaruVisibility" src="@/assets/icon/invisible.svg" class="h-10 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                      <img v-if="passwordBaruVisible === true" @click="togglePasswordBaruVisibility" src="@/assets/icon/visible.svg" class="h-9 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                    </div>
                  </div>
                  <span v-if="!passwordBaruError" class="label-text-alt text-[#1A5796] pl-1 xl:col-start-2 xl:col-span-2">Password baru harus terdiri dari minimal 8 karakter, 1 angka, 1 huruf kapital, 1 huruf kecil, dan 1 karakter khusus</span>
                  <span v-if="passwordBaruError" class="label-text-alt text-red-500">{{ passwordBaruError }}</span>
                </div>

                <!-- Konfirmasi Password Baru -->
                <div class="grid xl:grid-cols-3 items-center">
                  <label>Konfirmasi Password Baru</label>
                  <div class="lg:col-span-2 grid grid-cols-7 w-full items-center border-2 rounded-lg focus-within:border-[#6A6C7A]" :class="inputClass(konfirmasiPasswordBaruError)">
                    <input v-model="konfirmasiPasswordBaru" :type="konfirmasiPasswordVisible ? 'text' : 'password'" placeholder="Masukkan konfirmasi password baru" class="col-span-6 bg-transparent input focus:outline-none focus:outline-0 focus:border-none w-full" />
                    <div class="grid w-full justify-center object-center">
                      <img v-if="konfirmasiPasswordVisible === false" @click="toggleKonfirmasiPasswordVisibility" src="@/assets/icon/invisible.svg" class="h-10 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                      <img v-if="konfirmasiPasswordVisible === true" @click="toggleKonfirmasiPasswordVisibility" src="@/assets/icon/visible.svg" class="h-9 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                    </div>
                  </div>
                  <span v-if="!konfirmasiPasswordBaruError" class="label-text-alt text-[#1A5796] pl-1 xl:col-start-2 xl:col-span-2">Konfirmasi password baru harus sama dengan password baru</span>
                  <span v-if="konfirmasiPasswordBaruError" class="label-text-alt text-red-500">{{ konfirmasiPasswordBaruError }}</span>
                </div>

                <!-- Button Ubah Password -->
                <div class="grid lg:grid-cols-7 xl:grid-cols-8 lg:justify-end">
                  <button
                    :disabled="!isFormValid"
                    :class="{ 'bg-[#ebf3f5]': isFormValid === false }"
                    @click="$emit('show-confirmation-popup')"
                    class="w-full lg:col-start-5 xl:col-start-6 lg:col-end-8 xl:col-end-9 bg-[#1A5796] text-center text-[#FFFFFF] rounded-md p-4 text-nowrap font-semibold"
                  >
                    Ubah Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Profile",
  components: {},
  data() {
    return {
      activeTab: "detailProfile",
      passwordLamaVisible: false,
      passwordBaruVisible: false,
      konfirmasiPasswordVisible: false,
      passwordLama: "",
      passwordBaru: "",
      konfirmasiPasswordBaru: "",
      passwordLamaError: "",
      passwordBaruError: "",
      konfirmasiPasswordBaruError: "",
    };
  },
  computed: {
    ...mapState("mahasiswa", ["mahasiswa"]),
    ...mapGetters("mahasiswa", ["mahasiswa"]),
    isFormValid() {
      return this.passwordLama !== "" && this.passwordBaru !== "" && this.konfirmasiPasswordBaru !== "" && this.passwordBaru === this.konfirmasiPasswordBaru && this.validPassword(this.passwordBaru);
    },
    inputClass() {
      return (error) => (error ? "input-error " : "");
    },
  },
  methods: {
    ...mapActions("mahasiswa", ["updateMahasiswa"]),
    togglePasswordLamaVisibility() {
      this.passwordLamaVisible = !this.passwordLamaVisible;
    },
    togglePasswordBaruVisibility() {
      this.passwordBaruVisible = !this.passwordBaruVisible;
    },
    toggleKonfirmasiPasswordVisibility() {
      this.konfirmasiPasswordVisible = !this.konfirmasiPasswordVisible;
    },
    activeTabOne() {
      this.activeTab = "detailProfile";
    },
    activeTabTwo() {
      this.activeTab = "ubahPassword";
    },
    validateForm() {
      this.passwordLamaError = "";
      this.passwordBaruError = "";
      this.konfirmasiPasswordBaruError = "";

      // Validasi Password Lama
      if (!this.passwordLama) {
        this.passwordLamaError = "Password lama tidak boleh kosong.";
      }

      // Validasi Password Baru
      if (!this.passwordBaru) {
        this.passwordBaruError = "Password baru tidak boleh kosong.";
      } else if (!this.validPassword(this.passwordBaru)) {
        this.passwordBaruError = "Password baru harus terdiri dari minimal 8 karakter dan mengandung angka, karakter khusus, dan huruf kapital.";
      }

      // Validasi Konfirmasi Password Baru
      if (!this.konfirmasiPasswordBaru) {
        this.konfirmasiPasswordBaruError = "Konfirmasi password baru tidak boleh kosong.";
      } else if (this.konfirmasiPasswordBaru !== this.passwordBaru) {
        this.konfirmasiPasswordBaruError = "Konfirmasi password baru tidak cocok dengan password baru.";
      }
    },
    validPassword(password) {
      // Minimal 8 karakter, minimal satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus
      const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{}|\\;:'",.<>?/`~])[A-Za-z\d!@#$%^&*()_\-+=\[\]{}|\\;:'",.<>?/`~]{8,}$/;
      return re.test(password);
    },
  },
};
</script>

<style scoped></style>
