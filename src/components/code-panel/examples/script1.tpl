{
  data () {
    return {
      myVal: 'yeah'
    }
  },
  props: {
    otherVal: {
      type: String,
      default: 'none'
    }
  },
  computed: {
    myNewVal() {
      return this.myVal + ' new'
    }
  }
}
