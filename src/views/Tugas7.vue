<template>
    <q-page class="q-pa-md">
      <!-- Bagian atas halaman dengan ruang kosong di bawahnya -->
      <div class="text-center q-mb-lg">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <h2 class="text-bold text-center my-card-title">Tugas 7</h2>
            <p class="text-center my-card-description">Tugas 7 tidak ada.</p>
          </q-card-section>
        </q-card>
      </div>
  
      <!-- Bagian bawah halaman -->
      <div class="text-center q-mt-md q-pb-lg">
        <!-- Konten tambahan bisa ditambahkan di sini -->
      </div>
    </q-page>
  </template>
  
  <style scoped>
  /* Styles khusus untuk halaman ini */
  
  .my-card {
    max-width: 600px;
    margin: auto;
    background-color: #ffffff;
    border: 2px solid #26a69a; /* Warna garis tepi */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .my-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .my-card-title {
    font-size: 2em;
    font-weight: bold;
    color: #333333;
    margin-bottom: 0.5em;
  }
  
  .my-card-description {
    font-size: 1.2em;
    color: #666666;
  }
  
  .q-mt-md {
    margin-top: 2rem;
  }
  
  .q-mb-lg {
    margin-bottom: 2rem;
  }
  
  .q-pb-lg {
    padding-bottom: 2rem;
  }
  </style>
  