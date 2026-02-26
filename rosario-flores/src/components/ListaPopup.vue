<template>
  <ion-modal 
    :is-open="isOpen" 
    @didDismiss="$emit('close')" 
    class="popup-modal"
  >
    <div class="modal-wrapper">
      
      <header class="modal-header">
        <div class="handle"></div>
        <ion-searchbar 
          class="custom-search" 
          placeholder="BUSCAR PARROQUIA"
        ></ion-searchbar>
      </header>

      <div class="items-list">
        <div 
          v-for="n in 5" 
          :key="n" 
          class="item-card" 
          @click="seleccionarIglesia"
        >
          <img :src="getImagen()" class="item-img" alt="Iglesia" />
          
          <div class="item-details">
            <h3 class="item-name">{{ getNombre(n) }}</h3>
            
            <div class="item-meta">
              <div class="distance">
                <ion-icon :icon="locationOutline" /> 
                <span>{{ 200 * n }}m</span>
              </div>
              <span class="status-dot" :class="n % 2 === 0 ? 'open' : 'closed'"></span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </ion-modal>
</template>

<script setup lang="ts">
import { IonModal, IonSearchbar, IonIcon } from '@ionic/vue';
import { locationOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

defineProps<{ isOpen: boolean }>();
const emit = defineEmits(['close']);
const router = useRouter();

const seleccionarIglesia = () => {
  emit('close');
  router.push('/detalles');
};

const getNombre = (n: number) => {
  const nombres = ["PARRÒQUIA DE LA VERGE DE NÚRIA", "PARRÒQUIA DE SANT GAIETÀ", "ESGLÉSIA DE LA VERGE DEL PILAR"];
  return nombres[n % 3];
};

// URL de imagen actualizada 
const getImagen = () => {
  return "https://imgs.search.brave.com/6oriTdT6E6WrKJUrbn2__sfyNlwHoo0Q-lSYgeNyV2k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTY1/NDE2NDQ0L3N0b2Nr/LXBob3RvLXBhcm9j/aGlhbC1jaHVyY2gt/b2Ytc2FuLXZpY2Vu/dGUtbWFydGlyLWFu/ZC1zYW4tc2ViYXN0/aWFuLWZyaWFzLWJ1/cmdvcw";
};
</script>

<style scoped>
/* Estilos */
.popup-modal {
  --height: 500px;
  --width: 350px;
  --border-radius: 20px;
  --box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.modal-wrapper {
  background-color: #1A3C54;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
}

.handle {
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin: 0 auto 15px auto;
}

.custom-search {
  --background: rgba(255, 255, 255, 0.1);
  --color: white;
  --placeholder-color: rgba(255, 255, 255, 0.4);
  padding: 0;
}

.items-list {
  flex: 1;
  overflow-y: auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.04);
  padding: 10px;
  border-radius: 12px;
  transition: background 0.2s;
}

.item-card:active {
  background: rgba(255, 255, 255, 0.1);
}

.item-img {
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 8px;
}

.item-details {
  flex: 1;
}

.item-name {
  font-size: 11px;
  font-weight: 700;
  margin: 0 0 4px 0;
  text-transform: uppercase;
}

.item-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.distance {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.open { background: #42d77d; box-shadow: 0 0 8px #42d77d66; }
.closed { background: #e04055; box-shadow: 0 0 8px #e0405566; }

.items-list::-webkit-scrollbar {
  display: none;
}
</style>
