<template>
  <div class="content-box" v-for="item in items" :key="item.school">
    <p class="school">
      <span class="school-name">{{ item.school }}</span>
      <span>{{ item.time[0] }} - {{ item.time[1] }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import type { EducationItem } from '../configs/dataType'

const { items } = defineProps<{ items: EducationItem[] }>()
</script>

<style scoped>
p {
  line-height: 24px;
}
.school {
  display: flex;
  justify-content: space-between;
}
.school-name {
  font-weight: bold;
}
</style>
