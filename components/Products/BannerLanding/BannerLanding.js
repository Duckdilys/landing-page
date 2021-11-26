import React, { useRef } from "react";
import {
  ContainerSmall,
  Image,
  Button,
  Input,
  Grid,
  TextArea,
  Loading,
} from "../../container";
import styles from "./BannerLanding.module.scss";
import Link from "next/link";
import useFetch from "../../../hook/use-fetch";
import { ApiApplicant } from "../../../config/ApiApplicant";
import { ValidateLengthInput } from "../../../util";
import useInput from "../../../hook/use-input";
const BannerLanding = () => {
  const { fetchDataFromServer, data, error, status } = useFetch();
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const contentRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    const addressValue = addressRef.current.value;
    const phoneValue = phoneRef.current.value;
    const emailValue = emailRef.current.value;
    const contentValue = contentRef.current.value;
    
  };
  return (
    <ContainerSmall className={styles.container}>
      <div className={`position-relative w-100 ${styles.img}`}>
        <Image src={"/landing_page.png"} alt="" />
        <div className={`${styles.text} text-center`}>
          <h5>Tìm hiểu thêm thông tin về Giải pháp của chúng tôi</h5>
          <Link href="https://www.noron.vn/" passHref={true}>
            <a>
              <Button>Truy cập website</Button>
            </a>
          </Link>
        </div>
      </div>
      <form onSubmit={submitFormHandler} className={styles.contact}>
        <h4>Liên hệ & Hợp tác</h4>
        <Grid className={styles.grid}>
          <Input
            ref={nameRef}
            input={{
              type: "text",
              placeholder: "Họ và tên",
            }}
          />
          <Input
            ref={addressRef}
            input={{
              type: "text",
              placeholder: "Địa chỉ",
            }}
          />
          <Input
            ref={phoneRef}
            input={{
              type: "number",
              placeholder: "Số điện thoại",
            }}
          />
          <Input
            ref={emailRef}
            input={{
              type: "email",
              placeholder: "Email",
            }}
          />
          <TextArea
            ref={contentRef}
            textarea={{
              placeholder: "Nội dung",
              cols: "10",
              rows: "5",
            }}
          ></TextArea>
        </Grid>
        <div className={`${styles.submit} text-center`}>
          <Button>Gửi nội dung</Button>
        </div>
        {/* <div className="text-center">
          <Loading />
        </div> */}
      </form>
    </ContainerSmall>
  );
};

export default BannerLanding;
