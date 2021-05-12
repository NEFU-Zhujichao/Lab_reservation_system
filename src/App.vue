<template>
  <div id="nav">
    <router-link to="/">Login</router-link>
    <br />
    <router-link to="/index">index</router-link>
  </div>
  <router-view />
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
