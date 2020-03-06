<template>
  <div class="navbar">
    <nuxt-link class="nav-link nav-logo" to="/">Nuxt Crash Course</nuxt-link>
    <div class="nav-right">
      <nuxt-link class="nav-link" to="/about">About</nuxt-link>
      <nuxt-link class="nav-link" to="/users">Users</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 25px;
  background-color: #333;
}

.navbar .nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  padding: 5px 10px;
  margin-right: 10px;
}

.navbar .nav-link:hover {
  color: #fafafa;
  background-color: #000;
  transition: all 500ms;
}

.navbar .nav-logo {
  font-size: 36px;
  font-style: italic;
}

.navbar .nav-right {
  position: absolute;
  right: 25px;
}
</style>
