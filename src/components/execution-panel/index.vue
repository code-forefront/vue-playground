<template>
  <div>
    <component :is="'style'">
      {{ style }}
    </component>
    <b-card id="user-styles" border-variant="primary" header="Le rendu de votre composant" header-bg-variant="primary" header-text-variant="white">
      <my-comp v-bind="this.$store.state.entries" v-on="this.$store.state.events" />
    </b-card>
  </div>
</template>

<script>
import Vue from 'vue/dist/vue.js'

export default {
  data: function () {
    return {
      style: this.$store.state.style
    }
  },
  created() {
    // On déclare dynamiquement un composant
    // Ca fonctionne bien que ce ne soit pas prévu
    // Entre autre car cela injecte du code écrit pas le visiteur
    // Il ne faut donc pas utiliser ceci dans un projet en prod
    let script
    eval('script = ' + this.$store.state.script)
    const myComp = Object.assign(script, {
      template: this.$store.state.template
    })
    Vue.component('my-comp', myComp)
    /* const events = ['click', 'mouseover'] */
    /* entries */
  },
  destroyed() {
    // ceci n'est pas prévu non plus du coup....
    delete Vue.options.components['my-comp']
  }
}
</script>
<style lang="scss">
  #__layout{
    margin: 10px;
  }
  .card{
    margin-bottom: 10px;
  }
  #collapse2,
  #collapse1{
    margin-top: 10px;
  }
  .d-flex{
    display: flex;
    margin-bottom: 10px;
    & > div{
      margin-right: 10px;
    }
  }
</style>
