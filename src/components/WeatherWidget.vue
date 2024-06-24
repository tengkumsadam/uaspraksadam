<template>
    <q-card-section class="weather-widget">
      <div class="row justify-center items-center">
        <div class="col-12 text-center">
          <q-input
            v-model="city"
            label="Masukkan Nama Kota"
            outlined
            dense
            class="city-input"
            @keyup.enter="fetchWeather"
          >
            <template v-slot:append>
              <q-icon name="search" class="cursor-pointer" @click="fetchWeather" />
            </template>
          </q-input>
        </div>
        <div v-if="weather.main" class="col-12 text-center q-mt-md">
          <div class="text-h5">{{ city }}</div>
          <div class="weather-icon-container">
            <q-icon 
              :name="weatherIcon" 
              size="70px" 
              class="text-primary q-my-md" 
              :class="weatherIconClass" 
            />
          </div>
          <div>{{ weatherDescription }}</div>
          <div class="text-h6">{{ temperature }}°C</div>
        </div>
      </div>
    </q-card-section>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        city: 'Jakarta',
        weather: {},
        temperature: null,
      }
    },
    computed: {
      weatherIcon() {
        switch (this.weather.main) {
          case 'Clear': return 'wb_sunny'
          case 'Clouds': return 'cloud'
          case 'Rain': return 'umbrella'
          case 'Snow': return 'ac_unit'
          case 'Thunderstorm': return 'flash_on'
          case 'Drizzle': return 'grain'
          default: return 'wb_cloudy'
        }
      },
      weatherIconClass() {
        switch (this.weather.main) {
          case 'Clear': return 'sunny-icon'
          case 'Clouds': return 'cloudy-icon'
          case 'Rain': return 'rainy-icon'
          case 'Snow': return 'snowy-icon'
          case 'Thunderstorm': return 'thunderstorm-icon'
          case 'Drizzle': return 'drizzle-icon'
          default: return ''
        }
      },
      weatherDescription() {
        return this.weather.description ? this.weather.description.charAt(0).toUpperCase() + this.weather.description.slice(1) : ''
      }
    },
    methods: {
      async fetchWeather() {
        if (!this.city) return;
        const API_KEY = '54595b89c7160d1191aacb0de378605e'
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}&units=metric`)
          this.weather = response.data.weather[0]
          this.temperature = response.data.main.temp
        } catch (error) {
          console.error("Error fetching weather data:", error)
          alert("Kota tidak ditemukan atau terjadi kesalahan jaringan.")
        }
      }
    },
    mounted() {
      this.fetchWeather()
    }
  }
  </script>
  
  <style scoped>
  .weather-widget {
    background: linear-gradient(to bottom, #b5b5b5, #6da270);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
  }
  
  .city-input {
    max-width: 250px;
    margin: 0 auto;
  }
  
  .q-my-md {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
  }
  
  .weather-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .weather-icon-container .q-icon {
    animation-duration: 2s;
  }
  
  .sunny-icon {
    color: #ffeb3b;
    animation: spin 2s linear infinite;
  }
  
  .cloudy-icon {
    color: #90a4ae;
    animation: drift 2s ease-in-out infinite alternate;
  }
  
  .rainy-icon {
    color: #607d8b;
    animation: rain 1s linear infinite;
  }
  
  .snowy-icon {
    color: #e0e0e0;
    animation: snow 1s linear infinite;
  }
  
  .thunderstorm-icon {
    color: #f44336;
    animation: flash 0.5s linear infinite;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  @keyframes drift {
    to { transform: translateX(10px); }
  }
  
  @keyframes rain {
    to { transform: translateY(10px); }
  }
  
  @keyframes snow {
    to { transform: translateY(5px); }
  }
  
  @keyframes flash {
    to { opacity: 0.5; }
  }
  </style>
  