import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    black: 'rgba(0, 0, 0, 1.00)',
    gray: 'rgba(197,197,197,1.00)',
    darkgray:'rgba(75,75,75,1.00)',

  },
  fontSize: {
    xs: ' 0.75em',
    s: '0.825em', 
    m: '0.875em', 
    l: '1.25em',
  },
  breakpoints: {
    mobile: '@media screen and (min-width: 480px)',
  },
};

export {theme}