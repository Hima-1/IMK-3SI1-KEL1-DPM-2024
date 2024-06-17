<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="w-full max-w-[49.875rem] h-[44.875rem] bg-[#EBF3F5] rounded-[1.6875rem] flex flex-col items-center p-6 relative">
      <img src="@/assets/icon/close.svg" @click="$emit('close')" class="absolute top-[1.875rem] right-[2.25rem] w-[3.4375rem] h-[3.4375rem] cursor-pointer" alt="Close Icon" />
      <div class="w-full max-w-[42.625rem] h-[36rem] flex flex-col items-center justify-between mt-[4.5rem] mb-[4.375rem] mx-[3.625rem]">
        <img src="@/assets/images/logo_dpm.webp" class="w-[11.375rem] h-[11.3125rem] flex-shrink-0 mb-8" alt="Logo DPM" />

        <p class="text-[#1A5796] font-poppins text-[2.1875rem] font-semibold mb-6">Reset Password</p>

        <div class="w-full h-[4.5625rem] flex items-center border-2 border-[#1A5796] bg-[#EBF3F5] rounded-[2.28125rem] shadow-inner mb-6">
          <img src="@/assets/icon/emailLogin.svg" class="w-[3.125rem] h-[3.125rem] flex-shrink-0 ml-4" alt="Email Icon" />
          <input
              type="email"
              placeholder="Email"
              class="ml-4 w-full bg-transparent border-none text-[#1A5796] font-poppins text-[1.375rem] opacity-43 outline-none"
          />
        </div>

        <div class="w-full h-[4.5625rem] flex items-center justify-center bg-[#1A5796] rounded-[2.28125rem] shadow-lg cursor-pointer mb-4">
          <p class="text-[#EBF3F5] text-center font-poppins text-[1.5rem] font-semibold">
            Send Reset Link
          </p>
        </div>

        <p @click="$emit('back-to-login')" class="text-[#1A5796] text-center font-poppins text-[1.375rem] font-normal cursor-pointer">
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
