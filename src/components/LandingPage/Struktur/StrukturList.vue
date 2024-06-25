<template>
  <div class="bg-[#cddbe5] flex flex-col items-center justify-start min-h-screen pt-10 pb-20">
    <!-- Judul Struktur -->
    <div class="w-full text-center mb-2 lg:mb-12">
      <h1 class="text-[#1A5796] text-center font-poppins text-[26px] md:text-[33px] font-bold leading-normal">Susunan
        Pengurus</h1>
    </div>

    <!-- Dropdown -->
    <div class="flex w-full mt-8 justify-center lg:hidden">
      <div
        class="grid grid-cols-5 items-center bg-[#EBF3F5] text-[#1A5796] text-[18px] mb-12 p-3 shadow-lg rounded-[44px] border-none font-bold text-center min-[425px]:text-left min-[425px]:pl-6 max-w-xl min-[425px]:w-1/2 md:w-1/3"
        @click="toggleDropdown">
        <span class="col-span-4">{{ activeButton }}</span>
        <div class="grid col-start-5 justify-center">
          <img src="../../../assets/icon/dropdown-blue.svg" alt="Dropdown Icon" class="icon" />
        </div>
      </div>
      <ul v-show="dropdownOpen" class="absolute w-1/2 bg-[#EBF3F5] text-[#1A5796] text-[18px] shadow-lg border-none font-bold text-center mt-16 z-10">
        <li
          v-for="button in buttons"
          :key="button"
          :class="{ active: activeButton === button, hovered: hoveredOption === button, 'bg-[#cddbe5]': activeButton === button }"
          @click="setActiveButton(button)"
          @mouseover="hoveredOption = button"
          @mouseleave="hoveredOption = null"
          class="py-2 active:bg-[#C6C6C6] hover:bg-[#FCB316] cursor-pointer"
          >
          {{ button }}
        </li>
      </ul>
    </div>

    <!-- Struktur Button Group -->
    <div class="hidden lg:flex bg-[#EBF3F5] text-[#1A5796] text-[15px] xl:text-[18px] mx-4 mb-12 p-4 font-medium rounded-[44px] first:rounded-tl-[44px] first:rounded-bl-[44px] last:rounded-tr-[44px] last:rounded-br-[44px] shadow-lg">
      <li v-for="button in buttons" :key="button" :class="{ 'font-bold': activeButton === button, 'text-[#F7941D]': activeButton === button, hovered: hoveredOption === button }" @click="setActiveButton(button)" class="list-none">
        <button class="mx-2 px-4 active:font-bold focus:text-[#F7941D] focus:font-bold hover:text-[#F7941D] hover:font-bold">{{ button }}</button>
      </li>
    </div>

    <div class="container mx-auto">
      <div class="flex flex-wrap justify-center max-lg:gap-x-2 gap-y-8">
        <StrukturItem v-for="anggota in filteredButton" :key="anggota.id" :anggota="anggota" />
      </div>
    </div>
  </div>
</template>

<script>
import StrukturItem from "./StrukturItem.vue";
import { mapState, mapGetters } from "vuex";

export default {
  name: "StrukturList",
  components: {
    StrukturItem,
  },
  computed: {
    ...mapState("anggotas", ["anggotas"]),
    ...mapGetters("anggotas", ["anggotas"]),
  },
  data() {
    return {
      activeButton: "Semua",
      dropdownOpen: false,
      hoveredOption: null,
      buttons: ["Semua", "BPH", "Komisi I", "Komisi II", "Komisi III", "Komisi IV", "Pubmedkraf", "IT"],
      filteredButton: [],
    };
  },
  methods: {
    setActiveButton(buttonName) {
      this.activeButton = buttonName;
      this.filterItems();
      this.dropdownOpen = false;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    filterItems() {
      if (this.activeButton === "Semua") {
        this.filteredButton= this.anggotas;
      } else {
        this.filteredButton = this.anggotas.filter(anggota => anggota.divisi === this.activeButton);
      }
    }
  },
  mounted() {
    this.filterItems();
  }
};
</script>

<style scoped></style>
