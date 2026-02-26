<template>
  <ion-page>
    <ion-content class="main-content" :fullscreen="true">
      <div class="page-layout">
        
        <Sidebar tabActiva="lista" />

        <main class="list-viewer">
          <header class="mobile-branding mobile-only">
            <img src="@/img/logo2.png" class="brand-logo-mini" />
          </header>

          <header class="search-section">
            <ion-button class="filter-btn" fill="clear" @click="isFilterOpen = true">
              <ion-icon :icon="optionsOutline" />
            </ion-button>
            
            <ion-searchbar 
              class="custom-search" 
              placeholder="BUSCAR PARROQUIA" 
              @click="isListPopupOpen = true"
              readonly
            />
          </header>

          <div class="cards-scroll">
            <div v-for="n in 10" :key="n" class="church-card" @click="goDetails">
              
              <div class="card-img">
                <img :src="getImagen()" alt="Iglesia" />
              </div>
              
              <div class="card-info">
                <h3 class="church-name">{{ getNombre(n) }}</h3>
                
                <div class="stats-row">
                  <div class="rating">
                    <div class="stars">
                      <ion-icon :icon="star" v-for="i in 4" :key="i" class="star-active" />
                      <ion-icon :icon="starOutline" class="star-inactive" />
                    </div>
                    <span class="score-text">(4.7)</span>
                  </div>

                  <div class="meta-data">
                    <div class="distance">
                      <ion-icon :icon="locationOutline" /> 
                      <span>{{ 200 * n }}m</span>
                    </div>
                    <div class="status">
                      <span class="status-dot" :class="n % 2 === 0 ? 'is-open' : 'is-closed'"></span> 
                      <span class="status-text">{{ n % 2 === 0 ? 'ABIERTO' : 'CERRADO' }}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>

      <FiltroHome :is-open="isFilterOpen" @close="isFilterOpen = false" />
      <ListaPopup :is-open="isListPopupOpen" @close="isListPopupOpen = false" />
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonSearchbar, IonButton, IonIcon } from '@ionic/vue';
import { optionsOutline, star, starOutline, locationOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

import Sidebar from '@/components/Sidebar.vue';
import FiltroHome from '@/components/FiltroHome.vue';
import ListaPopup from '@/components/ListaPopup.vue';

const router = useRouter();

const isFilterOpen = ref(false);
const isListPopupOpen = ref(false);

const goDetails = () => router.push('/detalles');

const getNombre = (n: number) => {
  const nombres = ["PARRÒQUIA DE LA VERGE DE NÚRIA", "PARRÒQUIA DE SANT GAIETÀ", "ESGLÉSIA DE LA VERGE DEL PILAR"];
  return nombres[n % 3];
};

// Ahora todas las iglesias devuelven el mismo link
const getImagen = () => {
  return "https://imgs.search.brave.com/6oriTdT6E6WrKJUrbn2__sfyNlwHoo0Q-lSYgeNyV2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTY1/NDE2NDQ0L3N0b2Nr/LXBob3RvLXBhcm9j/aGlhbC1jaHVyY2gt/b2Ytc2FuLXZpY2Vu/dGUtbWFydGlyLWFu/ZC1zYW4tc2ViYXN0/aWFuLWZyaWFzLWJ1/cmdvcw";
};
</script>

<style scoped>
/*   estilos  */
.main-content { --background: #1A3C54; }
.page-layout { display: flex; height: 100vh; background-color: #1A3C54; }
.list-viewer { flex: 1; display: flex; flex-direction: column; padding: 40px; overflow: hidden; }

.mobile-only { display: none !important; }

.search-section { display: flex; align-items: center; gap: 15px; width: 100%; max-width: 900px; margin: 0 auto 30px auto; }
.filter-btn { --color: white; font-size: 24px; }
.custom-search { flex: 1; --background: rgba(255, 255, 255, 0.05); --color: white; --border-radius: 8px; cursor: pointer; }

.cards-scroll { flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 20px; max-width: 900px; width: 100%; margin: 0 auto; }
.church-card { display: flex; gap: 20px; background: rgba(255, 255, 255, 0.03); padding: 15px; border-radius: 12px; cursor: pointer; transition: background 0.2s; }
.church-card:hover { background: rgba(255, 255, 255, 0.06); }

.card-img { width: 220px; height: 140px; flex-shrink: 0; border-radius: 8px; overflow: hidden; }
.card-img img { width: 100%; height: 100%; object-fit: cover; }

.card-info { flex: 1; color: white; display: flex; flex-direction: column; justify-content: center; gap: 12px; }
.church-name { font-size: 16px; font-weight: 700; margin: 0; letter-spacing: 0.5px; }

.stats-row { display: flex; flex-direction: column; gap: 10px; }
.rating { display: flex; align-items: center; gap: 10px; }
.stars { font-size: 18px; color: #f4b41a; }
.star-inactive { color: rgba(255, 255, 255, 0.2); }
.score-text { font-size: 13px; opacity: 0.7; }

.meta-data { display: flex; gap: 25px; font-size: 13px; opacity: 0.8; }
.distance, .status { display: flex; align-items: center; gap: 6px; }

.status-dot { width: 10px; height: 10px; border-radius: 50%; }
.is-open { background: #42d77d; box-shadow: 0 0 8px #42d77d66; }
.is-closed { background: #e04055; box-shadow: 0 0 8px #e0405566; }

@media (max-width: 768px) {
  .page-layout { flex-direction: column; }
  .mobile-only { display: flex !important; justify-content: center; padding: 15px 0; }
  .brand-logo-mini { width: 55px; height: auto; }
  .list-viewer { padding: 15px; height: calc(100vh - 70px); }
  .church-card { flex-direction: column; gap: 15px; }
  .card-img { width: 100%; height: 180px; }
  .cards-scroll { padding-bottom: 80px; }
}
</style>
