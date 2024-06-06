<template>
  <div class="bg-[#EBF3F5] flex flex-col items-center justify-start min-h-screen py-20">
    <!-- Judul Galeri -->
    <div>
      <h1 class="galeri bg-center bg-no-repeat bg-contain text-[#1A5796] text-center font-poppins text-5xl font-bold mt-8 p-5 text-[50px]">
        Galeri
      </h1>
    </div>

    <!-- Button Group -->
    <div class="button-group mt-8">
      <button class="gallery-button" :class="{ active: activeButton === 'Semua' }" @click="setActiveButton('Semua')">Semua</button>
      <button class="gallery-button" :class="{ active: activeButton === 'LDKM' }" @click="setActiveButton('LDKM')">LDKM</button>
      <button class="gallery-button" :class="{ active: activeButton === 'Sidang Umum I' }" @click="setActiveButton('Sidang Umum I')">Sidang Umum I</button>
      <button class="gallery-button" :class="{ active: activeButton === 'Sidang Umum II' }" @click="setActiveButton('Sidang Umum II')">Sidang Umum II</button>
      <button class="gallery-button" :class="{ active: activeButton === 'Sidang Umum III' }" @click="setActiveButton('Sidang Umum III')">Sidang Umum III</button>
      <button class="gallery-button" :class="{ active: activeButton === 'Sidang Umum IV' }" @click="setActiveButton('Sidang Umum IV')">Sidang Umum IV</button>
      <button class="gallery-button" :class="{ active: activeButton === 'Lainnya' }" @click="setActiveButton('Lainnya')">Lainnya</button>
    </div>

    <!-- Foto Dummy -->

    <div class="gallery-grid mt-8 rounded-[44px]">
    <div class="foto-dummy rounded-[44px]">
    <div class="image-container rounded-[44px]">

          <img src="/Users/jihanmaisaroh/Semester 6/IMK/IMK-3SI1-KEL1-DPM-2024/src/assets/images/galeri.webp" alt="Foto 1" class="image rounded-[13px]">
          <div class="overlay">
            <span class="text">Tulisan di Tengah 1</span>
          </div>
        </div>
      </div>
      <div class="foto-dummy">
        <div class="image-container">
          <img src="/Users/jihanmaisaroh/Semester 6/IMK/IMK-3SI1-KEL1-DPM-2024/src/assets/images/galeri.webp" alt="Foto 2" class="image rounded-[13px]">
          <div class="overlay">
            <span class="text">Tulisan di Tengah 2</span>
          </div>
        </div>
      </div>
      <div class="foto-dummy">
        <div class="image-container">
          <img src="/Users/jihanmaisaroh/Semester 6/IMK/IMK-3SI1-KEL1-DPM-2024/src/assets/images/galeri.webp" alt="Foto 1" class="image rounded-[13px]">
          <div class="overlay">
            <span class="text">Tulisan di Tengah 1</span>
          </div>
        </div>
      </div>
      <div class="foto-dummy">
        <div class="image-container">
          <img src="/Users/jihanmaisaroh/Semester 6/IMK/IMK-3SI1-KEL1-DPM-2024/src/assets/images/galeri.webp" alt="Foto 1" class="image rounded-[13px]">
          <div class="overlay">
            <span class="text">Tulisan di Tengah 1</span>
          </div>
        </div>
      </div>
      <div class="foto-dummy">
        <div class="image-container">
          <img src="/Users/jihanmaisaroh/Semester 6/IMK/IMK-3SI1-KEL1-DPM-2024/src/assets/images/galeri.webp" alt="Foto 1" class="image rounded-[13px]">
          <div class="overlay">
            <span class="text">Tulisan di Tengah 1</span>
          </div>
        </div>
      </div>
      <div class="foto-dummy">
        <div class="image-container">
          <img src="/Users/jihanmaisaroh/Semester 6/IMK/IMK-3SI1-KEL1-DPM-2024/src/assets/images/galeri.webp" alt="Foto 1" class="image rounded-[13px]">
          <div class="overlay">
            <span class="text">Tulisan di Tengah 1</span>
          </div>
        </div>
      </div>
      <div class="foto-dummy">
        <div class="image-container">
          <img src="/Users/jihanmaisaroh/Semester 6/IMK/IMK-3SI1-KEL1-DPM-2024/src/assets/images/galeri.webp" alt="Foto 1" class="image rounded-[13px]">
          <div class="overlay">
            <span class="text">Tulisan di Tengah 1</span>
          </div>
        </div>
      </div>
      <div class="foto-dummy">
        <div class="image-container">
          <img src="/Users/jihanmaisaroh/Semester 6/IMK/IMK-3SI1-KEL1-DPM-2024/src/assets/images/galeri.webp" alt="Foto 1" class="image rounded-[13px]">
          <div class="overlay">
            <span class="text">Tulisan di Tengah 1</span>
          </div>
        </div>
      </div>
      <div class="foto-dummy">
        <div class="image-container">
          <img src="/Users/jihanmaisaroh/Semester 6/IMK/IMK-3SI1-KEL1-DPM-2024/src/assets/images/galeri.webp" alt="Foto 1" class="image rounded-[13px]">
          <div class="overlay">
            <span class="text">Tulisan di Tengah 1</span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Galeri',
  data() {
    return {
      activeButton: 'Semua'
    };
  },
  methods: {
    setActiveButton(buttonName) {
      this.activeButton = buttonName;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.foto-dummy {
  border-radius: 20px;
   position: relative;
  width: 500px;
  border-radius: 50%;
} 

.galeri {
  background-image: url('../../assets/icon/visi_misi.svg');
  margin-bottom: 25px;
}


.button-group {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 25px;
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

.gallery-grid {
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 50px;
}

@media (min-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.image-container {
  position: relative;
  width: 500px;
  border-radius: 44px;
}

.image {
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  opacity: 0; 
  transition: opacity 0.3s; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay:hover {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  text-align: center;
  font-family: Arial, sans-serif; }

</style>