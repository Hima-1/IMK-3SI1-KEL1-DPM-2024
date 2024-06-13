<template>
  <div class="wrapper">
    <h1 class="title">Dana Imapolstat</h1>
    <div id="chart" class="chart-container">
      <apexchart type="treemap" :options="chartOptions" :series="series"></apexchart>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

export default defineComponent({
  name: 'GraphDana',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          data: [
            {
              x: 'Pemasukan',
              y: 87448825
            },
            {
              x: 'Pengeluaran',
              y: 3696000
            }
          ]
        }
      ],
      chartOptions: {
        legend: {
          show: false
        },
        chart: {
          height: 350,
          type: 'treemap'
        },
        title: {
          text: 'Treemap Dana Imapolstat'
        },
        colors: ['#1a5796', '#267dc2']
      }
    }
  }
})
</script>

<style scoped>
.wrapper {
  width: 63.125rem;
  height: 48.0625rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: #F6F6F6;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title {
  color: #1A5796;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 3.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.chart-container {
  width: 34.5625rem;
  height: 34.5625rem;
  flex-shrink: 0;
}
</style>
