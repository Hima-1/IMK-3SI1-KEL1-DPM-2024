<template>
  <div class="bg-[#EBF3F5] flex flex-col items-center justify-start min-h-screen py-20">
    <!-- Judul Galeri -->
    <div>
      <h1
        class="galeri bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold mt-8 p-5 text-[30px] lg:text-[50px]">
        Galeri
      </h1>
    </div>

    <!-- Button Group for Larger Screens -->
    <div class="button-group mt-8 hidden lg:flex">
      <button v-for="button in buttons" :key="button" class="gallery-button"
        :class="{ active: activeButton === button }" @click="setActiveButton(button)">
        {{ button }}
      </button>
    </div>

    <!-- Dropdown for Smaller Screens -->
    <div class="custom-dropdown-container mt-8 lg:hidden">
      <div class="custom-dropdown" @click="toggleDropdown">
        <span>{{ activeButton }}</span>
        <div class="custom-dropdown-icon">
          <img src="../../assets/icon/dropdown.svg" alt="Dropdown Icon" class="icon">
        </div>
      </div>
      <ul v-show="dropdownOpen" class="custom-dropdown-options">
        <li v-for="button in buttons" :key="button"
          :class="{ active: activeButton === button, hovered: hoveredOption === button }"
          @click="setActiveButton(button)" @mouseover="hoveredOption = button" @mouseleave="hoveredOption = null">
          {{ button }}
        </li>
      </ul>
    </div>

    <!-- Foto Dummy -->
    <div class="flex flex-wrap justify-center gap-8">
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
.galeri {
  background-image: url('@/assets/icon/visi_misi.svg');
  margin-bottom: 25px;
}

.button-group {
  justify-content: center;
  gap: 0;
  margin-bottom: 25px;
  width: 90%;
}

.gallery-button {
  background-color: #15649D;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: 15px 30px;
  font-size: 23px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: font-weight 0.3s ease;
}

.gallery-button:first-child {
  border-top-left-radius: 44px;
  border-bottom-left-radius: 44px;
}

.gallery-button:last-child {
  border-top-right-radius: 44px;
  border-bottom-right-radius: 44px;
}

.gallery-button:hover {
  color: #C7D6DD;
}

.gallery-button.active {
  font-weight: bold;
  color: #C7D6DD;
}

.custom-dropdown-container {
  position: relative;
  width: 90%;
}

.custom-dropdown {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  font-size: 23px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  background-color: #15649D;
  color: #EBF3F5;
  border-radius: 44px;
  cursor: pointer;
}

.custom-dropdown-icon {
  margin-left: 10px;
}

.custom-dropdown-icon img.icon {
  width: 24px;
  height: 24px;
}

.custom-dropdown:hover {
  background-color: #1C7DC7;
}

.custom-dropdown-options {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #EBF3F5;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 5px;
  list-style: none;
  padding: 0;
  max-height: 200px;
  z-index: 1000;
}

.custom-dropdown-options li {
  padding: 10px 20px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  background-color: #15649D;
  color: #EBF3F5;
  cursor: pointer;
}

.custom-dropdown-options li.active {
  background-color: #1C7DC7;
}

.custom-dropdown-options li.hovered {
  background-color: #FCB316;
  color: #15649D;
}
</style>