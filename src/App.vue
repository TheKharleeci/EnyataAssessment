<template>
  <div id="app">
    <div id="nav">
      <router-link to="/userLogin">UserLogin</router-link> |
      <router-link to="/questions">Questions</router-link> |
      <router-link to="/admin/login">LoginAdmin</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/entries">Entries</router-link> |
      <router-link to="/client">ClientDashboard</router-link> |
      <router-link to="/results">Results</router-link> |
      <router-link to="/adminProfile">Admin</router-link> |
      <router-link to="/app">Application</router-link> |
      <router-link to="/signup">signup</router-link> |
      <router-link to="/timer">timer</router-link> |
      <router-link to="/successfulPage">success</router-link> |
      <router-link to="/takeAssess">Assess</router-link> |
      <router-link to="/compose">Compose</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
