<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="modal-wrapper">
      <img
          src="@/assets/images/success.webp"
          alt="Gambar Sukses"
          class="w-[17.9038rem] h-[13.0624rem] flex-shrink-0"
      />
      <h1 class="w-[20.25rem] text-[#1a5796] text-center font-poppins text-[1.5625rem] font-semibold leading-[2.3425rem] mt-4">
        SUKSES >_<
      </h1>
      <p class="w-[21.4375rem] text-[#1a5796] text-center font-poppins text-[1.25rem] font-normal leading-[1.8735rem] mt-4">
        Sambatan kamu telah dikirim
      </p>
      <div class="w-full flex justify-center mt-6">
        <button @click="confirm" class="w-[9.5625rem] h-[3.5848rem] rounded-full font-poppins text-[1.25rem] font-bold text-center leading-[3.5848rem] bg-[#1a5796] text-[#ebf3f5]">
          Oke
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
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
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

@media (min-width: 1280px) {
  .w-\[17\.9038rem\] {
    width: 22rem;
  }
  .h-\[13\.0624rem\] {
    height: 16rem;
  }
  .w-\[20\.25rem\] {
    width: 25rem;
  }
}
</style>
