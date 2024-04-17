<template>
  <div class="block-list">
    <BlockItem
      v-for="item in categoryList"
      :key="(item as any).id"
      :item="item as any"
    ></BlockItem>
  </div>
</template>

<script setup lang="ts">
import BlockItem from './BlockItem.vue'

defineProps({
  categoryList: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.block-list {
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px 10px;
  flex-wrap: wrap;
}
</style>
