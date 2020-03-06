<template>
  <div>
    <Navbar />
    <div class="about-page">
      <h2>About Page</h2>
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
      title: 'About Page'
    }
  }
}
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}
</style>
