<template lang="pug">
.main
  .header
    NuxtLink(to="/" active-class="current-route").title
      span Mike Volovar

    .nav-links
      NuxtLink(to="/resume" active-class="current-route") Resume
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
  padding-bottom: 2rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.current-route {
  cursor: default;
}

@media print {
  .header {
    display: none;
  }
}
</style>
