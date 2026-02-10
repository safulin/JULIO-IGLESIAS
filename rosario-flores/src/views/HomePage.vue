<template>
  <ion-page>
    <ion-content :fullscreen="true" class="home">
      <div class="layout">
        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="sidebar-top">
            <div class="brand">
              <div class="brand-badge">
                 <img class="brand-logo" src="@/img/logo.png" alt="Logo" />
              </div>
            </div>
          </div>

          <nav class="sidebar-nav">
            <button class="nav-item is-active" type="button">
              <ion-icon :icon="mapOutline" class="nav-icon" />
              <span class="nav-label">MAPA</span>
            </button>

            <button class="nav-item" type="button">
              <ion-icon :icon="searchOutline" class="nav-icon" />
              <span class="nav-label">LISTA</span>
            </button>

            <button class="nav-item" type="button">
              <ion-icon :icon="personOutline" class="nav-icon" />
              <span class="nav-label">PERFIL</span>
            </button>
          </nav>
        </aside>

        <!-- Main -->
        <main class="main">
          <!-- Top bar -->
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

          <!-- Map placeholder -->
          <section class="map-placeholder">
            <!-- Botón flotante (como el de ubicación) -->
            <ion-fab vertical="bottom" horizontal="start" class="fab">
              <ion-fab-button>
                <ion-icon :icon="navigateOutline" />
              </ion-fab-button>
            </ion-fab>

            <!-- Si quieres simular zoom (decorativo) -->
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
  businessOutline,
  mapOutline,
  searchOutline,
  personOutline,
  optionsOutline,
  navigateOutline,
} from "ionicons/icons";
</script>

<style scoped>
.home {
  --background: #0b0f14;
}

/* Layout general */
.layout {
  height: 100vh;
  display: flex;
  background: #0b0f14;
}

/* Sidebar */
.sidebar {
  width: 92px;
  background: #1f4f6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 10px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.04) inset;
}

.sidebar-top {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
}

.brand-logo {
  width: 34px;
  height: 34px;
  object-fit: contain;
  display: block;
}


.brand-icon {
  font-size: 26px;
  color: #ffffff;
}

.sidebar-nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 16px;
  flex: 1;
}

.nav-item {
  appearance: none;
  border: 0;
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px 6px;
  border-radius: 14px;
  cursor: pointer;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.nav-item.is-active {
  background: rgba(0, 0, 0, 0.18);
}

.nav-icon {
  font-size: 22px;
}

.nav-label {
  font-size: 11px;
  letter-spacing: 0.08em;
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
