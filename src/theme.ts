import { DEFAULT_THEME, createTheme, mergeMantineTheme } from '@mantine/core';

import fonts from '@/fonts';

const themeOverride = createTheme({
  scale: 1,
  fontSmoothing: true,
  focusRing: 'auto',
  white: 'hsl(0 0% 98%)',
  black: 'hsl(0 0% 4.7%)',
  colors: {
    dark: [
      'hsl(0 0% 65.7%)',
      'hsl(0 0% 55.7%)',
      'hsl(0 0% 45.7%)',
      'hsl(0 0% 35.7%)',
      'hsl(0 0% 15.7%)',
      'hsl(0 0% 5.7%)',
      'hsl(0 0% 4.7%)',
      'hsl(0 0% 5.7%)',
      'hsl(0 0% 2.7%)',
      'hsl(0 0% 1.7%)'
    ],
    gray: [
      '#f4f5f6',
      '#e7e7e7',
      '#cccccc',
      '#b1b1b1',
      '#97999b',
      '#878a8d',
      '#7e8389',
      '#6b7076',
      '#5e646a',
      '#4e5760'
    ],
    red: [
      '#ffeaec',
      '#fdd4d6',
      '#f4a7ac',
      '#ec777e',
      '#e64f57',
      '#e3353f',
      '#e22732',
      '#c91a25',
      '#b31220',
      '#9e0419'
    ],
    pink: [
      '#fff0f6',
      '#ffdeeb',
      '#fcc2d7',
      '#faa2c1',
      '#f783ac',
      '#f06595',
      '#e64980',
      '#d6336c',
      '#c2255c',
      '#a61e4d'
    ],
    grape: [
      '#f8f0fc',
      '#f3d9fa',
      '#eebefa',
      '#e599f7',
      '#da77f2',
      '#cc5de8',
      '#be4bdb',
      '#ae3ec9',
      '#9c36b5',
      '#862e9c'
    ],
    violet: [
      '#f3f0ff',
      '#e5dbff',
      '#d0bfff',
      '#b197fc',
      '#9775fa',
      '#845ef7',
      '#7950f2',
      '#7048e8',
      '#6741d9',
      '#5f3dc4'
    ],
    indigo: [
      '#edf2ff',
      '#dbe4ff',
      '#bac8ff',
      '#91a7ff',
      '#748ffc',
      '#5c7cfa',
      '#4c6ef5',
      '#4263eb',
      '#3b5bdb',
      '#364fc7'
    ],
    blue: [
      '#e7f5ff',
      '#d0ebff',
      '#a5d8ff',
      '#74c0fc',
      '#4dabf7',
      '#339af0',
      '#228be6',
      '#1c7ed6',
      '#1971c2',
      '#1864ab'
    ],
    cyan: [
      '#e3fafc',
      '#c5f6fa',
      '#99e9f2',
      '#66d9e8',
      '#3bc9db',
      '#22b8cf',
      '#15aabf',
      '#1098ad',
      '#0c8599',
      '#0b7285'
    ],
    teal: [
      '#e6fcf5',
      '#c3fae8',
      '#96f2d7',
      '#63e6be',
      '#38d9a9',
      '#20c997',
      '#12b886',
      '#0ca678',
      '#099268',
      '#087f5b'
    ],
    green: [
      '#ecfdf4',
      '#d9fae8',
      '#adf4ce',
      '#7ff0b2',
      '#5bec9a',
      '#47e98c',
      '#3ce983',
      '#30ce70',
      '#25b763',
      '#0f9e52'
    ],
    lime: [
      '#f4fce3',
      '#e9fac8',
      '#d8f5a2',
      '#c0eb75',
      '#a9e34b',
      '#94d82d',
      '#82c91e',
      '#74b816',
      '#66a80f',
      '#5c940d'
    ],
    yellow: [
      '#fffae1',
      '#fff4cc',
      '#ffe89b',
      '#ffdc64',
      '#ffd138',
      '#ffca1c',
      '#ffc709',
      '#e3af00',
      '#ca9c00',
      '#ae8600'
    ],
    orange: [
      '#fff4e6',
      '#ffe8cc',
      '#ffd8a8',
      '#ffc078',
      '#ffa94d',
      '#ff922b',
      '#fd7e14',
      '#f76707',
      '#e8590c',
      '#d9480f'
    ]
  },
  primaryShade: {
    light: 6,
    dark: 7
  },
  primaryColor: 'red',
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily: fonts.display.style.fontFamily,
  fontFamilyMonospace: fonts.monospace.style.fontFamily,
  respectReducedMotion: true,
  cursorType: 'pointer',
  defaultGradient: {
    from: 'blue',
    to: 'cyan',
    deg: 45
  },
  defaultRadius: 'md',
  activeClassName: 'active:scale-[.98]',
  focusClassName: 'focus-visible:outline',
  headings: {
    fontFamily: fonts.title.style.fontFamily,
    fontWeight: '800',
    textWrap: 'wrap',
    sizes: {
      h1: {
        fontSize:
          'calc(clamp(3.75rem, 0.75rem + 6.25vw, 6.75rem) * var(--mantine-scale))',
        lineHeight: '1'
      },
      h2: {
        fontSize:
          'calc(clamp(3.25rem, 0.25rem + 6.25vw, 6.25rem) * var(--mantine-scale))',
        lineHeight: '1.15'
      },
      h3: {
        fontSize:
          'calc(clamp(2rem, 1rem + 2.0833vw, 3rem) * var(--mantine-scale))',
        lineHeight: '1.4'
      },
      h4: {
        fontSize:
          'calc(clamp(1.5rem, 0.5rem + 2.0833vw, 2.5rem) * var(--mantine-scale))',
        lineHeight: '1.45'
      },
      h5: {
        fontSize: 'calc(1rem * var(--mantine-scale))',
        lineHeight: '1.5'
      },
      h6: {
        fontSize: 'calc(0.75rem * var(--mantine-scale))',
        lineHeight: '1.5'
      }
    }
  },
  fontSizes: {
    xs: 'calc(0.75rem * var(--mantine-scale))',
    sm: 'calc(0.875rem * var(--mantine-scale))',
    md: 'calc(1rem * var(--mantine-scale))',
    lg: 'calc(1.125rem * var(--mantine-scale))',
    xl: 'calc(1.25rem * var(--mantine-scale))'
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65'
  },
  radius: {
    xs: 'calc(0.125rem * var(--mantine-scale))',
    sm: 'calc(0.25rem * var(--mantine-scale))',
    md: 'calc(0.5rem * var(--mantine-scale))',
    lg: 'calc(1rem * var(--mantine-scale))',
    xl: 'calc(2rem * var(--mantine-scale))'
  },
  spacing: {
    '2xs': 'calc(0.05rem * var(--mantine-scale))',
    xs: 'calc(0.625rem * var(--mantine-scale))',
    sm: 'calc(0.75rem * var(--mantine-scale))',
    md: 'calc(1rem * var(--mantine-scale))',
    lg: 'calc(1.25rem * var(--mantine-scale))',
    xl: 'calc(2rem * var(--mantine-scale))',
    '2xl': 'calc(4rem * var(--mantine-scale))'
  },
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em'
  },
  shadows: {
    xs: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), 0 calc(0.0625rem * var(--mantine-scale)) calc(0.125rem * var(--mantine-scale)) rgba(0, 0, 0, 0.1)',
    sm: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--mantine-scale)) calc(0.9375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--mantine-scale)) calc(0.4375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))',
    md: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--mantine-scale)) calc(1.5625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--mantine-scale)) calc(0.625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))',
    lg: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--mantine-scale)) calc(1.4375rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--mantine-scale)) calc(0.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))',
    xl: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--mantine-scale)) calc(1.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--mantine-scale)) calc(1.0625rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))'
  },
  other: {},
  components: {}
});

const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

const defaultColorScheme = 'light';

export default theme;
export { defaultColorScheme };
