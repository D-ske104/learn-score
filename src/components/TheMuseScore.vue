<script setup lang="ts">
import { onMounted, computed, watch } from 'vue';
import abcjs from "abcjs";

import 'abcjs/abcjs-audio.css';

import { defineAbcHeader } from '../composables/abc'

import type { AbcNote } from "../types/AbcNote"

type Props = {
  id: string
  note: AbcNote
}

const props = defineProps<Props>()

const abcProperties = defineAbcHeader({
  K: "C",
  L: "1/4",
})

const abcCode = computed(() => abcProperties + props.note)

onMounted(() => {
  render()
})

function render(): void {
  abcjs.renderAbc(props.id, abcCode.value, {responsive: "resize", staffwidth: 80, paddingtop: 0, paddingbottom: 4})
}

watch(abcCode, () => {
  render()
})

</script>

<template>
  <div class="score">
    <div :id="id"></div>
  </div>
</template>

<style scoped>
</style>
