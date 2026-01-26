<template lang="pug">
.job-card
  .info
    .company-title
      span.title
        slot(name="title")
      |,
      |
      slot(name="company")
      |
      | &#8212;
      |
      slot(name="location")
    .date
      span(v-if="$slots.start")
        slot(name="start")
        |
        | &#8211;
        |
      slot(name="end")
  slot
</template>

<style lang="postcss" scoped>
.title {
  font-weight: bold;
}

.info {
  display: flex;
  justify-content: space-between;
}
</style>
