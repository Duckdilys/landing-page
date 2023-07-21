import React from "react";
import { useRouter } from 'next/router';
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import paths from "../../../Navigation/path";
import { publicRuntimeConfig } from "../../../../util/config";
const BreadCrumbScript = ({
  dataElement,
  title,
  children,
  description,
  imageContent,
  keywords
}) => {
  const router = useRouter()
  const structureList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [...paths, ...dataElement]?.map((item, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name || "",
        item: item.href || item.path || "",
      };
    }),
  };

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo-icon-new.svg" sizes="32x32" />
      <link
        rel="apple-touch-icon"
        sizes="32x32"
        href="https://cdn.noron.vn/2023/07/21/430215347252920-1689927603.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="96x96"
        href="https://cdn.noron.vn/2023/07/21/430215347252920-1689927603.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://cdn.noron.vn/2023/07/21/430215347252920-1689927603.png"
      />
      <meta
        key="og:image"
        property="og:image"
        content={
          imageContent ||
          "https://cdn.noron.vn/2023/07/21/430215347252920-1689927603.png"
        }
      />
      <meta
        key="author"
        name="author"
        content="MH Media INTERNATIONAL TECHNOLOGY JSC"
      />
      <meta
        key="keywords"
        name="keywords"
        content={keywords || "mhdigital, MH Digital"}
      />
      <meta key="og:site_name" property="og:site_name" content="MH Digital" />
      <meta
        key="description"
        property="description"
        content={
          description ||
          "MH Digital là công ty giải pháp tích hợp với sứ mệnh là người đồng hành tin cậy cho các doanh nghiệp tổ chức trong quá trình chuyển đổi số."
        }
      />
      <meta
        key="og:description"
        property="og:description"
        content={
          description ||
          "MH Digital là công ty giải pháp tích hợp với sứ mệnh là người đồng hành tin cậy cho các doanh nghiệp tổ chức trong quá trình chuyển đổi số."
        }
      />
      <meta
        key="og:url"
        property="og:url"
        content={`https://mhdigital.vn${router?.asPath}`}
      />
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:title" property="og:title" content={title} />
      <link
        rel="preload"
        href="/Nunito_Sans/NunitoSans-Regular.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Nunito_Sans/NunitoSans-Bold.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Nunito_Sans/NunitoSans-BoldItalic.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Nunito_Sans/NunitoSans-ExtraLight.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Nunito_Sans/NunitoSans-ExtraLightItalic.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Nunito_Sans/NunitoSans-Italic.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Nunito_Sans/NunitoSans-Light.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Nunito_Sans/NunitoSans-SemiBold.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      {dataElement && (
        <script type="application/ld+json">
          {ReactHtmlParser(JSON.stringify(structureList))}
        </script>
      )}
      {children}
    </Head>
  );
};

export default BreadCrumbScript;
