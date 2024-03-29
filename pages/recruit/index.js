import React, { useCallback, useEffect, useState } from "react";
import {
  BannerPage,
  ContainerSmall,
  Grid,
  BreadCrumbScript,
} from "../../components/container";
import FindPosition from "../../components/Recruit/FindPosition/FindPosition";
import FormEmail from "../../components/Recruit/FormEmail/FormEmail";
import Positions from "../../components/Recruit/Positions/Positions";
import styles from "../../components/Recruit/style/styles.module.scss";
import { getJobs } from "../../service";
import { checkUserIsBot } from "../../util";
import { useRouter } from "next/router";
import useFetch from "../../hook/use-fetch";
import { ApiJob } from "../../config/ApiJob";

const Recruit = ({ jobs, totalJobs, allCareer, allMethods, allRanked }) => {
  const router = useRouter();
  const [job, setJob] = useState(jobs);
  const [totalJob, setTotalJob] = useState(totalJobs);
  const [queryFilter, setQueryFilter] = useState(null);
  const { query, pathname } = useRouter();
  
  const page = +query.page || 1;
  const { fetchDataFromServer, error, data: dataNews, isLoading } = useFetch();

  const setQueryFilterHandler = useCallback((query) => {
    setQueryFilter(query);
    router.push(`?page=${1}`, null, {
      scroll: false,
      shallow: true
    });
  }, []);
  useEffect(() => {
    fetchDataFromServer({
      url: ApiJob,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        page: page,
        page_size: 8,
        keyword: "",
        sorts: [
          {
            property: "end_time",
            direction: "DESC",
          },
        ],
        filters: queryFilter,
      },
    });
  }, [fetchDataFromServer, page, queryFilter]);

  useEffect(() => {
    if (isLoading || error) {
      return;
    }
    if (!isLoading && dataNews) {
      setJob(dataNews.result.items);
      setTotalJob(dataNews.result.total);
    }
  }, [isLoading, error, dataNews]);
  return (
    <>
      <BreadCrumbScript
        dataElement={jobs.map((item) => {
          return {
            name: item.title,
            href: `${pathname}/${item.id}/${item.seo_id}`,
          };
        })}
        keywords={`recruits,recruitment,mhdigital,MH Digital`}
        title={"Tuyển dụng | MH - Digital"}
      />
      <BannerPage
        classNameBox={`text-center ${styles.box}`}
        title="cơ hội nghề nghiệp"
        style={{ background: `url('/static_recruit.png')` }}
      >
        <FindPosition
          setQueryFilterHandler={setQueryFilterHandler}
          allCareer={allCareer}
          allMethods={allMethods}
          allRanked={allRanked}
        />
      </BannerPage>
      <ContainerSmall className={styles.container}>
        <Grid className={styles.grid}>
          <FormEmail />
          <Positions
            isLoading={isLoading}
            positions={job}
            page={page}
            totalDocuments={totalJob}
          />
        </Grid>
      </ContainerSmall>
    </>
  );
};

export const getServerSideProps = async ({ req, query }) => {
  const userIsBot = checkUserIsBot(req);
  if (userIsBot) {
    return;
  }
  const page = +query.page || 1;
  const data = await getJobs({
    page_size: 8,
    page: page,
    keyword: "",
    sorts: [
      // {
      //   property: "created_at",
      //   direction: "DESC",
      // },
      {
        property: "end_time",
        direction: "DESC"
      }
    ],
  });
  const getAllJobs = await getJobs({});
  if (data.code >= 400 || getAllJobs.code >= 400) {
    return {
      notFound: true,
    };
  }

  const getCareer = [
    ...new Set(
      data?.result?.items?.map((item) => {
        return item?.career;
      })
    ),
  ];

  const getRanked = [
    ...new Set(
      data?.result?.items?.map((item) => {
        return item?.level;
      })
    ),
  ];

  const getMethodsWorking = [
    ...new Set(
      data?.result?.items?.map((item) => {
        return item?.work_type;
      })
    ),
  ];
  return {
    props: {
      jobs: data?.result?.items,
      totalJobs: data?.result?.total,
      isDisabledAnimation: userIsBot,
      allCareer: getCareer,
      allRanked: getRanked,
      allMethods: getMethodsWorking,
    },
  };
};
export default Recruit;
