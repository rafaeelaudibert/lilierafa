declare global {
  interface Window {
    posthog: any
    throwConfetti: () => void
  }
}

export {}
