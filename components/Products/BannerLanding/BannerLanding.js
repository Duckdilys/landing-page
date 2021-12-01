import React, { useRef } from "react";
import { useRouter } from "next/router";
import {
  ContainerSmall,
  Image,
  Button,
  Input,
  Grid,
  TextArea,
  Loading,
  OverlayBG,
} from "../../container";
import styles from "./BannerLanding.module.scss";
import useFetch from "../../../hook/use-fetch";
import { ApiCooperation } from "../../../config/ApiCooperation";
import { CSSTransition } from "react-transition-group";
import useInput from "../../../hook/use-input";
import FixLayout from "../../container/FixLayout/FixLayout";
const BannerLanding = ({ website }) => {
  const { fetchDataFromServer, data, error, isLoading, resetAllHandler } = useFetch();
  const { isValid, isTouched, inputIsTouchHandler, inputChangeHandler, value } =
    useInput((value) => value.trim().length > 0 && value.includes("@"));
  const router = useRouter();
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const contentRef = useRef();
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    const nameValue = nameRef.current.value;
    const addressValue = addressRef.current.value;
    const phoneValue = phoneRef.current.value;
    const emailValue = emailRef.current.value;
    const contentValue = contentRef.current.value;
    fetchDataFromServer({
      url: ApiCooperation,
      method: "POST",
      data: {
        full_name: nameValue,
        phone_name: phoneValue,
        email: emailValue,
        address: addressValue,
        about: contentValue,
        product_idd: +router.query.id,
      },
    });
  };
  console.log(!isLoading && data);
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
            <Input
              ref={nameRef}
              input={{
                type: "text",
                placeholder: "Họ và tên *",
              }}
            />
            <Input
              ref={addressRef}
              input={{
                type: "text",
                placeholder: "Địa chỉ *",
              }}
            />
            <Input
              ref={phoneRef}
              input={{
                type: "number",
                placeholder: "Số điện thoại *",
              }}
            />
            <Input
              ref={emailRef}
              input={{
                type: "email",
                placeholder: "Email *",
                onChange: inputChangeHandler,
                onBlur: inputIsTouchHandler,
                value: value,
              }}
              error={!isValid && isTouched && "Email không hợp lệ"}
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
          {isLoading && (
            <div className="text-center pt-3">
              <Loading />
            </div>
          )}
          {!isLoading && data?.code >= 400 && (
            <p className="text-center pt-3 error__text">
              Không thể gửi thông tin, xin thử lại sau!
            </p>
          )}
          {!isLoading && data?.code <= 400 && (
            <p className="text-center pt-3">
              Chúng tôi đã nhận được thông tin và sẽ liên hệ trong thời gian sớm
              nhất
            </p>
          )}
          {/* <div className="text-center">
          <Loading />
        </div> */}
        </form>
      </ContainerSmall>
      <CSSTransition
        in={!isLoading && data}
        timeout={750}
        unmountOnExit
        mountOnEnter
        classNames="form-open"
      >
        <FixLayout>
          {data?.code >= 400 && <p>Có lỗi xảy ra, xin thử lại sau</p>}
          {data?.code < 400 && (
            <div>
              <p>Chúng tôi đã nhận được thông tin của bạn</p>
              <p>Chúng tôi sẽ liên hệ với bạn sau 2-3 ngày làm việc</p>
            </div>
          )}
        </FixLayout>
      </CSSTransition>
      {!isLoading && data && <OverlayBG onClick={resetAllHandler}/>}
    </>
  );
};

export default BannerLanding;
