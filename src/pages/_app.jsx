import { ThemeProvider, createGlobalStyle} from "styled-components";
import "../styles/reset.css";
import temaDiego from "/src/styles/theme"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
function MyApp({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle />
    <ThemeProvider theme={temaDiego}>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp;
