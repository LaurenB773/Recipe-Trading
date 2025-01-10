<template> 
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <!-- <img src="/src/assets/LDR.icon.png" alt="Icon Image" width="250" height="200"> -->
    </a>
  </div>
</nav>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Long Distance Recipes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link v-bind:to="{ name: 'home' }" > Home </router-link></a >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link v-bind:to="{ name: 'about' }" > About </router-link></a>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="#"><router-link v-bind:to="{ name: 'login' }" > Login </router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link v-bind:to="{ name: 'register' }" > Register </router-link></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<!-- <nav>
    <router-link v-bind:to="{ name: 'home' }" > Home </router-link>

    <router-link v-if="this.$store.state.token != ''" class="link font" v-bind:to="{ name: 'home' }">
      Home
    </router-link>

    <router-link class="link font" v-bind:to="{ name: this.$route.path === '/register' ? 'login' : 'register' }"
      v-if="this.$store.state.token === ''">
      {{ this.$route.path === '/register' ? 'Sign in' : 'Sign up' }}
    </router-link>

    <router-link class="link font" v-bind:to="{ name: 'logout' }" v-if="this.$store.state.token != ''">
      Logout
    </router-link>

    <router-link class="link font" v-bind:to="{ name: 'profile' }"
      v-if="this.$store.state.token != ''">
      Profile
    </router-link>
</nav> -->
</template>

<!-- <script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["userPermissions"]),
  },
  mounted() {
    console.log(this.userPermissions);
  },
  methods: {
    isUser() {
      let authorities = [];
      authorities = this.userPermissions;

      if (authorities.some((authority) => authority.name === "ROLE_USER")) {
        console.log("user is a user");
        return true;
      }
      console.log("user role not found");
      return false;
    },
 
  }
};
</script> -->

<!-- <style scoped>
nav {
  width: 50%;
  margin: auto;

  display: flex;
  justify-content: space-around;

  background-color: var(--color-light-cream);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  padding: 10px;
  text-align: center;
}

.link {
  color: var(--color-chocolate);
  text-decoration: none;
  font-size: 18px;
}
</style> -->
