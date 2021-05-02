<template>
  <ul>
    <li v-for="item in computedItems" :key="item.desc">
      <b>{{ item.name }}</b>
      {{ item.desc }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const { items } = defineProps<{ items: string[] }>()
const computedItems = computed(() => {
  return items.map(item => {
    let [name, desc] = item.split('：')
    if (!desc) {
      desc = name
      name = ''
    } else {
      name += '：'
    }
    return { name, desc }
  })
})
</script>

<style scoped>
li {
  line-height: 24px;
  margin-left: 20px;
}
</style>
