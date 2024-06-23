<template>
  <div class="bg-[#EBF3F5] flex flex-col items-center justify-start min-h-screen">
    <!-- Judul Galeri -->
    <div>
      <h1
        class="judulpage bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold mt-8 p-5 text-[30px] lg:text-[33px]">
        Galeri
      </h1>
    </div>

    <!-- Dropdown -->
    <div class="flex w-full mt-8 justify-center md:hidden">
      <div
        class="grid grid-cols-5 items-center bg-[#15649D] text-[#FFFFFF] text-[18px] mb-6 p-3 shadow-lg rounded-[44px] border-none font-bold text-center min-[425px]:text-left min-[425px]:pl-6 max-w-xl min-[425px]:w-1/2 md:w-1/3"
        @click="toggleDropdown">
        <span class="col-span-4 mx-3">{{ activeButton }}</span>
        <div class="grid col-start-5 justify-center">
          <img src="@/assets/icon/dropdown.svg" alt="Dropdown Icon" class="icon mx-1">
        </div>
      </div>
      <ul v-show="dropdownOpen"
        class="absolute w-1/2 bg-[#15649D] text-[#FFFFFF] text-[18px] shadow-lg border-none font-bold text-center mt-16 z-10">
        <li v-for="button in buttons" :key="button"
          :class="{ 'active': activeButton === button, 'hovered': hoveredOption === button, 'bg-[#267DC2]': activeButton === button }"
          @click="setActiveButton(button)" @mouseover="hoveredOption = button" @mouseleave="hoveredOption = null"
          class="py-2 hover:bg-[#FCB316] hover:text-[#15649D]">
          {{ button }}
        </li>
      </ul>
    </div>

    <!-- Button Group -->
    <div
      class="hidden md:flex bg-[#15649D] text-[#FFFFFF] text-[15px] xl:text-[18px] mt-8 mb-6 p-4 font-medium rounded-[44px] first:rounded-tl-[44px] first:rounded-bl-[44px] last:rounded-tr-[44px] last:rounded-br-[44px] shadow-lg">
      <li v-for="button in buttons" :key="button" class="list-none">
        <button :class="{ 'font-bold': activeButton === button, 'text-[#C7D6DD]': activeButton === button }"
          @click="setActiveButton(button)"
          class="mx-2 px-4 focus:text-[#C7D6DD] focus:font-bold hover:text-[#C7D6DD] hover:font-bold">
          {{ button }}
        </button>
      </li>
    </div>

    <!-- Foto Dummy -->
    <div class="flex flex-wrap justify-center mb-20">
      <GaleriItem />
      <GaleriItem />
      <GaleriItem />
      <GaleriItem />
      <GaleriItem />
      <GaleriItem />
      <GaleriItem />
      <GaleriItem />
      <GaleriItem />
    </div>
  </div>
</template>

<script>
import GaleriItem from './GaleriItem.vue';

export default {
  name: 'Galeri',
  components: {
    GaleriItem,
  },
  data() {
    return {
      activeButton: 'Semua',
      buttons: ['Semua', 'LDKM', 'Sidang Umum I', 'Sidang Umum II', 'Sidang Umum III', 'Sidang Umum IV', 'Lainnya'],
      dropdownOpen: false,
      hoveredOption: null,
    };
  },
  methods: {
    setActiveButton(buttonName) {
      this.activeButton = buttonName;
      this.dropdownOpen = false;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }
};
</script>

<style scoped>
.judulpage {
  background-image: url('@/assets/icon/visi_misi.svg');
}
</style>