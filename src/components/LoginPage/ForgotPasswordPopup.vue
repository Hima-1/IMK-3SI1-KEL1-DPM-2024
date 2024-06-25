<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
    <div class="w-full max-w-[600px] h-[475px] bg-[#EBF3F5] rounded-[27px] flex flex-col items-center p-6 relative">
      <img src="@/assets/icon/close.svg" @click="$emit('close')"
        class="absolute top-[20px] right-[28px] w-[40px] h-[40px] cursor-pointer" alt="Close Icon" />
      <div
        class="w-full max-w-[625px] h-[576px] flex flex-col items-center justify-between mt-[12px] mb-[12px] lg:px-6">
        <img src="@/assets/images/logo_dpm.webp" class="w-[125px] h-auto flex-shrink-0 mb-8" alt="Logo DPM" />

        <p class="text-[#1A5796] font-poppins text-[20px] md:text-[30px] font-semibold mb-6">Lupa Password</p>

        <div
          class="w-full h-[50px] flex items-center border-2 border-[#1A5796] bg-[#EBF3F5] rounded-[36px] shadow-inner mb-6 px-4">
          <img src="@/assets/icon/emailLogin.svg" class="w-[30px] h-[30px] flex-shrink-0" alt="Email Icon" />
          <input type="email" placeholder="Email"
            class="ml-4 w-full bg-transparent border-none text-[#1A5796] text-[15px] opacity-43 outline-none" />
        </div>

        <div
          class="w-full h-[50px] flex items-center justify-center bg-[#1A5796] rounded-[36px] shadow-lg cursor-pointer mb-4">
          <p class="text-[#EBF3F5] text-center font-poppins text-[16px] md:text-[18px] font-semibold">
            Kirim Email
          </p>
        </div>

        <p @click="$emit('back-to-login')"
          class="text-[#1A5796] text-center font-poppins text-[13px] font-normal cursor-pointer">
          Kembali ke Login
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
