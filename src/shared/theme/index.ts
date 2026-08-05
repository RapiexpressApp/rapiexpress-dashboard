import { createTheme } from '@mantine/core'

export const theme = createTheme({
  primaryColor: 'rapiexpress',

  colors: {
    rapiexpress: [
      '#edf3ff',
      '#dbe8ff',
      '#b8d0ff',
      '#8eb2ff',
      '#6594ff',
      '#3d76ff',
      '#285ee8',
      '#163e9e',
      '#12327f',
      '#0b235e',
    ],

    dark: [
      '#ffffff',
      '#e8e8e8',
      '#d0d0d0',
      '#aaaaaa',
      '#7a7a7a',
      '#555555',
      '#2f2f2f',
      '#1b1b1b',
      '#090909',
      '#000000',
    ],

    yellow: [
      '#fff9df',
      '#fff3c2',
      '#ffeb9a',
      '#ffe16f',
      '#ffd84d',
      '#f5c518',
      '#dba600',
      '#b58700',
      '#8c6800',
      '#664b00',
    ],
  },

  primaryShade: 7,

  white: '#ffffff',

  black: '#000000',

  defaultRadius: 'xl',

  fontFamily: 'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',

  headings: {
    fontFamily: '"Plus Jakarta Sans", Inter, sans-serif',
    fontWeight: '800',
  },

  shadows: {
    xs: '0 2px 4px rgba(0,0,0,.10)',
    sm: '0 6px 16px rgba(0,0,0,.12)',
    md: '0 12px 30px rgba(0,0,0,.18)',
    lg: '0 20px 50px rgba(0,0,0,.24)',
    xl: '0 35px 80px rgba(0,0,0,.30)',
  },

  components: {
    Button: {
      defaultProps: {
        radius: 'xl',
      },
    },

    Card: {
      defaultProps: {
        radius: 'xl',
        withBorder: true,
      },
    },

    Paper: {
      defaultProps: {
        radius: 'xl',
      },
    },

    ActionIcon: {
      defaultProps: {
        radius: 'xl',
      },
    },

    TextInput: {
      defaultProps: {
        radius: 'lg',
      },
    },

    PasswordInput: {
      defaultProps: {
        radius: 'lg',
      },
    },
  },
})
