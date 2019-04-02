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
    <p>
      <b-btn variant="success" @click="register">
        <span v-if="codePanel">
          Load
        </span>
        <span v-else>
          Back
        </span>
      </b-btn>
    </p>
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
  computed: {
    codePanel: function(){
      return this.$route.path === '/'
    }
  },
  watch:{
    $route (to, from){
        this.showSidebar = true;
    }
  },
  methods: {
    getData(args) {
      this.finalEntries = args.entries
      this.eventListeners = args.events
    },
    register() {
      if(this.codePanel){
        this.$router.push({
          path: '/execution'
        })
        // this.showSidebar = true
      }else{
        this.$router.push({
          path: '/'
        })
        // this.showSidebar = true
      }
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
    padding-left: 10px;
    padding-right: 10px;
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
</style>
