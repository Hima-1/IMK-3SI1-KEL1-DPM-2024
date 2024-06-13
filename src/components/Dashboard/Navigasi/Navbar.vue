<template>
  <nav :class="['mt-0 w-full h-[5.75rem] flex items-center justify-between bg-[#1A5796] drop-shadow-md p-4', { 'fixed': isScrolled, 'top-0': isScrolled, 'w-full': isScrolled }]">
    <router-link to="/">
      <div class="flex items-center gap-4 ml-16">
        <img src="@/assets/images/logo_dpm.webp" alt="Logo" class="w-[3.875rem] h-[3.875rem] shrink-0">
        <span class="text-white text-[2rem] font-bold" style="font-family: 'Poppins', sans-serif;">SIASPIMAN</span>
      </div>
    </router-link>
    <div class="flex items-center gap-8 mr-16">
      <router-link to="/dashboard" exact class="no-underline text-[#EBF3F5]" :exact-active-class="'font-bold'">
        <span class="text-[#EBF3F5] text-center text-lg" style="font-family: 'Poppins', sans-serif;">Aspirasi</span>
      </router-link>
      <router-link to="/dashboard/arsip-dokumen" class="no-underline text-[#EBF3F5]" :active-class="'font-bold'">
        <span class="text-[#EBF3F5] text-center text-lg" style="font-family: 'Poppins', sans-serif;">Arsip Dokumen</span>
      </router-link>
      <router-link to="/dashboard/anggaran-impolstat" class="no-underline text-[#EBF3F5]" :active-class="'font-bold'">
        <span class="text-[#EBF3F5] text-center text-lg" style="font-family: 'Poppins', sans-serif;">Anggaran Imapolstat</span>
      </router-link>
      <UserDropdown />
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
      isScrolled: false
    };
  },
  methods: {
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&display=swap');
</style>
