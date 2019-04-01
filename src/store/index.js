import script1 from 'raw-loader!@/components/code-panel/examples/script1.tpl'
import template1 from 'raw-loader!@/components/code-panel/examples/template1.tpl'
import style1 from 'raw-loader!@/components/code-panel/examples/style1.tpl'
export default {
  state: () => ({
    entries: [{ key: 'otherVal', value: 'salut' }],
    events: {},
    template: template1,
    script: script1,
    style: style1
  }),
  mutations: {
    setEntries(state, val) {
      state.entries = val
    },
    setEvents(state, val) {
      state.events = val
    },
    setTemplate(state, val) {
      state.template = val
    },
    setScript(state, val) {
      state.script = val
    },
    setStyle(state, val) {
      state.style = val
    }
  }
}