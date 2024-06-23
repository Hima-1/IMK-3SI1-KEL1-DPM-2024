<template>
  <div class="bg-[#ebf3f5]">
    <div class="mx-8 lg:mx-20">
      <section id="info-edit">
        <InfoEdit />
      </section>
      <section id="info-rekening">
        <InfoRekening />
      </section>
      <section class="grid grid-cols-8 mb-8">
        <button @click="showConfirmationPopup" class="col-start-6 md:col-start-8 col-end-9 p-2 rounded-lg bg-[#1A5796] font-semibold text-[#F6F6F6]">Simpan</button>
      </section>
      <KonfirmasiSimpanProfil v-if="isConfirmationPopupVisible" @confirm="handleConfirmation"
                               @cancel="hideConfirmationPopup"/>
      <EditProfileSuccess v-if="isSuccessPopupVisible" @confirm="hideSuccessPopup"></EditProfileSuccess>
    </div>
  </div>
</template>

<script>
import InfoEdit from "@/components/Dashboard/Profil/InfoEdit.vue";
import InfoRekening from "@/components/Dashboard/Profil/InfoRekening.vue";
import KonfirmasiSimpanProfil from "../components/Dashboard/Profil/KonfirmasiSimpanProfil.vue";
import EditProfileSuccess from "@/components/Dashboard/Profil/EditProfileSuccess.vue";

export default {
  name: "EditProfile",
  components: {
    InfoEdit,
    InfoRekening,
    KonfirmasiSimpanProfil,
    EditProfileSuccess
  },
  data() {
    return {
      isConfirmationPopupVisible: false,
      isSuccessPopupVisible: false,
    };
  },
  methods: {
    showConfirmationPopup() {
      this.isConfirmationPopupVisible = true;
    },
    hideConfirmationPopup() {
      this.isConfirmationPopupVisible = false;
    },
    handleConfirmation() {
      this.isConfirmationPopupVisible = false;
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
