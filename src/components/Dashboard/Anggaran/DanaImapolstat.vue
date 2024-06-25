<template>
  <div class="flex-shrink-0 w-full max-w-[63.125rem] max-h-[48.0625rem] min-h-[20rem] rounded-[1.25rem] bg-[#F6F6F6] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col justify-center items-center p-4 sm:p-8 m:h-[30rem]">
    <h1 class="text-[#1A5796] text-center font-poppins text-[2rem] sm:text-[3.125rem] font-bold mb-5">Dana Imapolstat</h1>
    <div class="w-full h-[16rem] transform flex-shrink-0 chart-container" style="border-radius: 0.5625rem 0.5625rem 0rem 0rem;">
      <Bar ref="chart" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

export default defineComponent({
  name: 'GraphDana',
  components: {
    Bar
  },
  data() {
    const actualData = {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      pemasukan: [70000000, 80000000, 75000000, 85000000, 90000000],
      pengeluaran: [30000000, 20000000, 25000000, 15000000, 10000000]
    };

    const totalData = actualData.labels.map((_, index) =>
        actualData.pemasukan[index] + actualData.pengeluaran[index]
    );

    const chartData = {
      labels: actualData.labels,
      datasets: [
        {
          label: 'Dana Awal Tahun',
          backgroundColor: '#1a5796',
          barThickness: 'flex',
          minBarLength: 46,
          data: actualData.pemasukan.map((value, index) => (value / totalData[index]) * 100)
        },
        {
          label: 'Pengeluaran',
          backgroundColor: '#267dc2',
          borderRadius: {
            topLeft: 9,
            topRight: 9,
          },
          barThickness: 'flex',
          minBarLength: 46,
          data: actualData.pengeluaran.map((value, index) => (value / totalData[index]) * 100)
        }
      ]
    };

    return {
      actualData,
      chartData,
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: '#1A5796',
              font: {
                family: 'Poppins',
                size: 16,
              }
            },
          },
          y: {
            stacked: true,
            beginAtZero: true,
            max: 100,
            ticks: {
              color: '#6A6C7A',
              callback: function(value) {
                return value + '%';
              },
              font: {
                family: 'Poppins',
                size: 16,
              }
            },
            grid: {
              borderColor: '#000000',
              borderWidth: (context) => context.tick.value === 0 ? 2 : 1,
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            align: 'center',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              boxWidth: 20,
              boxHeight: 20,
              font: {
                family: 'Poppins',
                size: 16,
                style: 'normal',
                weight: 600,
                lineHeight: 'normal'
              },
              color: '#1A5796',
              padding: 10,
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const index = context.dataIndex;
                const percentageValue = context.raw;
                const actualValue = context.dataset.label === 'Pemasukan'
                    ? this.actualData.pemasukan[index]
                    : this.actualData.pengeluaran[index];
                const actualValueFormatted = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(actualValue);
                return `${context.dataset.label}: ${actualValueFormatted} (${percentageValue.toFixed(2)}%)`;
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
  },
  mounted() {
    this.updateChartOptions();
    window.addEventListener('resize', this.updateChartOptions);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateChartOptions);
  },
  methods: {
    updateChartOptions() {
      const isMobile = window.innerWidth <= 768;
      this.chartOptions.scales.x.ticks.font.size = isMobile ? 9 : 20;
      this.chartOptions.scales.y.ticks.font.size = isMobile ? 9 : 20;
      this.chartOptions.plugins.legend.labels.font.size = isMobile ? 13 : 18;
      this.chartOptions.plugins.legend.labels.padding = isMobile ? 20 : 30;
      if (this.$refs.chart && this.$refs.chart.chartInstance) {
        this.$refs.chart.chartInstance.update();
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

div[style*="border-radius"] {
  border-radius: 0.5625rem 0.5625rem 0rem 0rem;
}

.chart-container {
  min-height: 27.61069rem;
}

@media (max-width: 640px) {
  .sm\:h-[30rem] {
  height: 30rem;
}
}

@media (max-width: 768px) {
  .chart-container {
    min-height: 10.06713rem;
  }
  .chart-container .chartjs-size-monitor,
  .chart-container .chartjs-render-monitor {
    height: 10.06713rem !important;
  }
}

.chartjs-render-monitor .chart-container canvas {
  height: 27.61069rem;
}

@media (max-width: 768px) {
  .chartjs-render-monitor .chart-container canvas {
    height: 20rem;
  }
}

.chartjs-render-monitor .chart-container canvas {
  width: 2.85438rem;
}

@media (max-width: 768px) {
  .chartjs-render-monitor .chart-container canvas {
    width: 5rem;
  }
}

.legend {
  font-size: 1.125rem;
  margin-right: 3rem;
}

@media (max-width: 768px) {
  .legend {
    font-size: 0.8125rem;
    margin-right: 2rem;
  }
}
</style>
