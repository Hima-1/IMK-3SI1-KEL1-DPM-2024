<template>
  <header class="w-full flex items-center mb-4 mt-4">
    <img src="@/assets/images/logo_dpm.webp" alt="Logo" class="rounded-full mr-4 md:mr-8 w-14 h-14 md:w-24 md:h-24" />
    <div>
      <p class="text-primary font-poppins text-lg md:text-2xl font-bold">
        Welcome, <span class="font-extrabold">Himacad Rijifen</span>
      </p>
      <p class="text-primary italic text-sm md:text-base">
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

.text-primary {
  color: #1A5796;
}

@media (max-width: 1280px) {
  .w-14 {
    width: 4rem;
    height: 4rem;
  }

  .text-lg {
    font-size: 1.5rem;
  }

  .text-sm {
    font-size: 1rem;
  }

  .mt-4{
    margin-top: 3rem;
  }
}

@media (max-width: 640px) {
  .w-14 {
    width: 2.875rem;
    height: 2.875rem;
  }

  .text-lg {
    font-size: 1.125rem;
  }

  .text-sm {
    font-size: 0.9375rem;
  }
}
</style>
