<template>
  <div class="min-h-screen bg-[#c8d6df] relative overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img src="@/assets/icon/LoginLeft.svg" class="w-full h-full object-cover" alt="Dekorasi Kiri" />
    </div>
    
    <div class="absolute inset-0 z-0">
      <img src="@/assets/icon/LoginRight.svg" class="w-full h-full object-cover" alt="Dekorasi Kanan" />
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <router-link to="/" class="absolute top-6 left-6 z-20">
        <div class="flex flex-col items-center w-16 h-20">
          <img src="@/assets/icon/home.svg" class="w-12 h-12" alt="Beranda Icon" />
          <p class="text-[#1A5796] text-center font-poppins text-sm font-medium mt-2">
            Beranda
          </p>
        </div>
      </router-link>
      
      <div class="flex flex-col items-center mt-6 space-y-5">
        <img src="@/assets/images/logo_dpm.webp" class="w-40 h-40 bg-cover bg-no-repeat" alt="Logo DPM" />
        <h1 class="text-[#1A5796] font-poppins text-4xl font-bold">
          Selamat datang, Aspician!
        </h1>
        <p class="text-[#15649D] font-poppins text-lg text-center">
          Silahkan Pilih Metode Login
        </p>
        
        <div class="mt-10 flex space-x-8">
          <div @click="showLoginPopup" class="w-50 h-56.25 bg-[#EBF3F5] rounded-lg shadow-lg flex flex-col items-center p-4 cursor-pointer">
            <div class="relative w-40 h-40 bg-[#FAC950] rounded-full flex items-center justify-center mb-4">
              <img src="@/assets/images/logo_dpm.webp" class="w-30 h-30" alt="Logo DPM" />
            </div>
            <p class="text-[#011F4B] text-center font-poppins text-lg font-bold">
              AKUN DPM
            </p>
          </div>
          
          <div @click="showLoginPopup" class="w-50 h-56.25 bg-[#EBF3F5] rounded-lg shadow-lg flex flex-col items-center p-4 cursor-pointer">
            <div class="relative w-52 h-52 bg-[#FAC950] rounded-full flex items-center justify-center mb-4">
              <img src="@/assets/images/logo_sipadu.webp" class="w-40 h-42" alt="Logo SIPADU" />
            </div>
            <p class="text-[#011F4B] text-center font-poppins text-lg font-bold">
              SIPADU
            </p>
          </div>
        </div>
      </div>
      
      <LoginPopup v-if="isLoginPopupVisible && !isForgotPasswordPopupVisible" @close="closePopup" @forgot-password="showForgotPasswordPopup" />
      <ForgotPasswordPopup v-if="isForgotPasswordPopupVisible" @close="closePopup" @back-to-login="showLoginPopup" />
    </div>
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
