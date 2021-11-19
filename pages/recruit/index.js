import React, { useEffect, useState } from "react";
import {
  BannerPage,
  ContainerSmall,
  Grid,
  Pagination,
} from "../../components/container";
import FindPosition from "../../components/Recruit/FindPosition/FindPosition";
import FormEmail from "../../components/Recruit/FormEmail/FormEmail";
import Positions from "../../components/Recruit/Positions/Positions";
import styles from "../../components/Recruit/style/styles.module.scss";
import { getJobs } from "../../service";
import { checkUserIsBot } from "../../util";
import { useRouter } from "next/router";
import useFetch from '../../hook/use-fetch';
import { ApiJob } from "../../config/ApiJob";
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
const Recruit = ({ data, jobs, totalJobs }) => {
  const [job, setJob] = useState(jobs);
  const [totalJob, setTotalJob] = useState(totalJobs);

  const { query } = useRouter();
  const page = +query.page || 1;

  const {fetchDataFromServer, error, data: dataNews, isLoading} = useFetch();
  useEffect(() => {
    fetchDataFromServer({
      url: ApiJob,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        page: page,
        page_size: 8,
        keyword: "",
        sorts: [
          {
            property: "created_at",
            direction: "DESC"
          }
        ]
      }
    })
  }, [fetchDataFromServer, page]);
  useEffect(() => {
    if(isLoading || error){
      return;
    }
    if(!isLoading && dataNews){
      setJob(dataNews.result.items);
      setTotalJob(dataNews.result.total);
    }
  }, [isLoading, error, dataNews]);
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
      <ContainerSmall className={styles.container}>
        <Grid>
          <FormEmail />
          <Positions positions={job} page={page} totalDocuments={totalJob} />
        </Grid>
      </ContainerSmall>
    </>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const userIsBot = checkUserIsBot(req);
  const page = +query.page || 1;
  const data = await getJobs({
    page_size: 8,
    page: page,
    keyword: "",
    sorts: [
      {
        property: "createdAt",
        direction: "DESC",
      },
    ],
  });
  if (data.code >= 400) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data: dataFake,
      jobs: data?.result?.items,
      totalJobs: data?.result?.total,
      isDisabledAnimation: userIsBot,
    },
  };
};
export default Recruit;
