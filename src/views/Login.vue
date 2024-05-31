<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#c8d6df] relative overflow-hidden">
    <div class="absolute top-24 left-28 cursor-pointer" @click="goHome">
      <div class="flex flex-col items-center w-15 h-20 flex-shrink-0">
        <img src="../assets/icon/home.svg" class="w-14 h-14 flex-shrink-0" alt="Beranda Icon" />
        <p class="text-[#1A5796] text-center font-poppins text-[14px] font-medium mt-2">
          Beranda
        </p>
      </div>
    </div>
    <div class="absolute bottom-0 left-0">
      <img src="../assets/icon/LoginLeft.svg" class="w-[864.77px] h-[892.68px] object-cover" alt="Dekorasi Kiri" />
    </div>
    <div class="absolute bottom-0 right-0">
      <img src="../assets/icon/LoginRight.svg" class="w-[864.77px] h-[892.68px] object-cover" alt="Dekorasi Kanan" />
    </div>
    <div class="flex flex-col items-center z-10">
      <img src="../assets/images/logo_dpm.webp" class="w-60 h-60 flex-shrink-0 bg-cover bg-no-repeat">
      <h1 class="text-[#1A5796] font-poppins text-[50px] font-bold mt-8">
        Selamat datang, Aspician!
      </h1>
      <p class="text-[#15649D] font-poppins text-[24px] font-medium text-center mt-4">
        Silahkan Pilih Metode Login
      </p>
      <div class="mt-10 flex space-x-8">
        <div @click="showLoginPopup" class="w-[304.831px] h-[359.065px] flex-shrink-0 bg-[#EBF3F5] rounded-[20px] shadow-lg flex flex-col items-center p-4 cursor-pointer">
          <div class="relative w-[245.922px] h-[245.922px] flex-shrink-0 bg-[#FAC950] rounded-full flex items-center justify-center mb-4">
            <img src="../assets/images/logo_dpm.webp" class="w-[182px] h-[181px] flex-shrink-0" alt="Logo DPM" />
          </div>
          <p class="text-[#011F4B] text-center font-poppins text-[24px] font-bold">
            AKUN DPM
          </p>
        </div>
        <div @click="showLoginPopup" class="w-[304.831px] h-[359.065px] flex-shrink-0 bg-[#EBF3F5] rounded-[20px] shadow-lg flex flex-col items-center p-4 cursor-pointer">
          <div class="relative w-[245.922px] h-[245.922px] flex-shrink-0 bg-[#FAC950] rounded-full flex items-center justify-center mb-4">
            <img src="../assets/images/logo_sipadu.webp" class="w-[178.597px] h-[184.208px] flex-shrink-0" alt="Logo SIPADU" />
          </div>
          <p class="text-[#011F4B] text-center font-poppins text-[24px] font-bold">
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
