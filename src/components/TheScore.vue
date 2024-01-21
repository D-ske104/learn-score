<script setup lang="ts">
import 'abcjs/abcjs-audio.css';
import abcjs from "abcjs";

import { defineAbcHeader } from '../composables/abc'
import { onMounted } from 'vue';

const abcProperties = defineAbcHeader({
  K: "C",
  L: "1/4",
})

const note = "C"

const abcCode = abcProperties + note

onMounted(() => {
  abcjs.renderAbc("paper", abcCode, {responsive: "resize", staffwidth: 80})
})
</script>

<template>
  <div class="score">
    <div id="paper"></div>
  </div>
</template>

<style scoped>
.score {
  @apply min-w-[50vw] flex justify-center;
}
</style>
