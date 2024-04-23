<template>
  <div class="bi-card">
    <div class="title">网站运营数据分析</div>
    <div class="info">
      <span>分析结论 : &nbsp;</span>
      <span>{{ chartData }}</span>
    </div>
    <div class="chart" ref="chart"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.bi-card {
  padding: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  .title {
    font-weight: normal;
    color: var(--primary-color);
  }
  .chart {
    height: 300px;
  }
}
</style>
