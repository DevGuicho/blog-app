<template>
  <div class="container">
    <div class="header-bar">
      <h1 class="logo">RailsViteVue</h1>
      <ul class="slider-menu">
        <li v-for="item in menuItems" :key="item.routeName" @click="goTo(item)">
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const menuItems = [
      { title: 'Index', routeName: 'index' },
      { title: 'About', routeName: 'about' },
      { title: 'Sign in', routeName: 'login' },
      { title: 'Sign up', routeName: 'signup' },
    ];
    return {
      menuItems,
    };
  },
  methods: {
    goTo(item) {
      this.$router.push({ name: item.routeName });
    },
  },
};
</script>
