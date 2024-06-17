<template>
  <div class="relative" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
    <div class="flex items-center gap-2 p-2" aria-haspopup="true" :aria-expanded="isDropdownVisible.toString()" role="button" @click="handleClick">
      <img src="@/assets/icon/account.svg" alt="User Photo" class="profile-photo w-[3.75rem] h-[3.75rem] shrink-0 rounded-full">
      <div class="text-right hide-on-910 hidden md:block">
        <span class="text-[#EBF3F5] text-lg font-medium" style="font-family: 'Poppins', sans-serif;">Himacad Rijifen</span>
      </div>
      <img src="@/assets/icon/arrow-down.svg" alt="Dropdown Icon" class="arrow-down-icon w-[0.6875rem] h-[0.5625rem] text-[#EBF3F5]">
    </div>
    <div v-if="isDropdownVisible" class="drop absolute right-0 mt-5 w-[15.25rem] bg-[#1A5796] shadow-md rounded-md p-4 flex flex-col gap-2" @mouseenter="cancelHideDropdown" @mouseleave="scheduleHideDropdown">
      <div class="flex items-center gap-4 w-full ml-4">
        <img src="@/assets/icon/my-profile.svg" alt="My Profile Icon" class="w-[2.0625rem] h-[1.5625rem] shrink-0">
        <span class="text-[#EBF3F5] text-lg font-normal" style="font-family: 'Poppins', sans-serif;">My Profile</span>
      </div>
      <hr class="w-full border-t border-[#EBF3F5]/50">
      <div class="flex items-center gap-4 w-full ml-4">
        <img src="@/assets/icon/logout.svg" alt="Logout Icon" class="w-[1.93206rem] h-[1.86231rem] shrink-0">
        <span class="text-[#EBF3F5] text-lg font-normal" style="font-family: 'Poppins', sans-serif;">Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDropdown',
  data() {
    return {
      isDropdownVisible: false,
      hideTimeout: null,
      isMobile: window.innerWidth <= 768
    };
  },
  methods: {
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
</style>
