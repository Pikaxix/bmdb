import { Theme } from '@/theme'
import { createContext } from 'react'

interface CustomTheme {
  light?: Theme
  dark?: Theme
}

export interface AppOption {
  type: 'movie' | 'book'
  selector: string
  secret: string
  categories?: string[]
  noMoreDataTips?: string
  themeMode?: 'light' | 'dark' | 'auto'
  customTheme?: CustomTheme
  isMobile?: boolean
}

const AppContext = createContext<AppOption>({} as AppOption)
export default AppContext
