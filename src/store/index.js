export const state = () => ({
  entries: [{ key: 'otherVal', value: 'salut' }],
  events: {}
})

export const mutations = {
  setEntries(state, val) {
    state.entries = val
  },
  setEvents(state, val) {
    state.events = val
  }
}
