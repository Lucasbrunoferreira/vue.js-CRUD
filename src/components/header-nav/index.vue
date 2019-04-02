<template>
  <header class="header-nav">
    <div class="logo-wrapper">
      <img
        src="/icons/books.svg"
        alt="books"
      >
      <h1>Book Store</h1>
    </div>

    <div class="nav-wrapper">
      <nav>
        <el-button @click="$emit('openRegisterBook', true)">
          Novo Livro
        </el-button>
      </nav>
    </div>
  </header>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import './style.scss';
</style>
