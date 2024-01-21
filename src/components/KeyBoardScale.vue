<script setup lang="ts">
import type { AbcNote } from "../types/AbcNote"

import { abcNoteList } from "@/composables/abc";

const abcNoteElements = abcNoteList.map(note => {
  return {
    note,
    classes: [{ "white": note.length === 1, "black": note.length === 2}, note.toLowerCase()]
  }
})

const model = defineModel<AbcNote>()

function handleInput(event: Event): void {
  if (!(event.target instanceof HTMLInputElement)) throw new TypeError("EventTarget is not an HTMLInputElement")
  model.value = event.target.value as AbcNote
}
</script>

<template>
  <div class="scale">
    <label
      v-for="el in abcNoteElements"
      :key="el.note" :for="`key-${el.note}`"
      class="key"
      :class="el.classes"
    >
      <input
        :id="`key-${el.note}`"
        :value="el.note"
        v-model="model"
        class="key-input"
        type="radio"
        @input="handleInput"
      >
      <span class="label-text">{{ $t(`scale.${[el.note]}`) }}</span>
    </label>
  </div>
</template>

<style scoped>
.scale {
  @apply grid grid-cols-14 aspect-video;
}
.white {
  /* @apply w-10 h-20 bg-white border border-black rounded-md; */
  @apply bg-white border border-black rounded-md;
  @apply z-0 row-start-1 row-end-8;
  @apply hover:bg-blue-100 active:bg-blue-300;
}
.black {
  /* @apply w-6 h-12 bg-black border border-black rounded-md; */
  @apply bg-black border border-black rounded-md text-transparent;
  @apply z-10 row-start-1 row-end-5 w-[75%] mx-auto;
  @apply hover:bg-blue-900 active:bg-blue-950;
}

.key {
  @apply col-span-2 flex flex-col items-center justify-end py-4;
}

.key.c.white {
  @apply col-start-1
}
.key.c\# {
  @apply col-start-2
}
.key.d.white {
  @apply col-start-3
}
.key.d\# {
  @apply col-start-4
}
.key.e.white {
  @apply col-start-5
}
.key.f.white {
  @apply col-start-7
}
.key.f\# {
  @apply col-start-8
}
.key.g.white {
  @apply col-start-9
}
.key.g\# {
  @apply col-start-10
}
.key.a.white {
  @apply col-start-11
}
.key.a\# {
  @apply col-start-12
}
.key.b.white {
  @apply col-start-13
}

.key-input {
  @apply hidden;
}
.label-text {
  @apply text-2xl font-bold;
}

.key.black .label-text {
  @apply hidden
}
</style>
