<template>
  <div class="min-h-screen bg-[#c8d6df] relative overflow-hidden">
    <div class="absolute bottom-0 left-0 z-0">
      <img src="@/assets/icon/LoginLeft.svg" class="w-[500px] h-auto object-cover" alt="Dekorasi Kiri" />
    </div>

    <div class="absolute bottom-0 right-0 z-0">
      <img src="@/assets/icon/LoginRight.svg" class="w-[500px] h-auto object-cover" alt="Dekorasi Kanan" />
    </div>

    <div class="container mx-auto relative z-10">
      <router-link to="/" class="absolute top-6 left-6 z-20">
        <div class="flex flex-col items-center w-10 h-14">
          <img src="@/assets/icon/home.svg" class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" alt="Beranda Icon" />
          <p class="text-[#1A5796] text-center font-poppins text-[12px] lg:text-sm font-medium mt-2">
            Beranda
          </p>
        </div>
      </router-link>

      <div class="flex flex-col items-center mt-6 space-y-5">
        <img src="@/assets/images/logo_dpm.webp" class="w-40 h-40 bg-cover bg-no-repeat mt-6" alt="Logo DPM" />
        <h1 class="text-[#1A5796] font-poppins text-[30px] lg:text-4xl font-bold px-8 text-center">
          Selamat datang, Aspician!
        </h1>
        <p class="text-[#15649D] font-poppins text-[15px] lg:text-lg text-center">
          Silahkan Pilih Metode Login
        </p>

        <div class="pt-10 lg:pt-0 mt-10 flex space-x-2 lg:space-x-8">
          <div @click="showLoginPopup"
            class="w-[150px] h-[200px] md:w-[200px] md:h-[225px] justify-center bg-[#EBF3F5] rounded-lg shadow-lg flex flex-col items-center p-4 cursor-pointer">
            <div class="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] bg-[#FAC950] rounded-full flex items-center justify-center mb-4">
              <img src="@/assets/images/logo_dpm.webp" class="w-[100px] md:w-[120px] h-auto" alt="Logo DPM" />
            </div>
            <p class="text-[#1A5796] text-center font-poppins text-sm lg:text-lg font-bold">
              AKUN DPM
            </p>
          </div>

          <div @click="showLoginPopup"
            class="w-[150px] h-[200px] md:w-[200px] md:h-[225px] justify-center bg-[#EBF3F5] rounded-lg shadow-lg flex flex-col items-center p-4 cursor-pointer">
            <div class="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] bg-[#FAC950] rounded-full flex items-center justify-center mb-4">
              <img src="@/assets/images/logo_sipadu.webp" class="w-[100px] md:w-[120px] h-auto" alt="Logo SIPADU" />
            </div>
            <p class="text-[#1A5796] text-center font-poppins text-sm lg:text-lg font-bold">
              SIPADU
            </p>
          </div>
        </div>
      </div>

      <LoginPopup v-if="isLoginPopupVisible && !isForgotPasswordPopupVisible" @close="closePopup"
        @forgot-password="showForgotPasswordPopup" />
      <ForgotPasswordPopup v-if="isForgotPasswordPopupVisible" @close="closePopup" @back-to-login="showLoginPopup" />
    </div>
  </div>
</template>

<script>
import LoginPopup from '@/components/LoginPage/LoginPopup.vue'
import ForgotPasswordPopup from '@/components/LoginPage/ForgotPasswordPopup.vue'

export default {
  name: 'LoginPage',
  components: {
    LoginPopup,
    ForgotPasswordPopup
  },
  data() {
    return {
      isLoginPopupVisible: false,
      isForgotPasswordPopupVisible: false
    }
  },
  methods: {
    showLoginPopup() {
      this.isLoginPopupVisible = true;
      this.isForgotPasswordPopupVisible = false;
    },
    showForgotPasswordPopup() {
      this.isLoginPopupVisible = false;
      this.isForgotPasswordPopupVisible = true;
    },
    closePopup() {
      this.isLoginPopupVisible = false;
      this.isForgotPasswordPopupVisible = false;
    },
    goHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
