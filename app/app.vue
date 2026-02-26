<template lang="pug">
NuxtLayout
  NuxtPage
</template>

<style lang="postcss">
:root {
  --black-1: #1f1f1f;
  --white-1: #e8e8e8;
  color-scheme: light dark;
}

/* app color #adadff */
body {
  background: light-dark(var(--white-1), var(--black-1));
  color: light-dark(var(--black-1), var(--white-1));
  font-family: "Geist", "DM Sans", sans-serif;
  font-size: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Geist Mono", "Space Mono", monospace;
}

a {
  color: inherit;
  text-decoration: none;
}

@media print {
  body {
    background: transparent;
    color: var(--black-1);
    font-size: 12px;
  }

  a {
    text-decoration: none;
  }
}
</style>
