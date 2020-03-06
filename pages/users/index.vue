<template>
  <div>
    <Navbar />
    <div class="user-page">
      <h2>User Page</h2>
      <div v-for="user in users" :key="user.id">
        <p>{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// Component
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  },
  computed: {
    users() {
      return this.$store.state.users.users
    }
  },
  async created() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')

    this.$store.commit('users/fetchUsers', res.data)
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
