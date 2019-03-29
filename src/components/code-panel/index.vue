<template>
  <section class="code">
    <h1>Composant VueJS</h1>
    <h2>template</h2>
    <no-ssr>
      <codemirror v-model="template" :options="cmOptions" />
    </no-ssr>
    <h2>script</h2>
    <no-ssr>
      <codemirror v-model="script" :options="cmOptions2" />
    </no-ssr>
    <h2>CSS</h2>
    <no-ssr>
      <codemirror v-model="style" :options="cmOptions3" />
    </no-ssr>
    <p>
      <button class="btn fourth" @click="register">
        Load
      </button>
    </p>
  </section>
</template>

<script>
import script1 from './examples/script1.tpl'
import template1 from './examples/template1.tpl'
import style1 from './examples/style1.tpl'
import microstore from '@/microstore'

export default {
  data() {
    return {
      cmOptions: {
        // codemirror options
        tabSize: 2,
        mode: 'text/x-vue',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true
      },
      cmOptions2: {
        // codemirror options
        tabSize: 2,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true
      },
      cmOptions3: {
        // codemirror options
        tabSize: 2,
        mode: 'text/css',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true
      },
      editor1: null,
      registered: false,
      template: template1,
      script: script1,
      style: style1
    }
  },
  methods: {
    restrictStyle(style) {
      const regexp = /((\.|#)?[a-zA-Z-_]* *{)/g
      const res = style.replace(regexp, '#user-styles' + ' ' + '$1')
      return res
    },
    register() {
      let script
      const finalTemplate = this.template
      eval('script = ' + this.script) // eslint-disable-line
      // on place le nouveau composant dans le store pour le récupérer ailleurs facilement
      microstore.template = finalTemplate
      microstore.script = script
      microstore.style = this.restrictStyle(this.style)
      this.$router.push({
        path: '/execution'
      })
    }
  }
}
</script>

<style lang="scss">

  .code {
    //Colours
    $green: #2ecc71;
    $red: #e74c3c;
    $blue: #3498db;
    $yellow: #f1c40f;
    $purple: #8e44ad;
    $turquoise: #1abc9c;

    // Reset and Layout Styles
    h1 {
      color: $yellow;
      font-size: 4rem;
      text-transform: uppercase;
      display: block;
      width: 100%;
      text-align: center;

      @media screen and (max-width: 600px) {
        font-size: 3rem;
      }
    }

    h2 {
      color: $yellow;
      padding: 10px;
    }

    // Basic Button Style
    .btn {
      box-sizing: border-box;
      appearance: none;
      background-color: transparent;
      border: 2px solid $red;
      border-radius: 0.6em;
      color: $red;
      cursor: pointer;
      display: flex;
      align-self: center;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1;
      margin: 20px;
      padding: 1.2em 2.8em;
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;

      &:hover,
      &:focus {
        color: #fff;
        outline: 0;
      }
    }

    // BUTTON 4
    .fourth {
      // background: $yellow;
      border-color: $yellow;
      color: #fff;
      background: {
        image: linear-gradient(45deg,$yellow 50%, transparent 50%);
        position: 100%;
        size: 400%;
      }
      transition: background 300ms ease-in-out;

      &:hover {
        background-position: 0;
      }
    }
  }
</style>
