<template>
  <aside class="navigation-bar">
    <div class="nav-container">
      
      <div class="logo-wrapper hide-mobile">
        <img src="@/img/logo2.png" alt="Logo" class="logo-img" />
      </div>

      <nav class="nav-menu">
        <div class="menu-item" :class="{ active: tabActiva === 'mapa' }" @click="router.push('/home')">
          <ion-icon :icon="navigateOutline" />
          <span>MAPA</span>
        </div>

        <div class="menu-item" :class="{ active: tabActiva === 'lista' }" @click="router.push('/lista')">
          <ion-icon :icon="searchOutline" />
          <span>LISTA</span>
        </div>

        <div class="menu-item" :class="{ active: tabActiva === 'perfil' }" @click="router.push('/profile')">
          <ion-icon :icon="personOutline" />
          <span>PERFIL</span>
        </div>
      </nav>
      
      <div class="spacer-bottom hide-mobile"></div>
      
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { IonIcon } from '@ionic/vue';
import { navigateOutline, searchOutline, personOutline } from 'ionicons/icons';

defineProps<{ tabActiva: string }>();
const router = useRouter();
</script>

<style scoped>
/* Diseño principal (Escritorio) */
.navigation-bar {
  width: 80px;
  height: 100vh;
  background-color: #1A3C54;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 0;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.logo-img {
  width: 40px;
  height: auto;
}

.nav-menu {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px 0;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: color 0.2s ease;
  width: 100%;
}

.menu-item ion-icon {
  font-size: 28px;
}

.menu-item span {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
}

.menu-item.active {
  color: #ffffff;
}

.spacer-bottom {
  height: 40px;
}

/* Diseño adaptable (Móvil) */
@media (max-width: 768px) {
  .navigation-bar {
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 2000;
  }

  .nav-container {
    padding: 0;
  }

  .hide-mobile {
    display: none !important;
  }

  .nav-menu {
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    height: 100%;
  }

  .menu-item {
    gap: 4px;
    justify-content: center;
  }

  .menu-item ion-icon {
    font-size: 24px;
  }
}
</style>