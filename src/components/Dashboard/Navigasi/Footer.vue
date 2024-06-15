<template>
  <footer class="w-full h-[171px] bg-[#CEDBE5] flex flex-col items-center justify-center p-4">
    <div class="text-[#1A5796] font-poppins text-lg font-normal mb-4">
      Copyright © 2020 - 2024 Website DPM Politeknik Statistika STIS
    </div>
    <div class="flex space-x-16">
      <a href="mailto:dpm@stis.ac.id" class="flex items-center space-x-2 text-[#1A5796]">
        <img src="@/assets/icon/email-dashboard.svg" alt="Mail Icon" class="w-6 h-6">
        <span class="hidden sm:inline">dpm@stis.ac.id</span>
      </a>
      <a href="http://dpm.stis.ac.id" class="flex items-center space-x-2 text-[#1A5796]">
        <img src="@/assets/icon/web-dashboard.svg" alt="Website Icon" class="w-6 h-6">
        <span class="hidden sm:inline">dpm.stis.ac.id</span>
      </a>
      <a href="https://instagram.com/dpmpolstatstis/" class="flex items-center space-x-2 text-[#1A5796]">
        <img src="@/assets/icon/instagram-dashboard.svg" alt="Instagram Icon" class="w-6 h-6">
        <span class="hidden sm:inline">@dpmpolstatstis</span>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
