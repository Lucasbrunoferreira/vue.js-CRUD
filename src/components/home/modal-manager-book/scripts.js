import { mapActions } from 'vuex'
import Modal from '../../modal/index.vue'

export default {
  props: ['isOpenModal', 'bookToEdit'],
  components: { Modal },
  data () {
    return {
      bookName: '',
      bookPrice: '',
      bookGenre: '',
      bookAuthor: '',
      inRequest: false,
      isOpenManagerModal: false
    }
  },
  watch: {
    isOpenModal (val) {
      this.isOpenManagerModal = val
    },
    bookToEdit (val) {
      this.managerModalValues(val)
    }
  },
  methods: {
    ...mapActions([
      'actionEditBook'
    ]),
    saveModalData () {
      this.inRequest = true

      const book = {
        name: this.bookName,
        price: this.bookPrice,
        genre: this.bookGenre,
        author: this.bookAuthor
      }

      this.actionEditBook({ bookId: this.bookToEdit.bookId, book })
        .then(() => {
          this.inRequest = false

          this.closeModal()

          this.$notify({
            title: 'Sucesso',
            message: 'O Livro foi editado com sucesso!',
            type: 'success'
          })
        })
        .catch(() => {
          this.inRequest = false

          this.$notify.error({
            title: 'Ops!',
            message: 'Ocorreu um erro durante o processo...'
          })
        })
    },
    closeModal (val) {
      this.$emit('closeManagerBookModal', val)

      this.inRequest = false

      this.managerModalValues(null)
    },
    managerModalValues (value) {
      if (value) {
        this.bookName = this.bookToEdit.name

        this.bookPrice = this.bookToEdit.price

        this.bookGenre = this.bookToEdit.genre

        this.bookAuthor = this.bookToEdit.author
      } else {
        this.bookName = this.bookPrice = this.bookGenre = this.bookAuthor = ''
      }
    }
  }
}
