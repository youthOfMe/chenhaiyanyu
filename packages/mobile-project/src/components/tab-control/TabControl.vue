<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div
        class="tab-control-item"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
      >
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  emits: ['tabItemClick'],
  methods: {
    itemClick(index) {
      this.currentIndex = index
      console.log(index)

      this.$emit('tabItemClick', index)
    },
    setCurrentIndex(index) {
      this.currentIndex = index
    },
  },
}
</script>

<style lang="scss" scoped>
.tab-control {
  display: flex;
  overflow-x: auto;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #ffffff;
  &::-webkit-scrollbar {
    display: none;
  }
  .tab-control-item {
    flex-shrink: 0;
    width: 80px;
  }
}
.tab-control-item.active {
  font-weight: 700;
  color: var(--primary-color);
}
.tab-control-item.active span {
  padding: 8px;
  border-bottom: 3px solid var(--primary-color);
}
</style>
