import Header from "../components/header";
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
