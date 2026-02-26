<template>
  <ion-page>
    <ion-content class="register-page" :scroll-y="false">
      <div class="main-wrapper">
        
        <header class="header">
          <div class="logo-box">
            <img src="@/img/logo.png" class="brand-logo" alt="Logo" />
          </div>
          <p class="tagline">CREA TU CUENTA</p>
        </header>

        <form class="form-container" @submit.prevent="doRegister">
          
          <div class="input-field">
            <ion-icon :icon="personOutline" />
            <input v-model="registerData.username" type="text" placeholder="USUARIO" />
          </div>

          <div class="input-field">
            <ion-icon :icon="mailOutline" />
            <input v-model="registerData.email" type="email" placeholder="CORREO" />
          </div>

          <div class="input-field">
            <ion-icon :icon="lockClosedOutline" />
            <input v-model="registerData.password" type="password" placeholder="CONTRASEÑA" />
          </div>

          <div class="input-field centered">
            <input 
              v-model="registerData.dob"
              type="text" 
              placeholder="FECHA DE NACIMIENTO" 
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
            />
          </div>

          <footer class="actions">
            <ion-button class="btn-main" @click="doRegister">
              CREAR CUENTA
            </ion-button>
            
            <div class="back-link">
              <span @click="goBack">Volver</span>
            </div>
          </footer>

        </form>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonButton, IonIcon } from '@ionic/vue';
import { personOutline, lockClosedOutline, mailOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

const registerData = ref({
  username: '',
  email: '',
  password: '',
  dob: ''
});

const doRegister = () => {
  router.push('/home'); 
};

const goBack = () => {
  router.push('/login'); 
};
</script>

<style scoped>
.register-page {
  --background: #1A3C54;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding: 40px 30px;
  color: white;
}

/* HEADER */
.header {
  text-align: center;
}

.brand-logo {
  width: 180px; /* Tamaño ajustado según tus capturas */
  height: auto;
}

.tagline {
  font-size: 12px;
  letter-spacing: 2px;
  margin-top: 20px;
  opacity: 0.8;
  text-transform: uppercase;
}

/* FORMULARIO */
.form-container {
  width: 100%;
  max-width: 350px;
}

.input-field {
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  padding: 12px 15px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.03);
  transition: 0.2s;
}

.input-field:focus-within {
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

.input-field ion-icon {
  font-size: 20px;
  margin-right: 15px;
  opacity: 0.7;
}

.input-field input {
  background: transparent;
  border: none;
  outline: none;
  color: white;
  flex: 1;
  font-size: 14px;
}

.input-field.centered input {
  text-align: center;
}

/* BOTONES */
.actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn-main {
  --background: white;
  --color: #1A3C54;
  --border-radius: 4px;
  --box-shadow: none;
  font-weight: 700;
  height: 50px;
  margin: 0;
}

.back-link {
  text-align: right;
}

.back-link span {
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
}

.back-link span:hover {
  text-decoration: underline;
}

/* Selector de fecha en blanco para que se vea bien */
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
</style>