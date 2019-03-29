<template>
  <b-card no-body class="user-inputs-container">
    <b-btn v-b-toggle.accordion-1>
      Définir les sorties (événements)
    </b-btn>
    <b-collapse id="accordion-1" accordion="my-accordion">
      <user-defined-events-comp @eventsEmitter="getListEvents" />
    </b-collapse>
    <b-btn v-b-toggle.accordion-2>
      Définir les entrées
    </b-btn>
    <b-collapse id="accordion-2" accordion="my-accordion">
      <user-defined-entries-comp @entriesEmitter="getListEntries" />
    </b-collapse>
  </b-card>
</template>
<script>
export default {
  components: {
    userDefinedEntriesComp: () => import('./user-defined-entries'),
    userDefinedEventsComp: () => import('./user-defined-events')
  },
  data: function () {
    return {
      userData: { 'entries': {}, 'events': {} }
    }
  },
  watch: {
    userData: {
      handler() {
        this.$emit('dataEmitter', this.userData)
      },
      deep: true
    }
  },
  methods: {
    getListEntries(args) {
      this.$store.commit('setEntries', args)
    },
    getListEvents(args) {
      this.$store.commit('setEvents', args)
    }
  }
}
</script>
<style lang="scss">
  .user-inputs-container{
    border: none;
    button{
      margin: 10px 0px 10px 0px;
    }
  }
</style>
