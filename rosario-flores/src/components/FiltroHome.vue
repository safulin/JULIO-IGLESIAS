<template>
  <ion-modal :is-open="isOpen" @didDismiss="$emit('close')" class="filter-modal">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="filter-wrapper">
        
        <header class="filter-header">
          <ion-icon :icon="chevronBackOutline" class="back-icon" @click="$emit('close')"></ion-icon>
          <h2 class="header-title">FILTRO</h2>
        </header>

        <div class="filter-body">
          <div class="section">
            <label class="section-label">Distancia</label>
            <ion-range 
              :dual-knobs="true" :min="0" :max="100" 
              :value="{ lower: 20, upper: 80 }" 
              class="custom-range">
            </ion-range>
          </div>

          <div class="section">
            <label for="Headline" class="section-label">
              <span class="text-sm font-semibold">Tipo</span>

              <select
                name="Headline"
                id="Headline"
                class="mt-0.5 w-full border-2 border-black bg-[#1f4f6b] text-white shadow-[4px_4px_0_0] focus:ring-2 focus:ring-yellow-300 sm:text-sm "
              >
                <option value="">Selecciona Hijo De Dios</option>
                <option value="CRISTIANISMO">CRISTIANISMO</option>
                <option value="ISLAM">ISLAM</option>
                <option value="HINDUISMO">HINDUISMO</option>
                <option value="BUDISMO">BUDISMO</option>
                <option value="SIJISMO">SIJISMO</option>
                <option value="POLLOPISMO">POLLOPISMO</option>
              </select>
            </label>
          </div>

          <div class="section">
            <label class="section-label">Estado</label>
            <div class="status-row">
              <div class="checkbox-item" @click="estadoAbierto = !estadoAbierto">
                <div class="box" :class="{ 'checked': estadoAbierto }"></div>
                <span>ABIERTO</span>
              </div>
              <div class="checkbox-item" @click="estadoCerrado = !estadoCerrado">
                <div class="box" :class="{ 'checked': estadoCerrado }"></div>
                <span>CERRADO</span>
              </div>
            </div>
          </div>

          <div class="footer-btn">
            <button class="apply-btn" @click="$emit('close')">APLICAR</button>
          </div>
        </div>
      </div>
    </div>
  </ion-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonModal, IonIcon, IonRange } from '@ionic/vue';
import { chevronBackOutline } from 'ionicons/icons';

defineProps({ isOpen: Boolean });
defineEmits(['close']);

const estadoAbierto = ref(false);
const estadoCerrado = ref(false);
</script>

<style scoped>
ion-modal {
  --background: transparent;
  --box-shadow: none;
}

.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.filter-wrapper {
  background-color: #1f4f6b;
  width: 90%;
  max-width: 450px;
  border-radius: 12px;
  color: white;
  padding: 30px 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
}

.filter-header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 30px;
}

.back-icon {
  position: absolute; left: 0;
  font-size: 28px; cursor: pointer;
}

.header-title {
  font-size: 18px; font-weight: bold;
  letter-spacing: 2px; margin: 0;
}

.section { margin-bottom: 35px; }
.section-label { display: block; margin-bottom: 15px; font-size: 14px; text-align: left; }

.custom-range {
  --knob-background: #f4b41a;
  --bar-background: #ffffff;
  --bar-background-active: #f4b41a;
  --knob-size: 20px;
}

/* ESTADO INTERACTIVO */
.status-row {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.checkbox-item { 
  display: flex; 
  align-items: center; 
  gap: 10px; 
  cursor: pointer;
}

.box { 
  width: 22px; 
  height: 22px; 
  background: white; 
  border-radius: 4px; 
  transition: background 0.2s;
}

.box.checked {
  background: #f4b41a;
  border: 2px solid white;
}

.footer-btn { display: flex; justify-content: center; margin-top: 10px; }

.apply-btn {
  background: white; color: black;
  font-weight: bold; padding: 12px 0;
  border: none; width: 180px;
  border-radius: 4px; font-size: 12px;
  letter-spacing: 1px;
}
</style>