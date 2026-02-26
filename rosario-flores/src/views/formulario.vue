<template>
  <ion-page>
    <ion-content class="main-content" :fullscreen="true">
      <div class="page-layout">
        
        <Sidebar tabActiva="lista" />

        <main class="form-scroll-area">
          
          <header class="mobile-header mobile-only">
            <img src="@/img/logo2.png" class="brand-logo-mini" />
          </header>

          <div class="form-card">
            
            <div class="church-image">
              <img src="@/img/iglesia.png" alt="Parroquia" />
            </div>

            <div class="titles">
              <h1 class="main-title">FORMULARIO</h1>
              <p class="sub-title">PARRÒQUIA DE LA VERGE DE NÚRIA</p>
            </div>

            <form class="actual-form" @submit.prevent="enviarFormulario">
              
              <div class="input-field">
                <label>NOMBRE</label>
                <input v-model="formData.nombre" type="text" placeholder="Tu nombre..." required />
              </div>

              <div class="input-field">
                <label>CORREO</label>
                <input v-model="formData.correo" type="email" placeholder="ejemplo@correo.com" required />
              </div>

              <div class="input-field">
                <label>MOTIVO</label>
                <textarea v-model="formData.motivo" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
              </div>

              <div class="button-wrapper">
                <button type="submit" class="btn-send">
                  ENVIAR MENSAJE
                </button>
              </div>

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
import Sidebar from '@/components/Sidebar.vue'; 

const router = useRouter();

const formData = ref({
  nombre: '',
  correo: '',
  motivo: ''
});

const enviarFormulario = () => {
  router.push('/agradecimiento');
};
</script>

<style scoped>
.main-content { --background: #1A3C54; }

.page-layout { 
  display: flex; 
  height: 100vh; 
  background-color: #1A3C54;
}

.form-scroll-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  color: white;
  overflow-y: auto;
}

/* --- FIX LOGO PC --- */
.mobile-only { 
  display: none !important; 
}

/* --- CONTENEDOR FORMULARIO --- */
.form-card {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}

.church-image {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.church-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.titles {
  text-align: center;
  margin-bottom: 30px;
}

.main-title {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 5px;
}

.sub-title {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
}

/* --- CAMPOS --- */
.actual-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-field label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
}

.input-field input, 
.input-field textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  padding: 12px 15px;
  font-size: 14px;
  outline: none;
}

.input-field input:focus, 
.input-field textarea:focus {
  border-color: rgba(255, 255, 255, 0.5);
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.btn-send {
  background-color: white;
  color: #1A3C54;
  font-weight: 800;
  font-size: 13px;
  padding: 16px 40px;
  border-radius: 8px;
  cursor: pointer;
  letter-spacing: 1.5px;
  border: none;
  width: 100%;
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .page-layout { flex-direction: column; }
  
  .mobile-only { 
    display: flex !important; 
    justify-content: center;
    padding: 15px 0 10px 0;
  }

  /* Logo tamaño normal */
  .brand-logo-mini {
    width: 60px !important;
    height: auto;
  }

  .form-scroll-area { 
    padding: 15px; 
    height: calc(100vh - 70px); 
    justify-content: flex-start;
  }

  .church-image { height: 160px; }
  .form-card { padding-bottom: 100px; }
}
</style>