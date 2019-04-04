<template>
  <section class="code">
    <h1>Composant VueJS</h1>
    <h2>template</h2>
      <codemirror v-model="template" :options="cmOptions" />
    <h2>script</h2>
      <codemirror v-model="script" :options="cmOptions2" />
    <h2>CSS</h2>
      <codemirror v-model="style" :options="cmOptions3" />
      <p>
      <b-btn variant="success" @click="saveDraft">
        Save
      </b-btn>
    </p>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'codePanel',
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
      registered: false
    }
  },
  computed: {
    template: {
      get() {
        return this.$store.state.template
      },
      set(e) {
        this.$store.commit('setTemplate', e)
      }
    },
    script: {
      get() {
        return this.$store.state.script
      },
      set(e) {
        this.$store.commit('setScript', e)
      }
    },
    style: {
      get() {
        return this.$store.state.style
      },
      set(e) {
        this.$store.commit('setStyle', e)
      }
    }
  },
  methods: {
    async saveDraft() {
      let draft
      draft = {
        template: this.template,
        script: this.script,
        style: this.style,
      }
      try {
        const response = await axios({ method: "POST", "url": "http://localhost:3000/drafts", "data": draft, "headers": { "content-type": "application/json" } })
        let query = Object.assign({}, this.$route.query,  { id: response.data.id })
        this.$router.push({ query: query })
      } catch (error) {
        /* eslint-disable no-console */
        console.log(error)
        /* eslint-disable no-console */
      }
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
