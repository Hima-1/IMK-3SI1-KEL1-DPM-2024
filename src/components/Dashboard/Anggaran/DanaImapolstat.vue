<template>
  <div class="flex-shrink-0 w-[63.125rem] h-[48.0625rem] rounded-[1.25rem] bg-[#F6F6F6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center">
    <h1 class="text-[#1A5796] text-center font-poppins text-[3.125rem] font-bold mb-5">Dana Imapolstat</h1>
    <div class="w-[34.5625rem] h-[34.5625rem] transform flex-shrink-0">
      <Pie :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default defineComponent({
  name: 'GraphDana',
  components: {
    Pie
  },
  data() {
    return {
      chartData: {
        labels: ['Pemasukan', 'Pengeluaran'],
        datasets: [
          {
            backgroundColor: ['#1a5796', '#267dc2'],
            data: [87448825, 3696000]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            align: 'start',
            labels: {
              color: '#1A5796',
              textAlign: 'right',
              font: {
                family: 'Poppins',
                size: 25, // equivalent to 1.5625rem
                style: 'normal',
                weight: 600,
                lineHeight: 'normal'
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed !== null) {
                  label += `Rp. ${context.parsed.toLocaleString()}`;
                }
                return label;
              }
            }
          }
        },
        layout: {
          padding: {
            left: 10,
            right: 0,
            top: 10,
            bottom: 0
          }
        }
      }
    }
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');
</style>

<style>
@import 'tailwindcss/tailwind.css';
</style>
