import type { AppProps } from 'next/app'
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/themes/light-theme';
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  
return(
<>

  <Head>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
  </Head>

  <ThemeProvider theme={theme}>

    <CssBaseline />
    <Component {...pageProps} />

  </ThemeProvider>
</>
)
}


export default MyApp