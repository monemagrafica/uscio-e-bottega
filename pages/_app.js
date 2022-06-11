import "../styles/globals.css";
import { ContextData, ShareContext } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextData>
      <Component {...pageProps} />
    </ContextData>
  );
}

export default MyApp;
