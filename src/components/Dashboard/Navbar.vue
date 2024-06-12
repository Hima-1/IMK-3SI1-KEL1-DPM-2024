<template>
  <nav :class="['w-full h-[92px] flex items-center justify-between bg-[#1A5796] drop-shadow-md p-4', { fixed: isScrolled, 'top-0': isScrolled, 'w-full': isScrolled }]">
    <div class="flex items-center space-x-4 ml-16">
      <img src="../../assets/images/logo_dpm.webp" alt="Logo" class="w-[62px] h-[62px] flex-shrink-0" />
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
      <div class="flex items-center">
        <div class="flex flex-row text-left">
          <div class="dropdown">
            <div tabindex="0" role="button" class="text-[#EBF3F5] min-h-fit border-none bg-transparent hover:bg-transparent font-poppins text-lg font-medium m-1 btn">
              <img src="../../assets/icon/account.svg" alt="User Photo" class="w-[60px] h-[60px] flex-shrink-0" />
              <h3>Nama User</h3>
              <img src="../../assets/icon/arrow-down.svg" alt="Dropdown Icon" class="fill-current text-[#EBF3F5]" />
            </div>
            <ul class="bg-[#1A5796] grid grid-rows-2 gap-x-2 mt-4 shadow menu dropdown-content rounded-box w-56">
              <div class="border-b-2 border-[#EBF3F550]">
                <router-link to="/dashboard/my-profile" class="nav-link p-4 grid grid-cols-4" :active-class="'active-link'">
                  <img src="../../assets/icon/profile.svg" alt="Profile Icon" class="obejct-center fill-current text-[#EBF3F5]" />
                  <li class="col-span-3 text-[#EBF3F5] font-poppins text-lg">My Profile</li>
                </router-link>
              </div>
              <div>
                <router-link to="" class="nav-link p-4 grid grid-cols-4" :active-class="''">
                  <img src="../../assets/icon/logout.svg" alt="Logout Icon" class="object-center fill-current text-[#EBF3F5]" />
                  <li class="col-span-3 text-[#EBF3F5] font-poppins text-lg">Logout</li>
                </router-link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
}

.nav-link {
  text-decoration: none;
  color: #ebf3f5;
}

.active-link > span {
  font-weight: bold;
}
</style>
