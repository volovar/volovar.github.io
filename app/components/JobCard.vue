<template lang="pug">
.job-card
  .info
    .details
      span.title
        slot(name="title")
      span
        slot(name="company")
    .details
      span
        span(v-if="$slots.start")
          slot(name="start")
          |
          | &#8211;
          |
        slot(name="end")
      span
        slot(name="location")
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

.details {
  display: flex;
  flex-direction: column;

  &:last-child {
    text-align: right;
  }
}
</style>
