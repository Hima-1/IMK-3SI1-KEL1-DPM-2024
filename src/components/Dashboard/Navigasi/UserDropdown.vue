<template>
  <div class="relative" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
    <div class="flex items-center gap-2 p-2" aria-haspopup="true" :aria-expanded="isDropdownVisible.toString()" role="button" @click="handleClick">
      <img :src="`/mahasiswa/${ mahasiswa.foto }`" alt="User Photo" class="profile-photo w-[3.75rem] h-[3.75rem] shrink-0 rounded-full">
      <div class="text-right hide-on-910 hidden md:block">
        <span class="text-[#EBF3F5] text-lg font-medium" style="font-family: 'Poppins', sans-serif;">{{ mahasiswa.namaLengkap }}</span>
      </div>
      <img src="@/assets/icon/arrow-down.svg" alt="Dropdown Icon" class="arrow-down-icon w-[0.6875rem] h-[0.5625rem] text-[#EBF3F5]">
    </div>
    <div v-if="isDropdownVisible" class="drop absolute right-0 mt-3 w-[11.5rem] bg-[#1A5796] shadow-md rounded-md flex flex-col gap-2" @mouseenter="cancelHideDropdown" @mouseleave="scheduleHideDropdown">
      <ul class="bg-[#1A5796] rounded-2xl">
        <div class=" border-b-[1px] border-[#EBF3F550]">
          <router-link to="/dashboard/my-profile" class="nav-link p-4 grid grid-cols-4 hover:bg-[#15649D] hover:rounded-tr-xl hover:rounded-tl-xl" :active-class="'active-link'">
            <img src="@/assets/icon/profile.svg" alt="Profile Icon" class="obejct-center fill-current text-[#EBF3F5]" />
            <li class="col-span-3 text-[#EBF3F5] font-poppins text-[1.1rem]">My Profile</li>
          </router-link>
        </div>
        <div>
          <router-link to="/" class="nav-link p-4 grid grid-cols-4 hover:bg-[#15649D] hover:rounded-br-xl hover:rounded-bl-xl" :active-class="''">
            <img src="@/assets/icon/logout.svg" alt="Logout Icon" class="object-center fill-current text-[#EBF3F5]" />
            <li class="col-span-3 text-[#EBF3F5] font-poppins text-[1.1rem]">Logout</li>
          </router-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserDropdown',
  data() {
    return {
      isDropdownVisible: false,
      hideTimeout: null,
      isMobile: window.innerWidth <= 768
    };
  },
  computed: {
    ...mapState('mahasiswa', ['mahasiswa']),
    ...mapGetters('mahasiswa', ['mahasiswa']),
  },
  methods: {
    ...mapActions('mahasiswa', ['updateMahasiswa']),
    handleMouseOver() {
      if (!this.isMobile) {
        this.showDropdown();
      }
    },
    handleMouseLeave() {
      if (!this.isMobile) {
        this.scheduleHideDropdown();
      }
    },
    handleClick(event) {
      if (this.isMobile) {
        this.isDropdownVisible = !this.isDropdownVisible;
      }
      event.stopPropagation();
    },
    showDropdown() {
      this.isDropdownVisible = true;
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    },
    scheduleHideDropdown() {
      this.hideTimeout = setTimeout(() => {
        this.isDropdownVisible = false;
      }, 300);
    },
    cancelHideDropdown() {
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    },
    handleOutsideClick(event) {
      if (this.$el && !this.$el.contains(event.target)) {
        this.isDropdownVisible = false;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;800&display=swap');

.profile-photo {
  width: 3.75rem;
  height: 3.75rem;
}

.arrow-down-icon {
  display: block;
}

@media (max-width: 1280px) {
  .profile-photo {
    width: 2.5rem;
    height: 2.5rem;
  }
  .font-medium{
    font-size: 0.88rem;
  }
}

@media (max-width: 768px) {
  .profile-photo {
    width: 3.1875rem;
    height: 3.1875rem;
  }
  .arrow-down-icon {
    display: none;
  }
  .drop{
    margin-top: 0.5rem;
  }
}
@media (max-width: 425px) {
  .profile-photo {
    width: auto;
    height: 3rem;
  }
  .arrow-down-icon {
    display: none;
  }
  .drop{
    margin-top: 0.5rem;
  }
}
</style>
