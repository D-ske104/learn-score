import type { AbcHeader } from "../types/AbcHeader"

const abcHeaderSignatures = ["X", "T", "C", "O", "M", "L", "Q", "P", "Z", "N", "G", "H", "K", "R", "B", "D", "F", "S", "I", "m", "r", "s", "U", "V", "W"] as const satisfies (keyof AbcHeader)[]

export function defineAbcHeader(abcHeader: AbcHeader = {}) {
  return abcHeaderSignatures
    .filter((signature) => signature in abcHeader)
    .map((signature) => `${signature}:${abcHeader[signature]}`)
    .join("\n") + "\n"
}
