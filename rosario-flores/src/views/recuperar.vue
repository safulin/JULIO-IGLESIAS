<template>
  <ion-page>
    <ion-content class="login-content" :scroll-y="false" fullscreen>
      <div class="login-container">
        
        <div class="header-section">
          <div class="logo-placeholder">
            <img class="brand-logo" src="@/img/logo.png" alt="Logo" />
          </div>
          <p class="welcome-text">RECUPERA LA CONTRASEÑA</p>
        </div>

        <div class="form-section">
          
          <div class="custom-input">
            <ion-icon :icon="mailOutline" class="input-icon"></ion-icon>
            <input 
              v-model="recoveryEmail"
              type="email" 
              placeholder="CORREO" 
            />
          </div>

          <div class="action-buttons">
            <ion-button expand="block" class="btn-primary" @click="router.push('/recuperada')">
            ENVIAR CORREO DE RECUPERACIÓN
            </ion-button>
        </div>

        </div>

        <div class="footer">
          <p @click="goBack">Volver al inicio</p>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonButton, IonIcon } from '@ionic/vue';
import { mailOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

const recoveryEmail = ref('');

const sendRecovery = () => {
  console.log('Enviando recuperación a:', recoveryEmail.value);
};

const goBack = () => {
  router.push('/login');
};
</script>

<style scoped>
.login-content {
  --background: #1A3C54;
  height: 100dvh;
  overflow: hidden;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 30px 30px 25px 30px;
  color: white;
}

.header-section {
  text-align: center;
  margin-bottom: 30px;
}

.welcome-text {
  font-size: 12px;
  letter-spacing: 2px;
  margin-top: 20px;
  opacity: 0.8;
  font-weight: 300;
  text-transform: uppercase;
}

.brand-logo {
  width: 16em;
  max-width: 16em;
}

.form-section {
  width: 100%;
  max-width: 350px;
}

.custom-input {
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  padding: 12px 15px;
  margin-bottom: 25px;
  transition: 0.3s;
}

.custom-input:focus-within {
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
}

.input-icon {
  font-size: 22px;
  margin-right: 15px;
  color: rgba(255, 255, 255, 0.7);
}

.custom-input input {
  background: transparent;
  border: none;
  outline: none;
  color: white;
  flex: 1;
  font-size: 14px;
  letter-spacing: 1px;
}

.custom-input input::placeholder {
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 5px;
}

.btn-primary {
  --background: white;
  --color: #1A3C54;
  --border-radius: 2px;
  font-weight: 600;
  letter-spacing: 0.5px;
  height: 50px;
  font-size: 11px;
  --box-shadow: none;
}

.footer {
  padding-top: 10px;
}

.footer p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
}
</style>