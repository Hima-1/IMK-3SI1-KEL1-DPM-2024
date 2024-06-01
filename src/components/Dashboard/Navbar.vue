<template>
  <nav :class="['w-full h-[92px] flex items-center justify-between bg-[#1A5796] drop-shadow-md p-4', { 'fixed': isScrolled, 'top-0': isScrolled, 'w-full': isScrolled }]">
    <div class="flex items-center space-x-4 ml-16">
      <img src="../../assets/images/logo_dpm.webp" alt="Logo" class="w-[62px] h-[62px] flex-shrink-0">
      <span class="text-white font-poppins text-2xl font-bold">SIASPIMAN</span>
    </div>
    <div class="flex items-center space-x-8 mr-16">
      <router-link to="/dashboard" exact class="nav-link" :exact-active-class="'active-link'">
        <span class="text-[#EBF3F5] text-center font-poppins text-lg">Aspirasi</span>
      </router-link>
      <router-link to="/dashboard/arsip-dokumen" class="nav-link" :active-class="'active-link'">
        <span class="text-[#EBF3F5] text-center font-poppins text-lg">Arsip Dokumen</span>
      </router-link>
      <router-link to="/dashboard/anggaran-impolstat" class="nav-link" :active-class="'active-link'">
        <span class="text-[#EBF3F5] text-center font-poppins text-lg">Anggaran Imapolstat</span>
      </router-link>
      <div class="flex items-center space-x-2">
        <img src="../../assets/icon/account.svg" alt="User Photo" class="w-[60px] h-[60px] flex-shrink-0">
        <div class="text-right">
          <span class="text-[#EBF3F5] font-poppins text-lg font-medium">Nama User</span>
        </div>
        <img src="../../assets/icon/arrow-down.svg" alt="Dropdown Icon" class="w-[11px] h-[9px] fill-current text-[#EBF3F5]">
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Navbar',
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

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
}

.nav-link {
  text-decoration: none;
  color: #EBF3F5;
}

.active-link > span {
  font-weight: bold;
}
</style>
