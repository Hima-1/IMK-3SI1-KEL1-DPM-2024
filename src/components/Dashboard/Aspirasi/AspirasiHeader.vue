<template>
  <header class="w-full flex items-center mb-4">
    <img src="@/assets/images/logo_dpm.webp" alt="Logo" class="logo">
    <div>
      <p class="welcome-text">
        Welcome, <span class="font-extrabold">Himacad Rijifen</span>
      </p>
      <p class="subtitle">
        Sampaikan aspirasimu disini!
      </p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AspirasiHeader'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.logo {
  width: 5.5625rem;
  height: 5.5625rem;
  margin-right: 1rem;
  border-radius: 50%;
}

.welcome-text {
  color: #1A5796;
  font-family: 'Poppins', sans-serif;
  font-size: 2.1875rem;
  font-weight: 600;
  line-height: normal;
}

.subtitle {
  color: #1A5796;
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}

@media (max-width: 640px) {
  .logo {
    width: 3.5rem;
    height: 3.5rem;
  }

  .welcome-text {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 0.875rem;
  }
}
</style>
