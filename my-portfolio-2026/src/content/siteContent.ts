import type { Award, ContactItem, Project } from '../types';

export const siteContent = {
  brand: {
    name: 'Frank Yang',
    studioName: 'Frank Yang Design',
    localName: '準人設計',
    role: 'Industrial Designer + Multidisciplinary R&D Engineer',
    intro:
      'I design products and technical experiences by treating technology as a creative material.',
    description:
      'My work spans industrial design, thermal engineering, 3D visualization, and interactive prototyping. I’m interested in the crossover between product form, engineering constraints, and new digital experiences.',
  },
  heroStats: [
    'Industrial design',
    'Optical communication',
    'Fiber laser equipment',
    '3D / interactive presentation',
  ],
  about: [
    'Frank Yang currently works as an R&D engineer in optical telecommunication and fiber laser equipment. He has contributed to thermal dissipation design for high-power fiber laser units and projects related to Taiwan’s national space center.',
    'Alongside engineering work, he has delivered industrial design projects across computing, electronics, LED lighting, home appliances, and educational products.',
    'He focuses on multidisciplinary integration, leading projects that create new forms by using technology as a design material. His interests also include interaction design, virtual reality, programming, electronic art, cooking, drawing, and photography.',
  ],
  featuredProjects: [
    {
      title: 'SITECOM Flagship AP',
      year: 'Selected Work',
      category: 'Networking Hardware / 3D Presentation',
      summary:
        'A flagship access point presentation that combines product communication with immersive 3D storytelling.',
      details:
        'This project reframed technical product features through a web-based spatial experience, helping the product feel more premium and easier to understand.',
      tags: ['3D showcase', 'Product storytelling', 'Web presentation'],
      links: [
        {
          label: 'Open 3D project',
          href: 'https://frankdesign.s3.amazonaws.com/3d/sitecomflagship/sitecomflagship.html',
        },
      ],
    },
    {
      title: 'Smart Gas Knob',
      year: 'Startup Product',
      category: 'Home Appliance / Product Development',
      summary:
        'A startup-focused product concept centered on safety, usability, and tangible everyday value.',
      details:
        'The work covered product development thinking from concept direction to presentation, balancing domestic practicality with a forward-looking connected-device narrative.',
      tags: ['Home appliance', 'Product development', 'Startup'],
      links: [
        {
          label: 'Open 3D project',
          href: 'https://frankdesign.s3.amazonaws.com/3d/smartgasknob/smartgasknob.html',
        },
      ],
    },
    {
      title: 'Walky Talky',
      year: 'Concept Work',
      category: 'Communication Device',
      summary:
        'A communication product study exploring approachable form, portability, and durable visual identity.',
      details:
        'The project demonstrates an interest in giving technical devices a more distinct character while keeping the interaction legible and practical.',
      tags: ['Industrial design', 'Portable device', 'Concept development'],
      links: [
        {
          label: 'Open 3D project',
          href: 'https://frankdesign.s3.amazonaws.com/3d/walkytalky/walkytalky.html',
        },
      ],
    },
    {
      title: 'Extreme Networks AP',
      year: 'Technical Product',
      category: 'Enterprise Networking',
      summary:
        'A hardware presentation project that translates enterprise-grade technology into a cleaner, more communicative visual format.',
      details:
        'The emphasis was on making a complex networking product feel precise, dependable, and visually coherent across technical and marketing touchpoints.',
      tags: ['Enterprise product', 'Presentation design', 'Hardware'],
      links: [
        {
          label: 'Open 3D project',
          href: 'https://frankdesign.s3.amazonaws.com/3d/EWS380AP/EWS380AP.html',
        },
      ],
    },
    {
      title: 'Fiber Laser Unit',
      year: 'Latest Project',
      category: 'Engineering / Thermal Dissipation',
      summary:
        'Thermal design work for high-power fiber laser equipment with a strong engineering focus.',
      details:
        'This project reflects the technical side of the portfolio, where performance, durability, and system-level thinking directly shape design outcomes.',
      tags: ['Fiber laser', 'Thermal design', 'R&D engineering'],
      links: [
        {
          label: 'View project page',
          href: 'https://frankdesign.s3.amazonaws.com/4kwlaser.html',
        },
      ],
    },
  ] satisfies Project[],
  awards: [
    {
      title: 'Salt Light',
      context: 'Award / recognition project',
      href: 'https://frankdesign.s3.amazonaws.com/pages/saltlight.html',
    },
    {
      title: 'Grayhound Reward',
      context: 'Award / recognition project',
      href: 'https://frankdesign.s3.amazonaws.com/pages/grayhount.html',
    },
    {
      title: 'Lighting Africa',
      context: 'Award / recognition project',
      href: 'https://frankdesign.s3.amazonaws.com/pages/lightingafrica.html',
    },
    {
      title: 'Student Project Award 2017',
      context: 'Award / recognition project',
      href: 'https://frankdesign.s3.amazonaws.com/pages/studentprojectaward.html',
    },
    {
      title: '4kW Laser Cabinet',
      context: 'Technical achievement',
      href: 'https://frankdesign.s3.amazonaws.com/4kwlaser.html',
    },
  ] satisfies Award[],
  contact: [
    {
      label: 'Email',
      value: 'fkdesignstudio@gmail.com',
      href: 'mailto:fkdesignstudio@gmail.com',
    },
    {
      label: 'Phone',
      value: '+886 2 3501 2116',
      href: 'tel:+886235012116',
    },
    {
      label: 'Location',
      value: 'Sanxia District, New Taipei City, Taiwan',
    },
  ] satisfies ContactItem[],
  footerNote:
    'Built for easy expansion: add or remove projects from the content file without changing the page structure.',
};
