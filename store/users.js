export const state = () => ({
  users: [0]
})

export const getter = {
  users: (state) => state.users
}

export const mutations = {
  fetchUsers(state, users) {
    state.users = users
  }
}
