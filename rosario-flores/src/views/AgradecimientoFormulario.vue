<template>
  <ion-page>
    <ion-content class="thanks-page" :scroll-y="false">
      
      <div class="content-center">
        <header class="logo-box">
          <img src="@/img/logo2.png" alt="Logo" class="main-logo" />
        </header>

        <section class="message-box">
          <h1 class="title">¡GRACIAS!</h1>
          <p class="subtitle">
            LA IGLESIA SE PONDRÁ EN CONTACTO CONTIGO PRONTO
          </p>
        </section>

        <footer class="action-box">
          <ion-button class="btn-home" @click="router.push('/home')">
            VOLVER AL MENÚ PRINCIPAL
          </ion-button>
        </footer>
      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.thanks-page {
  --background: #1A3C54;
}

.content-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 30px;
  text-align: center;
  color: white;
}

/* Sección del Logo */
.logo-box {
  margin-bottom: 40px;
}

.main-logo {
  width: 80px;
  height: auto;
}

/* Bloque de Texto */
.message-box {
  margin-bottom: 60px;
}

.title {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: 4px;
  margin-bottom: 15px;
}

.subtitle {
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 1.6;
  max-width: 280px;
  margin: 0 auto;
  opacity: 0.8;
}

/* Botón de Acción */
.action-box {
  width: 100%;
  max-width: 300px;
}

.btn-home {
  --background: white;
  --color: #1A3C54;
  --border-radius: 12px;
  --padding-top: 20px;
  --padding-bottom: 20px;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1.5px;
  width: 100%;
}

.btn-home:active {
  transform: scale(0.97);
  transition: transform 0.1s;
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 768px) {
  .main-logo {
    width: 60px;
  }
  
  .title {
    font-size: 22px;
  }

  .subtitle {
    font-size: 12px;
    max-width: 240px;
  }
}
</style>