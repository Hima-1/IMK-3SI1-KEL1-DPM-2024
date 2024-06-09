<template>
  <div class="chart-container">
    <pie-chart :chart-data="dataCollection" :options="chartOptions"></pie-chart>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
  name: 'Dana_Imapolstat',
  components: {
    PieChart: Pie
  },
  data() {
    return {
      dataCollection: {
        labels: ['Pemasukan', 'Pengeluaran'],
        datasets: [
          {
            backgroundColor: ['#1A5796', '#267DC2'],
            data: [5000000, 3000000]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top'
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let value = context.raw;
                return `Rp ${value.toLocaleString()}`;
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 40vh;
  width: 80vw;
}
</style>
