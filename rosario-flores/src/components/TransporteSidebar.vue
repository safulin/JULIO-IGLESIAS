<template>
  <aside class="transport-sidebar">
    <div class="sidebar-inner">
      
      <div class="logo-box hide-mobile">
        <img src="@/img/logo2.png" alt="Logo" class="logo-img" />
      </div>

      <nav class="modes-container">
        <div 
          class="mode-item" 
          :class="{ active: modelValue === 'pie' }" 
          @click="$emit('update:modelValue', 'pie')"
        >
          <ion-icon :icon="walkOutline" />
          <span>PIE</span>
        </div>
        
        <div 
          class="mode-item" 
          :class="{ active: modelValue === 'coche' }" 
          @click="$emit('update:modelValue', 'coche')"
        >
          <ion-icon :icon="carOutline" />
          <span>COCHE</span>
        </div>

        <div 
          class="mode-item" 
          :class="{ active: modelValue === 'bus' }" 
          @click="$emit('update:modelValue', 'bus')"
        >
          <ion-icon :icon="busOutline" />
          <span>BUS</span>
        </div>
      </nav>

      <div class="spacer-bottom hide-mobile"></div>
      
    </div>
  </aside>
</template>

<script setup lang="ts">
import { IonIcon } from "@ionic/vue";
import { walkOutline, busOutline, carOutline } from "ionicons/icons";

defineProps<{ modelValue: string }>();
defineEmits(['update:modelValue']);
</script>

<style scoped>
/* Estilo Base (Escritorio) */
.transport-sidebar {
  width: 70px;
  height: 100vh;
  background-color: #1f3d52;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  z-index: 1000;
}

.sidebar-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 0;
}

.logo-box {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.logo-img {
  width: 35px;
}

/* Distribución de iconos */
.modes-container {
  flex: 1; /* Toma todo el espacio para repartir los iconos */
  display: flex;
  flex-direction: column;
  justify-content: space-around; /* Reparte los iconos equitativamente */
  align-items: center;
  padding: 50px 0; /* Espaciado interno para que no lleguen a los bordes */
}

.mode-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.3s ease;
  width: 100%;
}

.mode-item.active {
  color: #ffffff;
}

.mode-item ion-icon {
  font-size: 26px;
}

.mode-item span {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.spacer-bottom {
  height: 40px;
}

/* Estilo Móvil (Barra Inferior) */
@media (max-width: 768px) {
  .transport-sidebar {
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background-color: #1a3c54;
    z-index: 2000;
  }

  .sidebar-inner {
    padding: 0;
  }

  .hide-mobile {
    display: none !important;
  }

  .modes-container {
    flex-direction: row; /* Cambio a horizontal */
    padding: 0;
    height: 100%;
  }

  .mode-item {
    justify-content: center;
  }
}
</style>