import { defineStore } from "pinia";

export const useScore = defineStore("score", {
  state: () => ({
    countCorrect: 0,
    countIncorrect: 0,
  }),
  actions: {
    correct() {
      this.countCorrect++;
    },
    incorrect() {
      this.countIncorrect++;
    },
    reset() {
      this.countIncorrect = 0;
      this.countCorrect = 0;
    },
  },
  getters: {
    total(state): number {
      return state.countCorrect + state.countIncorrect;
    },
    percentage(state): number {
      const total = state.countCorrect + state.countIncorrect
      return total ? (state.countCorrect / total) * 100 : 0;
    },
  }
})
