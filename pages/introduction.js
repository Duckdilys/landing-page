import React from "react";
import { TextImage } from "../components/container";
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
  return (
    <>
      <section>
        <Banner data={dataIntroduction} />
        {dataIntroduction && (
          <>
            {dataIntroduction?.visions?.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <TextImage
                    aos="fade-right"
                    title={item?.title || "Không có tiêu đề"}
                    mainTitle={item?.content || "Không có nội dung chi tiết"}
                    src={item?.src || "/Image (2).png"}
                    key={index}
                    className="flex-row-reverse"
                    aosImage="fade-left"
                    iconImage={"/icon.png"}
                  />
                );
              }
              return (
                <TextImage
                  aos="fade-left"
                  title={item?.title || "Không có tiêu đề"}
                  mainTitle={item?.content || "Không có nội dung chi tiết"}
                  src={item?.src || "/Image (2).png"}
                  key={index}
                  className="flex-row-reverse"
                  iconImage={"/icon.png"}
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
  if (dataIntroduction.code >= 400 || dataFounder.code >= 400 || partners.code >= 400) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      isDisabledAnimation: userIsBot,
      dataIntroduction: dataIntroduction.result?.items[0],
      founderData: dataFounder.result,
      partners: partners.result.items
    },
  };
};
export default Introduction;
