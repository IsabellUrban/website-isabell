import Header from "../components/Header/Header.js";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Component {...pageProps} />
    </>
  );
}
