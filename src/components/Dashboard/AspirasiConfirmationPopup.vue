<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="modal-content">
      <img
          src="@/assets/images/konfirmasi.webp"
          alt="Gambar Konfirmasi"
          class="modal-image"
      />
      <p class="modal-text">
        Apakah anda yakin ingin sambat tentang hal tersebut?
      </p>
      <div class="modal-buttons">
        <button @click="confirm" class="confirm-button">
          Konfirmasi
        </button>
        <button @click="cancel" class="cancel-button">
          Tolak
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

.modal-content {
  width: 90%;
  max-width: 27.75rem; /* 444px/16 */
  height: 31.6875rem; /* 507px/16 */
  background-color: #EBF3F5;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-image {
  width: 75%;
  height: auto;
}

.modal-text {
  width: 80%;
  color: #1A5796;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
  margin: 1.5rem 0;
}

.modal-buttons {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
}

.confirm-button,
.cancel-button {
  width: 33%;
  height: 3.5rem;
  border-radius: 9999px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
  line-height: 3.5rem;
}

.confirm-button {
  background-color: #1A5796;
  color: #EBF3F5;
}

.cancel-button {
  border: 2px solid #1A5796;
  color: #1A5796;
}
</style>
