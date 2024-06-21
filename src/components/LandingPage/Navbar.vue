<template>
  <nav :class="['bg-[#1a5796] shadow-lg w-full z-50', { 'fixed': isScrolled, 'top-0': isScrolled, 'w-full': isScrolled }]">
    <div class="mx-auto flex justify-between items-center py-2 px-6">
      <!-- Logo and Title on the Left -->
      <div class="flex items-center">
        <img src="@/assets/images/logo_dpm.webp" alt="Logo" class="logo mr-4" />
        <span class="text-white text-[15px] font-bold hidden md:block dpm-text">DPM</span>
      </div>

      <!-- Navigation Links and Login Button on the Right -->
      <div class="hidden md:flex items-center text-[15px] space-x-4">
        <router-link to="/" exact class="btn btn-ghost no-underline text-white uppercase" :exact-active-class="'active-link'">Home</router-link>
        <router-link to="/berita" class="btn btn-ghost no-underline text-white font-medium" :active-class="'active-link'">Berita</router-link>
        <router-link to="/galeri" class="btn btn-ghost no-underline text-white font-medium" :active-class="'active-link'">Galeri</router-link>
        <router-link to="/struktur" class="btn btn-ghost no-underline text-white font-medium" :active-class="'active-link'">Struktur</router-link>
        <router-link to="/login" class="btn btn-outline text-white uppercase border-4 border-white rounded-full px-4 py-1 font-bold" :active-class="'active-link'">Log In</router-link>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMobileMenu" class="text-white focus:outline-none">
          <img src="@/assets/icon/hamburger.svg" alt="Menu Icon" class="burger-icon" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="text-[15px] md:hidden">
      <router-link to="/" exact class="block btn btn-ghost no-underline text-white font-medium px-4" :exact-active-class="'active-link'">HOME</router-link>
      <router-link to="/berita" class="block btn btn-ghost no-underline text-white font-medium px-4" :active-class="'active-link'">Berita</router-link>
      <router-link to="/galeri" class="block btn btn-ghost no-underline text-white font-medium px-4" :active-class="'active-link'">Galeri</router-link>
      <router-link to="/struktur" class="block btn btn-ghost no-underline text-white font-medium px-4" :active-class="'active-link'">Struktur</router-link>
      <router-link to="/login" class="block btn btn-outline text-white uppercase border-2 border-white rounded-full px-4 font-bold mx-4 mb-2 flex items-center justify-center" :active-class="'active-link'">Log In</router-link>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.logo {
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
}

.burger-icon {
  width: 2.5rem;
  height: 1.56481rem;
  flex-shrink: 0;
}

.active-link {
  font-weight: bold;
}

@media (max-width: 1024px) {
  .dpm-text {
    display: none;
  }
}
</style>