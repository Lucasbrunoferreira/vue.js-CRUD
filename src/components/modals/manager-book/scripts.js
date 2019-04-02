import { mapActions } from 'vuex'

export default {
  props: ['isOpenModal', 'modalOptions'],
  data () {
    return {
      bookName: '',
      bookPrice: '',
      bookGenre: '',
      bookAuthor: '',
      inRequest: false
    }
  },
  watch: {
    isOpenModal () {
      this.managerModalValues(this.modalOptions.bookToEdit)
    }
  },
  computed: {
    modalTitle () {
      if (this.modalOptions.isEditing) {
        return 'Editar Livro'
      }

      return 'Cadastrar Livro'
    }
  },
  methods: {
    ...mapActions([
      'actionEditBook',
      'actionAddBook'
    ]),
    saveModalData () {
      this.inRequest = true

      const book = {
        name: this.bookName,
        price: this.bookPrice,
        genre: this.bookGenre,
        author: this.bookAuthor
      }

      if (this.modalOptions.isEditing) {
        this.sendRequest(this.actionEditBook, { bookId: this.modalOptions.bookToEdit.bookId, book })
      } else {
        this.sendRequest(this.actionAddBook, book)
      }
    },
    sendRequest (targetAction, data) {
      targetAction(data)
        .then(() => {
          this.inRequest = false

          this.$emit('closeManagerBookModal')

          this.$notify({
            title: 'Sucesso',
            message: 'O Livro foi salvo com sucesso!',
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
    managerModalValues (value) {
      this.bookName = value.name || ''

      this.bookPrice = value.price || ''

      this.bookGenre = value.genre || ''

      this.bookAuthor = value.author || ''
    }
  }
}
