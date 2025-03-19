<template lang="pug">
.main
  .header
    span volovar.com

    div
      NuxtLink(to="/" active-class="active") Home
      NuxtLink(to="/resume" active-class="active") Resume
      NuxtLink(to="https://github.com/volovar" target="_blank") github
  slot
</template>

<style lang="postcss">
.main {
  margin: 0 auto;
  max-width: 60rem;
}

.header {
  display: flex;
  justify-content: space-between;
}

@media print {
  .header {
    display: none;
  }
}
</style>
