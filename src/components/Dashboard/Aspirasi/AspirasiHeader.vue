<template>
  <header class="w-full h-[9.4375rem] flex items-center mb-4">
    <img src="@/assets/images/logo_dpm.webp" alt="Logo" class="w-[5.5625rem] h-[5.5625rem] mr-4">
    <div>
      <p class="text-[#1A5796] font-poppins text-[2.1875rem] font-semibold leading-normal">
        Welcome, <span class="font-extrabold">Himacad Rijifen</span>
      </p>
      <p class="text-[#1A5796] font-poppins text-[1.25rem] italic font-light leading-normal">
        Sampaikan aspirasimu disini!
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AspirasiHeader'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
