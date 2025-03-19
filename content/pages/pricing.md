---
title: Packages
slug: pricing
sections:
  - title:
      text: Set Packages
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: We offer tailored packages designed to elevate and support your mission.
    plans:
      - title: Ecoia Audit
        price: '£1,350'
        details: Billed Monthly
        description: |
          Best for businesses seeking analysis & insights
        features:
          - Brand Audit
          - Social Listening
          - 'SEO, SEM Optimisation'
          - Brand/Media Activation
        image:
          url: /images/abstract-feature1.svg
          altText: Pricing plan 1
          type: ImageBlock
        actions:
          - label: Get Started
            url: 'https://ecoia.netlify.app/get-in-touch/'
            icon: arrowRight
            iconPosition: right
            style: secondary
            type: Button
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
        type: PricingPlan
      - title: Ecoia Foundation
        price: '£2,200'
        details: Billed Monthly
        description: |+
          Ideal for businesses needing foundational branding & digital presence

        features:
          - Brand Strategy Development
          - Website Design & Optimisation
          - 'SEO, SEM Optimisation'
          - Social Media Management (Organic & Paid)
          - Brand Design
        image:
          url: /images/abstract-feature2.svg
          altText: Pricing plan 2
          type: ImageBlock
        actions:
          - label: Get Started
            url: 'https://ecoia.netlify.app/get-in-touch/'
            icon: arrowRight
            iconPosition: right
            style: secondary
            type: Button
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
        type: PricingPlan
      - title: Ecoia Growth
        price: '£2,750'
        details: Billed Monthly
        description: |
          For businesses focused on expanding reach & funding
        features:
          - Brand Strategy Development
          - 'SEO, SEM Optimization'
          - Social Media Management (Organic & Paid)
          - Grant Proposal Development
          - Influencer Partnership Facilitation
          - 'Video, Graphic Design and Podcast Production'
        image:
          url: /images/abstract-feature3.svg
          altText: Pricing plan 3
          type: ImageBlock
        actions:
          - label: Get Started
            url: 'https://ecoia.netlify.app/get-in-touch/'
            icon: arrowRight
            iconPosition: right
            style: secondary
            type: Button
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-6
              - pb-10
              - pl-6
              - pr-6
            borderRadius: large
        type: PricingPlan
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    type: PricingSection
  - type: GenericSection
    title:
      type: TitleBlock
      text: Generic Section With A Form
      color: text-dark
    subtitle: Section with a form subtitle
    text: |-
      Aenean eros ipsum, interdum quis dignissim non, sollicitudin vitae nisl.
      Aenean vel aliquet elit, at blandit ipsum. Sed eleifend felis sit amet
      erat molestie, hendrerit malesuada justo ultrices. Nunc volutpat at erat
      vitae interdum. Ut nec massa eget lorem blandit condimentum et at risus.
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
    badge:
      type: Badge
      label: Contact Us
      color: text-primary
    colors: bg-light-fg-dark
seo:
  metaTitle: Pricing - Demo site
  metaDescription: This is the pricing page built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
