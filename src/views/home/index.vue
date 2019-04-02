<template>
  <section class="home">
    <HeaderNav @openRegisterBook="(val) => { modalOptions.isRegister = val }" />

    <ul class="books-list">
      <li
        v-for="(book, index) in getterAllBooks"
        :key="book.bookId"
      >
        <img
          :src="index <= 4 ? `/icons/books/book-${index}.svg` : '/icons/books/book-0.svg'"
          alt="book"
        >

        <div class="book-description">
          <span class="book-name">{{ book.name }}</span>

          <span class="book-author">{{ book.author }}</span>

          <span class="book-price">R$ {{ book.price }}</span>

          <span class="book-genre">{{ book.genre }}</span>
        </div>

        <div class="manager-book">
          <el-button
            round
            icon="el-icon-edit"
            @click="openEditingModal(book)"
          >
            Editar
          </el-button>

          <el-button
            round
            icon="el-icon-delete"
            @click="confirmDeleteBook(book.bookId)"
          >
            Deletar
          </el-button>
        </div>
      </li>
    </ul>

    <div
      v-if="getterAllBooks.length <= 0"
      class="no-book"
    >
      <img
        src="/icons/no-book.svg"
        alt="no book"
      >

      <span>Não há livros cadastrados...</span>
    </div>

    <ModalManagerBook
      :is-open-modal="modalOptions.isEditing || modalOptions.isRegister"
      :modal-options="modalOptions"
      @closeManagerBookModal="() => closeModal()"
    />
  </section>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import './style.scss';
</style>
