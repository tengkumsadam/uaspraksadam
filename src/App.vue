<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Website Pendeteksi Cuaca
        </q-toolbar-title>
        <q-space />
        <q-btn-dropdown flat label=" KUMPULAN TUGAS SADAM" no-caps>
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Styles untuk App.vue */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.q-layout {
  background-color: #f0f0f0;
}

.q-header {
  background-color: #333333;
  color: #fff;
  padding: 10px;
  border-bottom: 1px solid #333333;
}

.q-toolbar {
  background-color: #333333;
  color: #fff;
  padding: 10px;
}

.q-toolbar-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}

.q-btn-dropdown {
  background-color: #333333;
  color: #fff;
  padding: 10px;
}

.q-btn-dropdown .q-list {
  background-color: #333333;
  color: #fff;
  padding: 10px;
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

.q-page-container {
  padding: 20px;
}

.q-page-container .weather-widget {
  margin-top: 20px;
}
</style>