<template>
  <div class="content-box" v-for="item in items" :key="item.company">
    <p class="company">
      <span class="company-name">{{ item.company }}</span>
      <span>{{ item.time[0] }} - {{ item.time[1] }}</span>
    </p>
    <p>{{ item.position }}</p>
    <Lists :items="item.jobs" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import Lists from './Lists.vue'
import type { WorkItem } from '../configs/dataType'

const { items } = defineProps<{ items: WorkItem[] }>()
</script>

<style scoped>
p {
  line-height: 24px;
}
.company {
  display: flex;
  justify-content: space-between;
}
.company-name {
  font-weight: bold;
}
</style>
