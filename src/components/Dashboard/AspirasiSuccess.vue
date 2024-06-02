<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="modal-content">
      <img
          src="../../assets/images/success.webp"
          alt="Gambar Sukses"
          class="modal-image"
      />
      <h1 class="sukses-text">SUKSES >_<</h1>
      <p class="sambatan-text">Sambatan kamu telah dikirim</p>
      <div class="modal-buttons">
        <button @click="confirm" class="confirm-button">Oke</button>
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

.modal-content {
  width: 90%;
  max-width: 27.75rem; /* 444px/16 */
  height: 31.6875rem; /* 507px/16 */
  background-color: #ebf3f5;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 1.25rem; /* 20px */
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal-image {
  width: 17.9038rem; /* 286.461px/16 */
  height: 13.0624rem; /* 208.999px/16 */
  flex-shrink: 0;
}

.sukses-text {
  width: 20.25rem; /* 324px/16 */
  color: #1a5796;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5625rem; /* 25px/16 */
  font-weight: 600;
  line-height: 2.3425rem; /* 37.47px/16 */
  margin-top: 1rem;
}

.sambatan-text {
  width: 21.4375rem; /* 343px/16 */
  color: #1a5796;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem; /* 20px/16 */
  font-weight: 400;
  line-height: 1.8735rem; /* 29.976px/16 */
  margin-top: 1rem;
}

.modal-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.confirm-button {
  width: 9.5625rem; /* 153px/16 */
  height: 3.5848rem; /* 57.357px/16 */
  border-radius: 9999px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem; /* 20px/16 */
  font-weight: 700;
  text-align: center;
  line-height: 3.5848rem; /* 57.357px/16 */
  background-color: #1a5796;
  color: #ebf3f5;
  border: none;
}
</style>
