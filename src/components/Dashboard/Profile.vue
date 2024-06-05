<template>
  <div class="bg-[#ebf3f5] min-h-fit flex justify-center">
    <div class="w-[1660px] my-6 mx-20 flex flex-col">
      <!-- Edit Icon and My Profile Text -->
      <div class="flex items-center space-x-6 my-4">
        <img src="../../assets/icon/edit.svg" alt="Edit Icon" class="w-12 h-12 text-[#1A5796]" />
        <h1 class="text-[#1A5796] font-poppins text-4xl" style="line-height: 60px">My Profile</h1>
      </div>

      <!-- My Profile -->
      <div class="flex my-8 h-[513x]">
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
        <div class="flex-col bg-[#FFFFFF] text-[#1A5796] text-[25px] ml-16 w-2/3 h-full">
          <!-- Tab Detail Profil dan Ubah Password -->

          <div class="font-semibold text-[#ebf3f5]">
            <button @click="activeTabOne" class="w-1/2 p-4 border-b-2 active:border-b-[#1A5796] active:text-[#1A5796] focus:text-[#1A5796] focus:border-b-[#1A5796]">Detail Profile</button>
            <button @click="activeTabTwo" class="w-1/2 p-4 border-b-2 active:border-b-[#1A5796] active:text-[#1A5796] focus:text-[#1A5796] focus:border-b-[#1A5796]">Ubah Password</button>
          </div>

          <!-- Tab Detail Profil -->
          <div v-if="tab === 1" class="m-8 h-5/6">
            <!-- Informasi User -->
            <div class="flex flex-row h-4/5">
              <table class="flex flex-col w-full border-separate border-spacing-y-10">
                <tbody class="">
                  <tr class="">
                    <td class="pr-28 mb-20">Nama Lengkap</td>
                    <td>Himacad Rijifen</td>
                  </tr>
                  <tr class="">
                    <td class="">Kelas</td>
                    <td>3SI1</td>
                  </tr>
                  <tr class="">
                    <td class="">NIM</td>
                    <td>222112999</td>
                  </tr>
                  <tr class="">
                    <td class="">Email</td>
                    <td>kelompok1@gmail.com</td>
                  </tr>
                  <tr class="">
                    <td class="">No HP</td>
                    <td>082143658709</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Button Edit Profile -->
            <div class="flex w-full justify-end p-5 h-1/5">
              <button class="bg-[#1A5796] text-[#FFFFFF] w-1/3 rounded-md">Edit Profil</button>
            </div>
          </div>

          <!-- Tab Ubah Password -->
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
