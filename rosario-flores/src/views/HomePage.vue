<template> 
  <ion-page>
    <ion-content :fullscreen="true" class="home-page">
      <div class="main-layout">
        
        <Sidebar tabActiva="mapa" />

        <main class="content-area">
          <header class="top-nav">
            <div class="mobile-logo-box mobile-only">
              <img src="@/img/logo2.png" class="brand-logo" />
            </div>

            <div class="search-bar-container">
              <ion-button class="action-btn" fill="clear" @click="isFilterOpen = true">
                <ion-icon :icon="optionsOutline" />
              </ion-button>

              <ion-searchbar
                class="main-search"
                placeholder="BUSCAR PARROQUIA"
                @click="isListPopupOpen = true"
              />

              <ion-button class="action-btn" fill="clear">
                <ion-icon :icon="searchOutline" />
              </ion-button>
            </div>
          </header>

          <section class="map-section">
            <div class="map-view">
              <l-map ref="mapRef" v-model:zoom="zoom" :center="center" :useGlobalLeaflet="false">
                <l-tile-layer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                
                <l-marker
                  v-for="church in churches"
                  :key="church.name"
                  :lat-lng="church.coords"
                  :icon="customIcon"
                  @click="goToDetalles(church)"
                >
                  <l-popup>{{ church.name }}</l-popup>
                </l-marker>
              </l-map>
            </div>

            <ion-fab vertical="bottom" horizontal="start" slot="fixed" class="route-fab">
              <ion-fab-button @click="irAMapaRuta">
                <ion-icon :icon="navigateOutline" />
              </ion-fab-button>
            </ion-fab>
          </section>
        </main>
      </div>

      <FiltroHome :is-open="isFilterOpen" @close="isFilterOpen = false" />
      <ListaPopup :is-open="isListPopupOpen" @close="isListPopupOpen = false" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  IonPage, IonContent, IonSearchbar, IonButton, IonIcon, IonFab, IonFabButton
} from "@ionic/vue"
import { searchOutline, optionsOutline, navigateOutline } from "ionicons/icons"
import Sidebar from '@/components/Sidebar.vue'
import FiltroHome from '@/components/FiltroHome.vue'
import ListaPopup from '@/components/ListaPopup.vue'

import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet"
import L from "leaflet"

const router = useRouter()
const isFilterOpen = ref(false)
const isListPopupOpen = ref(false)

const zoom = ref(14)
const center = ref<[number, number]>([41.3851, 2.1734])
const mapRef = ref()

const churches = ref([
  { name: "Sagrada Família", coords: [41.4036, 2.1744] },
  { name: "Catedral de Barcelona", coords: [41.3839, 2.1764] },
  { name: "Santa Maria del Mar", coords: [41.3830, 2.1822] },
  { name: "Basílica de la Mercè", coords: [41.3794, 2.1793] },
  { name: "Sant Andreu del Palomar", coords: [41.4357, 2.1899] },
  { name: "Parròquia de Sant Medir", coords: [41.3765, 2.1469] }
])

const customIcon = L.icon({
  iconUrl: new URL('@/img/logo2.png', import.meta.url).href,
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [0, -40]
})

const goToDetalles = (church: any) => {
  router.push({ path: '/detalles', query: { name: church.name } })
}

const irAMapaRuta = () => {
  router.push('/mapa-ruta-pie')
}
</script>

<style scoped>
.home-page { --background: #1A3C54; }

.main-layout { 
  height: 100dvh; 
  display: flex; 
  background: #1A3C54; 
}

.content-area { 
  flex: 1; 
  display: flex; 
  flex-direction: column; 
  min-width: 0; 
}

/* --- CABECERA --- */
.top-nav { background: #1A3C54; display: flex; flex-direction: column; }

/* El logo central sí se queda oculto en PC */
.mobile-only { display: none !important; }

.search-bar-container {
  height: 70px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.action-btn { --color: #ffffff; font-size: 24px; }

.main-search {
  flex: 1;
  --background: rgba(255, 255, 255, 0.1);
  --color: #ffffff;
  --border-radius: 10px;
}

/* --- MAPA Y BOTÓN --- */
.map-section { position: relative; flex: 1; overflow: hidden; }
.map-view { width: 100%; height: 100%; }

.route-fab { 
  margin: 0 0 20px 20px; 
  z-index: 1000; 
}

.route-fab ion-fab-button {
  --background: #1A3C54;
  --color: white;
  --box-shadow: 0 4px 15px rgba(0,0,0,0.4);
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) { 
  .main-layout { flex-direction: column; } 
  
  .mobile-only { display: flex !important; flex-direction: column; align-items: center; }
  .mobile-logo-box { padding: 15px 0 5px 0; }
  .brand-logo { width: 45px; height: auto; }

  .search-bar-container { height: 60px; padding: 0 10px; }

  /* Subimos el botón en móvil para que no lo tape el menú inferior */
  .route-fab { margin-bottom: 85px; }
}
</style>