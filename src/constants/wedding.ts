interface Config {
  callout: string
  cta: string
  movieUrl: string
  couple: {
    her: string
    him: string
    them: string
  }
  wedding: {
    date: string
    dow: string
  }
  hero: {
    alt: string
  }
}

export type Locale = "en" | "pt"

export const WEDDING_MOVIE_URL = "https://www.instagram.com/p/DYSEl_St5LH/"

export const WEDDING_CONFIG: Record<Locale, Config> = {
  en: {
    callout: "Married!",
    cta: "See the wedding movie",
    movieUrl: WEDDING_MOVIE_URL,
    couple: {
      her: "Lili",
      him: "Rafa",
      them: "Lili & Rafa",
    },
    wedding: {
      date: "25.04.2026",
      dow: "Saturday",
    },
    hero: {
      alt: "Rafael and Liliane posing with fancy attire in a partially sunlit garden. Rafael is on the left with a white shirt, black pants, and black shoes, with his black suit jacket thrown over his shoulder. Lili is on the right looking straight at the camera in a beautiful long white dress, resting one hand on Rafael's shoulder while the other is wrapped around his arm.",
    },
  },
  pt: {
    callout: "Casamos!",
    cta: "Veja o filme do casamento",
    movieUrl: WEDDING_MOVIE_URL,
    couple: {
      her: "Lili",
      him: "Rafa",
      them: "Lili & Rafa",
    },
    wedding: {
      date: "25.04.2026",
      dow: "Sábado",
    },
    hero: {
      alt: "Rafael e Liliane posando com trajes elegantes em um jardim parcialmente iluminado pelo sol. Rafael está à esquerda, vestindo camisa branca, calça preta e sapatos pretos, com seu terno preto jogado sobre o ombro. Lili está à direita, olhando diretamente para a câmera em um belo vestido longo branco, apoiando uma mão no ombro de Rafael enquanto a outra envolve seu braço.",
    },
  },
}
