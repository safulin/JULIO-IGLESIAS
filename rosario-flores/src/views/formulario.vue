<template>
  <ion-page>
    <ion-content class="main-content">
      <div class="page-layout">
        
        <Sidebar tabActiva="lista" />

        <main class="form-container">
          <div class="content-wrapper">
            
            <h1 class="page-title">FORMULARIO</h1>
            <h2 class="church-subtitle">PARRÒQUIA DE LA VERGE DE NÚRIA</h2>

            <form class="contact-form" @submit.prevent="enviarFormulario">
              
              <div class="input-group">
                <label>NOMBRE</label>
                <input type="text" v-model="formData.nombre" required />
              </div>

              <div class="input-group">
                <label>CORREO</label>
                <input type="email" v-model="formData.correo" required />
              </div>

              <div class="input-group">
                <label>MOTIVO</label>
                <textarea v-model="formData.motivo" rows="8" required></textarea>
              </div>

              <button type="submit" class="btn-submit">
                ENVIAR
              </button>

            </form>

          </div>
        </main>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import { useRouter } from 'vue-router';
// Importamos la barra lateral
import Sidebar from '@/components/Sidebar.vue'; 

const router = useRouter();

// Variables para guardar lo que el usuario escribe
const formData = ref({
  nombre: '',
  correo: '',
  motivo: ''
});

const enviarFormulario = () => {
  console.log('Enviando datos:', formData.value);
  // Aquí puedes añadir después la lógica para enviarlo a una base de datos
  // router.push('/detalles'); // Descomenta esto si quieres que al enviar vuelva a la iglesia
};
</script>

<style scoped>
/* Layout Principal */
.main-content { 
  --background: #1A3C54; 
}

.page-layout { 
  display: flex; 
  height: 100%; 
  width: 100%; 
}

/* Diseño del contenedor del formulario */
.form-container {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 60px 20px;
  color: white;
  overflow-y: auto;
}

.content-wrapper {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Títulos */
.page-title {
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 30px;
}

.church-subtitle {
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 50px;
  text-align: center;
}

/* Formulario */
.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-group label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.input-group input,
.input-group textarea {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  color: white;
  padding: 12px 15px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
  font-family: inherit;
}

.input-group input:focus,
.input-group textarea:focus {
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.02);
}

.input-group textarea {
  resize: vertical; /* Permite estirar la caja hacia abajo si escriben mucho */
}

/* Botón Enviar */
.btn-submit {
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 15px 40px;
  margin-top: 30px;
  cursor: pointer;
  letter-spacing: 1px;
  border-radius: 2px;
  width: 200px;
  align-self: center; /* Centra el botón dentro del formulario */
}

/* Modo Móvil */
@media (max-width: 768px) {
  .page-layout {
    flex-direction: column; 
  }
  
  .form-container {
    order: 1; 
    padding: 30px 15px;
  }
}
</style>