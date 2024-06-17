<template>
  <div>
    <section id="myProfile">
      <Profile @show-success-popup="showSuccessPopup"/>
    </section>
    <UbahPasswordSuccess v-if="isSuccessPopupVisible" @confirm="hideSuccessPopup"></UbahPasswordSuccess>
  </div>  
</template>

<script>
import Profile from "../components/Dashboard/Profile.vue"
import UbahPasswordSuccess from "../components/Dashboard/UbahPasswordSuccess.vue"

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
      detail: [
        {
          namaLengkap: "Himacad Rijifen",
          kelas: "3SI1",
          nim: "222112999",
          email: "kelompok1@gmail.com",
          noHp: "082143658709",
        },
      ],
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
