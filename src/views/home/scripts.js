import {
  HeaderNav,
  ModalManagerBook
} from '@/components'

import {
  mapActions,
  mapGetters
} from 'vuex'

export default {
  components: {
    HeaderNav,
    ModalManagerBook
  },
  data () {
    return {
      isOpenManagerModal: false,
      bookToEdit: null
    }
  },
  mounted () {
    this.actionGetAllBooks()
  },
  computed: {
    ...mapGetters([
      'getterAllBooks'
    ])
  },
  methods: {
    ...mapActions([
      'actionGetAllBooks',
      'actionDeleteBook'
    ]),
    managerBookModal (book, isOpeningModal) {
      if (!isOpeningModal) {
        setTimeout(() => {
          this.bookToEdit = book
        }, 200)
      } else {
        this.bookToEdit = book
      }

      this.isOpenManagerModal = isOpeningModal
    },
    confirmDeleteBook (bookId) {
      this.$confirm('Ao deletar este livro, não sera possível recuperá-lo. Deseja continuar?', 'Atenção', {
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar',
        type: 'warning'
      })
        .then(() => {
          this.deleteBook(bookId)
        })
        .catch((cancel) => Promise.resolve(cancel))
    },
    deleteBook (bookId) {
      this.actionDeleteBook(bookId)
        .then(() => {
          this.$notify({
            title: 'Sucesso',
            message: 'O Livro foi excluído com sucesso!',
            type: 'success'
          })
        })
        .catch(() => {
          this.$notify.error({
            title: 'Ops!',
            message: 'Ocorreu um erro durante o processo...'
          })
        })
    }
  }
}
