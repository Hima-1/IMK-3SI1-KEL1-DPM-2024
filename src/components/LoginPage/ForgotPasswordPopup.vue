<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="w-[798px] h-[718px] bg-[#EBF3F5] rounded-[27px] flex flex-col items-center p-6 relative">
      <img src="../../assets/icon/close.svg" @click="$emit('close')" class="absolute top-[30px] right-[36px] w-[55px] h-[55px] cursor-pointer" alt="Close Icon" />
      <div class="w-[682px] h-[576px] flex flex-col items-center justify-between mt-[72px] mb-[70px] mx-[58px]">
        <img src="../../assets/images/logo_dpm.webp" class="w-[182px] h-[181px] flex-shrink-0 mb-8" alt="Logo DPM" />

        <p class="text-[#1A5796] font-poppins text-[35px] font-semibold mb-6">Reset Password</p>

        <div class="w-full h-[73px] flex items-center border-2 border-[#1A5796] bg-[#EBF3F5] rounded-[36.5px] shadow-inner mb-6">
          <img src="../../assets/icon/emailLogin.svg" class="w-[50px] h-[50px] flex-shrink-0 ml-4" alt="Email Icon" />
          <input
              type="email"
              placeholder="Email"
              class="ml-4 w-full bg-transparent border-none text-[#1A5796] font-poppins text-[22px] opacity-43 outline-none"
          />
        </div>

        <div class="w-full h-[73px] flex items-center justify-center bg-[#1A5796] rounded-[36.5px] shadow-lg cursor-pointer mb-4">
          <p class="text-[#EBF3F5] text-center font-poppins text-[24px] font-semibold">
            Send Reset Link
          </p>
        </div>

        <p @click="$emit('back-to-login')" class="text-[#1A5796] text-center font-poppins text-[22px] font-normal cursor-pointer">
          Back to Login
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordPopup'
}
</script>

<style>
.shadow-inner {
  box-shadow: inset 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}
</style>
