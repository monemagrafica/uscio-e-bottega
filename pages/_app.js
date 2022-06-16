import "../styles/globals.scss";
import { ContextData } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (

      <ContextData>
        <Component {...pageProps} />
      </ContextData>

  );
}

export default MyApp;
