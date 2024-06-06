<template>
  <div>
    <div>
      <section id="info-edit">
        <InfoEdit />
      </section>
      <section id="info-rekening">
        <InfoRekening />
      </section>
    </div>
  </div>  
</template>

<script>
import InfoEdit from "../components/Dashboard/InfoEdit.vue"
import InfoRekening from "../components/Dashboard/InfoRekening.vue"

export default {
  name: "EditProfile",
  components: {
    InfoEdit,
    InfoRekening
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");

.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
