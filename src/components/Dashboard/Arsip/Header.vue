<template>
  <div>
    <!-- Folder Icon and Arsip Dokumen Text -->
    <div class="flex items-center mt-12 space-x-6">
      <img
          src="@/assets/icon/folder.svg"
          alt="Folder Icon"
          class="w-12 h-12"
      />
      <h1 class="text-[#1A5796] font-poppins text-4xl" style="line-height: 60px;">
        Arsip Dokumen
      </h1>
    </div>

    <div v-if="showDetail" class="flex items-center bg-[#EBF3F5] p-4 pl-0 mt-6">
      <img src="@/assets/icon/return.svg" alt="Return Icon" class="w-[56px] h-[56px] flex-shrink-0 cursor-pointer" @click="toggleDetail"/>
      <div class="ml-4">
        <p class="text-[#267DC2] font-poppins text-[30px] font-semibold leading-normal">{{ currentFolder.namaFolder }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArsipHeader',
  props: {
    showDetail: {
      type: Boolean,
      required: true
    },
    currentFolder: {
      type: Object,
      required: true
    }
  },
  methods: {
    toggleDetail() {
      this.$emit('toggleDetail');
    }
  }
}
</script>

<style scoped>
.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>
