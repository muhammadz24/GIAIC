
import type { AppProps } from "next/app";
import '@/styles/global.css';
import "../styles/index.css";
import "../styles/about.css";
import "../styles/contact.css";
import "../styles/privacy-policy.css";
import "../styles/layout.css"; 
import "../styles/linking.css"; 



export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
