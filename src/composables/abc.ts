import { computed, ref } from "vue"
import type { AbcHeader } from "../types/AbcHeader"
import type { AbcNote, AbcNoteWhite } from "@/types/AbcNote"

const abcHeaderSignatures = ["X", "T", "C", "O", "M", "L", "Q", "P", "Z", "N", "G", "H", "K", "R", "B", "D", "F", "S", "I", "m", "r", "s", "U", "V", "W"] as const satisfies (keyof AbcHeader)[]

export const abcNoteList = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"] as const satisfies AbcNote[]

export const abcNoteListWhite = ["C", "D", "E", "F", "G", "A", "B"] as const satisfies AbcNoteWhite[]

export function defineAbcHeader(abcHeader: AbcHeader = {}) {
  return abcHeaderSignatures
    .filter((signature) => signature in abcHeader)
    .map((signature) => `${signature}:${abcHeader[signature]}`)
    .join("\n") + "\n"
}

export function useNote() {
  const note = ref(getRandomNote())
  const answer = ref<AbcNote | undefined>()
  const isValid = computed(() => note.value === answer.value)
  return { note, answer, isValid, getRandomNote }
}

function getRandomNote(list: readonly AbcNote[] = abcNoteListWhite) {
  return list[Math.floor(Math.random() * list.length)]
}
