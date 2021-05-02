<template>
  <div class="container">
    <BaseInfo :info="personalData.baseInfo" />
    <div v-for="item in personalData.otherInfo" :key="item.type">
      <p class="info-title">{{ item.title }}</p>
      <component :is="otherInfoComps[item.type]" :items="item.data" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Component } from 'vue'
import personalData from './configs/data'
import BaseInfo from './components/BaseInfo.vue'
import WorkExperience from './components/WorkExperience.vue'
import ProfessionalSkill from './components/ProfessionalSkill.vue'
import EducationalExperience from './components/EducationalExperience.vue'

const otherInfoComps: { [propName: string]: Component } = {
  WorkExperience,
  ProfessionalSkill,
  EducationalExperience,
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
p,
ul {
  margin: 0;
  padding: 0;
}
#app {
  min-height: 100%;
  background: rgba(0, 0, 0, 0.7);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
}
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: auto;
  padding: 34px;
  max-width: 603px;
  max-height: 891px;
  background-color: #fff;
}
.info-title {
  margin-bottom: 8px;
  border-bottom: 1px solid #000;
  text-align: left;
  line-height: 24px;
  font-weight: bold;
  font-size: 14px;
}
.content-box {
  margin-bottom: 8px;
}
</style>
