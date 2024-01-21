import { defineStore } from "pinia";

export const useScore = defineStore("score", {
  state: () => ({
    countCorrect: 0,
    countWrong: 0,
  }),
  actions: {
    correct() {
      this.countCorrect++;
    },
    wrong() {
      this.countWrong++;
    },
    reset() {
      this.countWrong = 0;
      this.countCorrect = 0;
    },
  },
  getters: {
    total(state): number {
      return state.countCorrect + state.countWrong;
    },
    percentage(state): number {
      const total = state.countCorrect + state.countWrong
      return total ? Math.round((state.countCorrect / total) * 100) : 0;
    },
  }
})
