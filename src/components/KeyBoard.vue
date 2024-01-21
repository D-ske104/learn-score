<script setup lang="ts">
import KeyBoardScale from './KeyBoardScale.vue';

import type { AbcNote } from "@/types/AbcNote";

const model = defineModel<AbcNote>()

function handleUpdateModelValue(value: AbcNote): void {
  model.value = value
}

</script>

<template>
  <div class="keyboard">
    <KeyBoardScale :model-value="model" class="scale" @update:model-value="handleUpdateModelValue" />
  </div>
</template>

<style scoped>
.keyboard {
  @apply flex;
}

.scale {
  @apply flex-1;
}
</style>
