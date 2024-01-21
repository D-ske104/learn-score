<script setup lang="ts">
import { ref, watch } from 'vue';

import TheContainer from './components/TheContainer.vue';
import ThePanel from './components/ThePanel.vue';
import TheScoreBoard from './components/TheScoreBoard.vue';
import TheMuseScore from './components/TheMuseScore.vue';
import KeyBoard from './components/KeyBoard.vue';

import { useNote } from './composables/abc';
import { useScore } from './stores/score'

const score = useScore()

import type { AbcNote } from './types/AbcNote';
const { note, answer, isValid, getRandomNote } = useNote()

function handleClick(value: AbcNote): void {
  answer.value = value
}

const dialog = ref<HTMLDialogElement | null>(null)

watch(isValid, (value) => {
  if (!value) return
  dialog.value?.showModal()
  score.correct()
})

function next(): void {
  note.value = getRandomNote()
  answer.value = undefined
  dialog.value?.close()
}
</script>

<template>
  <TheContainer>
    <ThePanel>
      <template #default>
        <section class="scoreboard-wrapper">
          <TheScoreBoard />
        </section>
        <section class="muse-score-wrapper">
          <TheMuseScore :note="note"/>
        </section>
      </template>
      <template #footer>
        <div class="keybord-wrapper">
          <KeyBoard :model-value="answer" @update:model-value="handleClick"/>
        </div>
      </template>
    </ThePanel>
    <dialog ref="dialog" class="dialog">
      <h1 class="text-4xl font-bold text-center">{{ $t("correct") }}</h1>
      <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" @click="next">{{ $t("next") }}</button>
    </dialog>
  </TheContainer>
</template>

<style scoped>
.muse-score-wrapper {
  @apply w-full max-w-xl aspect-video m-auto;
}
.keybord-wrapper {
  @apply w-full max-w-xl m-auto;
}
.dialog {
  @apply w-full max-w-xl m-auto aspect-square p-10 flex flex-col items-center justify-center;
}
.dialog:not([open]) {
  @apply hidden;
}
</style>
