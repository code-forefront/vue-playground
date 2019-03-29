<template>
  <b-card border-variant="info">
    <div v-for="(obj, index) in userDefinedEntries" :key="index" class="d-flex">
      <b-form-input v-model="obj.key" :readonly="(index + 1) !== userDefinedEntries.length" />
      <b-form-input v-model="obj.value" />
    </div>
    <b-btn variant="success" @click="addEntry">
      ajouter une nouvelle entrée
    </b-btn>
  </b-card>
</template>
<script>
import _ from 'lodash'
export default {
  data: function () {
    return {
      userDefinedEntries: [{ key: 'val', value: 'salut' }]
    }
  },
  watch: {
    userDefinedEntries: {
      handler(val) {
        this.throwEntriesChange(val)
      },
      deep: true
    }
  },
  created() {
    this.throwEntriesChange(this.userDefinedEntries)
  },
  methods: {
    throwEntriesChange(val) {
      const entries = {}
      _.each(val, (evt) => {
        entries[evt.key] = evt.value
      })
      this.$emit('entriesEmitter', entries)
    },
    addEntry: function () {
      this.userDefinedEntries.push({ key: 'somevar', value: '' })
    }
  }
}
</script>
<style lang="scss">
.d-flex{
  input{
    margin-right: 10px;
    & + input{
      margin-right: 0;
      margin-left: 10px;
    }
  }
}
</style>
