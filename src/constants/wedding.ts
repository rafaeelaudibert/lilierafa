import { type ImageMetadata } from "astro"

import ceremonyImage from "../assets/ceremony.png"
import aperitifImage from "../assets/aperitif.png"
import dinnerImage from "../assets/dinner.png"
import partyImage from "../assets/party.png"

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
      image: ImageMetadata
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
    extra: {
      label: string
      placeholder: string
    }
    videoCaption: string
    submit: string
    success: {
      title: string
      message: string
    }
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
    },
    contact: {
      email: "rafael.liliane.casa@gmail.com",
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
          image: ceremonyImage,
        },
        {
          time: "5:30pm",
          title: "Aperitifs",
          description:
            "Cocktails and (gluten-free) canapés while we take photos on the sunset",
          image: aperitifImage,
        },
        {
          time: "7:30pm",
          title: "Dinner",
          description:
            "A delicious meal shared with our closest family and friends",
          image: dinnerImage,
        },
        {
          time: "9pm",
          title: "Party",
          description:
            "Let's dance the night away and celebrate together with the best music",
          image: partyImage,
        },
      ],
    },
    gifts: {
      title: "WEDDING GIFTS",
      presence: "Your presence is enough",
      content:
        "Truly! We're just happy to celebrate with you. If you'd still like to give us something, we'd love a monetary contribution to our honeymoon trip via the PIX code below - or cash.",
      caption:
        "Send as much or as little as you'd like, or nothing at all. We're just grateful you're celebrating with us.",
    },
    rsvp: {
      title: "Let us know you're",
      detail: "coming",
      description:
        "Please RSVP no later than March 25. Fill in the form below and let us know about any dietary needs or questions.",
      videoCaption: "Come enjoy the lovely autumn weather with us!",
      name: {
        label: "Names",
        placeholder: "Names from all attendees",
      },
      extra: {
        label: "Additional information & questions",
        placeholder:
          "Any information we should know, or questions you might have...",
      },
      submit: "Submit",
      success: {
        title: "Thank you!",
        message: "We've received your RSVP and can't wait to celebrate with you! 🎉",
      },
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
          question: "What should I wear?",
          answer:
            "Groomsmen and bridesmaids have received a dress code with their invitations. For all other guests, we kindly request cocktail attire. <br/><br/>We kindly ask that female guests refrain from wearing white, as this color is reserved exclusively for the bride. With love and respect, please note that guests wearing white will not be allowed to enter. We truly appreciate your understanding.",
        },
        {
          question: "Will there be gluten-free food? And lactose-free?",
          answer:
            "Absolutely! As it's known by most, the bride is allergic to gluten, so all of our meals will be gluten-free, with options for lactose-intolerant guests. Please let us know about any other dietary restrictions in your RSVP.",
        },
        {
          question: "Will there be vegetarian/vegan food?",
          answer: "Yes, there will be vegetarian and vegan options available.",
        },
        {
          question: "Can I give a speech?",
          answer:
            "We'd be honored! Please let the wedding planner know in advance so she can plan the schedule. Keep it short and sweet - we want to keep the party going!",
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
        "Made with a lot of ♥  by Rafa, for Lili, in Porto Alegre, Brazil, September 2025.",
    },
  },
  pt: {
    callout: "Vamos nos casar!",
    longCallout:
      "Vamos nos casar! E estamos muito ansiosos para celebrar nosso dia com você. Nesta página, você encontrará tudo o que precisa saber – agenda, local, vestimenta – e pode confirmar sua presença diretamente aqui. Ansiosos para nos vermos no Vale dos Vinhedos!",
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
    },
    contact: {
      email: "rafael.liliane.casa@gmail.com",
      phone: "+55 54 99645 5959",
    },
    navigation: [
      { href: "#location", label: "O lugar" },
      { href: "#schedule", label: "Agenda" },
      { href: "#faq", label: "FAQ" },
    ],
    venue: {
      header: "O lugar",
      title: "Nos vemos na",
      button: "Encontrar no Google Maps",
      name: "Vila Fitarelli",
      url: "https://maps.app.goo.gl/Ff65hxMaZGSHgZXSA",
      cards: [
        {
          label: "O lugar",
          description:
            "Vila Fitarelli é uma mansão italiana histórica em Garibaldi, no incrível Vale dos Vinhedos.",
        },
        {
          label: "Como chegar",
          description:
            "O local está localizado no interior da cidade e, portanto, você precisará ir dirigindo. O local está a 15 minutos da cidade de Carlos Barbosa via Estrada Velha de Garibaldi, e aproximadamente 2 horas de Porto Alegre via Vale dos Vinhedos. Não há serviço de táxi na área. Há estacionamento suficiente para todos os convidados.",
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
        "O casamento ocorrerá durante todo o dia na Vila Fitarelli. Não podemos esperar para compartilhar este dia especial com você!",
      agenda: [
        {
          time: "16:00",
          title: "Cerimônia",
          description:
            'Junte-se a nós para dizer "Aceito" no lindo jardim da Vila Fitarelli',
          image: ceremonyImage,
        },
        {
          time: "17:30",
          title: "Receptivo",
          description:
            "Coquetéis e canapés (sem glúten) enquanto tiramos fotos no pôr do sol",
          image: aperitifImage,
        },
        {
          time: "19:30",
          title: "Jantar",
          description:
            "Uma deliciosa refeição compartilhada com nossa família e amigos mais próximos",
          image: dinnerImage,
        },
        {
          time: "21:00",
          title: "Festa",
          description: "Vamos dançar a noite toda e celebrar juntos",
          image: partyImage,
        },
      ],
    },
    gifts: {
      title: "PRESENTES ",
      presence: "Sua presença é o suficiente",
      content:
        "De verdade! Nós estamos verdadeiramente felizes de apenas celebrar nosso dia com você. Se você ainda assim quiser nos presentear com algo, adoraríamos se pudesse contribuir para a nossa viagem de lua de mel através do código PIX abaixo.",
      caption:
        "Envie o quanto você quiser - ou nada - de verdade. Já estaremos agradecidos apenas de você estar celebrando conosco.",
    },
    rsvp: {
      title: "Confirme aqui",
      detail: "sua presença",
      description:
        "Por favor, responda até 25 de Março. Preencha o formulário abaixo e nos informe sobre quaisquer restrições alimentares ou perguntas que você tiver.",
      videoCaption: "Venha aproveitar o agradável clima de outono conosco!",
      name: {
        label: "Nomes",
        placeholder: "Nomes dos convidados, como está no convite",
      },
      extra: {
        label: "Informações adicionais & perguntas",
        placeholder:
          "Qualquer coisa que você queira nos informar, ou perguntas que você tenha.",
      },
      submit: "Enviar",
      success: {
        title: "Obrigado!",
        message: "Recebemos sua confirmação e mal podemos esperar para celebrar com você! 🎉",
      },
    },
    faq: {
      title: "Você também pode estar",
      detail: "se perguntando...",
      questions: [
        {
          question: "Posso levar um acompanhante?",
          answer:
            "Independente da idade, caso alguém não esteja incluído em seu convite, infelizmente ele não poderá comparecer. Nos esforçamos em selecionar o local e a comida com muito carinho, porém isso exige que limitemos o número de convidados. Se você não está seguro se alguém está incluído, por favor, pergunte-nos.",
        },
        {
          question: "O que devo vestir?",
          answer:
            "Padrinhos e madinhas receberam um código de vestimenta em seus convites. Aos demais convidados, pedimos que compareçam com traje social ou esporte fino. <br/><br/> Gentilmente solicitamos às convidadas que não utilizem a cor branca, reservada exclusivamente à noiva. Informamos, com todo carinho e respeito, que não será permitida a entrada de convidadas vestindo branco. Contamos com a compreensão de todas.",
        },
        {
          question: "Há comida sem glúten? E sem lactose?",
          answer:
            "Sim! Como é conhecido por todos, a noiva é alérgica a glúten, então todas as refeições serão sem glúten, com opções para intolerantes à lactose. Por favor, nos informe sobre quaisquer outras restrições alimentares em seu RSVP.",
        },
        {
          question: "Há comida vegetariana/vegana?",
          answer: "Sim, haverá opções vegetariana e vegana disponíveis.",
        },
        {
          question: "Posso fazer um discurso?",
          answer:
            "Claro! Por favor, informe a organizadora do casamento com antecipação para que ela possa planejar a agenda.",
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
        "Feito com muito ♥  por Rafa, para Lili, em Porto Alegre, Brasil, Setembro 2025.",
    },
  },
}
