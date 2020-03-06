<template>
  <div>
    <Navbar />
    <div class="user-page">
      <h2>User Page</h2>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  },
  head() {
    return {
      title: 'User Manager'
    }
  }
}
</script>

<style scoped>
.user-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}
</style>
