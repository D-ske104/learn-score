<template>
  <div class="panel">
    <div class="panel-header">
      <!-- Content goes here -->
      <!-- We use less vertical padding on card headers on desktop than on body sections -->
      <slot name="header"></slot>
    </div>
    <div class="panel-body">
      <!-- Content goes here -->
      <slot name="default"></slot>
    </div>
    <div class="panel-footer">
      <!-- Content goes here -->
      <!-- We use less vertical padding on card footers at all sizes than on headers or body sections -->
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.panel {
  @apply divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow;
}
.panel-header {
  @apply px-4 py-5 sm:px-6
}
.panel-body {
  @apply px-4 py-5 sm:p-6
}
.panel-footer {
  @apply px-4 py-4 sm:px-6
}
</style>
