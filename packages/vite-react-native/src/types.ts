import { InlineConfig } from 'vite'

export type StartOptions = {
  root: string
  host?: string
  port?: number
  webConfig?: InlineConfig
  buildConfig?: InlineConfig
}
