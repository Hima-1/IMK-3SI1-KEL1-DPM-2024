<template>
  <div>
    <section id="myProfile">
      <Profile @show-success-popup="showSuccessPopup"/>
    </section>
    <UbahPasswordSuccess v-if="isSuccessPopupVisible" @confirm="hideSuccessPopup"></UbahPasswordSuccess>
  </div>  
</template>

<script>
import Profile from "@/components/Dashboard/Profil/Profile.vue"
import UbahPasswordSuccess from "@/components/Dashboard/Profil/UbahPasswordSuccess.vue"

export default {
  name: "MyProfile",
  components: {
    Profile,
    UbahPasswordSuccess
  },
  data() {
    return {
      isSuccessPopupVisible: false,
      tab: 1,
      currentFolder: {},
      showDetail: false,
      currentPage: 1,
      totalPages: 5,
    };
  },
  methods: {
    showSuccessPopup() {
      this.isSuccessPopupVisible = true;
    },
    hideSuccessPopup() {
      this.isSuccessPopupVisible = false;
    },
    viewDetails(row) {
      this.currentFolder = row;
      this.showDetail = true;
    },
    toggleDetail() {
      this.showDetail = false;
    },
    updateCurrentPage(newPage) {
      this.currentPage = newPage;
      // Fetch new data based on newPage if needed
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
