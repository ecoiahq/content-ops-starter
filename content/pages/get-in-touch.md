---
type: PageLayout
title: Get in touch
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Get in Touch
      color: text-light
      styles:
        self:
          textAlign: center
    subtitle: ''
    text: >+
      <div style="text-align: center">At Ecoia, we’re dedicated to creating
      sustainable impact through strategic partnerships, innovation, and funding
      solutions. Whether you’re a potential collaborator, a grant partner, or a
      talented professional looking to join us, we’d love to connect with
      you!</div>

    actions: []
    colors: bg-dark-fg-light
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: Contact Us
      color: text-dark
    subtitle: ''
    text: >
      **Email Us:** For general inquiries, reach out to
      [**ecoiahq@gmail.com**](mailto:ecoiahq@gmail.com).


      **Partnerships & Collaborations:** Want to explore ways we can work
      together? We’re open to innovative ideas and strategic alliances. Drop us
      an email with your proposal or use the **contact form below**.


      **Fill out the form below, and we’ll get back to you as soon as
      possible!**
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
slug: /get-in-touch
seo:
  type: Seo
  metaTitle: Careers - Demo site
  metaDescription: This is the careers page built with Netlify.
  metaTags: []
---
