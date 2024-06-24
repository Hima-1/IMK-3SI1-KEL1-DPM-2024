<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="modal-wrapper">
      <img
          src="@/assets/images/konfirmasi.webp"
          alt="Gambar Konfirmasi"
          class="w-3/4 h-auto"
      />
      <p class="w-4/5 text-[#1A5796] text-center font-poppins text-lg my-6">
        Apakah kamu yakin ingin mengubah profil?
      </p>
      <div class="w-full flex justify-evenly mt-4">
        <button @click="confirm"
                class="w-1/3 h-14 rounded-full bg-[#1A5796] text-[#EBF3F5] font-poppins text-lg font-bold text-center leading-14 confirm-button">
          Yakin
        </button>
        <button @click="cancel"
                class="w-1/3 h-14 rounded-full border-2 border-[#1A5796] text-[#1A5796] font-poppins text-lg font-bold text-center leading-14 cancel-button">
          Tidak
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    confirm() {
      this.$emit('confirm');
    },
    cancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.leading-14 {
  line-height: 3.5rem;
}

.modal-wrapper {
  width: 90%;
  max-width: 27.75rem;
  height: 31.6875rem;
  background-color: #ebf3f5;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 425px) {
  .confirm-button, .cancel-button {
    width: 8rem; /* 33% of 12rem increased by 10% */
    height: 4rem; /* 3.5rem increased by 10% */
  }
}
</style>
