<template>
  <q-page class="q-pa-md">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Website Pendeteksi Cuaca</q-toolbar-title>
        <q-space />
        <q-btn-dropdown flat label="KUMPULAN TUGAS SADAM" no-caps>
          <q-list>
            <q-item clickable v-ripple to="/Tugas1">
              <q-item-section>  
                <q-item-label>Tugas 1 (❌)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><a href="https://tugas2-pbk-sadam-223510955.vercel.app/" target="_blank">Tugas 2 (✅)</a></q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><a href="https://tugas3-kappa.vercel.app/" target="_blank">Tugas 3 (✅)</a></q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Tugas4">
              <q-item-section>
                <q-item-label>Tugas 4 (❌)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><a href="https://tugas5-sadam.vercel.app/" target="_blank">Tugas 5 (✅)</a></q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Tugas6">
              <q-item-section>
                <q-item-label>Tugas 6 (❌)</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/Tugas7">
              <q-item-section>
                <q-item-label>Tugas 7 (❌)</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-card class="q-ma-md q-pa-md" flat bordered>
      <q-card-section>
        <h2 class="text-bold text-center">CUACA HARI INI</h2>
        <weather-widget></weather-widget>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import WeatherWidget from '../components/WeatherWidget.vue';

export default {
  components: {
    WeatherWidget,
  },
};
</script>

<style scoped>
/* Styles khusus untuk halaman ini */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.q-page {
  background-color: #f0f0f0;
}

.q-header {
  background-color: #333333;
  color: #fff;
}

.q-toolbar {
  background-color: #333333;
  color: #fff;
}

.q-toolbar-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}

.q-btn-dropdown {
  background-color: #333333;
  color: #fff;
}

.q-btn-dropdown .q-list {
  background-color: #333333;
  color: #fff;
}

.q-btn-dropdown .q-item {
  padding: 10px;
  border-bottom: 1px solid #333333;
}

.q-btn-dropdown .q-item:hover {
  background-color: #444444;
}

.q-btn-dropdown .q-item-label {
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
}

.q-btn-dropdown .q-item-label a {
  color: #fff;
  text-decoration: none;
}

.q-btn-dropdown .q-item-label a:hover {
  color: #fff;
  text-decoration: underline;
}

.q-card {
  background-color: #fff;
  border: 1px solid #333333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.q-card-section {
  padding: 20px;
}

.q-card-section h2 {
  font-size: 1.5em;
  font-weight: bold;
  color: #333333;
}

.q-card-section .weather-widget {
  margin-top: 20px;
}
</style>