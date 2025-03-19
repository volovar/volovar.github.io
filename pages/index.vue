<template lang="pug">
div
  .resume-container
    div
      h1.name.show-for-print Michael Volovar
      ul.info
        li michaelvolovar@gmail.com
        li 
          NuxtLink(to="volovar.com") volovar.com
        li 
          NuxtLink(to="https://github.com/volovar") github

      .intro Senior Front-End Engineer with a proven track record of leading teams, architecting scalable front-end solutions, and enhancing user experience for high-impact applications. Experienced in functional programming, front-end performance optimization, and modern UI frameworks.

    .section
      h2.section-header Technical Skills
      div 
        span.highlight Languages:
        |
        | Javascript, Typescript, Scala, Python
      div
        span.highlight Frameworks &amp; Libraries:
        |
        | Vue.js, Nuxt, React, Redux, fp-ts, D3.js, Stencil.js
      div
        span.highlight Architecture &amp; Performance:
        |
        | Functional programming, Web Components, gRPC, XState
      div
        span.highlight Testing &amp; CI/CD: 
        |
        | Vitest, Jest, Playwright, Github Actions
      div
        span.highlight Build &amp; Tooling:
        |
        | PostCSS, Emotion, Vite, Webpack

    .section 
      h2.section-header Experience

      .section-body      
        JobCard
          template(#title) Lead Front End Engineer
          template(#company) Nurdle AI
          template(#location) San Francisco, CA (Remote)
          template(#start) Sept 2023
          template(#end) Aug 2024
          ul.job-list
            li Designed and developed a modern user interface with Vue.js, Nuxt, Typescript and fp-ts
            li Led the iterative design process, collaborating with designers to enhance user experience and achieve project goals
            li Created interactive visualizations with D3.js to display generated data and improve data insights
            li
              span.highlight Technologies:
              |
              | Vue, Nuxt, Typescript, fp-ts, gRPC, D3, XState, Scala, Jest, Playwright
        
        JobCard
          template(#title) Lead Front End Engineer
          template(#company) Spectrum Labs
          template(#location) San Francisco, CA (Remote)
          template(#start) February 2020
          template(#end) Sept 2023
          ul.job-list
            li Led the development of Spectrum's content moderation web application, Guardian, using Vue, Nuxt, Typescript and fp-ts
            li Enhanced Guardian moderation dashboard features through collaboration with design, resulting in a more robust and user-friendly dashboard
            li Integrated fp-ts into Guardian, leading to a substantial improvement in UI stability
            li Worked with customers to improve Guardian moderation dashboard functionality and increase user happiness
            li Simplified new feature development with a custom web component library built in Stencil.js
            li Improved sales team efficiency by creating and maintaining audio and text demo apps built with Vue, Python, Flask and Billboard.js
            li
              span.highlight Technologies:
              |
              | Vue, Nuxt, Typescript, fp-ts, gRPC, Stencil, Scala, Python, Flask, Jest
        
        JobCard
          template(#title) Front End Developer
          template(#company) Domino's
          template(#location) Ann Arbor, MI
          template(#start) July 2018
          template(#end) Sept 2021
          ul.job-list
            li Led development of in-store app to improve order, delivery and tracker accuracy
            li Developed Pie Pass cart features, improving the order experience by personalizing order pickup and adding contactless pickup
            li Created and managed native apps for 26 international markets improving ease of ordering
            li Simplified build processes decreasing build time by 5x
            li 
              span.highlight Technologies:
              |
              | React, Redux, Emotion, PostCSS, Flutter, Grunt, Gulp, Webpack
        
        JobCard
          template(#title) UI/UX Developer
          template(#company) Domino's, Contract through Beacon Hill Staffing Group
          template(#location) Ann Arbor, MI
          template(#start) Mar 2017
          template(#end) July 2018
          ul.job-list
            li Increased item upsell conversions and site usability by running and implementing A/B tests
            li Improved user experience by finding and fixing site bugs
            li 
              span.highlight Technologies:
              |
              | Javascript, jQuery, Preact, CSS, PostCSS, Simplr
        
        JobCard
          template(#title) Front End Engineer
          template(#company) Vouch
          template(#location) San Francisco, CA
          template(#start) Oct 2015
          template(#end) Feb 2016
          ul.job-list
            li Implemented new onboarding designs that increased sponsor engagement by 70%
            li Decreased loan approval time with a responsive document upload feature
            li 
              span.highlight Technologies:
              |
              | Coffeescript, Sass, and Rails

        JobCard.print-break
          template(#title) UI/UX Developer
          template(#company) StudyBlue
          template(#location) San Francisco, CA
          template(#start) Oct 2013
          template(#end) Aug 2015
          ul.job-list
            li Created designs and implemented features for an app level redesign which led to company profitability
            li Increased clickthrough rate to “pro” / paid upgrade with a redesigned main navigation
            li Overhauled site usability and functionality to increase user enjoyment
            li 
              span.highlight Technologies:
              |
              | Backbone, jQuery, and LESS

        JobCard
          template(#title) Front End Developer
          template(#company) Vodori
          template(#location) Chicago, IL
          template(#start) Feb 2012
          template(#end) Oct 2013
          ul.job-list
            li Worked on marketing sites for various clients, using Dojo and Less
            li Undertook major CSS refactor to fix site loading issues
        
        JobCard
          template(#title) Web Developer
          template(#company) AEO Design, Contract
          template(#location) Chicago IL
          template(#start) Aug 2011
          template(#end) Mar 2012
          ul.job-list 
            li Built wordpress sites for small, local businesses

    .section
      h2.section-header Education
      JobCard
        template(#title) BFA in Film &amp; Animation
        template(#company) College for Creative Studies
        template(#location) Detroit, MI
        template(#end) 2008

</template>

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
  gap: 0.8rem;
}

.info {
  display: none;
  gap: 1.25rem;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.intro {
  font-size: 1.16rem;
  padding: 0.8rem 0 1.6rem;
}

.highlight {
  font-weight: bold;
}

.job-list {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin: 0;
  padding: 0.2rem 0 0.2rem 2.5rem;
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
  }

  .info {
    display: flex;
  }

  .show-for-print {
    display: block;
  }
}
</style>
