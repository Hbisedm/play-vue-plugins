<template>
  <div>启动测试</div>
  <div>{{ getRandomBoolean() }}</div>
  <div>{{ getRandomNumber() }}</div>
</template>

<script lang="ts" setup>
import { getRandomBoolean, getRandomNumber } from "@hbisedm/shared";
import { getCurrentInstance } from "vue";
const a = getRandomBoolean();
const instance = getCurrentInstance();
console.log(instance.proxy.$getRanNum());
</script>
