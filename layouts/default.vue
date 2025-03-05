<template lang="pug">
.main
  slot
</template>

<style lang="postcss">
.main {
  margin: 0 auto;
  max-width: 60rem;
}

@media print {
  .header {
    display: none;
  }
}
</style>
