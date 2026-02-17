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
              <img src="https://tse1.explicit.bing.net/th/id/OIP.AIh2ahzFn6a0RmNsxaladwHaE_?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Profile" />
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
// 11. Importamos los componentes visuales de Ionic
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
// 12. Importamos los iconos específicos de la librería Ionicons
import { 
  personOutline, 
  mailOutline, 
  lockClosedOutline, 
  location,
  navigateOutline, 
  searchOutline    
} from 'ionicons/icons';
// 13. Importamos el enrutador para poder navegar entre páginas
import { useRouter } from 'vue-router';

// 14. Inicializamos la herramienta del enrutador
const router = useRouter();

// 15. Función que se ejecuta al hacer clic en el botón rojo
const logout = () => {
  console.log('Cerrando sesión...');
  // 16. Redirige al usuario de vuelta a la pantalla de login
  router.push('/login');
};
</script>

<style scoped>
/* 17. Fondo general de la página completa */
.main-content {
  --background: #1A3C54; 
}

/* 18. Activa Flexbox para poner la barra lateral a la izquierda del contenido */
.page-layout {
  display: flex;
  height: 100%;
  width: 100%;
}

/* 19. Diseño estructural de la barra lateral oscura */
.sidebar {
  width: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border-right: 1px solid rgba(255,255,255,0.1); 
}

/* 20. Estilos geométricos para simular el logo en forma de gota/pin */
.mini-logo {
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

/* 21. Contenedor general que agrupa los botones del menú */
.nav-items {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}

/* 22. Estilo individual de cada botón del menú lateral */
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

/* 23. Resalta en blanco brillante la página en la que estamos */
.nav-item.active {
  color: white;
  font-weight: bold;
}

/* 24. Diseño de la zona derecha central donde van los datos */
.profile-container {
  flex: 1;
  position: relative; 
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
}

/* 25. Ubica y pinta de rojo el botón de cerrar sesión */
.btn-logout {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #990000; 
  color: black;
  font-weight: bold;
  font-size: 10px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

/* 26. Da espacio vertical a la foto de perfil */
.profile-header {
  margin-top: 20px;
  margin-bottom: 60px;
}

/* 27. Crea un círculo perfecto que recorta la imagen de perfil */
.avatar-wrapper {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(255,255,255,0.2); 
}

.avatar-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 28. Agrupa y centra los recuadros de información del usuario */
.info-section {
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* 29. Dibuja el borde fino blanco alrededor de cada dato */
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

/* 30. Limpia el estilo nativo de HTML para que el texto parezca flotar transparente */
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

/* 31. Posiciona los enlaces finales en la parte inferior izquierda de su zona */
.footer-links {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
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