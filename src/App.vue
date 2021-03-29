<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/userlogin">UserLogin</router-link> |
      <router-link to="/questions">Questions</router-link> |
      <router-link to="/admin/login">LoginAdmin</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/two">Two</router-link> |
      <router-link to="/entries">Entries</router-link> |
      <router-link to="/client">ClientDashboard</router-link> |
      <router-link to="/results">Results</router-link> |
      <router-link to="/adminProfile">Admin</router-link> |
      <router-link to="/timer">timer</router-link>|
      <router-link to="/dashboard1">Dashboard</router-link> |
      <router-link to="/assessment">Assessment</router-link> |
      <router-link to="/successful">Successful</router-link> |
      <router-link to="/application">Create Application</router-link> |
      <router-link to="/compose">Compose Assessment</router-link> |
      <router-link to="/forget">Forget Password</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/history">History</router-link>
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
