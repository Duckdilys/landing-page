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
import { checkUserIsBot } from "../../util";
import axiosConfig from "../../service/base";
import { ApiJob } from "../../config/ApiJob";
const dataFake = {
  related_jobs: jobFakes.jobs.filter((item, index) => {
    return index < 2;
  }),
};
const JobDetail = ({ data, data_job }) => {
  const dispatch = useDispatch();
  return (
    <>
      <BannerPage
        style={{ background: `url("/job_description.png")` }}
        classNameBanner={styles.banner}
        classNameBox={styles.box}
        title={data_job.title}
      >
        <div
          className={`d-flex justify-content-center align-items-center ${styles.types}`}
        >
          <Type>{data_job.level}</Type>
        </div>
      </BannerPage>
      <LayoutContainer className={styles.container}>
        <div className={`d-flex justify-content-between ${styles.grid}`}>
          <div className={styles["left-side"]}>
            <Description description={data_job.job_description} />
            <Requiredment
              requirement={data_job?.job_requirements || ""}
              title="Yêu cầu công việc"
            />
            <Requiredment requirement={data_job?.job_benefits || ""} title="Quyền lợi" />
            <Button
              options={{
                onClick: () => dispatch(modelActions.openModelHandler()),
              }}
              className={styles["submit-btn"]}
            >
              Nộp đơn ứng tuyển
            </Button>
          </div>
          <div className={styles["container-right"]}>
            <Overview overview={data_job} />
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
        <RelatedWork relatedWork={data.related_jobs} />
      </LayoutContainer>
      <FormCV />
    </>
  );
};
export const getServerSideProps = async ({params, req}) => {
  const { jobId } = params;
  const userIsBot = checkUserIsBot(req);
  const getJobById = await axiosConfig({
    url: ApiJob,
    params: {
      id: jobId
    }
  });
  if(getJobById.code >= 400){
    return {
      notFound: true
    }
  }
  return {
    props: {
      data: dataFake,
      isDisabledAnimation: userIsBot,
      data_job: getJobById.result
    },
  };
};
export default JobDetail;
