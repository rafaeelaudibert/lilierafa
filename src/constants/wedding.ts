interface Config {
  callout: string
  longCallout: string
  cta: string
  couple: {
    her: string
    him: string
    them: string
  }
  wedding: {
    date: string
    dow: string
    time: string
    timezone: string
    fullDate: Date
    rsvpDeadline: string
  }
  contact: {
    email: string
    phone: string
  }
  navigation: {
    href: string
    label: string
  }[]
  venue: {
    header: string
    title: string
    button: string
    name: string
    url: string
    image: string
    cards: {
      label: string
      description: string
    }[]
  }
  schedule: {
    header: string
    title: string
    detail: string
    description: string
    agenda: {
      time: string
      title: string
      description: string
      image: string
    }[]
  }
  gifts: {
    title: string
    presence: string
    content: string
    caption: string
  }
  rsvp: {
    title: string
    detail: string
    description: string
    name: {
      label: string
      placeholder: string
    }
    email: {
      label: string
      placeholder: string
    }
    extra: {
      label: string
      placeholder: string
    }
    submit: string
  }
  faq: {
    title: string
    detail: string
    questions: {
      question: string
      answer: string
    }[]
  }
  footer: {
    countdown: {
      label: string
      days: string
      hours: string
      minutes: string
      seconds: string
    }
    content: string
  }
}

export type Locale = "en" | "pt"

