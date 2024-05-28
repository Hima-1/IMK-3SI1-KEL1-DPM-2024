<template>
  <div class="pengumuman-box flex items-center justify-between p-8">
    <div class="flex items-center">
      <div class="date-circle flex items-center justify-center">
        <div class="text-center">
          <p class="date-text">27</p>
          <p class="month-text">Mei</p>
          <p class="year-text">2024</p>
        </div>
      </div>
    </div>
    <div class="flex-1 ml-8">
      <h2 class="text-[47px] text-[#1A5796] font-poppins font-bold">Pengumuman</h2>
      <p class="text-[#1A5796] font-poppins text-[20px] font-medium">Detail pengumuman di sini.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pengunguman',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

.pengumuman-box {
  width: 1337px;
  height: 267px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #CEDBE5;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.date-circle {
  width: 183px;
  height: 183px;
  flex-shrink: 0;
  border: 6px solid #EBF3F5;
  border-radius: 50%;
}

.date-text {
  color: #1A5796;
  font-family: 'Poppins', sans-serif;
  font-size: 47px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.month-text,
.year-text {
  color: #1A5796;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>
