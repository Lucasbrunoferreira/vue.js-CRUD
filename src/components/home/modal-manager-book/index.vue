<template>
  <Modal
    :modal-title="bookToEdit ? 'Editar livro' : 'Adicionar novo livro'"
    :is-open="isOpenModal"
    @closeModal="(val) => $emit('closeManagerBookModal', val)"
  >
    <el-input
      v-model="bookName"
      placeholder="Nome do Livro"
      clearable
    />

    <el-input
      v-model="bookPrice"
      placeholder="Valor de venda"
      clearable
    >
      <template slot="prepend">
        R$
      </template>
    </el-input>

    <el-input
      v-model="bookGenre"
      placeholder="Genêro (ação, aventura...)"
      clearable
    />

    <el-input
      v-model="bookAuthor"
      placeholder="Autor"
      clearable
    />

    <div class="action-buttons">
      <el-button
        type="primary"
        round
      >
        Salvar
      </el-button>

      <el-button
        type="danger"
        round
        @click="$emit('closeManagerBookModal')"
      >
        Cancelar
      </el-button>
    </div>
  </Modal>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import './style.scss';
</style>
