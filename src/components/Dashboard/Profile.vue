<template>
  <div class="bg-[#ebf3f5] min-h-fit flex justify-center">
    <div class="w-[1660px] my-6 mx-20">
      <!-- Edit Icon and My Profile Text -->
      <div class="flex items-center space-x-6 my-4">
        <img src="../../assets/icon/edit.svg" alt="Edit Icon" class="w-12 h-12 text-[#1A5796]" />
        <h1 class="text-[#1A5796] font-poppins text-4xl" style="line-height: 60px">My Profile</h1>
      </div>

      <!-- My Profile -->
      <div class="grid grid-cols-3 my-8 h-[512px]">
        <!-- Foto Profil, Nama, dan NIM -->
        <div class="grid-flow-col col-span-1 bg-[#FFFFFF] text-[#1A5796] shadow-lg">
          <div class="grid grid-rows-5">
            <div class="grid row-span-4 items-center justify-center">
              <img src="../../assets/icon/account.svg" alt="User Photo" class="w-[300px] object-cover" />
            </div>
            <div class="text-center mt-3">
              <p class="font-bold text-[30px]">Himacad Rijifen</p>
              <p class="text-[24px]">2112999</p>
            </div>
          </div>
        </div>

        <!-- Detail Profil -->
        <div class="grid col-span-2 bg-[#FFFFFF] text-[#1A5796] text-[20px] ml-16 h-[512px] shadow-lg">
          <!-- Tab Detail Profil dan Ubah Password -->
          <div class="grid grid-cols-4 font-semibold text-[#ebf3f5]">
            <button
              @click="activeTabOne"
              class="text-nowrap p-4 border-b-2"
              :class="{ 'border-b-[#1A5796] text-[#1A5796]': activeTab === 'detailProfile', 'border-b-2': activeTab !== 'detailProfile' }"
              aria-selected="activeTab === 'detailProfile'"
            >
              Detail Profile
            </button>

            <button @click="activeTabTwo" class="text-nowrap p-4 border-b-2" :class="{ 'border-b-[#1A5796] text-[#1A5796]': activeTab === 'ubahPassword', 'border-b-2': activeTab !== 'ubahPassword' }">Ubah Password</button>

            <div class="col-span-2 border-b-2"></div>
          </div>

          <div class="grid grid-rows-1">
            <!-- Tab Detail Profil -->
            <div v-if="activeTab === 'detailProfile'" class="h-full m-8" role="tab">
              <!-- Informasi User -->
              <div class="grid grid-rows-5 gap-y-8 text-[#6A6C7A]">
                <!-- Nama Lengkap -->
                <div class="grid grid-cols-3">
                  <p class="font-bold">Nama Lengkap</p>
                  <p>Himacad Rijifen</p>
                </div>

                <!-- Kelas -->
                <div class="grid grid-cols-3">
                  <p class="font-bold">Kelas</p>
                  <p>3SI1</p>
                </div>

                <!-- NIM -->
                <div class="grid grid-cols-3">
                  <p class="font-bold">NIM</p>
                  <p>222112999</p>
                </div>

                <!-- Email -->
                <div class="grid grid-cols-3">
                  <p class="font-bold">Email</p>
                  <p>kelompok1@gmail.com</p>
                </div>

                <!-- No HP -->
                <div class="grid grid-cols-3">
                  <p class="font-bold">No HP</p>
                  <p>082143658709</p>
                </div>
              </div>

              <!-- Button Edit Profile -->
              <div class="flex justify-end">
                <router-link to="/dashboard/edit-profile" class="w-1/4 nav-link bg-[#1A5796] text-center text-[#FFFFFF] rounded-md mt-6" :active-class="'active-link'">
                  <button class="p-4 font-semibold">Edit Profil</button>
                </router-link>
              </div>
            </div>

            <!-- Tab Ubah Password -->
            <div v-if="activeTab === 'ubahPassword'" class="m-8" role="tab">
              <div class="grid grid-rows-5 text-[#6A6C7A]">
                <!-- Password Lama -->
                <div class="grid grid-cols-3 items-center">
                  <p>Password Lama</p>
                  <div class="col-span-2 grid grid-cols-7 w-full items-center border-2 rounded-lg">
                    <input v-model="passwordLama" :type="passwordLamaVisible ? 'text' : 'password'" class="col-span-6 bg-transparent input w-full" />
                    <div class="grid w-full justify-center object-center">
                      <img v-if="passwordLamaVisible === false" @click="togglePasswordLamaVisibility" src="../../assets/icon/invisible.svg" class="h-10 p-2 cursor-pointer" alt="Toggle Password Visibility" />
                      <img v-if="passwordLamaVisible === true" @click="togglePasswordLamaVisibility" src="../../assets/icon/visible.svg" class="h-9 p-2 cursor-pointer" alt="Toggle Password Visibility" />
                    </div>
                  </div>
                </div>

                <!-- Password Baru -->
                <div class="grid grid-cols-3 items-center">
                  <p>Password Baru</p>
                  <div class="col-span-2 grid grid-cols-7 w-full items-center border-2 rounded-lg">
                    <input v-model="passwordBaru" :type="passwordBaruVisible ? 'text' : 'password'" class="col-span-6 bg-transparent input w-full" />
                    <div class="grid w-full justify-center object-center">
                      <img v-if="passwordBaruVisible === false" @click="togglePasswordBaruVisibility" src="../../assets/icon/invisible.svg" class="h-10 p-2 cursor-pointer" alt="Toggle Password Visibility" />
                      <img v-if="passwordBaruVisible === true" @click="togglePasswordBaruVisibility" src="../../assets/icon/visible.svg" class="h-9 p-2 cursor-pointer" alt="Toggle Password Visibility" />
                    </div>
                  </div>
                </div>

                <!-- Konfirmasi Password Baru -->
                <div class="grid grid-cols-3 items-center">
                  <p>Konfirmasi Password Baru</p>
                  <div class="col-span-2 grid grid-cols-7 w-full items-center border-2 rounded-lg">
                    <input v-model="konfirmasiPassword" :type="konfirmasiPasswordVisible ? 'text' : 'password'" class="col-span-6 bg-transparent input w-full"/>
                    <div class="grid w-full justify-center object-center">
                      <img v-if="konfirmasiPasswordVisible === false" @click="toggleKonfirmasiPasswordVisibility" src="../../assets/icon/invisible.svg" class="h-10 p-2 cursor-pointer" alt="Toggle Password Visibility" />
                      <img v-if="konfirmasiPasswordVisible === true" @click="toggleKonfirmasiPasswordVisibility" src="../../assets/icon/visible.svg" class="h-9 p-2 cursor-pointer" alt="Toggle Password Visibility" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Button Ubah Password -->
              <div class="flex justify-end">
                <button @click="$emit('show-success-popup')" class="w-1/3 bg-[#1A5796] text-center text-[#FFFFFF] rounded-md p-4 text-nowrap font-semibold">Ubah Password</button>
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
export default {
  data() {
    return {
      activeTab: "detailProfile",
      passwordLamaVisible: false,
      passwordBaruVisible: false,
      konfirmasiPasswordVisible: false,
    };
  },
  methods: {
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
