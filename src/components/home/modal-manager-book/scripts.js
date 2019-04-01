import Modal from '../../modal/index.vue'

export default {
  props: ['isOpenModal', 'bookToEdit'],
  components: { Modal },
  data () {
    return {
      bookName: '',
      bookPrice: '',
      bookGenre: '',
      bookAuthor: ''
    }
  },
  mounted () {
    if (this.bookToEdit) {
      console.log(this.bookToEdit)

      this.bookName = this.bookToEdit.name

      this.bookPrice = this.bookToEdit.price

      this.bookGenre = this.bookToEdit.genre

      this.bookAuthor = this.bookToEdit.author
    } else {
      this.bookName = this.bookPrice = this.bookGenre = this.bookAuthor = ''
    }
  }
}
