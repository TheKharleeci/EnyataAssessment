<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h2>hi there</h2> -->

    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Login,
  },
};
</script>
