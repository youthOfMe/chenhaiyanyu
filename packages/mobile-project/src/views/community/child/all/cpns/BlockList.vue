<template>
  <div class="block-list">
    <BlockItem></BlockItem>
    <BlockItem></BlockItem>
    <BlockItem></BlockItem>
    <BlockItem></BlockItem>
  </div>
</template>

<script setup lang="ts">
import BlockItem from './BlockItem.vue'
</script>

<style lang="scss" scoped>
.block-list {
  display: flex;
  padding: 10px 0 10px 10px;
  flex-wrap: wrap;
}
</style>
