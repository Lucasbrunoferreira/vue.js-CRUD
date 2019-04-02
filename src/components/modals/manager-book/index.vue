<template>
  <el-dialog
    :title="modalTitle"
    :visible.sync="isOpenModal"
    :before-close="() => { $emit('closeManagerBookModal') }"
  >
    <el-input
      v-model="bookName"
      placeholder="Nome do Livro"
      maxlength="30"
      clearable
    />

    <el-input
      v-model="bookPrice"
      placeholder="Valor de venda"
      type="number"
      clearable
    >
      <template slot="prepend">
        R$
      </template>
    </el-input>

    <el-input
      v-model="bookGenre"
      maxlength="20"
      placeholder="Genêro (ação, aventura...)"
      clearable
    />

    <el-input
      v-model="bookAuthor"
      placeholder="Autor"
      maxlength="40"
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
  </el-dialog>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import './style.scss';
</style>
