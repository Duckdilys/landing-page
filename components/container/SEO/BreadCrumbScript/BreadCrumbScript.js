import React from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
import paths from "../../../Navigation/path";
const BreadCrumbScript = ({ dataElement, title, children }) => {
  const structureList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      ...paths, ...dataElement
    ]?.map((item, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name || "",
        item: item.href || item.path || ""
      }
    })
  };

  return (
    <Head>
      <title>{title}</title>
      {/* <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js"></script> */}
      <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32"/>
      <meta property="og:image" content="/Logo-icon-svg.svg"/>
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
