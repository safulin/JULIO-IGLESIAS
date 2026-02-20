<template>
  <ion-page>
    <ion-content class="main-content">
      <div class="page-layout">
        
        <Sidebar tabActiva="lista" />

        <main class="details-container">
          <div class="content-wrapper">
            
            <div class="image-wrapper">
              <img src="https://tse2.mm.bing.net/th/id/OIG2.OaD2m_.yI15Yk2f4A08t" alt="Interior Iglesia" />
            </div>

            <h1 class="church-title">PARRÒQUIA DE LA VERGE DE NÚRIA</h1>

            <div class="section-block">
              <h2 class="section-title">DESCRIPCIÓN</h2>
              <div class="section-content">
                <p>IGLESIA CATOLICA</p>
                <p>ACCESIBLE CON SILLA DE RUEDAS</p>
              </div>
            </div>

            <div class="section-block">
              <h2 class="section-title">RESEÑAS</h2>
              
              <div class="rating-row">
                <div class="stars">
                  <ion-icon :icon="star" class="star-icon filled"></ion-icon>
                  <ion-icon :icon="star" class="star-icon filled"></ion-icon>
                  <ion-icon :icon="star" class="star-icon filled"></ion-icon>
                  <ion-icon :icon="star" class="star-icon filled"></ion-icon>
                  <ion-icon :icon="starOutline" class="star-icon empty"></ion-icon>
                </div>
                <span class="rating-score">(4.7)</span>
              </div>

              <p class="review-text">
                CELEBRACIÓ 50 ANIVERSARI NOCES DELS PARES, TOT BÉ MALGRAT LA
                PANDÈMIA. SORPRENENT, UN DIA ENTRE SETMANA A LES 12H DEL
                MIGDIA GRAN AFLUÈNCIA
              </p>
            </div>

            <button class="btn-contact" @click="$router.push('/formulario')">
            CONTACTANOS
            </button>

          </div>
        </main>

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { star, starOutline } from 'ionicons/icons';
// Importamos el componente
import Sidebar from '@/components/Sidebar.vue'; 
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

/* Diseño de la página de Detalles */
.details-container {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  color: white;
  overflow-y: auto;
}

.content-wrapper {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-wrapper {
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.church-title {
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 40px;
  font-weight: normal;
}

.section-block {
  width: 100%;
  margin-bottom: 30px;
}

.section-title {
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: normal;
}

.section-content {
  padding-left: 20px; 
}

.section-content p {
  margin: 5px 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.rating-row {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.stars {
  display: flex;
  gap: 5px;
}

.star-icon {
  font-size: 20px;
}

.star-icon.filled {
  color: #FFD700; 
}

.star-icon.empty {
  color: rgba(255, 255, 255, 0.4);
}

.rating-score {
  font-size: 14px;
}

.review-text {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  text-transform: uppercase;
}

.btn-contact {
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: 15px 40px;
  margin-top: 20px;
  cursor: pointer;
  letter-spacing: 1px;
  border-radius: 2px;
  width: 200px;
}

/* Modo Móvil */
@media (max-width: 768px) {
  .page-layout {
    flex-direction: column; 
  }
  
  .details-container {
    order: 1; 
    padding: 20px 15px;
  }
  
  .image-wrapper {
    height: 200px;
    margin-bottom: 20px;
  }
  
  .church-title {
    margin-bottom: 30px;
  }
}
</style>