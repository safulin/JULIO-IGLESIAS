<template>
  <ion-page>
    <ion-content class="main-content" :fullscreen="true">
      <div class="page-layout">
        
        <Sidebar tabActiva="lista" />

        <main class="details-scroll">
          
          <header class="mobile-branding mobile-only">
            <img src="@/img/logo2.png" class="brand-logo" />
          </header>

          <div class="content-wrapper">
            
            <div class="main-image">
              <img 
                src="https://imgs.search.brave.com/6oriTdT6E6WrKJUrbn2__sfyNlwHoo0Q-lSYgeNyV2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTY1/NDE2NDQ0L3N0b2Nr/LXBob3RvLXBhcm9j/aGlhbC1jaHVyY2gt/b2Ytc2FuLXZpY2Vu/dGUtbWFydGlyLWFu/ZC1zYW4tc2ViYXN0/aWFuLWZyaWFzLWJ1/cmdvcw" 
                alt="Iglesia de San Vicente" 
              />
            </div>

            <h1 class="page-title">PARRÒQUIA DE LA VERGE DE NÚRIA</h1>

            <section class="content-block">
              <h2 class="block-title">DESCRIPCIÓN</h2>
              <div class="block-text">
                <p>IGLESIA CATÓLICA</p>
                <p>ACCESIBLE CON SILLA DE RUEDAS</p>
              </div>
            </section>

            <section class="content-block">
              <h2 class="block-title">RESEÑAS</h2>
              
              <div class="rating-container">
                <div class="stars-row">
                  <ion-icon 
                    v-for="i in 5" :key="i"
                    :icon="i <= userRating ? star : starOutline" 
                    class="star-icon"
                    :class="{ 'active': i <= userRating }"
                    @click="userRating = i"
                  />
                </div>
                <span class="rating-number">({{ userRating.toFixed(1) }})</span>
              </div>

              <p class="review-quote">
                "CELEBRACIÓ 50 ANIVERSARI NOCES DELS PARES, TOT BÉ MALGRAT LA
                PANDÈMIA. SORPRENENT, UN DIA ENTRE SETMANA A LES 12H DEL
                MIGDIA GRAN AFLUÈNCIA"
              </p>
            </section>

            <footer class="actions">
              <button class="btn-primary" @click="$router.push('/formulario')">
                CONTÁCTANOS
              </button>
            </footer>

          </div>
        </main>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { star, starOutline } from 'ionicons/icons';
import Sidebar from '@/components/Sidebar.vue'; 

const userRating = ref(4);
</script>

<style scoped>
/* Estiloss */
.main-content { --background: #1A3C54; }

.page-layout { 
  display: flex; 
  height: 100vh; 
  background-color: #1A3C54;
}

.details-scroll {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  color: white;
  overflow-y: auto;
}

/* Visibilidad del logo */
.mobile-only { display: none !important; }
.mobile-branding { width: 100%; flex-shrink: 0; }
.brand-logo { width: 65px; height: auto; }

/* Contenedor de Contenido */
.content-wrapper {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
}

.main-image {
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.main-image img { width: 100%; height: 100%; object-fit: cover; }

.page-title {
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 1px;
}

.content-block {
  width: 100%;
  margin-bottom: 35px;
}

.block-title {
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 8px;
  margin-bottom: 15px;
}

.block-text p {
  margin: 5px 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

/* Sistema de Estrellas */
.rating-container { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; }
.stars-row { display: flex; gap: 4px; }
.star-icon { font-size: 24px; color: rgba(255, 255, 255, 0.2); cursor: pointer; }
.star-icon.active { color: #FFD700; }
.rating-number { font-size: 14px; font-weight: 600; }

.review-quote {
  font-size: 13px;
  line-height: 1.6;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}

/* Botón Principal */
.btn-primary {
  background-color: white;
  color: #1A3C54;
  font-weight: 800;
  font-size: 14px;
  padding: 18px 0;
  border-radius: 10px;
  width: 100%;
  max-width: 280px;
  cursor: pointer;
  border: none;
  margin: 0 auto;
}

/* Adaptación Móvil */
@media (max-width: 768px) {
  .page-layout { flex-direction: column; }
  
  .mobile-only { 
    display: flex !important; 
    justify-content: center;
    padding: 15px 0 10px 0;
  }

  .details-scroll { 
    padding: 15px; 
    height: calc(100vh - 70px); 
    justify-content: flex-start;
  }

  .main-image { height: 220px; }
  .content-wrapper { padding-bottom: 100px; }
}
</style>
