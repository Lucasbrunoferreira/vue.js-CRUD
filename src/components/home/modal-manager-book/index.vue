<template>
  <Modal
    :modal-title="bookToEdit ? 'Editar livro' : 'Adicionar novo livro'"
    :is-open="isOpenModal"
    @closeModal="(val) => closeModal(val)"
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
        :loading="inRequest"
        round
        type="primary"
        @click="saveModalData()"
      >
        Salvar
      </el-button>

      <el-button
        :disabled="inRequest"
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
