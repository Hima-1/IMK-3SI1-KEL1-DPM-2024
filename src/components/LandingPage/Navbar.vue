<template>
  <nav class="bg-[#1a5796] shadow-custom fixed w-full z-50 top-0">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo and Title on the Left -->
      <div class="flex items-center">
        <img src="../../assets/logo_dpm.jpg" alt="Logo" class="w-[51px] h-[51px] flex-shrink-0 rounded-full mr-4" />
        <span class="text-white text-[22px] font-bold font-poppins">DPM</span>
      </div>

      <!-- Navigation Links and Login Button on the Right -->
      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="text-white text-[22px] uppercase font-bold font-poppins">Home</a>
        <a href="#" class="text-white text-[22px] font-medium font-poppins">Pengumuman</a>
        <a href="#" class="text-white text-[22px] font-medium font-poppins">Galeri</a>
        <a href="#" class="text-white text-[22px] font-medium font-poppins">Berita</a>
        <a href="#" class="text-white text-[22px] uppercase border-[5px] border-white rounded-full px-4 py-1 font-bold font-poppins">Log In</a>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button class="text-white focus:outline-none">
          <!-- Icon for mobile menu -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden">
      <a href="#" class="block text-white text-[22px] uppercase font-bold font-poppins py-2 px-4">Home</a>
      <a href="#" class="block text-white text-[22px] font-medium font-poppins py-2 px-4">Pengumuman</a>
      <a href="#" class="block text-white text-[22px] font-medium font-poppins py-2 px-4">Galeri</a>
      <a href="#" class="block text-white text-[22px] font-medium font-poppins py-2 px-4">Berita</a>
      <a href="#" class="block text-white text-[22px] uppercase border-[5px] border-white rounded-full px-4 py-1 font-bold font-poppins mx-4 my-2">Log In</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.shadow-custom {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
}
</style>
