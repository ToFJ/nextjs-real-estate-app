import Layout from "../components/Layout";
import ContextWrapper from "../components/ContextWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ContextWrapper>
        <Component {...pageProps} />
      </ContextWrapper>
    </Layout>
  );
}

export default MyApp;
