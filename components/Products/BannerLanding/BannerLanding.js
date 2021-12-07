import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  ContainerSmall,
  Image,
  Button,
  Input,
  Grid,
  TextArea,
  Loading,
  InputRequiredValidate,
} from "../../container";
import styles from "./BannerLanding.module.scss";
import useFetch from "../../../hook/use-fetch";
import { ApiCooperation } from "../../../config/ApiCooperation";
import useInput from "../../../hook/use-input";
import ModelSuccess from "../../container/ModelSuccess/ModelSuccess";
import { ValidateLengthInput } from "../../../util";
const BannerLanding = ({ website, isLanding }) => {
  const { fetchDataFromServer, data, error, isLoading, resetAllHandler } =
    useFetch();
  const [nameIsValid, setNameIsValid] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const router = useRouter();
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const contentRef = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    const phoneValue = phoneRef.current.value;
    const emailValue = emailRef.current.value;
    const contentValue = contentRef.current.value;
    if (!nameIsValid || !phoneIsValid || !addressIsValid || !emailIsValid) {
      return;
    }
    fetchDataFromServer({
      url: ApiCooperation,
      method: "POST",
      data: {
        full_name: nameValue,
        phone_name: phoneValue,
        email: emailValue,
        about: contentValue,
        product_id: +router.query.id,
      },
    });
  };
  return (
    <>
      <ContainerSmall className={styles.container}>
        <div className={`position-relative w-100 ${styles.img}`}>
          <Image src={"/landing_page.png"} alt="" />
          <div className={`${styles.text} text-center`}>
            <h5 className={website ? styles.space : ""}>
              Tìm hiểu thêm thông tin về Giải pháp của chúng tôi
            </h5>

            {website && (
              <a href={website} target="_blank" rel="noreferrer">
                <Button>Truy cập website</Button>
              </a>
            )}
          </div>
        </div>
        <form onSubmit={submitFormHandler} className={styles.contact}>
          <h4>Liên hệ & Hợp tác</h4>
          <Grid className={styles.grid}>
            <div className={styles["grid-input"]}>
              <InputRequiredValidate
                ref={nameRef}
                input={{
                  type: "text",
                  placeholder: "Họ và tên *",
                }}
                cb={(value) => ValidateLengthInput(value, 0)}
                errorMessage="Tên không được phép để trống"
                getStatus={setNameIsValid}
              />
              <InputRequiredValidate
                ref={phoneRef}
                input={{
                  type: "number",
                  placeholder: "Số điện thoại *",
                  minLength: 1,
                  maxLength: 11,
                }}
                cb={(value) => ValidateLengthInput(value, 9)}
                errorMessage="Số điện thoại không hợp lệ"
                getStatus={setPhoneIsValid}
              />
              <InputRequiredValidate
                ref={emailRef}
                input={{
                  type: "email",
                  placeholder: "Email *",
                }}
                cb={(value) =>
                  ValidateLengthInput(value, 0) && value.trim().includes("@")
                }
                errorMessage="Email không hợp lệ"
                getStatus={setEmailIsValid}
              />
            </div>
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
          {isLoading && (
            <div className="text-center pt-3">
              <Loading />
            </div>
          )}
        </form>
      </ContainerSmall>
      <ModelSuccess
        condition={!isLoading && (data?.code || error)}
        error={!isLoading && (data?.code >= 400 || error)}
        contentMessage={
          data?.code >= 400 || error
            ? "Có vẻ như bạn đang gặp gián đoạn về đường truyền Internet. Vui lòng kiểm tra kết nối và thử lại!"
            : null
        }
        title={data?.code >= 400 || error ? "Gửi thông tin thất bại" : null}
        resetStateHandler={resetAllHandler}
      />
    </>
  );
};

export default BannerLanding;
