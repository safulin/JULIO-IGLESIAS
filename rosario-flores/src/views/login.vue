<template>
  <ion-page>
    <ion-content class="login-content">
      <div class="login-container">
        
        <div class="header-section">
          <div class="logo-placeholder">
                 <img class="brand-logo" src="@/img/logo.png" alt="Logo" />
          </div>
          <p class="welcome-text">BIENVENIDO</p>
        </div>

        <div class="form-section">
          
          <div class="custom-input">
            <ion-icon :icon="personOutline" class="input-icon"></ion-icon>
            <input 
              v-model="credentials.username"
              type="text" 
              placeholder="USUARIO" 
            />
          </div>

          <div class="custom-input">
            <ion-icon :icon="lockClosedOutline" class="input-icon"></ion-icon>
            <input 
              v-model="credentials.password"
              type="password" 
              placeholder="CONTRASEÑA" 
            />
          </div>

          <div class="action-buttons">
            <ion-button expand="block" class="btn-primary" @click="doLogin">
              ACCEDER
            </ion-button>

            <ion-button fill="outline" class="btn-secondary" @click="goToRegister">
              REGISTRARSE
            </ion-button>
          </div>

        </div>

        <div class="footer">
          <p>¿Olvidaste la contraseña?</p>
        </div>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonButton, IonIcon } from '@ionic/vue';
import { personOutline, lockClosedOutline, location } from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

// Variables reactivas para el formulario
const credentials = ref({
  username: '',
  password: ''
});

// Funciones de acción
const doLogin = () => {
  console.log('Login con:', credentials.value);
  // router.push('/home'); // Descomentar para navegar
};

const goToRegister = () => {
  console.log('Ir a registro');
};
</script>

<style scoped>

.login-content {
  --background: #1A3C54; 
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 40px 30px;
  color: white;
}

/* 2. Logo */
.header-section {
  text-align: center;
  margin-bottom: 50px;
}



.pin-icon {
  transform: rotate(45deg);
  font-size: 40px;
  color: #1A3C54;
}

.welcome-text {
  font-size: 12px;
  letter-spacing: 2px;
  margin-top: 30px;
  opacity: 0.8;
  font-weight: 300;
}
.brand-logo{
  width: 16em;
  max-width: 16em;
}

/* 3. Estilos de Inputs (Custom CSS para border fino) */
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

/* 4. Botones */
.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
}

.btn-primary {
  --background: white;
  --color: #1A3C54;
  --border-radius: 2px;
  font-weight: 600;
  letter-spacing: 1px;
  height: 50px;
  --box-shadow: none;
}

.btn-secondary {
  --color: white;
  --border-color: rgba(255, 255, 255, 0.4);
  --border-radius: 2px;
  --border-width: 1px;
  height: 45px;
  width: 60%; 
  align-self: center;
  font-size: 13px;
  letter-spacing: 1px;
}

/* 5. Footer */
.footer {
  margin-top: auto;
  padding-top: 40px;
}

.footer p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
}
</style>