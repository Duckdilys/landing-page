import React, { useEffect } from "react";
import {
  BannerPage,
  LayoutContainer,
  Button,
  BreadCrumbScript,
} from "../../../components/container";
import { useDispatch } from "react-redux";
import { modelActions } from "../../../store/slices/model-slice";
import Type from "../../../components/Recruit/Positions/Position/Type/Type";
import styles from "../../../components/JobDetail/styles.module.scss";
import Description from "../../../components/JobDetail/Description/Description";
import Requiredment from "../../../components/JobDetail/Requiredment/Requiredment";
import Overview from "../../../components/JobDetail/Overview/Overview";
import RelatedWork from "../../../components/JobDetail/RelatedWork/RelatedWork";
import FormCV from "../../../components/JobDetail/FormCV/FormCV";
import { checkUserIsBot } from "../../../util";
import axiosConfig from "../../../service/base";
import { ApiJob } from "../../../config/ApiJob";
import useMedia from "../../../hook/use-media";
import Share from "../../../components/JobDetail/Share/Share";
import OutDateCV from "../../../components/JobDetail/OutDateCV/OutDateCV";
const JobDetail = ({ data_job, related_jobs }) => {
  const matchMobile = useMedia("(max-width: 991px)");
  const dispatch = useDispatch();
  const { end_time } = data_job;
  const timeIsExpire = Date.now() > end_time;
  return (
    <>
      <BreadCrumbScript
      keywords={`mhdigital,MH Digital,job,${data_job?.career},${data_job?.title}`}
        imageContent={data_job?.cover_url}
        dataElement={Array.isArray(related_jobs) ? related_jobs?.map(job => {
          return {
            name: job.title,
            href: `/recruit/${job.id}`
          }
        }) : []}
        title={`Tuyển dụng - ${data_job.title.toUpperCase()} | MH - Digital`}
      >
        <meta property="og:image" content={data_job?.cover_url || ""} />
        <meta
          property="og:image:secure_url"
          content={data_job?.cover_url || ""}
        />
      </BreadCrumbScript>
      <BannerPage
        style={{ background: `url("/job_description.png")` }}
        classNameBanner={styles.banner}
        classNameBox={styles.box}
        title={data_job.title}
      >
        <div
          className={`d-flex justify-content-center align-items-center ${styles.types}`}
        >
          {[data_job?.career, data_job?.level, data_job?.work_type].map(
            (item, key) => {
              return <Type key={key}>{item}</Type>;
            }
          )}
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
            <Requiredment
              requirement={data_job?.job_benefits || ""}
              title="Quyền lợi"
            />

            {Date.now() < end_time && (
              <Button
                options={{
                  onClick: () => dispatch(modelActions.openModelHandler()),
                }}
                className={styles["submit-btn"]}
              >
                Ứng tuyển ngay
              </Button>
            )}
            {timeIsExpire && <OutDateCV />}
            {matchMobile && <Share />}
          </div>
          <div className={styles["container-right"]}>
            <Overview overview={data_job} timeIsExpire={timeIsExpire}/>
            {!matchMobile && <Share />}
          </div>
        </div>
        <RelatedWork related_jobs={related_jobs} />
      </LayoutContainer>
      <FormCV
        timeIsExpire={timeIsExpire}
        time_end={data_job.end_time}
        id={data_job.id}
      />
    </>
  );
};
export const getServerSideProps = async ({ params, req }) => {
  const { id } = params;
  const userIsBot = checkUserIsBot(req);
  const getJobById = await axiosConfig({
    url: ApiJob,
    params: {
      id: id,
    },
  });
  const getJobByKeyword = await axiosConfig({
    url: ApiJob,
    method: "POST",
    data: {
      page: 1,
      page_size: 2,
      keyword: "",
      sorts: [
        {
          property: "created_at",
          direction: "DESC",
        },
      ],
      filters: [
        {
          name: "career",
          operation: "eq",
          value: getJobById.result.career,
        },
      ],
    },
  });
  if (getJobById.code >= 400 || getJobByKeyword.code >= 400) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      isDisabledAnimation: userIsBot,
      data_job: getJobById.result,
      related_jobs: getJobByKeyword?.result?.items,
    },
  };
};
export default JobDetail;
