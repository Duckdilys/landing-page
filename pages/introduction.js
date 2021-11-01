import React from "react";
import { TextImage } from "../components/container";
import Banner from "../components/Introduction/Banner/Banner";
import Line from "../components/Introduction/Line/Line";
import styles from "../styles/styles.module.scss";
import RootValue from "../components/Introduction/RootValue/RootValue";
import Partner from "../components/Home/Partner/Partner";
import Competitive from "../components/Introduction/Competitive/Competitive";
import Founder from "../components/Introduction/Founder/Founder";
import {
  fakeDataCircle,
  founderFakeData,
} from "../components/Introduction/dataFake/dataFake";
const Introduction = ({ data, founder }) => {
  return (
    <>
      <section>
        <Banner />
        <TextImage
          title="Trở thành một Tập đoàn công nghệ trong top 30 Việt Nam vào năm 2030"
          mainTitle="Tầm nhìn"
          src={"/Image (2).png"}
          className="flex-row-reverse"
          aosImage="fade-left"
          iconImage="/icon.png"
        />
        <TextImage
          title="Dẫn đầu các xu hướng công nghệ mới. Mang tới giải pháp, dịch vụ và kinh doanh toàn diện đến cho khách hàng."
          mainTitle="Sứ mệnh"
          src={"/unsplash_eiMzJl3xj4o.png"}
          className={`flex-row ${styles.line}`}
          classText={styles.right}
          iconImage="/icon.png"
        />
        
      </section>
      <RootValue data={data} />
      <Competitive />
      <Founder data={founder} />
      <Partner className={styles.top} />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      data: fakeDataCircle,
      founder: founderFakeData,
    },
  };
};
export default Introduction;
