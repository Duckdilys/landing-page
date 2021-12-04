import Navigation from "../components/Navigation/Navigation";
import App from "next/app";
import Footer from "../components/Footer/Footer";
import { Overlay, ButtonUpTop } from "../components/container";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import AOS from "aos";
import axiosConfig from "../service/base";
import { apiGetProducts } from "../config/ApiProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "aos/dist/aos.css";
import { checkUserIsBot } from '../util';
import { ApiContact } from "../config/ApiContact";

function MyApp({ Component, pageProps, isDisabledAnimation, products, data_footer }) {
  useEffect(() => {
    if (isDisabledAnimation) {
      AOS.init({
        disable: true,
      });
      return;
    }
    AOS.init({
      once: true,
      offset: 150,
      duration: 1000,
      delay: 100,
      anchorPlacement: "top-center",
    });
  }, [isDisabledAnimation]);
  return (
    <>
      <Provider store={store}>
        <Navigation products={products} />
        <ButtonUpTop />
        <Overlay />
        <Component {...pageProps} />
        <Footer data_footer={data_footer}/>
      </Provider>
    </>
  );
}
MyApp.getInitialProps = async function (ctx) {
  const pageProps = await App.getInitialProps(ctx);
  const { res, req } = ctx.ctx;
  const userIsBot = checkUserIsBot(req);
  const products = await axiosConfig({
    url: apiGetProducts,
    method: "POST",
    data: {},
  });
  const data_footer = await axiosConfig({
    url: ApiContact,
    method: 'POST',
    data: {}
  });

  if (products.code >= 400 || data_footer.code >= 400) {
    return {
      ...pageProps,
      products: [],
      data_footer: []
      // temporary for error, not having
    };
  }
  return {
    ...pageProps,
    isDisabledAnimation: userIsBot,
    products: products?.result?.items,
    data_footer: data_footer?.result?.items
  };
};
export default MyApp;
