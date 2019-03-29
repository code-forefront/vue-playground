<template>
  <div class="layout">
    <volet :class="{ active: showSidebar }" class="sidebar" />
    <code-panel />
    <b-btn class="menu" variant="danger" @click="showSidebar = !showSidebar">
      I/O
    </b-btn>
  </div>
</template>
<script>
import volet from '@/components/volet'
import codePanel from '@/components/code-panel'
export default {
  components: {
    volet,
    codePanel
  },
  data: function () {
    return {
      showSidebar: false
    }
  }
}
</script>

<style lang="scss">
// ce code s'applique à toute l'application
// donc au code-panel mais aussi à l'execution-panel

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;

    &.dark {
      background: #26282c;
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
      margin: 0;
    }

    .button--green {
      display: inline-block;
      border-radius: 4px;
      border: 1px solid #3b8070;
      color: #3b8070;
      text-decoration: none;
      padding: 10px 30px;
    }

    .button--green:hover {
      color: #fff;
      background-color: #3b8070;
    }

    .button--grey {
      display: inline-block;
      border-radius: 4px;
      border: 1px solid #35495e;
      color: #35495e;
      text-decoration: none;
      padding: 10px 30px;
      margin-left: 15px;
    }

    .button--grey:hover {
      color: #fff;
      background-color: #35495e;
    }
    .layout{
      display: flex;
      align-items: stretch;
    }
    .sidebar.active {
      margin-left: -50%;
    }
    .sidebar{
      transition: all 0.3s;
      padding-top: 60px;
    }
    .main-wrapper{
      transition: all 0.3s;
      width: 100%;
    }
    .menu{
      position: absolute;
      border-radius: 20px;
      z-index: 11;
      margin: 10px;
    }
  }
}
</style>
