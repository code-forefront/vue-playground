<template>
  <div :class="{ active: showSidebar }" class="volet sidebar">
    <user-defined-data-comp @dataEmitter="getData" />
    <b-btn class="menu" variant="danger" @click="showSidebar = !showSidebar">
    <span v-if="showSidebar">
      ->
    </span>
    <span v-else>
      X
    </span>
    </b-btn>
  </div>
</template>

<script>
export default {
  components: {
    userDefinedDataComp: () => import('./user-defined-data')
  },
  data: function () {
    return {
      showSidebar: true
    }
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
    min-width: 400px;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: white;
    z-index: 10;
    transition: all 0.3s;
    position: fixed;
    transition: all 0.3s;
    padding-top: 60px;
    &.active{
      margin-left: -350px;
    }
  }
  .menu{
    position: absolute;
    border-radius: 20px;
    z-index: 11;
    margin: 10px;
    top: 0px;
    right: 0px;
  }
  .active{
    .user-inputs-container{
      display: none;
    }
  }
  .user-inputs-container{
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
