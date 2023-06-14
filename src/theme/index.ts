import { Inter } from 'next/font/google'

const primary = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const theme = {
  colors: {
    background: '#12130F',
    lightText: '#EBEBD3',
    error: '#DA4167',
    warning: '#F4D35E',
    success: '#5B9279'
  },
  fonts: {
    primary: primary.style.fontFamily,
  }
}