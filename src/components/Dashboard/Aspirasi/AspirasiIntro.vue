<template>
  <div class="wrapper w-full max-w-[33.6rem] h-auto bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
    <div class="content w-full max-w-[27.3125rem] h-auto flex flex-col justify-center">
      <p class="text-gray font-poppins text-paragraph text-left break-words sm:text-[1.25rem] sm:leading-[1.75rem]">
        Fitur Aspirasi merupakan wadah bagi mahasiswa untuk memberikan <span class="font-bold">sambatan</span> terbaik mereka. Sambatan itu sendiri merupakan kritik atau saran yang ditujukan kepada <span class="font-bold">"Kampus, Ormawa, Pengurus Tingkat, dan Lainnya"</span>.
      </p>
      <p class="text-gray font-poppins text-paragraph mt-9 text-left break-words sm:text-[1.25rem] sm:leading-[1.75rem]">
        Silahkan mengisi <span class="font-bold">"Form Sambatan"</span> dengan harapan kritik yang diberikan dapat membangun atau memberikan dampak positif bagi kita semua.
      </p>
      <div class="mt-12">
        <p class="text-blue font-poppins text-sambat font-semibold break-words sm:text-[1.25rem] sm:leading-[1.75rem]">
          Selamat bersambat-ria!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AspirasiIntro'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

.text-gray {
  color: #6A6C7A;
}

.text-paragraph {
  @apply text-[1.4375rem] leading-[2.148rem];
}

.text-blue {
  color: #267DC2;
}

.text-sambat {
  @apply text-[1.4375rem] font-semibold leading-[2.148rem];
}

.wrapper {
  @apply w-full max-w-[33.6rem] h-auto bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center;
}

@media (max-width: 1280px) {
  .wrapper {
    @apply w-3/6 p-11 box-border;
  }

  .text-paragraph, .text-sambat {
    @apply text-[1rem] leading-[1.3rem];
  }
}

/* Media query for mobile view */
@media (max-width: 640px) {
  .wrapper {
    @apply w-full p-4 box-border;
  }

  .text-paragraph, .text-sambat {
    @apply text-[0.9375rem] leading-[1.40513rem];
  }
}
</style>
