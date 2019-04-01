<template>
  <el-dialog
    :title="modalTitle"
    :visible.sync="isOpen"
    :before-close="handleClose"
  >
    <slot />
  </el-dialog>
</template>

<script src="./scripts.js"></script>

<style lang="scss">
  @import './style.scss';
</style>
