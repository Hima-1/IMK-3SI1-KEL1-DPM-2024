<template>
  <div>
    <div class="flex items-center mt-12 space-x-6">
      <img
          src="@/assets/icon/folder.svg"
          alt="Folder Icon"
          class="folder-icon w-12 h-12"
      />
      <h1 class="text-[#1A5796] font-poppins text-4xl">
        Arsip Dokumen
      </h1>
    </div>

    <div v-if="showDetail" class="flex items-center bg-[#EBF3F5] p-4 pl-0 mt-6 cursor-pointer" @click="toggleDetail">
      <img src="@/assets/icon/return.svg" alt="Return Icon" class="return w-[56px] h-[56px] flex-shrink-0 cursor-pointer"/>
      <div class="ml-4">
        <p class="kembali text-[#267DC2] font-poppins text-[30px] font-semibold leading-normal">{{ currentFolder.namaFolder }}</p>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

@media (max-width: 965px) {
  .folder-icon, .return {
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

@media (max-width: 1280px) {
  .folder-icon {
    width: 2rem;
    height: 2rem;
  }
  .return{
    width: 2rem;
    height: 2rem;
  }
  h1 {
    font-size: 1.5rem;
  }
  .kembali {
    font-size: 1.5rem;
  }
  .mt-6 {
    margin-top: 1rem;
  }

  .p-4 {
    padding-bottom: 0rem;
  }
  .text-\[30px\] {
    font-size: 1.5rem;
  }
}

@media (max-width: 765px) {
  .mt-12 {
    margin-top: 1.5rem;
  }

  .mt-6 {
    margin-top: 0.75rem;
  }

  .p-4 {
    padding-bottom: 0rem;
  }

  .text-\[30px\] {
    font-size: 1rem;
  }
}

</style>
