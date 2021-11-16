import React from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";
const BreadCrumbScript = ({ dataElement }) => {
  const structureList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: dataElement.map((item, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name || "",
        item: item.href || "",
      };
    }),
  };

  return (
    <Head>
      <script type="application/ld+json">
        {structureList}
        {ReactHtmlParser(JSON.stringify(structureList))}
      </script>
    </Head>
  );
};

export default BreadCrumbScript;
