<template>
  <div>
    <!-- Folder Icon and Arsip Dokumen Text -->
    <div class="flex items-center mt-12 space-x-6 folder-icon">
      <img
          src="@/assets/icon/anggaran.svg"
          alt="Folder Icon"
          class="w-12 h-12"
      />
      <h1 class="text-[#1A5796] font-poppins text-4xl">
        Anggaran Imapolstat
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnggaranHeader'
}
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.folder-icon img {
  width: 3rem;
  height: 3rem;
}

.return {
  width: 3.5rem;
  height: 3.5rem;
}

@media (max-width: 1280px) {
  .folder-icon img {
    width: 2rem;
    height: 2rem;
  }
  .return{
    width: 2rem;
    height: 2rem;
  }
  h1 {
    font-size: 2rem;
  }
  .kembali {
    font-size: 1.5rem;
  }
}

@media (max-width: 965px) {
  .folder-icon img,
  .return {
    width: 1.875rem;
    height: 1.875rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .kembali {
    font-size: 1rem;
  }
}

@media (max-width: 765px){
  .mt-12{
    margin-top: 1.5rem;
  }
}
</style>
