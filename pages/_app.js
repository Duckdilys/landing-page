import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.scss";
import Navigation from "../components/Navigation/Navigation";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
