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
                <img :src="getImagen(n)" alt="Iglesia" />
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

// Componentes
import Sidebar from '@/components/Sidebar.vue';
import FiltroHome from '@/components/FiltroHome.vue';
import ListaPopup from '@/components/ListaPopup.vue';

const router = useRouter();

// Estados para los popups
const isFilterOpen = ref(false);
const isListPopupOpen = ref(false);

const goDetails = () => router.push('/detalles');

// Funciones auxiliares para datos de prueba
const getNombre = (n: number) => {
  const nombres = ["PARRÒQUIA DE LA VERGE DE NÚRIA", "PARRÒQUIA DE SANT GAIETÀ", "ESGLÉSIA DE LA VERGE DEL PILAR"];
  return nombres[n % 3];
};

const getImagen = (n: number) => {
  const fotos = [
    "https://tse2.mm.bing.net/th/id/OIG2.OaD2m_.yI15Yk2f4A08t",
    "https://media-cdn.tripadvisor.com/media/photo-s/0d/17/74/77/parroquia-de-sant-gaieta.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/49/09/f3/iglesia-de-la-virgen-del.jpg?w=1200&h=-1&s=1"
  ];
  return fotos[n % 3];
};
</script>

<style scoped>

.main-content { --background: #1A3C54; }
.page-layout { display: flex; height: 100vh; background-color: #1A3C54; }

.list-viewer { flex: 1; display: flex; flex-direction: column; padding: 40px; overflow: hidden; }

/* FIX LOGO */
.mobile-only { display: none !important; }

/* HEADER */
.search-section { display: flex; align-items: center; gap: 15px; width: 100%; max-width: 900px; margin: 0 auto 30px auto; }
.filter-btn { --color: white; font-size: 24px; }
.custom-search { flex: 1; --background: rgba(255, 255, 255, 0.05); --color: white; --border-radius: 8px; cursor: pointer; }

/* LISTA */
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

/* RESPONSIVE */
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
