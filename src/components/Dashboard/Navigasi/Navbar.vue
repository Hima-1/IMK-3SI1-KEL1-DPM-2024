<template>
  <nav :class="['bg-[#1A5796] z-10 shadow-md p-4  flex items-center justify-between', { 'fixed': isScrolled, 'top-0': isScrolled, 'w-full': isScrolled }]">
    <div class="flex items-center gap-4 ml-4 lg:hidden">
      <button @click="toggleMobileMenu" class="text-white focus:outline-none burger-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex items-center gap-4">
      <router-link to="/dashboard" class="flex items-center gap-4 ml-10">
        <img src="@/assets/images/logo_dpm.webp" alt="Logo" class="logo w-[3.875rem] h-[3.875rem] shrink-0">
        <span class="title lg:hidden xl:inline-block text-white text-2xl font-bold" style="font-family: 'Poppins', sans-serif;">SIASPIMAN</span>
      </router-link>
    </div>
    <div class="flex items-center gap-8 lg:mr-16 lg:ml-auto">
      <div class="hidden lg:flex gap-8" :class="{'lg:hidden': isMobileMenuOpen}">
        <router-link to="/dashboard" exact class="no-underline text-[#EBF3F5]" :exact-active-class="'font-bold'">
          <span class="text-[#EBF3F5] text-center text-lg" style="font-family: 'Poppins', sans-serif;">Aspirasi</span>
        </router-link>
        <router-link to="/dashboard/arsip-dokumen" class="no-underline text-[#EBF3F5]" :active-class="'font-bold'">
          <span class="text-[#EBF3F5] text-center text-lg" style="font-family: 'Poppins', sans-serif;">Arsip Dokumen</span>
        </router-link>
        <router-link to="/dashboard/anggaran-impolstat" class="no-underline text-[#EBF3F5]" :active-class="'font-bold'">
          <span class="text-[#EBF3F5] text-center text-lg" style="font-family: 'Poppins', sans-serif;">Anggaran Imapolstat</span>
        </router-link>
      </div>
      <UserDropdown />
    </div>
    <div v-if="isMobileMenuOpen" class="absolute top-16 left-0 w-full bg-[#1A5796] lg:hidden">
      <router-link to="/dashboard" exact class="block px-4 py-2 text-[#EBF3F5] border-b border-white" :exact-active-class="'font-bold'" @click="toggleMobileMenu">
        <span class="text-[#EBF3F5] text-center text-lg" style="font-family: 'Poppins', sans-serif;">Aspirasi</span>
      </router-link>
      <router-link to="/dashboard/arsip-dokumen" class="block px-4 py-2 text-[#EBF3F5] border-b border-white" :active-class="'font-bold'" @click="toggleMobileMenu">
        <span class="text-[#EBF3F5] text-center text-lg" style="font-family: 'Poppins', sans-serif;">Arsip Dokumen</span>
      </router-link>
      <router-link to="/dashboard/anggaran-impolstat" class="block px-4 py-2 text-[#EBF3F5] border-b border-white" :active-class="'font-bold'" @click="toggleMobileMenu">
        <span class="text-[#EBF3F5] text-center text-lg" style="font-family: 'Poppins', sans-serif;">Anggaran Imapolstat</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
import UserDropdown from './UserDropdown.vue';

export default {
  name: 'Navbar',
  components: {
    UserDropdown
  },
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&display=swap');

.burger-icon svg {
  width: 2rem;
  height: 1.25rem;
}

@media (max-width: 1280px) {
  nav {
    height: 5rem;
  }

  .siaspiman-text {
    display: none;
  }
}

@media (max-width: 1280px) {
  .title {
    font-size: 1rem;
  }
  .text-lg {
    font-size: 0.88rem;
  }
  .burger-icon svg {
    width: 2rem;
    height: auto;
  }
  .logo {
    width: 2.5rem;
    height: 2.5rem;
  }
  nav {
    height: 4rem;
  }
}

@media (max-width: 425px) {
  .border-white {
    border-color: #fff !important;
  }
  .burger-icon svg {
    width: auto;
    height: 2rem;
  }
  nav {
    height: 3.5rem;
  }
  .top-16{
    top: 3.55rem;
  }
}
</style>
