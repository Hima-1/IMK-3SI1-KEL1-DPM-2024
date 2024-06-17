<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#c8d6df] relative overflow-hidden">
    <router-link to="/">
      <div class="absolute top-[6rem] left-[7rem] cursor-pointer z-10">
        <div class="flex flex-col items-center w-[3.75rem] h-[5rem] flex-shrink-0">
          <img src="@/assets/icon/home.svg" class="w-[3.5rem] h-[3.5rem] flex-shrink-0" alt="Beranda Icon" />
          <p class="text-[#1A5796] text-center font-poppins text-[0.875rem] font-medium mt-2">
            Beranda
          </p>
        </div>
      </div>
    </router-link>
    <div class="absolute bottom-0 left-0">
      <img src="@/assets/icon/LoginLeft.svg" class="w-[54rem] h-[55.7925rem] object-cover" alt="Dekorasi Kiri" />
    </div>
    <div class="absolute bottom-0 right-0">
      <img src="@/assets/icon/LoginRight.svg" class="w-[54rem] h-[55.7925rem] object-cover" alt="Dekorasi Kanan" />
    </div>
    <div class="flex flex-col items-center z-10">
      <img src="@/assets/images/logo_dpm.webp" class="w-[15rem] h-[15rem] flex-shrink-0 bg-cover bg-no-repeat">
      <h1 class="text-[#1A5796] font-poppins text-[3.125rem] font-bold mt-8">
        Selamat datang, Aspician!
      </h1>
      <p class="text-[#15649D] font-poppins text-[1.5rem] font-medium text-center mt-4">
        Silahkan Pilih Metode Login
      </p>
      <div class="mt-10 flex space-x-8">
        <div @click="showLoginPopup" class="w-[19.0519rem] h-[22.4416rem] flex-shrink-0 bg-[#EBF3F5] rounded-[1.25rem] shadow-lg flex flex-col items-center p-4 cursor-pointer">
          <div class="relative w-[15.3701rem] h-[15.3701rem] flex-shrink-0 bg-[#FAC950] rounded-full flex items-center justify-center mb-4">
            <img src="@/assets/images/logo_dpm.webp" class="w-[11.375rem] h-[11.3125rem] flex-shrink-0" alt="Logo DPM" />
          </div>
          <p class="text-[#011F4B] text-center font-poppins text-[1.5rem] font-bold">
            AKUN DPM
          </p>
        </div>
        <div @click="showLoginPopup" class="w-[19.0519rem] h-[22.4416rem] flex-shrink-0 bg-[#EBF3F5] rounded-[1.25rem] shadow-lg flex flex-col items-center p-4 cursor-pointer">
          <div class="relative w-[15.3701rem] h-[15.3701rem] flex-shrink-0 bg-[#FAC950] rounded-full flex items-center justify-center mb-4">
            <img src="@/assets/images/logo_sipadu.webp" class="w-[11.1623rem] h-[11.513rem] flex-shrink-0" alt="Logo SIPADU" />
          </div>
          <p class="text-[#011F4B] text-center font-poppins text-[1.5rem] font-bold">
            SIPADU
          </p>
        </div>
      </div>
    </div>
    <LoginPopup v-if="isLoginPopupVisible && !isForgotPasswordPopupVisible" @close="closePopup" @forgot-password="showForgotPasswordPopup" />
    <ForgotPasswordPopup v-if="isForgotPasswordPopupVisible" @close="closePopup" @back-to-login="showLoginPopup" />
  </div>
</template>

<script>
import LoginPopup from '../components/LoginPage/LoginPopup.vue'
import ForgotPasswordPopup from '../components/LoginPage/ForgotPasswordPopup.vue'

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
