<template>
  <div class="content-box">
    <Lists :items="items" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import Lists from './Lists.vue'

const { items } = defineProps<{ items: string[] }>()
</script>
