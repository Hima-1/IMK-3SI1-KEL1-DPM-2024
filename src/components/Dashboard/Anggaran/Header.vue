<template>
  <div>
    <!-- Folder Icon and Arsip Dokumen Text -->
    <div class="flex items-center mt-12 space-x-6">
      <img
          src="@/assets/icon/anggaran.svg"
          alt="Folder Icon"
          class="w-12 h-12"
      />
      <h1 class="text-[#1A5796] font-poppins text-4xl" style="line-height: 60px;">
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
</style>
