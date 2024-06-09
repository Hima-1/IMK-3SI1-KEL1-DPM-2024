<template>
  <nav :class="['bg-[#1a5796] shadow-custom w-full z-50', { 'fixed': isScrolled, 'top-0': isScrolled, 'w-full': isScrolled }]">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo and Title on the Left -->
      <div class="flex items-center">
        <img src="@/assets/images/logo_dpm.webp" alt="Logo" class="w-12 h-12 flex-shrink-0 rounded-full mr-4" />
        <span class="text-white text-2xl font-bold font-poppins">DPM</span>
      </div>

      <!-- Navigation Links and Login Button on the Right -->
      <div class="hidden md:flex items-center space-x-4">
        <router-link to="/" exact class="nav-link text-white text-2xl uppercase font-poppins" :exact-active-class="'active-link'">Home</router-link>
        <router-link to="/berita" class="nav-link text-white text-2xl font-medium font-poppins" :active-class="'active-link'">Berita</router-link>
        <router-link to="/galeri" class="nav-link text-white text-2xl font-medium font-poppins" :active-class="'active-link'">Galeri</router-link>
        <router-link to="/struktur" class="nav-link text-white text-2xl font-medium font-poppins" :active-class="'active-link'">Struktur</router-link>
        <router-link to="/login" class="nav-link text-white text-2xl uppercase border-2 border-white rounded-full px-4 py-1 font-bold font-poppins" :active-class="'active-link'">Log In</router-link>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <img src="@/assets/icon/hamburger.svg" alt="Menu Icon" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden">
      <router-link to="/" exact class="block nav-link text-white text-2xl uppercase font-poppins py-2 px-4" :exact-active-class="'active-link'">Home</router-link>
      <router-link to="/berita" class="block nav-link text-white text-2xl font-medium font-poppins py-2 px-4" :active-class="'active-link'">Berita</router-link>
      <router-link to="/galeri" class="block nav-link text-white text-2xl font-medium font-poppins py-2 px-4" :active-class="'active-link'">Galeri</router-link>
      <router-link to="/struktur" class="block nav-link text-white text-2xl font-medium font-poppins py-2 px-4" :active-class="'active-link'">Struktur</router-link>
      <router-link to="/login" class="block nav-link text-white text-2xl uppercase border-2 border-white rounded-full px-4 py-1 font-bold font-poppins mx-4 my-2" :active-class="'active-link'">Log In</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarLanding',
  data() {
    return {
      isMobileMenuOpen: false,
      isScrolled: false
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
.nav-link:hover {
  color: #CEDBE5;
}

.active-link {
  font-weight: bold;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
