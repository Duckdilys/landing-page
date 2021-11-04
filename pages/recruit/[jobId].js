import React from "react";
import {
  BannerPage,
  LayoutContainer,
  Button,
} from "../../components/container";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { modelActions } from "../../store/slices/model-slice";
import { dataFake as jobFakes } from ".";
import Type from "../../components/Recruit/Positions/Position/Type/Type";
import styles from "../../components/JobDetail/styles.module.scss";
import Description from "../../components/JobDetail/Description/Description";
import Requiredment from "../../components/JobDetail/Requiredment/Requiredment";
import Overview from "../../components/JobDetail/Overview/Overview";
import RelatedWork from "../../components/JobDetail/RelatedWork/RelatedWork";
import FormCV from "../../components/JobDetail/FormCV/FormCV";
const dataFake = {
  job_title: {
    title: "UI/UX Designer",
    types: ["Phần mềm", "Junior", "Full-time"],
    url_cover: "/cover_static.png",
  },
  description: `<p>Every dollar you spend on a kitchen remodel increases the value of your home by 50 cents. Some contractors will give you an estimate based on what they think you want done, and work completed under these circumstances is almost guaranteed to cost more.</p>
    <ul>
        <li>It be very specific about what you want done, and spell it out in the contract — right down to the materials you’d like used. </li>
        <li>Make sure that contractors’ estimates include the full scope of your project.</li>
    </ul>
   `,
  requirement: `
   <p>Every dollar you spend on a kitchen remodel increases the value of your home by 50 cents. Some contractors will give you an estimate based on what they think you want done, and work completed under these circumstances is almost guaranteed to cost more. </p>
    <p>It be very specific about what you want done, and spell it out in the contract — right down to the materials you’d like used. Make sure that contractors’ estimates include the full scope of your project.</p>`,
  offered: `
    <p>You have to be very specific about what you want done, and spell it out in the contract — right down to the materials you’d like used. Make sure that contractors’ estimates include the full scope of your project.</p>
    <p>It be very specific about what you want done, and spell it out in the contract — right down to the materials you’d like used. Make sure that contractors’ estimates include the full scope of your project.</p>
    `,
  job_overview: {
    salary: "Thỏa thuận",
    ranking: "junior",
    experience: "Tối thiểu 1 năm",
    work_methods: "Full-Time",
    quantity_candidates: "3 ứng viên",
    place: "Hà Nội",
    dateline_submit: new Date().toLocaleDateString("vi-vn"),
  },
  related_jobs: jobFakes.jobs.filter((item, index) => {
    return index < 2;
  }),
};
const JobDetail = ({ data }) => {
    const dispatch = useDispatch();
  return (
    <>
      <BannerPage
        style={{ background: `url("${data.job_title.url_cover}")` }}
        classNameBanner={styles.banner}
        classNameBox={styles.box}
        title={data.job_title.title}
      >
        <div
          className={`d-flex justify-content-center align-items-center ${styles.types}`}
        >
          {data.job_title.types.map((type, index) => {
            return <Type key={index}>{type}</Type>;
          })}
        </div>
      </BannerPage>
      <LayoutContainer>
        <div className={`d-flex justify-content-between ${styles.grid}`}>
          <div className={styles["left-side"]}>
            <Description description={data.description} />
            <Requiredment
              requirement={data.requirement}
              title="Yêu cầu công việc"
            />
            <Requiredment requirement={data.offered} title="Quyền lợi" />
            <Button options={{
                onClick: () => dispatch(modelActions.openModelHandler())
            }} className={styles["submit-btn"]}>Nộp đơn ứng tuyển</Button>
          </div>
          <div className={styles["container-right"]}>
            <Overview overview={data.job_overview} />
            <div className={styles.share}>
              <h4>Chia sẻ công việc này</h4>
              <div className={`d-flex align-items-center ${styles.line}`}>
                <span>
                  <Image
                    src="/facebook-square-icon.svg"
                    alt=""
                    width="36px"
                    height="36px"
                  />
                </span>
                <span>
                  <Image
                    src="/linkedln-white.svg"
                    width="20px"
                    height="20px"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <RelatedWork relatedWork={data.related_jobs}/>
      </LayoutContainer>
      <FormCV/>
    </>
  );
};
export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          jobId: "1",
        },
      },
    ],
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params }) => {
  return {
    props: {
      data: dataFake,
    },
  };
};
export default JobDetail;
