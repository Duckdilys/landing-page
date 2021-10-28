import React from "react";
import Banner from "../components/Introduction/Banner/Banner";
import Line from "../components/Introduction/Line/Line";
import styles from '../styles/styles.module.scss';
import RootValue from "../components/Introduction/RootValue/RootValue";
import Partner from '../components/Home/Partner/Partner';

const fakeDataCircle = [
    {
        title: 'Sáng tạo',
        backgroundColor: '#FF8C4B',
        shadow: '0px 20px 40px rgba(255, 78, 22, 0.2)'
    },
    {
        title: 'Chủ động',
        backgroundColor: '#27AE60',
        shadow: '0px 20px 40px rgba(39, 174, 96, 0.2)'
    },
    {
        title: 'Đồng đội',
        backgroundColor: '#3097F5',
        shadow: '0px 20px 40px rgba(48, 151, 245, 0.2)'
    },
    {
        title: "Trách Nhiệm",
        backgroundColor: '#27AE60',
        shadow: '0px 20px 40px rgba(39, 174, 96, 0.2)'
    },
    {
        title: 'Khách hàng',
        backgroundColor: '#3097F5',
        shadow: '0px 20px 40px rgba(48, 151, 245, 0.2)'
    }
]
const Introduction = () => {
  return (
    <>
      <section style={{ background: "#E5E5E5" }}>
        <Banner />
        <Line
          title="Trở thành một Tập đoàn công nghệ trong top 30 Việt Nam vào năm 2030"
          mainTitle="Tầm nhìn"
          src={"/Image (2).png"}
          className="flex-row-reverse"
        />
        <Line
          title="Dẫn đầu các xu hướng công nghệ mới. Mang tới giải pháp, dịch vụ và kinh doanh toàn diện đến cho khách hàng."
          mainTitle="Sứ mệnh"
          src={'/unsplash_eiMzJl3xj4o.png'}
          className={`flex-row ${styles.line}`}
          classText={styles.right}
        />
      </section>
      <RootValue data={fakeDataCircle}/>
      <Partner className={styles.top}/>
    </>
  );
};

export default Introduction;
