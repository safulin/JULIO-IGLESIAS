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
          <img :src="getImagen(n)" class="item-img" alt="Iglesia" />
          
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

// Definimos la entrada (abierto/cerrado) y la salida (cerrar modal)
defineProps<{ isOpen: boolean }>();
const emit = defineEmits(['close']);
const router = useRouter();

// Función para navegar a detalles al hacer clic en una tarjeta
const seleccionarIglesia = () => {
  emit('close');
  router.push('/detalles');
};

// Datos de prueba simplificados
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
/* Configuración del contenedor del Modal */
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

/* Tirador superior estético */
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

/* Lista con scroll suave */
.items-list {
  flex: 1;
  overflow-y: auto;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Tarjeta individual */
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

/* Puntos de estado */
.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.open { background: #42d77d; box-shadow: 0 0 8px #42d77d66; }
.closed { background: #e04055; box-shadow: 0 0 8px #e0405566; }

/* Ocultamos el scrollbar para que quede más limpio */
.items-list::-webkit-scrollbar {
  display: none;
}
</style>