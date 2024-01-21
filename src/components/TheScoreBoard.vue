<script setup lang="ts">
import { useScore } from '../stores/score'

const score = useScore()

</script>

<template>
  <p class="message">
    <span class="
      text-2xl font-bold
      text-center
      text-green-500
    ">{{ $t("correct-percentage") }}</span>
    <span
      class="
        text-6xl font-bold
        text-center
        text-green-500"
    >{{ score.percentage }}</span>
    <span
      class="
        text-2xl font-bold
        text-center
        text-green-500"
    >%</span>
    <span class="
      text-2xl font-bold
      text-center
      text-green-500
    ">( {{ score.countCorrect }} / {{ score.total }} )</span>
  </p>
</template>
