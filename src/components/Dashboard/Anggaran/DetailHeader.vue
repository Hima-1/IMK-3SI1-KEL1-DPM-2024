<template>
  <div>
    <div class="flex items-center mt-12 space-x-6 folder-icon">
      <img
          src="@/assets/icon/anggaran.svg"
          alt="Folder Icon"
          class="w-12 h-12"
      />
      <h1 class="text-[#1A5796] font-poppins text-4xl">
        Anggaran Imapolstat/Detail
      </h1>
    </div>

    <div class="flex items-center bg-[#EBF3F5] p-4 pl-0 mt-6">
      <router-link to="/dashboard/anggaran-impolstat" class="flex items-center space-x-4">
        <img
            src="@/assets/icon/return.svg"
            alt="Return Icon"
            class="w-12 h-12 return"
        />
        <p class="kembali text-[#267DC2] font-poppins text-2xl font-semibold leading-normal">
          Kembali
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
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
  .mt-12{
    margin-top: 2rem;
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
    font-size: 1.25rem;
  }
}

@media (max-width: 425px) {
  .mt-12{
    margin-top: 0rem;
  }
  .mt-6{
    margin-top: 1rem;
  }
}

</style>
