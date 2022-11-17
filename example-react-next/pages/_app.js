import Layout from "../components/Layout";
import '../styles/style.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    
  );
}
