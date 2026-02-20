<template>
  <ion-page>
    <ion-content :fullscreen="true" class="home">
      <div class="layout">
        
        
        <Sidebar tabActiva="mapa" />

        <main class="main">
          <header class="topbar">
            <ion-button class="icon-btn" fill="clear" aria-label="Filtros">
              <ion-icon :icon="optionsOutline" />
            </ion-button>

            <ion-searchbar
              class="search"
              placeholder="BUSCAR PARROQUIA"
              inputmode="search"
              show-clear-button="focus"
            />

            <ion-button class="icon-btn" fill="clear" aria-label="Buscar">
              <ion-icon :icon="searchOutline" />
            </ion-button>
          </header>

          <section class="map-placeholder">
            <ion-fab vertical="bottom" horizontal="start" class="fab">
              <ion-fab-button>
                <ion-icon :icon="navigateOutline" />
              </ion-fab-button>
            </ion-fab>

            <div class="zoom-mock" aria-hidden="true">
              <button class="zoom-btn" type="button">+</button>
              <button class="zoom-btn" type="button">−</button>
            </div>
          </section>
        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
// 2. Unificamos todos los imports en un único bloque de script
import {
  IonPage,
  IonContent,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonFab,
  IonFabButton,
} from "@ionic/vue";

import {
  searchOutline,
  optionsOutline,
  navigateOutline,
} from "ionicons/icons";

// 3. Importamos el componente reutilizable
import Sidebar from '@/components/Sidebar.vue'; 
</script>

<style scoped>
/* 4. CSS limpio: solo lo relacionado con el mapa y el topbar */
.home {
  --background: #0b0f14;
}

/* Layout general */
.layout {
  height: 100vh;
  display: flex;
  background: #0b0f14;
}

/* Main */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* Topbar */
.topbar {
  height: 74px;
  padding: 12px 16px;
  background: #1f4f6b;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05) inset;
}

.icon-btn {
  --color: #ffffff;
  --padding-start: 8px;
  --padding-end: 8px;
}



.search {
  flex: 1;
  --background: rgba(0, 0, 0, 0.18);
  --color: #ffffff;
  --placeholder-color: rgba(255, 255, 255, 0.65);
  --border-radius: 10px;
}

/* Placeholder del mapa */
.map-placeholder {
  position: relative;
  flex: 1;
  background: #1a4d7a;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

/* FAB ubicación */
.fab {
  margin: 0 0 18px 18px;
}


/* Zoom mock (decorativo) */
.zoom-mock {
  position: absolute;
  right: 14px;
  bottom: 16px;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.zoom-btn {
  width: 40px;
  height: 40px;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}

.zoom-btn:hover {
  background: rgba(255, 255, 255, 0.08);
}
</style>