export const WEDDING_CONFIG: Record<Locale, Config> = {
  en: {
    callout: "We're getting married!",
    longCallout:
      "We're getting married! And we're so excited to celebrate our day with you. On this page, you'll find everything you need to know – schedule, location, dress code, accommodation – and you can RSVP directly here. See you in lovely Vale dos Vinhedos!",
    cta: "I'm coming!",
    couple: {
      her: "Lili",
      him: "Rafa",
      them: "Lili & Rafa",
    },
    wedding: {
      date: "25.04.2026",
      dow: "Saturday",
      time: "16:00",
      timezone: "America/Sao_Paulo", // Brazilian time
      fullDate: new Date("2026-04-25T16:00:00-03:00"), // 4 PM Brazilian time
      rsvpDeadline: "March 25",
    },
    contact: {
      email: "rafaeelaudibert@gmail.com",
      phone: "+55 54 99645 5959",
    },
    navigation: [
      { href: "#location", label: "Location" },
      { href: "#schedule", label: "Schedule" },
      { href: "#faq", label: "FAQ" },
    ],
    venue: {
      header: "Location",
      title: "We'll see you at",
      button: "Find on Google Maps",
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
    schedule: {
      header: "Schedule",
      title: "The day of our",
      detail: "celebration",
      description:
        "The celebration will take place throughout the day at Vila Fitarelli. We can't wait to share this special day with you!",
      agenda: [
        {
          time: "4pm",
          title: "Ceremony",
          description:
            'Join us as we say "I do" in the beautiful garden setting',
          image: "https://picsum.photos/seed/ceremony/400/250",
        },
        {
          time: "5:30pm",
          title: "Aperitifs",
          description:
            "Cocktails and (gluten-free) canapés while we take photos on the sunset",
          image: "https://picsum.photos/seed/aperitif/400/250",
        },
        {
          time: "7pm",
          title: "Dinner",
          description:
            "A delicious meal shared with our closest family and friends",
          image: "https://picsum.photos/seed/dinner/400/250",
        },
        {
          time: "9pm",
          title: "Party",
          description:
            "Let's dance the night away and celebrate together with the best music",
          image: "https://picsum.photos/seed/party/400/250",
        },
      ],
    },
    gifts: {
      title: "WEDDING GIFTS",
      presence: "Your presence is enough",
      content:
        "Truly! We're just happy to celebrate with you. If you'd still like to give us something, we'd love a monetary contribution to our honeymoon trip - please, no physical gifts.",
      caption:
        "Send as much or as little as you'd like, or nothing at all. We're just grateful you're celebrating with us.",
    },
    rsvp: {
      title: "Let us know you're",
      detail: "coming",
      description:
        "Please RSVP no later than March 25. Fill in the form below and let us know about any dietary needs or questions.",
      name: {
        label: "Name",
        placeholder: "Your full name",
      },
      email: {
        label: "Email",
        placeholder: "your.email@example.com",
      },
      extra: {
        label: "Additional information & questions",
        placeholder:
          "Any information we should know, or questions you might have...",
      },
      submit: "Submit",
    },
    faq: {
      title: "You also might be",
      detail: "wondering...",
      questions: [
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
    },
    footer: {
      countdown: {
        label: "Countdown to our big day",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      },
      content:
        "Made with a lot of ♥ by Rafa, for Lili, in Porto Alegre, Brazil, September 2025.",
    },
  },
  pt: {
    callout: "Vamos nos casar!",
    longCallout:
      "Vamos nos casar! E estamos muito ansiosos para celebrar nosso dia com você. Nesta página, você encontrará tudo o que precisa saber – agenda, local, vestimenta – e pode confirmar sua presença diretamente aqui. Ansiosos para te ver no Vale dos Vinhedos!",
    cta: "Vou comparecer!",
    couple: {
      her: "Lili",
      him: "Rafa",
      them: "Lili & Rafa",
    },
    wedding: {
      date: "25.04.2026",
      dow: "Sábado",
      time: "16:00",
      timezone: "America/Sao_Paulo", // Brazilian time
      fullDate: new Date("2026-04-25T16:00:00-03:00"), // 4 PM Brazilian time
      rsvpDeadline: "25 de Março",
    },
    contact: {
      email: "rafaeelaudibert@gmail.com",
      phone: "+55 54 99645 5959",
    },
    navigation: [
      { href: "#location", label: "O lugar" },
      { href: "#schedule", label: "Agenda" },
      { href: "#faq", label: "FAQ" },
    ],
    venue: {
      header: "O lugar",
      title: "Vamos te ver na",
      button: "Encontrar no Google Maps",
      name: "Vila Fitarelli",
      url: "https://maps.app.goo.gl/Ff65hxMaZGSHgZXSA",
      image: "https://picsum.photos/seed/vilafitarelli/1200/600",
      cards: [
        {
          label: "O lugar",
          description:
            "Vila Fitarelli é uma mansão italiana histórica em Garibaldi, no incrível Vale dos Vinhedos.",
        },
        {
          label: "Como chegar",
          description:
            "O local está localizado no interior da cidade e, portanto, você precisará dirigir. O local está a 15 minutos da cidade de Carlos Barbosa via Estrada Velha de Garibaldi, e aproximadamente 2 horas de Porto Alegre via Vale dos Vinhedos. Não há serviço de táxi na área. Há estacionamento suficiente para todos os convidados.",
        },
        {
          label: "Restrições",
          description:
            "Estando no interior da cidade, o local não tem acesso à internet. Planeje adequadamente. Teremos um telefone fixo no local para emergências.",
        },
      ],
    },
    schedule: {
      header: "Agenda",
      title: "O dia de nosso",
      detail: "casamento",
      description:
        "O casamento ocorrerá durante todo o dia na Vila Fitarelli. Não podemos esperar para compartilhar este dia especial conosco!",
      agenda: [
        {
          time: "16:00",
          title: "Cerimônia",
          description:
            'Junte-se a nós para dizer "Aceito" no lindo jardim da Vila Fitarelli',
          image: "https://picsum.photos/seed/ceremony/400/250",
        },
        {
          time: "17:30",
          title: "Aperitivos",
          description:
            "Coquetéis e canapés (sem glúten) enquanto tiramos fotos no pôr do sol",
          image: "https://picsum.photos/seed/aperitif/400/250",
        },
        {
          time: "19:00",
          title: "Jantar",
          description:
            "Uma deliciosa refeição compartilhada com nossa família e amigos mais próximos",
          image: "https://picsum.photos/seed/dinner/400/250",
        },
        {
          time: "21:00",
          title: "Festa",
          description: "Vamos dançar a noite toda e celebrar juntos",
          image: "https://picsum.photos/seed/party/400/250",
        },
      ],
    },
    gifts: {
      title: "PRESENTES ",
      presence: "Sua presença é o suficiente",
      content:
        "De verdade! Nós estamos verdadeiramente felizes de apenas celebrar nosso dia com você. Se você ainda assim quiser nos presentear com algo, adoraríamos se pudesse contribuir para a nossa viagem de lua de mel através do código PIX abaixo - por favor, sem presentes físicos, somente contribuições financeiras.",
      caption:
        "Envie o quanto você quiser - ou nada - de verdade. Nós estamos apenas agradecidos por você estar celebrando conosco.",
    },
    rsvp: {
      title: "Deixe-nos saber que",
      detail: "você virá",
      description:
        "Por favor, responda até 25 de Março. Preencha o formulário abaixo e nos informe sobre quaisquer restrições alimentares ou perguntas.",
      name: {
        label: "Nome",
        placeholder: "Seu nome completo",
      },
      email: {
        label: "Email",
        placeholder: "seu.email@exemplo.com",
      },
      extra: {
        label: "Informações adicionais & perguntas",
        placeholder:
          "Qualquer informação que você queira nos informar, ou perguntas que você tenha.",
      },
      submit: "Enviar",
    },
    faq: {
      title: "Você também pode estar",
      detail: "se perguntando...",
      questions: [
        {
          question: "Posso levar um acompanhante?",
          answer:
            "Infelizmente, não. Nós colocamos muito esforço em selecionar o local e a comida, então estamos limitando o número de convidados para os incluídos em sua convite. Se você não está certo se alguém está incluído, por favor, pergunte-nos.",
        },
        {
          question: "Crianças são bem-vindas?",
          answer:
            "Nós amamos crianças, e nos esforçamos para convidar todas as crianças que são queridas por nós. Devido às restrições no local, se uma criança não está incluída em sua convite, então você infelizmente não poderá trazê-la. Esperamos que você entenda a limitação. Se você não está certo se alguém está incluído, por favor, pergunte-nos.",
        },
        {
          question: "O que devo vestir?",
          answer:
            "Padrinhos e madinhas receberam um código de vestimenta em seus convites. Estamos pedindo a todos os outros para se vestirem de forma confortável para o casamento. Evite branco, por favor. Recomendamos vestimenta formal, homens devem utilizar camisa com um terno opcional, enquanto as mulheres são livres para escolher entre vestido ou calça.",
        },
        {
          question: "Há comida sem glúten?",
          answer:
            "Sim! Como é conhecido por todos, a noiva é alérgica ao glúten, então todas as refeições serão sem glúten. Por favor, nos informe sobre quaisquer outras restrições alimentares em seu RSVP.",
        },
        {
          question: "Há comida vegetariana/vegana?",
          answer: "Sim, haverá opções vegetariana e vegana disponíveis.",
        },
        {
          question: "Posso fazer um discurso?",
          answer:
            "Claro! Por favor, informe a organizadora do casamento com antecipação para que possamos planejar a agenda. Mantenha-o curto e suave - queremos manter a festa viva!",
        },
      ],
    },
    footer: {
      countdown: {
        label: "Contagem regressiva para o grande dia",
        days: "Dias",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos",
      },
      content:
        "Feito com muito ♥ por Rafa, para Lili, em Porto Alegre, Brasil, Setembro 2025.",
    },
  },
}
