<template>
  <ion-page>
    <ion-content class="main-content" :scroll-y="true">
      <div class="page-layout">
        
        <Sidebar tabActiva="perfil" />

        <main class="profile-container">
          <header class="header-branding mobile-only">
            <img src="@/img/logo2.png" class="top-logo brand-img-fix" />
          </header>

          <div class="top-bar-desktop">
            <button class="btn-logout" @click="logout">
              CERRAR SESIÓN
            </button>
          </div>

          <div class="content-wrapper">
            
            <div class="profile-header">
              <div class="avatar-wrapper">
                <img
                  src="https://imgs.search.brave.com/HWdLx4ALMf8qoJ5Fuwt-2uz2KnGrVkoYvya7aP7EXHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LnNlbWFuYS5l/cy9tZWRpby8yMDIz/LzAzL3NlbWFuYS0x/LTQwNS0xMDI0eDU3/Ni5qcGc"
                  alt="Avatar"
                  class="avatar-img"
                />
              </div>
            </div>

            <div class="form-section">
              <div class="custom-input">
                <ion-icon :icon="personOutline" class="input-icon" />
                <input type="text" value="ADRIPROGAMER2011" readonly />
              </div>

              <div class="custom-input">
                <ion-icon :icon="mailOutline" class="input-icon" />
                <input type="email" value="DMARTINEZ@ELPUIG.XEILL.NET" readonly />
              </div>

              <div class="custom-input">
                <ion-icon :icon="lockClosedOutline" class="input-icon" />
                <input type="password" value="DM*********P*********A********U****" readonly />
              </div>

              <div class="custom-input centered-input">
                <input type="text" value="07/11/1069AC" readonly />
              </div>
            </div>

            <div class="top-bar-mobile mobile-only">
              <button class="btn-logout" @click="logout">
                CERRAR SESIÓN
              </button>
            </div>

            <div class="links-section">
              <p class="link-item">MIS FAVORITOS</p>
              <p class="link-item">MIS RESEÑAS</p>
              <p class="link-item">AJUSTES</p>
            </div>

          </div>
        </main>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from '@ionic/vue'
import { personOutline, mailOutline, lockClosedOutline } from 'ionicons/icons'
import { useRouter } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'

const router = useRouter()

const logout = () => {
  router.push('/login')
}
</script>

<style scoped>
.main-content { --background: #1A3C54; }

.page-layout { 
  display: flex; 
  height: 100vh; 
  width: 100vw; 
  background-color: #1A3C54;
}

.profile-container {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  color: white;
  overflow-y: auto;
}

/* --- BRANDING RESPONSIVE (PC y General) --- */
.mobile-only { 
  display: none !important; /* Oculto en PC por defecto */
}

/* OJO: Quitamos el tamaño fijo de aquí para manejarlo en responsive */
.header-branding {
  width: 100%;
  flex-shrink: 0;
}

/* --- BOTÓN DESKTOP --- */
.top-bar-desktop {
  position: absolute;
  top: 30px;
  right: 50px;
}

.btn-logout {
  background-color: #A30E0E;
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 24px;
  font-size: 11px;
  letter-spacing: 1.5px;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-logout:active { opacity: 0.8; }

/* CONTENIDO CENTRAL */
.content-wrapper {
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: auto 0; /* Centrado vertical en PC */
}

.avatar-wrapper {
  width: 140px;
  height: 140px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid rgba(255,255,255,0.1);
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.avatar-img { width: 100%; height: 100%; object-fit: cover; }

/* INPUTS */
.form-section { display: flex; flex-direction: column; gap: 15px; }

.custom-input {
  display: flex;
  align-items: center;
  border: 1px solid rgba(127, 164, 177, 0.4);
  border-radius: 8px;
  padding: 14px 16px;
  background: rgba(255,255,255,0.05);
}

.input-icon { font-size: 18px; margin-right: 14px; color: #7FA4B1; }
.custom-input input { background: transparent; border: none; outline: none; color: #7FA4B1; flex: 1; font-size: 14px; }
.centered-input input { text-align: center; }

/* LINKS */
.links-section { display: flex; flex-direction: column; gap: 12px; align-items: center; margin-top: 10px; }
.link-item { font-size: 13px; letter-spacing: 1px; color: rgba(127, 164, 177, 0.8); cursor: pointer; text-transform: uppercase; }

/* --- 🔥 RESPONSIVE CORREGIDO --- */
@media (max-width: 768px) {
  .page-layout { flex-direction: column; }
  
  /* Activamos los elementos mobile-only */
  .mobile-only { 
    display: flex !important; 
    justify-content: center;
    width: 100%;
  }

  /* 🔥 EL ARREGLO PARA EL LOGO GIGANTE 🔥 */
  .header-branding.mobile-only {
    padding: 15px 0 10px 0; /* Espaciado ajustado */
    height: auto; /* Dejamos que respire */
  }

  .top-logo.brand-img-fix {
    width: 65px !important; /* 🔥 TAMAÑO FINAL RAZONABLE (Ajusta si quieres) */
    height: auto;
    max-width: 65px;
  }

  /* Ocultamos PC, mostramos Móvil */
  .top-bar-desktop { display: none !important; }
  .top-bar-mobile.mobile-only { 
    margin: 15px 0; 
  }

  .profile-container { 
    padding: 15px; 
    height: calc(100vh - 70px); /* Restamos el sidebar inferior */
    justify-content: flex-start; /* Todo arriba en móvil */
  }

  .content-wrapper { 
    gap: 15px; /* Reducimos el gap para que quepa todo */
    margin-top: 5px;
    margin-bottom: 0;
    padding-bottom: 100px; /* 🔥 Importante para no tapar el menú inferior */
    height: auto;
  }

  .avatar-wrapper { width: 110px; height: 110px; }
}
</style>