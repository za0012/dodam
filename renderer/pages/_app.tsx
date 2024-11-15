import type { AppProps } from 'next/app';
import '../public/css/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
