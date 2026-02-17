<template>
  <aside class="sidebar">
    <div class="sidebar-top">
       <div class="mini-logo">
        <ion-icon :icon="location" class="logo-icon"></ion-icon>
      </div>
    </div>

    <div class="nav-items">
      <div 
        class="nav-item" 
        :class="{ active: tabActiva === 'mapa' }" 
        @click="navegar('/home')"
      >
        <ion-icon :icon="navigateOutline"></ion-icon>
        <span>MAPA</span>
      </div>
      
      <div 
        class="nav-item" 
        :class="{ active: tabActiva === 'lista' }" 
        @click="navegar('/detalles')"
      >
        <ion-icon :icon="searchOutline"></ion-icon>
        <span>LISTA</span>
      </div>

      <div 
        class="nav-item" 
        :class="{ active: tabActiva === 'perfil' }" 
        @click="navegar('/profile')"
      >
        <ion-icon :icon="personOutline"></ion-icon>
        <span>PERFIL</span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { location, navigateOutline, searchOutline, personOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

// 4. Recibimos qué pestaña debe estar iluminada desde la página padre
const props = defineProps({
  tabActiva: {
    type: String,
    required: true
  }
});

const router = useRouter();

// 5. Función para cambiar de página
const navegar = (ruta: string) => {
  router.push(ruta);
};
</script>

<style scoped>
/* Pegamos aquí SOLO los estilos de la barra lateral y su responsive */
.sidebar {
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border-right: 1px solid rgba(255,255,255,0.1);
  flex-shrink: 0;
  background-color: #1A3C54;
}

.sidebar-top {
  display: flex;
  justify-content: center;
  width: 100%;
}

.mini-logo {
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.2);
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  box-shadow: 0 0 0 3px rgba(255,255,255,0.1);
}

.logo-icon {
  transform: rotate(45deg);
  color: white;
  font-size: 20px;
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  font-size: 10px;
  gap: 5px;
  transition: 0.2s;
}

.nav-item ion-icon {
  font-size: 28px;
}

.nav-item.active {
  color: white;
  font-weight: bold;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: 70px;
    flex-direction: row;
    border-right: none;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 0;
    order: 2;
    z-index: 10;
  }

  .sidebar-top {
    display: none;
  }

  .nav-items {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 0;
    height: 100%;
  }

  .nav-item {
    gap: 2px;
  }

  .nav-item ion-icon {
    font-size: 24px;
  }
}
</style>