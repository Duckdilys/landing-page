import React from "react";
import { TextImage, BreadCrumbScript } from "../components/container";
import Banner from "../components/Introduction/Banner/Banner";
import styles from "../styles/styles.module.scss";
import RootValue from "../components/Introduction/RootValue/RootValue";
import Partner from "../components/Home/Partner/Partner";
import Competitive from "../components/Introduction/Competitive/Competitive";
import Founder from "../components/Introduction/Founder/Founder";
import axiosConfig from "../service/base";
import { apiIntroduction } from "../config/ApiIntroduction";
import { ApiFounder } from "../config/ApiFounder";
import { getPartnerCondition } from "../service";
import { checkUserIsBot } from "../util";
const Introduction = ({ dataIntroduction, founderData, partners }) => {
  const getDataFromServer = () => {
    const visions = dataIntroduction?.visions || [];
    const missions = dataIntroduction?.missions || [];

    return [...visions, ...missions];
  };
  return (
    <>
      <BreadCrumbScript
        title={"Giới thiệu | MH - Digital"}
        dataElement={[
          {
            name: "Giới thiệu || MH - Digital",
            href: "/introduction",
          },
        ]}
      >
        <meta key="keywords" name="keywords" content="introduction,mhdigital,MH Digital"></meta>
      </BreadCrumbScript>
      <div className={styles.box}>
        <section>
          <Banner data={dataIntroduction} />
          {dataIntroduction && (
            <>
              {getDataFromServer().map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <TextImage
                      aos="fade-right"
                      title={item?.content || "Không có tiêu đề"}
                      mainTitle={item?.title || "Không có nội dung chi tiết"}
                      src={item?.src || "/Image (2).png"}
                      key={index}
                      className={`flex-row-reverse ${index === 0 ? styles.remove : ''}`}
                      aosImage="fade-left"
                      iconImage={"/icon.svg"}
                      classImage={styles["background-image"]}
                    />
                  );
                }
                return (
                  <TextImage
                    aos="fade-left"
                    title={item?.content || "Không có tiêu đề"}
                    mainTitle={item?.title || "Không có nội dung chi tiết"}
                    src={item?.src || "/vision.png"}
                    key={index}
                    classText={styles.reverse}
                    iconImage={"/icon.svg"}
                    classImage={`${styles["background-image"]} ${styles["background-right"]}`}
                  />
                );
              })}
            </>
          )}
        </section>
        <RootValue data={dataIntroduction?.core_values} />
        <Competitive data={dataIntroduction?.competitives} />
        <Founder dataFounder={founderData} />
        <Partner partners={partners} className={styles.top} />
      </div>
    </>
  );
};

export const getServerSideProps = async ({ req }) => {
  const userIsBot = checkUserIsBot(req);
  const dataIntroduction = await axiosConfig({
    method: "POST",
    url: apiIntroduction,
    data: {},
  });
  const dataFounder = await axiosConfig({
    method: "POST",
    url: ApiFounder,
    data: {},
  });
  const partners = await getPartnerCondition();
  if (
    dataIntroduction.code >= 400 ||
    dataFounder.code >= 400 ||
    partners.code >= 400
  ) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      isDisabledAnimation: userIsBot,
      dataIntroduction: dataIntroduction.result?.items[0],
      founderData: dataFounder.result?.items,
      partners: partners.result.items,
    },
  };
};
export default Introduction;
