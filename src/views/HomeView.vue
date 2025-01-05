<template> 
    <div class="home">
      <home-page/>

    </div>
</template>

<script>

import HomePage from "../components/HomePage.vue"
import About from "./About.vue";

export default {
    beforeCreate() {
    document.body.classList.add("home");
  },

  beforeUnmount() {
    document.body.classList.remove("home");
  },

  components: {
    HomePage,
    About
  },
};

</script>

<style>

 .home{
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url("../assets/home.jpeg");
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center;
 }
 .home-intro{
  color: var(--color-cream);
 }
</style>