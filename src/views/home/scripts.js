import {
  HeaderNav,
  ModalManagerBook
} from '@/components'

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
  methods: {
    randomBookIcon () {
      const random = Math.floor(Math.random() * (0 - 5) + 5)

      return `/icons/books/book-${random}.svg`
    },
    managerBookModal (book, modalStatus) {
      this.bookToEdit = book

      this.isOpenManagerModal = modalStatus
    }
  }
}
