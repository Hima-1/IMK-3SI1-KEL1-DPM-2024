<template>
  <nav :class="['mt-0 w-full h-[5.75rem] flex items-center justify-between bg-[#1A5796] drop-shadow-md p-4', { 'fixed': isScrolled, 'top-0': isScrolled, 'w-full': isScrolled }]">
    <router-link to="/">
      <div class="flex items-center logo-container">
        <img src="../../assets/images/logo_dpm.webp" alt="Logo" class="logo">
        <span class="logo-text">SIASPIMAN</span>
      </div>
    </router-link>
    <div class="flex items-center nav-links-container">
      <router-link to="/dashboard" exact class="nav-link" :exact-active-class="'active-link'">
        <span class="nav-link-text">Aspirasi</span>
      </router-link>
      <router-link to="/dashboard/arsip-dokumen" class="nav-link" :active-class="'active-link'">
        <span class="nav-link-text">Arsip Dokumen</span>
      </router-link>
      <router-link to="/dashboard/anggaran-impolstat" class="nav-link" :active-class="'active-link'">
        <span class="nav-link-text">Anggaran Imapolstat</span>
      </router-link>
      <div class="flex items-center user-info">
        <img src="../../assets/icon/account.svg" alt="User Photo" class="user-photo">
        <div class="text-right user-name-container">
          <span class="user-name">Nama User</span>
        </div>
        <img src="../../assets/icon/arrow-down.svg" alt="Dropdown Icon" class="dropdown-icon">
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

.logo-container {
  display: flex;
  align-items: center;
  margin-left: 4rem;
  gap: 1rem;
}

.logo {
  width: 3.875rem;
  height: 3.875rem;
  flex-shrink: 0;
}

.logo-text {
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: bold;
}

.nav-links-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: 4rem;
}

.nav-link-text {
  color: #EBF3F5;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-photo {
  width: 3.75rem;
  height: 3.75rem;
  flex-shrink: 0;
}

.user-name-container {
  text-align: right;
}

.user-name {
  color: #EBF3F5;
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
  font-weight: medium;
}

.dropdown-icon {
  width: 0.6875rem;
  height: 0.5625rem;
  fill: currentColor;
  color: #EBF3F5;
}
</style>
