import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: [
        String,
        Number,
        Boolean,
        Array,
        Object,
        Function,
        Promise,
      ],
      default: null,
    },
  },
  data: () => ({
    value_: null as any,
  }),
  watch: {
    value: {
      immediate: true,
      handler (value: any) {
        this.value_ = value
      },
    },
    value_ (value: any) {
      this.$emit(`input`, value)
    },
  },
})
