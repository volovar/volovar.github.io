<template lang="pug">
div
  div
    h1.name Michael Volovar
    ul.info
      li michaelvolovar@gmail.com
      li volovar.com
      li 
        NuxtLink(to="https://github.com/volovar") github.com/volovar

    .intro Front End Software Engineer with expertise in Web Applications, User Experience, and Web Components

  .section
    h2.section-header Technical Skills
    div 
      span.highlight Languages:
      |
      | Javascript, Typescript, fp-ts, CSS, HTML, Scala, Python
    div
      span.highlight Web technologies:
      |
      | Vue, Nuxt, React, Redux, D3, Stencil, gRPC, Pug, PostCSS, Emotion

  .section 
    h2.section-header Professional Experience

    .section-body
      JobCard
        template(#title) Lead Front End Engineer
        template(#company) Nurdle AI
        template(#location) San Francisco, CA
        template(#start) Sept 2023
        template(#end) July 2024
        ul.job-list
          li Spearheaded the complete design and development of Nurdle's user interface
          li Led the iterative design process, collaborating with designers to enhance user experience and achieve project goals
          li Developed and implemented interactive D3.js visualizations to enhance data analysis and insights
          li
            span.highlight Technologies:
            |
            | Vue, Nuxt, Typescript, fp-ts, gRPC, D3, Scala, Python
      
      JobCard
        template(#title) Lead Front End Engineer
        template(#company) Spectrum Labs
        template(#location) San Francisco, CA
        template(#start) Sept 2021
        template(#end) Sept 2023
        ul.job-list
          li Enhanced Guardian moderation dashboard features through collaboration with design, resulting in a more robust and user-friendly dashboard
          li Demonstrated expertise in functional programming by integrating fp-ts into Guardian, leading to a substantial improvement in UI stability
          li Proactively expanded skillset by learning Scala to assist other developers and take on non-front end tasks
          li Worked with customers to improve Guardian moderation dashboard functionality and increase user happiness
          li
            span.highlight Technologies:
            |
            | Vue, Nuxt, Typescript, fp-ts, gRPC, Stencil, Scala, Python
        
      JobCard
        template(#title) Lead Front End Engineer
        template(#company) Spectrum Labs, Contract
        template(#location) San Francisco, CA
        template(#start) Feb 2020
        template(#end) Sept 2021
        ul.job-list
          li Learned Vue and Nuxt to design and implement the Guardian moderation dashboard
          li Built a custom web component library with Stencil to speed up development of new dashboard features
          li Created and maintained audio and text demo apps, leading to improved sales team efficiency
          li
            span.highlight Technologies:
            |
            | Vue, Nuxt, Typescript, Stencil, Python
      
      JobCard
        template(#title) Front End Developer
        template(#company) Domino's
        template(#location) Ann Arbor, MI
        template(#start) July 2018
        template(#end) Sept 2021
        ul.job-list
          li Led design and development of in-store app to improve order, delivery and tracker accuracy
          li Developed Pie Pass cart features, improving order checkout and pickup speed
          li Created and managed native apps for international markets improving ease of ordering
          li 
            span.highlight Technologies:
            |
            | React, Redux, Emotion, PostCSS, Flutter
      
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
            | Javascript, jQuery, Preact, Simplr, PostCSS
      
      JobCard
        template(#title) Front End Engineer
        template(#company) Vouch
        template(#location) San Francisco, CA
        template(#start) Oct 2015
        template(#end) Feb 2016
        ul.job-list
          li Implemented new onboarding designs that increased sponsor engagement by 70%
          li Decreased time to loan approval with a responsive document upload feature
          li 
            span.highlight Technologies:
            |
            | Coffeescript, Sass, and Rails

      JobCard
        template(#title) UI/UX Developer
        template(#company) StudyBlue
        template(#location) San Francisco, CA
        template(#start) Oct 2013
        template(#end) Aug 2015
        ul.job-list
          li Increased clickthrough rate to “pro” upgrade with a redesigned main navigation
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
      
      JobCard
        template(#title) Web Developer
        template(#company) AEO Design, Contract
        template(#location) Chicago IL
        template(#start) Aug 2011
        template(#end) Mar 2012

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
  padding-bottom: 1.4rem;

  &:last-of-type {
    padding-bottom: 0;
  }
}

.section-header {
  font-size: 1.25rem;
  margin: 0;
  padding-bottom: 0.4rem;
}

.section-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.info {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.intro {
  font-size: 1.1rem;
  padding: 0.6rem 0;
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

@media print {
  .intro {
    font-size: 0.875rem;
  }

  .section-header {
    font-size: 1rem;
  }

  .job-list {
    gap: 0;
    padding: 0 0 0 2.5rem;
  }
}
</style>
