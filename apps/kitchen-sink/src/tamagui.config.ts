import { config } from '@tamagui/config'
import { createTamagui } from 'tamagui'


config.themes['light_green_Button'] = {
  ...config.themes['light_green_Button'],
  background: 'green',
}

const tamaConf = createTamagui({
  ...config,
  themeClassNameOnRoot: false,
})

export type Conf = typeof tamaConf

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaConf
