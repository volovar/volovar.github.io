<template lang="pug">
.resume-container
  div
    h1.name.show-for-print Michael Volovar
    ul.info.show-for-print
      li michaelvolovar@gmail.com
      li 
        NuxtLink(to="/") volovar.com
      li 
        NuxtLink(to="https://github.com/volovar") github.com/volovar

  .section 
    h2.section-header Experience

    .section-body
      JobCard(v-for="job in sortedJobs")
        template(#title) {{ job.title }}
        template(#company) {{ job.company }}
        template(#location) {{ job.location }}
        template(#start) {{ job.start }}
        template(#end) {{ job.end }}
        ul(v-if="job.bullets.length > 0").job-list 
          li(v-for="bullet in job.bullets") {{ bullet }}

  .section
    h2.section-header Education
    JobCard
      template(#title) Bachelor's of Fine Art (BFA) in Film &amp; Animation
      template(#company) College for Creative Studies
      template(#location) Detroit, MI
      template(#end) 2008

</template>

<script setup lang="ts">
import type { JobsCollectionItem } from "@nuxt/content";

const { data: jobs } = await useAsyncData("jobs", () => {
  return queryCollection("jobs").order("start", "ASC").all();
});

const sortedJobs = computed((): JobsCollectionItem[] => {
  if (typeof jobs.value === "undefined") {
    return [];
  }

  return jobs.value.toSorted(
    (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime(),
  );
});
</script>

<style lang="postcss">
.section {
  padding-bottom: 1.6rem;
}

.section-header {
  border-bottom: 1px solid #444;
  font-size: 1.16rem;
  margin: 0 0 0.4rem;
  padding-bottom: 0.25rem;
  text-transform: uppercase;
}

.section-body {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.info {
  display: none;
  gap: 1.25rem;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.highlight {
  font-weight: bold;
}

.job-list {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin: 0;
  padding: 0.8rem 2rem 0.2rem;
}

.name {
  margin: 0;
  padding-bottom: 0.4rem;
  text-align: center;
}

.show-for-print {
  display: none;
}

.print-break {
  break-after: page;
}

@media print {
  body {
    font-size: 12px;
  }

  .intro {
    font-size: 0.875rem;
  }

  .section-header {
    font-size: 0.875rem;
  }

  .job-list {
    gap: 0;
    padding: 0 0 0 2.5rem;
    max-width: 74%;
  }

  .info {
    display: flex;
  }

  .show-for-print {
    display: block;
  }

  .info {
    display: flex;
  }
}

@media (width >= 960px) {
  .job-list {
    max-width: 78%;
  }
}
</style>
