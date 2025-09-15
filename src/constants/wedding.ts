export const WEDDING_CONFIG = {
  // Couple information
  couple: {
    her: "Lili",
    him: "Rafa",
    them: "Lili & Rafa",
  },

  // Wedding details
  wedding: {
    date: "25.04.2026",
    dow: "Saturday",
    time: "16:00",
    timezone: "America/Sao_Paulo", // Brazilian time
    fullDate: new Date("2026-04-25T16:00:00-03:00"), // 4 PM Brazilian time
    rsvpDeadline: "March 25",
  },

  // Contact information
  contact: {
    email: "rafaeelaudibert+casamento@gmail.com",
    phone: "+55 54 99645 5959",
  },

  // Navigation links
  navigation: [
    { href: "#location", label: "Location" },
    { href: "#schedule", label: "Schedule" },
    { href: "#faq", label: "FAQ" },
  ],

  // Venue information
  venue: {
    name: "Vila Fitarelli",
    url: "https://maps.app.goo.gl/Ff65hxMaZGSHgZXSA",
    image: "https://picsum.photos/seed/vilafitarelli/1200/600",
    cards: [
      {
        label: "The venue",
        description:
          "Vila Fitarelli is a historic Italian manor house in Garibaldi, in the amazing Vale dos Vinhedos, Brazil.",
      },
      {
        label: "How to get there",
        description:
          "The venue is located in a somewhat remote area and, therefore, you'll need to drive. The venue is 15 minutes from the city centre of Carlos Barbosa via the old Garibaldi road, and roughly 2 hours from Porto Alegre via Vale dos Vinhedos. There's no taxi service in the area. There's enough parking for all the guests.",
      },
      {
        label: "Restrictions",
        description:
          "Being in the countryside, the venue does not have access to internet. Plan accordingly. We'll have a landline phone in the property for emergencies.",
      },
    ],
  },

  // Schedule
  schedule: [
    {
      time: "16:00",
      title: "Ceremony",
      description: 'Join us as we say "I do" in the beautiful garden setting',
      image: "https://picsum.photos/seed/ceremony/400/250",
    },
    {
      time: "17:30",
      title: "Aperitifs",
      description:
        "Cocktails and (gluten-free) canapés while we take photos on the sunset",
      image: "https://picsum.photos/seed/aperitif/400/250",
    },
    {
      time: "19:00",
      title: "Dinner",
      description:
        "A delicious meal shared with our closest family and friends",
      image: "https://picsum.photos/seed/dinner/400/250",
    },
    {
      time: "21:00",
      title: "Party",
      description:
        "Let's dance the night away and celebrate together with the best music",
      image: "https://picsum.photos/seed/party/400/250",
    },
  ],

  // FAQ
  faq: [
    {
      question: "Can I bring a plus one?",
      answer:
        "Unfortunately, not. We've put a lot of effort on selecting the venue and the food, so we're limiting the number of guests to the ones included in your invite. If you aren't sure whether someone is included, please ask us.",
    },
    {
      question: "Are kids welcome?",
      answer:
        "We love kids, and we've put some effort into inviting the kids who are dear to us. Due to restrictions on the venue, if a kid is not included in your invite, then you unfortunately won't be able to bring them. We hope you understand and can arrange childcare for the evening. If you're not sure whether someone is included, please ask us.",
    },
    {
      question: "What should I wear?",
      answer:
        "Best men and bridesmaid have received a dress code in their invitations. We're asking everyone else to dress in a way that is comfortable for a wedding. Avoid white, please. Men are welcome to wear a suit, and women are welcome to wear a dress or a pantsuit.",
    },
    {
      question: "Will there be gluten-free food?",
      answer:
        "Absolutely! As it's known by most, the bride is allergic to gluten, so all of our meals will be gluten-free. Please let us know about any other dietary restrictions in your RSVP.",
    },
    {
      question: "Will there be vegetarian/vegan food?",
      answer: "Yes, there will be vegetarian and vegan options available.",
    },
    {
      question: "Can I give a speech?",
      answer:
        "We'd be honored! Please let us know in advance so we can plan the schedule. Keep it short and sweet - we want to keep the party going!",
    },
  ],
} as const
