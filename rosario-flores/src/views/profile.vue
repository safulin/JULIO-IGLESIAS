<template>
  <ion-page>
    <ion-content class="main-content">
      <div class="page-layout">
        
        <aside class="sidebar">
          <div class="sidebar-top">
             <div class="mini-logo">
              <ion-icon :icon="location" class="logo-icon"></ion-icon>
            </div>
          </div>

          <div class="nav-items">
            <div class="nav-item">
              <ion-icon :icon="navigateOutline"></ion-icon>
              <span>MAPA</span>
            </div>
            
            <div class="nav-item">
              <ion-icon :icon="searchOutline"></ion-icon> <span>LISTA</span>
            </div>

            <div class="nav-item active">
              <ion-icon :icon="personOutline"></ion-icon>
              <span>PERFIL</span>
            </div>
          </div>
        </aside>

        <main class="profile-container">
          
          <button class="btn-logout" @click="logout">
            CERRAR SESION
          </button>

          <div class="profile-header">
            <div class="avatar-wrapper">
              <img src="https://i.pravatar.cc/300?img=5" alt="Profile" />
            </div>
          </div>

          <div class="info-section">
            
            <div class="info-row">
              <ion-icon :icon="personOutline" class="row-icon"></ion-icon>
              <input type="text" value="ADRIPROGAMER2011" readonly />
            </div>

            <div class="info-row">
              <ion-icon :icon="mailOutline" class="row-icon"></ion-icon>
              <input type="text" value="DMARTINEZ@ELPUIG.XEILL.NET" readonly />
            </div>

            <div class="info-row">
              <ion-icon :icon="lockClosedOutline" class="row-icon"></ion-icon>
              <input type="text" value="DM********P*******A*******U******" readonly />
            </div>

            <div class="info-row centered-text">
              <input type="text" value="07/11/1069AC" readonly class="text-center"/>
            </div>

          </div>

          <div class="footer-links">
            <a href="#">MIS FAVORITOS</a>
            <a href="#">MIS RESEÑAS</a>
            <a href="#">AJUSTES</a>
          </div>

        </main>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { 
  personOutline, 
  mailOutline, 
  lockClosedOutline, 
  location,
  navigateOutline, // Para icono Mapa (triángulo)
  searchOutline    // Para icono Lista (lupa)
} from 'ionicons/icons';
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  console.log('Cerrando sesión...');
  router.push('/login');
};
</script>

<style scoped>
/* Layout General */
.main-content {
  --background: #1A3C54; /* Mismo azul que el Login */
}

.page-layout {
  display: flex;
  height: 100%;
  width: 100%;
}

/* --- ESTILOS BARRA LATERAL --- */
.sidebar {
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border-right: 1px solid rgba(255,255,255,0.1); /* Separador sutil opcional */
}

.mini-logo {
  /* Simulación del logo pin pequeño */
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.2);
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  box-shadow: 0 0 0 3px rgba(255,255,255,0.1);
}

.logo-icon {
  transform: rotate(45deg);
  color: white;
  font-size: 20px;
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  font-size: 10px;
  gap: 5px;
}

.nav-item ion-icon {
  font-size: 28px;
}

.nav-item.active {
  color: white;
  font-weight: bold;
}

/* --- ESTILOS CONTENIDO PRINCIPAL --- */
.profile-container {
  flex: 1;
  position: relative; /* Para posicionar el botón logout */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
}

/* Botón Cerrar Sesión */
.btn-logout {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #990000; /* Rojo oscuro */
  color: black;
  font-weight: bold;
  font-size: 10px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

/* Header Avatar */
.profile-header {
  margin-top: 20px;
  margin-bottom: 60px;
}

.avatar-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255,255,255,0.2); /* Borde decorativo opcional */
}

.avatar-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Inputs de Información */
.info-section {
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-row {
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 12px 15px;
  border-radius: 2px;
}

.row-icon {
  font-size: 24px;
  margin-right: 15px;
  color: rgba(255, 255, 255, 0.8);
}

.info-row input {
  background: transparent;
  border: none;
  color: white;
  font-size: 14px;
  width: 100%;
  outline: none;
  letter-spacing: 0.5px;
}

.text-center {
  text-align: center;
}

/* Links Footer */
.footer-links {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alineados a la izquierda del contenedor imaginario */
  width: 100%;
  max-width: 450px;
  gap: 10px;
}

.footer-links a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  font-size: 14px;
  letter-spacing: 1px;
}
</style>