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
  if (value === undefined) return
  value ? score.correct() : score.wrong()
  dialog.value?.showModal()
})

function next(): void {
  answer.value = undefined
  note.value = getRandomNote()
  dialog.value?.close()
}
</script>

<template>
  <TheContainer>
    <ThePanel>
      <template #header>
        <h1 class="text-4xl font-bold text-center">{{ $t("title") }}</h1>
      </template>
      <template #default>
        <section class="scoreboard-wrapper">
          <TheScoreBoard />
        </section>
        <section class="muse-score-wrapper">
          <TheMuseScore id="question-paper" :note="note"/>
        </section>
      </template>
      <template #footer>
        <div class="keybord-wrapper">
          <KeyBoard :model-value="answer" @update:model-value="handleClick"/>
        </div>
      </template>
    </ThePanel>
    <dialog ref="dialog" class="dialog" @click.capture="next">
      <h1 class="text-4xl font-bold text-center">{{ $t( isValid ? "correct" : "wrong") }}</h1>
      <p class="

      ">正解: {{ $t(`scale.${note}`) }}</p>
      <button class="mt-4 px-4 py-2 text-blue-500 font-bold text-xl rounded-md" @click="next">{{ $t("next") }}</button>
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
  @apply w-full max-w-xl m-auto aspect-square p-10 flex flex-col items-center justify-center cursor-pointer;
}
.dialog::backdrop {
  @apply cursor-pointer;
}
.dialog:not([open]) {
  @apply hidden;
}
</style>
