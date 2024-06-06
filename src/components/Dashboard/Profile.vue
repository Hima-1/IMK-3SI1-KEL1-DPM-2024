<template>
  <div class="bg-[#ebf3f5] min-h-fit flex justify-center">
    <div class="w-[1660px] my-6 mx-20">
      <!-- Edit Icon and My Profile Text -->
      <div class="flex items-center space-x-6 my-4">
        <img src="../../assets/icon/edit.svg" alt="Edit Icon" class="w-12 h-12 text-[#1A5796]" />
        <h1 class="text-[#1A5796] font-poppins text-4xl" style="line-height: 60px">My Profile</h1>
      </div>

      <!-- My Profile -->
      <div class="flex my-8 h-[512px]">
        <!-- Foto Profil, Nama, dan NIM -->
        <div class="flex-col justify-center content-center bg-[#FFFFFF] text-[#1A5796] p-16 w-1/3">
          <div class="flex-col w-full content-center">
            <img src="../../assets/icon/account.svg" alt="User Photo" class="border-none my-12 w-full" />
            <div class="flex-col w-full text-center mt-6">
              <p class="font-bold text-[30px]">Himacad Rijifen</p>
              <p class="text-[24px]">2112999</p>
            </div>
          </div>
        </div>

        <!-- Detail Profil -->
        <div class="flex-col bg-[#FFFFFF] text-[#1A5796] text-[25px] ml-16 w-2/3 h-[512px]">
          <!-- Tab Detail Profil dan Ubah Password -->

          <div class="font-semibold text-[#ebf3f5]">
            <button @click="activeTabOne" class="w-1/2 p-4 border-b-2 active:border-b-[#1A5796] active:text-[#1A5796] focus:text-[#1A5796] focus:border-b-[#1A5796]">Detail Profile</button>
            <button @click="activeTabTwo" class="w-1/2 p-4 border-b-2 active:border-b-[#1A5796] active:text-[#1A5796] focus:text-[#1A5796] focus:border-b-[#1A5796]">Ubah Password</button>
          </div>

          <div class="grid grid-rows-1 h-[512px] w-[1087px]">
            <!-- Tab Detail Profil -->
            <div v-if="tab === 1" class="m-8 h-5/6" aria-selected="true" role="tab">
              <!-- Informasi User -->
              <div class="grid grid-rows-9">
                <!-- Nama Lengkap -->
                <div class="grid grid-cols-3">
                  <p>Nama Lengkap</p>
                  <p>Himacad Rijifen</p>
                </div>

                <!-- Kelas -->
                <div class="grid grid-cols-3">
                  <p>Kelas</p>
                  <p>3SI1</p>
                </div>

                <!-- NIM -->
                <div class="grid grid-cols-3">
                  <p>NIM</p>
                  <p>222112999</p>
                </div>

                <!-- Email -->
                <div class="grid grid-cols-3">
                  <p>Email</p>
                  <p>kelompok1@gmail.com</p>
                </div>

                <!-- No HP -->
                <div class="grid grid-cols-3">
                  <p>No HP</p>
                  <p>082143658709</p>
                </div>
              </div>

              <!-- Button Edit Profile -->
              <div class="flex w-full justify-end p-5 h-1/5">
                <router-link to="/dashboard/edit-profile" class="nav-link bg-[#1A5796] text-center text-[#FFFFFF] w-1/3 rounded-md" :active-class="'active-link'">
                  <button class="h-full w-full">Edit Profil</button>
                </router-link>
              </div>
            </div>

            <!-- Tab Ubah Password -->
            <div v-if="tab === 2" class="m-8 h-5/6" role="tab">
              <div class="grid grid-rows-5">
                <!-- Password Lama -->
                <div class="grid grid-cols-3">
                  <p>Password Lama</p>
                  <input type="text" name="" class="col-span-2 bg-transparent border-[#D9D9D9] input input-bordered w-full" />
                </div>

                <!-- Password Baru -->
                <div class="grid grid-cols-3">
                  <p>Password Baru</p>
                  <input type="text" class="col-span-2 bg-transparent border-[#D9D9D9] input input-bordered w-full" />
                </div>

                <!-- Konfirmasi Password Baru -->
                <div class="grid grid-cols-3">
                  <p>Konfirmasi Password Baru</p>
                  <input type="text" name="" class="col-span-2 bg-transparent border-[#D9D9D9] input input-bordered w-full" />
                </div>
              </div>

              <!-- Button Ubah Password -->
              <div class="flex w-full justify-end h-1/5">
                <router-link to="" class="nav-link bg-[#1A5796] text-center text-[#FFFFFF] w-1/3 rounded-md" :active-class="'active-link'">
                  <button class="h-full w-full">Ubah Password</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
    };
  },
  methods: {
    activeTabOne() {
      this.tab = 1;
    },
    activeTabTwo() {
      this.tab = 2;
    },
  },
};
</script>

<style scoped></style>
