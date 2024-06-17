<template>
  <div class="bg-[#ebf3f5]">
    <div class="mx-20">
      <section id="info-edit">
        <InfoEdit />
      </section>
      <section id="info-rekening">
        <InfoRekening />
      </section>
      <section class="grid grid-cols-8 mb-8">
        <button @click="showSuccessPopup" class="col-start-8 p-2 rounded-lg bg-[#1A5796] font-semibold text-[#F6F6F6]">Simpan</button>
      </section>
      <EditProfileSuccess v-if="isSuccessPopupVisible" @confirm="hideSuccessPopup"></EditProfileSuccess>
    </div>
  </div>
</template>

<script>
import InfoEdit from "../components/Dashboard/Profil/InfoEdit.vue";
import InfoRekening from "../components/Dashboard/Profil/InfoRekening.vue";
import EditProfileSuccess from "../components/Dashboard/Profil/EditProfileSuccess.vue";

export default {
  name: "EditProfile",
  components: {
    InfoEdit,
    InfoRekening,
    EditProfileSuccess
  },
  data() {
    return {
      isSuccessPopupVisible: false,
    };
  },
  methods: {
    showSuccessPopup() {
      this.isSuccessPopupVisible = true;
    },
    hideSuccessPopup() {
      this.isSuccessPopupVisible = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
