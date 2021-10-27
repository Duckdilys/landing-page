import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/global.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import Navigation from "../components/Navigation/Navigation";
import Footer from '../components/Footer/Footer';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
