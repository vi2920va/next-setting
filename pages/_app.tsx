import type { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import Head from 'next/head';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyle from 'styles/globalStyles';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({ Component, pageProps }: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
    return (
      <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>부로컬리</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  )
}

export default MyApp;