<template>
  <img class="logo-pic" src="/src/assets/LDR.icon.png" alt="logo">
  <Navbar/>
  <router-view />
</template>

<script>
import Navbar from "./components/Nav.vue";

export default {
  components: { Navbar },
};
</script>

<style>

.logo-pic {
  margin-top: -15px;
  position: absolute;
  left: 0;
  top: 0;
  width: 250px;
  height: 200px;
}
</style>

<!-- <script setup>
import TheWelcome from './components/Home.vue'
</script>

<template>
  <header>
    <img src="/src/assets/LDR.icon.png" alt="logo">
    <div class="wrapper">
     
    </div>
  </header>

  <main>
    <TheWelcome />
  
  </main>
</template>

<script>
import Navbar from "./components/Nav.vue";

export default {
  components: { Navbar },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .home-b {
    width: 100%;
    
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  /* body {
  margin: 0%;
  background-image: url("./assets/home.jpeg");
  background-size: cover;
} */
}
</style> -->
