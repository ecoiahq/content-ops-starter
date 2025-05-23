---
title: Packages
slug: pricing
sections:
  - title:
      text: Pricing
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: >-
      We offer both set and flexible packages designed to build your brand,
      expand your reach, and drive sustainable growth. Whatever your goals or
      budget, we have a solution tailored to your needs.
    plans:
      - title: Ecoia Foundation
        price: '£1,350'
        details: >-
          You’re saving £350 (17.1%) by selecting this package. Billed as a
          one-time payment.
        description: >
          For non-profits, entrepreneurs, and mission-led SMEs establishing
          their presence.
        features:
          - Brand Development & Strategy
          - Brand Positioning Roadmap
          - UX/UI Website Development
          - Bespoke content Marketing Plan
          - Brand Social Media Marketing Templates
        image:
          altText: Pricing plan 1
          type: ImageBlock
          url: /images/Foundation.png
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
      - title: Ecoia Audit
        price: '£1,700'
        details: >-
          You’re saving £350 (17.1%) by selecting this package. Billed as a
          one-time payment.
        description: >
          For established organisations seeking improved visibility and audience
          engagement. 
        features:
          - Brand and Impact Audit
          - 'SEO, Social Media & Audience Insights'
          - Competitor & Positioning Analysis
          - Strategic Roadmap & Messaging Guide
          - Campaign & Content Framework
        image:
          url: /images/Audit.png
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
        price: '£3,500'
        details: >-
          You’re saving £1,000 (22.2%) by selecting this set package. Billed
          Monthly.
        description: >
          For organisations ready to amplify their reach and drive meaningful
          change.
        features:
          - Monthly Social Media Management
          - Bespoke Content Production
          - Grant Proposal Development
          - Influencer & Partnership Outreach
          - Press & Media Outreach Support
          - Monthly Social Impact Reporting
        image:
          url: /images/Growth.png
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
      text: Looking for a Bespoke Solution?
      color: text-dark
    subtitle: ''
    text: >
      If your needs go beyond our set packages, we offer tailored solutions
      designed specifically for your organisation. Whether you need a mix of
      strategy, branding, media production, or impact measurement, we can create
      a custom approach that aligns with your goals. 
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
      label: ''
      color: text-primary
    colors: bg-light-fg-dark
seo:
  metaTitle: Pricing - Demo site
  metaDescription: This is the pricing page built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
