import Header from "../components/Header/Header.js";
import GlobalStyle from "../styles/styles.js";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Component {...pageProps} />
    </>
  );
}
