<template>
  <ion-page>
    <ion-content :fullscreen="true" class="map-navigation">
      <div class="layout">
        
        <TransporteSidebar v-model="modoSeleccionado" />

        <main class="main-container">
          <header class="header-branding">
            <ion-button fill="clear" @click="router.push('/home')" class="back-btn">
                <ion-icon slot="icon-only" :icon="chevronBackOutline" class="nav-icon"></ion-icon>
            </ion-button>

            <img src="@/img/logo2.png" class="top-logo mobile-only" />
            
            <div class="spacer mobile-only"></div>
          </header>

          <section class="map-area">
            <div class="real-map">
              <l-map ref="mapRef" :zoom="15" :center="[41.380, 2.160]" :useGlobalLeaflet="false">
                <l-tile-layer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                
                <l-polyline :lat-lngs="routeCoords" color="#2A9D8F" :weight="8" />

                <l-marker v-for="(label, index) in labels" :key="'label-' + index" :lat-lng="label.position">
                  <l-icon :icon-size="[0, 0]" class-name="hidden-icon" />
                  <l-tooltip :options="{ permanent: true, direction: 'top', offset: [0, -10] }" class="google-tooltip-fixed">
                    <div class="google-label">
                      <ion-icon :icon="carOutline" class="mode-icon"></ion-icon>
                      <div class="label-info">
                        <span class="time">{{ label.time }}</span>
                        <span class="dist">{{ label.dist }}</span>
                      </div>
                    </div>
                  </l-tooltip>
                </l-marker>
              </l-map>
            </div>
          </section>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { IonPage, IonContent, IonIcon, IonButton } from "@ionic/vue";
import { carOutline, chevronBackOutline } from "ionicons/icons";
import { LMap, LTileLayer, LPolyline, LMarker, LTooltip, LIcon } from "@vue-leaflet/vue-leaflet";
import TransporteSidebar from '@/components/TransporteSidebar.vue';

const router = useRouter();
const modoSeleccionado = ref('coche');

// Navegación mediante el Sidebar
watch(modoSeleccionado, (newVal) => {
  if (newVal === 'pie') router.push('/mapa-ruta-pie');
  if (newVal === 'bus') router.push('/mapa-ruta-bus');
});

const routeCoords = ref([
  [41.385, 2.173], [41.380, 2.165], [41.375, 2.160]
]);

const labels = ref([
  { position: [41.380, 2.165], time: "4 min", dist: "1,8 km" },
  { position: [41.375, 2.160], time: "7 min", dist: "2,4 km" },
]);
</script>

<style scoped>
.layout { display: flex; height: 100vh; background: #1a3c54; }
.main-container { flex: 1; display: flex; flex-direction: column; min-width: 0; }

/* BRANDING HEADER */
.header-branding {
  height: 60px;
  background: #1a3c54;
  display: flex;
  align-items: center;
  padding: 0 15px;
  position: relative;
  flex-shrink: 0;
}

.nav-icon { color: white; font-size: 30px; }
.mobile-only { display: none; }

@media (max-width: 768px) {
  .layout { flex-direction: column; padding-bottom: 70px; }
  .mobile-only { display: block; }
  .header-branding { justify-content: space-between; height: 70px; }
  
  .top-logo {
    width: 45px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .spacer { width: 35px; }
}

.map-area { flex: 1; position: relative; }
.real-map { width: 100%; height: 100%; }

.google-label { background: white; padding: 6px 12px; border-radius: 6px; display: flex; align-items: center; gap: 8px; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); }
.mode-icon { color: #555 !important; font-size: 18px !important; }
.label-info { display: flex; flex-direction: column; line-height: 1.1; color: #333; }
.time { font-weight: bold; font-size: 13px; }
.dist { color: #777; font-size: 11px; }

:deep(.google-tooltip-fixed) { background: transparent !important; border: none !important; box-shadow: none !important; padding: 0 !important; opacity: 1 !important; }
:deep(.leaflet-tooltip-top:before), :deep(.hidden-icon) { display: none !important; }
</style>