import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { Overlay, ButtonUpTop } from "../components/container";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 200,
      duration: 1000,
      delay: 200,
      anchorPlacement: "top-center",
    });
  }, []);
  return (
    <>
      <Provider store={store}>
          <Navigation />
          <ButtonUpTop />
          <Overlay />
          <Component {...pageProps} />
          <Footer />
      </Provider>
    </>
  );
}
export default MyApp;
