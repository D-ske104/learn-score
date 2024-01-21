/**
 * @see https://abcnotation.com/wiki/abc:standard:v2.1
 */
export type AbcHeader = {
  X?: AbcHeaderSignature.X
  T?: AbcHeaderSignature.T
  C?: AbcHeaderSignature.C
  O?: AbcHeaderSignature.O
  M?: AbcHeaderSignature.M
  L?: AbcHeaderSignature.L
  Q?: AbcHeaderSignature.Q
  P?: AbcHeaderSignature.P
  Z?: AbcHeaderSignature.Z
  N?: AbcHeaderSignature.N
  G?: AbcHeaderSignature.G
  H?: AbcHeaderSignature.H
  K?: AbcHeaderSignature.K
  R?: AbcHeaderSignature.R
  B?: AbcHeaderSignature.B
  D?: AbcHeaderSignature.D
  F?: AbcHeaderSignature.F
  S?: AbcHeaderSignature.S
  I?: AbcHeaderSignature.I
  m?: AbcHeaderSignature.m
  r?: AbcHeaderSignature.r
  s?: AbcHeaderSignature.s
  U?: AbcHeaderSignature.U
  V?: AbcHeaderSignature.V
  W?: AbcHeaderSignature.W
}

namespace AbcHeaderSignature {
  /** Reference number */
  export type X = number
  /** Tune title */
  export type T = string
  /** Composer */
  export type C = string
  /** Origin */
  export type O = string
  /** Meter */
  export type M = string
  /** Default note length */
  export type L = string
  /** Tempo */
  export type Q = string
  /** Parts */
  export type P = string
  /** Transcription */
  export type Z = string
  /** Notes */
  export type N = string
  /** Group */
  export type G = string
  /** History */
  export type H = string
  /** Key */
  export type K = "C" | "Am" | "G" | "Em" | "D" | "Bm" | "A" | "F#m" | "E" | "C#m" | "B" | "G#m" | "F#" | "D#m" | "C#" | "A#m" | "F" | "Dm" | "Bb" | "Gm" | "Eb" | "Cm" | "Ab" | "Fm" | "Db" | "Bbm" | "Gb" | "Ebm" | "Cb" | "Abm" | "G#"
  /** Rhythm */
  export type R = string
  /** Book */
  export type B = string
  /** Discography */
  export type D = string
  /** File url */
  export type F = string
  /** Source */
  export type S = string
  /** Instruction */
  export type I = string
  /** Macros */
  export type m = string
  /** Comments and Remarks */
  export type r = string
  /** Symbol lines */
  export type s = string
  /** Redefinable Symbols */
  export type U = string
  /** Multiple Voices */
  export type V = string
  /** Lyrics */
  export type W = string
}


