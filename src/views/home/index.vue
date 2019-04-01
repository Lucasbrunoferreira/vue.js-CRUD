<template>
  <section class="home">
    <ul class="books-list">
      <li
        v-for="(item, index) in 10"
        :key="index"
      >
        <img
          :src="randomBookIcon()"
          alt="book"
        >

        <div class="book-description">
          <span class="book-name">Além do horizontea</span>

          <span class="book-author">Cecilya Rodrigues</span>

          <span class="book-price">$ 16.98</span>

          <span class="book-genre">Aventura</span>
        </div>

        <div class="manager-book">
          <el-button
            round
            icon="el-icon-edit"
            @click="managerBookModal(item, true)"
          >
            Editar
          </el-button>

          <el-button
            round
            icon="el-icon-delete"
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
