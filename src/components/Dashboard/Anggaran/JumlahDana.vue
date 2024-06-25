<template>
  <div class="scale-down wrapper flex flex-col items-center justify-center rounded-[1.25rem] bg-[#F6F6F6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
    <img src="@/assets/icon/jumlah-dana.svg" alt="Icon" class="icon">
    <div class="text-center content">
      <h2 class="title">Jumlah Dana</h2>
      <h3 class="title subtitle">Imapolstat saat ini:</h3>
      <p class="amount">Rp83.752.825</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JumlahDana'
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  max-width: 27.75rem;
  height: 31.6875rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 17.90381rem;
  height: 13.87494rem;
}

.title {
  color: #1A5796;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.5625rem;
  line-height: 2.34188rem;
  margin-top: 0.5rem;
}

.subtitle {
  margin-top: 0.25rem;
}

.amount {
  color: #1A5796;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 3.125rem;
  line-height: normal;
  margin-top: 0.5rem;
}

@media (max-width: 1280px){
  .wrapper {
    width: 100%;
    max-width: 27.75rem;
    height: 25rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    width: 15rem;
    height: 15rem;
    margin-right: 1rem;
  }

  .amount{
    font-size: 2rem;
  }
  .title{
    font-size: 1.5rem;
    line-height: 1.3rem;
  }
}

@media (max-width: 768px) {
  .wrapper {
    width: 100%;
    height: auto;
    border-radius: 1.25rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0.625rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .icon {
    width: 7.26538rem;
    height: 5.6875rem;
    margin-right: 1rem;
  }

  .title {
    font-size: 0.9375rem;
    margin: 0;
  }

  .subtitle {
    font-size: 0.9375rem;
    margin: 0;
    margin-top: 0.25rem;
  }

  .amount {
    font-size: 1.625rem;
    margin: 0;
    margin-top: 0.25rem;
  }

  .text-center {
    text-align: left;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 1280px) and (min-width: 768px) {
  .scale-down {
    transform: scale(0.85);
    transform-origin: top right;
  }
}

@media (max-width: 400px) {
  .amount{
    font-size: 1.15rem;
  }
}
</style>
