export default {
  state: () => ({
    entries: [{ key: 'otherVal', value: 'salut' }],
    events: {}
  }),
  mutations: {
    setEntries(state, val) {
      state.entries = val
    },
    setEvents(state, val) {
      state.events = val
    }
  }
}