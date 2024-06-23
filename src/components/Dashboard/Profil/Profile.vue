<template>
  <div class="bg-[#ebf3f5] justify-center">
    <div class="grid  lg:grid-rows-1 py-6 mx-8 lg:mx-20 ">
      <!-- Edit Icon and My Profile Text -->
      <div class="row-span-1 grid grid-flow-col grid-cols-8 md:grid-cols-10 items-center my-4">
        <img src="@/assets/icon/edit.svg" alt="Edit Icon" class="w-8 md:w-12 h-8 md:h-12 text-[#1A5796]" />
        <h1 class="col-span-9 text-[#1A5796] font-poppins text-[24px] lg:text-4xl" style="line-height: 60px">My Profile</h1>
      </div>

      <!-- My Profile -->
      <div class="grid grid-cols-1 lg:grid-cols-3 lg:h-[512px]">
        <!-- Foto Profil, Nama, dan NIM -->
        <div class="grid-flow-col lg:col-span-1 py-8 lg:py-0 bg-[#FFFFFF] text-[#1A5796] rounded-lg lg:rounded-none shadow-lg">
          <div class="grid lg:grid-rows-5">
            <div class="grid lg:row-span-4 items-center justify-center">
              <img src="@/assets/icon/account.svg" alt="User Photo" class="w-[200px] lg:p-4 lg:w-[300px] object-cover" />
            </div>
            <div class="text-center mt-3">
              <p class="font-bold text-[24px] lg:text-[26px] xl:text-[30px]">Himacad Rijifen</p>
              <p class="text-[18px] lg:text-[24px]">222112999</p>
            </div>
          </div>
        </div>

        <!-- Detail Profil -->
        <div class="lg:row-span-1 grid lg:col-span-2 bg-[#FFFFFF] text-[#1A5796] my-8 lg:my-0 lg:ml-16 lg:h-[512px] rounded-lg lg:rounded-none shadow-lg">
          <!-- Tab Detail Profil dan Ubah Password -->
          <div class="grid grid-cols-2 lg:grid-cols-3 font-semibold text-[#ebf3f5] text-[16px] sm:text-[18px] lg:text-[20px]">
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

          <div class="grid grid-rows-1 text-[15px] lg:text-[17px] xl:text-[20px]">
            <!-- Tab Detail Profil -->
            <div v-if="activeTab === 'detailProfile'" class="grid grid-rows-1 m-8" role="tab">
              <!-- Informasi User -->
              <div class="grid grid-rows-5 gap-y-5 lg:gap-y-8 text-[#6A6C7A] ">
                <!-- Nama Lengkap -->
                <div class="grid lg:grid-cols-5">
                  <p class="lg:col-span-2 font-bold">Nama Lengkap</p>
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
                  <router-link to="/dashboard/edit-profile" class="grid col-start-4 col-end-7 md:col-start-6 md:col-span-2 nav-link lg:col-start-4 lg:col-end-6 bg-[#1A5796] text-center text-[#FFFFFF] rounded-md" :active-class="'active-link'">
                    <button class="py-2 md:p-4 font-semibold">Edit Profil</button>
                  </router-link>
                </div>
              </div>

            </div>

            <!-- Tab Ubah Password -->
            <div v-if="activeTab === 'ubahPassword'" class="grid grid-rows-1 m-8" role="tab">
              <div class="grid lg:grid-rows-4 gap-y-5 lg:gap-y-4 text-[#6A6C7A]">
                <!-- Password Lama -->
                <div class="grid xl:grid-cols-3 items-center">
                  <p>Password Lama</p>
                  <div class="col-span-2 grid grid-cols-7 w-full items-center border-2 rounded-lg">
                    <input v-model="passwordLama" :type="passwordLamaVisible ? 'text' : 'password'" class="col-span-6 bg-transparent input w-full" />
                    <div class="grid w-full justify-center object-center">
                      <img v-if="passwordLamaVisible === false" @click="togglePasswordLamaVisibility" src="@/assets/icon/invisible.svg" class="h-10 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                      <img v-if="passwordLamaVisible === true" @click="togglePasswordLamaVisibility" src="@/assets/icon/visible.svg" class="h-9 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                    </div>
                  </div>
                </div>

                <!-- Password Baru -->
                <div class="grid xl:grid-cols-3 items-center">
                  <p>Password Baru</p>
                  <div class="col-span-2 grid grid-cols-7 w-full items-center border-2 rounded-lg">
                    <input v-model="passwordBaru" :type="passwordBaruVisible ? 'text' : 'password'" class="col-span-6 bg-transparent input w-full" />
                    <div class="grid w-full justify-center object-center">
                      <img v-if="passwordBaruVisible === false" @click="togglePasswordBaruVisibility" src="@/assets/icon/invisible.svg" class="h-10 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                      <img v-if="passwordBaruVisible === true" @click="togglePasswordBaruVisibility" src="@/assets/icon/visible.svg" class="h-9 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                    </div>
                  </div>
                </div>

                <!-- Konfirmasi Password Baru -->
                <div class="grid xl:grid-cols-3 items-center">
                  <p>Konfirmasi Password Baru</p>
                  <div class="lg:col-span-2 grid grid-cols-7 w-full items-center border-2 rounded-lg">
                    <input v-model="konfirmasiPassword" :type="konfirmasiPasswordVisible ? 'text' : 'password'" class="col-span-6 bg-transparent input w-full"/>
                    <div class="grid w-full justify-center object-center">
                      <img v-if="konfirmasiPasswordVisible === false" @click="toggleKonfirmasiPasswordVisibility" src="@/assets/icon/invisible.svg" class="h-10 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                      <img v-if="konfirmasiPasswordVisible === true" @click="toggleKonfirmasiPasswordVisibility" src="@/assets/icon/visible.svg" class="h-9 pr-2 min-[425px]:p-2 cursor-pointer" alt="Toggle Password Visibility" />
                    </div>
                  </div>
                </div>

                <!-- Button Ubah Password -->
                <div class="grid lg:grid-cols-7 xl:grid-cols-8 mt-5 lg:justify-end">
                  <button @click="$emit('show-success-popup')" class="w-full lg:col-start-5 xl:col-start-6 lg:col-end-8 xl:col-end-9 bg-[#1A5796] text-center text-[#FFFFFF] rounded-md p-4 text-nowrap font-semibold">Ubah Password</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: "Profile",
  data() {
    return {
      activeTab: "detailProfile",
      passwordLamaVisible: false,
      passwordBaruVisible: false,
      konfirmasiPasswordVisible: false,
    };
  },
  computed: {
    ...mapState('mahasiswa', ['mahasiswa']),
    ...mapGetters('mahasiswa', ['mahasiswa']),
  },
  methods: {
    ...mapActions('mahasiswa', ['updateMahasiswa']),
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
  },
};
</script>

<style scoped></style>
