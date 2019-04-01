export default {
  props: ['modalTitle', 'isOpen'],
  methods: {
    handleClose () {
      this.$emit('closeModal', true)
    }
  }
}
