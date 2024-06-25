import { createUseStore } from '@tamagui/use-store'

class BentoStore {
  heroVisible = true
  heroHeight = 800
  disableTint = false
}

export const useBentoStore = createUseStore(BentoStore)
