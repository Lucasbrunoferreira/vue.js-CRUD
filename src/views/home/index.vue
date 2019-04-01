<template>
  <section class="home">
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
            @click="managerBookModal(book, true)"
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

    <ModalManagerBook
      :is-open-modal="isOpenManagerModal"
      :book-to-edit="bookToEdit"
      @closeManagerBookModal="() => managerBookModal(null, false)"
    />
  </section>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import './style.scss';
</style>
