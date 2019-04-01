<template>
  <b-card border-variant="info">
    <b-card border-variant="info">
      <div class="d-flex">
        <div v-for="(event, index) in userDefinedEvents" :key="index">
          <b-form-input v-model="event.value" :readonly="(index + 1) !== userDefinedEvents.length" />
        </div>
      </div>
      <b-btn variant="success" @click="addEvent">
        ajouter un nouvel événement à écouter
      </b-btn>
    </b-card>
    <ul v-if="eventsThrown.length > 0">
      <li v-for="(input, index) in eventsThrown" :key="index">
        {{ input }}
      </li>
    </ul>
    <span v-else>
      Vous n'avez lancé aucun événement
    </span>
  </b-card>
</template>
<script>
import _ from 'lodash'
export default {
  data: function () {
    return {
      eventsThrown: [],
      userDefinedEvents: [{ value: '' }]
    }
  },
  watch: {
    userDefinedEvents: {
      handler(val) {
        const listener = {}
        _.each(val, (evt) => {
          listener[evt.value] = this.eventHandler(evt)
        })
        this.$emit('eventsEmitter', listener)
      }
    }
  },
  methods: {
    eventHandler(event) {
      return (eventPassedData) => {
        const date = new Date()
        this.eventsThrown.push(
          event.value +
            ' event launched at : ' +
            date.toUTCString() +
            ' with the value ' +
            eventPassedData.data
        )
      }
    },
    addEvent: function () {
      this.userDefinedEvents.push({ value: '' })
    }
  }
}
</script>
