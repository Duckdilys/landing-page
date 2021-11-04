import React from "react";
import { BannerPage, ContainerSmall, Grid } from "../../components/container";
import FindPosition from "../../components/Recruit/FindPosition/FindPosition";
import FormEmail from "../../components/Recruit/FormEmail/FormEmail";
import Positions from "../../components/Recruit/Positions/Positions";
import styles from "../../components/Recruit/style/styles.module.scss";
export const dataFake = {
  landing_content: {
    url_landing: "/static_recruit.png",
    introduction: "Tham gia cùng chúng tôi",
  },
  jobs: [
    {
      url_cover: "/position.png",
      title: "UX/UI Designer",
      date: new Date().toLocaleDateString("vi-vn"),
      place: "Hà Nội",
      salary: "Thỏa thuận",
      refer_fields: ["Phần mềm", "Junior", "Full-time"],
    },
    {
      url_cover: "/position.png",
      title: "UX/UI Designer",
      date: new Date().toLocaleDateString("vi-vn"),
      place: "Hà Nội",
      salary: "Thỏa thuận",
      refer_fields: ["Phần mềm", "Junior", "Full-time"],
    },
    {
      url_cover: "/position.png",
      title: "UX/UI Designer",
      date: new Date().toLocaleDateString("vi-vn"),
      place: "Hà Nội",
      salary: "Thỏa thuận",
      refer_fields: ["Phần mềm", "Junior", "Full-time"],
    },
    {
      url_cover: "/position.png",
      title: "UX/UI Designer",
      date: new Date().toLocaleDateString("vi-vn"),
      place: "Hà Nội",
      salary: "Thỏa thuận",
      refer_fields: ["Phần mềm", "Junior", "Full-time"],
    },
    {
      url_cover: "/position.png",
      title: "UX/UI Designer",
      date: new Date().toLocaleDateString("vi-vn"),
      place: "Hà Nội",
      salary: "Thỏa thuận",
      refer_fields: ["Phần mềm", "Junior", "Full-time"],
    },
    {
      url_cover: "/position.png",
      title: "UX/UI Designer",
      date: new Date().toLocaleDateString("vi-vn"),
      place: "Hà Nội",
      salary: "Thỏa thuận",
      refer_fields: ["Phần mềm", "Junior", "Full-time"],
    },
  ],
};
const Recruit = ({ data }) => {
  return (
    <>
      <BannerPage
        classNameBox={`text-center ${styles.box}`}
        title="cơ hội nghề nghiệp"
        style={{ background: `url('${data.landing_content.url_landing}')` }}
        introduction={data.landing_content.introduction}
      >
        <FindPosition />
      </BannerPage>
      <ContainerSmall>
        <Grid>
          <FormEmail />
          <Positions positions={data.jobs}/>
        </Grid>
      </ContainerSmall>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      data: dataFake,
    },
  };
};
export default Recruit;
