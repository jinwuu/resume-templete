<template>
  <div class="base-info-box">
    <header>{{ info.name }}</header>
    <p>{{ desc }}</p>
    <p>Github: {{ info.github }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { BaseInfo } from '../configs/dataType'

const { info } = defineProps<{ info: BaseInfo }>()
const desc = computed(
  () => `${info.sex}/${info.age} | ${info.city} | ${info.job_position} | ${info.mobile} | ${info.email}`
)
</script>

<style scoped>
.base-info-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100px;
}
header {
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
}
p {
  line-height: 16px;
}
</style>
