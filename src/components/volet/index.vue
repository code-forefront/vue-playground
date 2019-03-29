<template>
  <div class="volet">
    <user-defined-data-comp @dataEmitter="getData" />
  </div>
</template>

<script>
export default {
  components: {
    userDefinedDataComp: () => import('./user-defined-data')
  },
  methods: {
    getData(args) {
      this.finalEntries = args.entries
      this.eventListeners = args.events
    }
  }
}
</script>

<style lang="scss">
  .volet {
    width: 50%;
    min-width: 400px;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: white;
    z-index: 10;
    transition: all 0.3s;
  }
</style>
