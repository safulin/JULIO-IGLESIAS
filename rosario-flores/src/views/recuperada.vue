<template>
  <ion-page>
    <ion-content class="login-content" :scroll-y="false" fullscreen>
      <div class="login-container">
        
        <div class="header-section">
          <div class="logo-placeholder">
            <img class="brand-logo" src="@/img/logo.png" alt="Logo" />
          </div>
        </div>

        <div class="text-section">
          <h1 class="title-text">GRACIAS</h1>
          <p class="subtitle-text">HAS CAMBIADO LA CONTRASEÑA CORRECTAMENTE</p>
        </div>

        <div class="action-buttons">
          <ion-button expand="block" class="btn-primary" @click="goToLogin">
            VOLVER A INICIAR SESIÓN
          </ion-button>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
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
  text-align: center;
}

.header-section {
  margin-bottom: 30px;
}

.brand-logo {
  width: 16em;
  max-width: 16em;
}

.text-section {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.title-text {
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 2px;
  margin: 0;
}

.subtitle-text {
  font-size: 11px;
  letter-spacing: 1px;
  opacity: 0.8;
  margin: 0;
  text-transform: uppercase;
}

.action-buttons {
  width: 100%;
  max-width: 350px;
}

.btn-primary {
  --background: white;
  --color: #1A3C54;
  --border-radius: 2px;
  font-weight: 600;
  letter-spacing: 1px;
  height: 50px;
  font-size: 12px;
  --box-shadow: none;
}
</style>