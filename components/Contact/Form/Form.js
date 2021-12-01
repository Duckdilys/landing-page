import React, { useRef } from "react";
import { Grid, Button, TextArea, Loading } from "../../container";
import Image from "next/image";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import { ValidateLengthInput } from "../../../util";
import useMedia from "../../../hook/use-media";
import useFetch from "../../../hook/use-fetch";
import { ApiCooperation } from "../../../config/ApiCooperation";
import { CSSTransition } from "react-transition-group";
import OverlayBG from "../../container/OverlayBG/OverlayBG";
import FixLayout from "../../container/FixLayout/FixLayout";
const renderInput = [
  {
    validateInput: (value) => Boolean(ValidateLengthInput(value)),
    input: {
      type: "text",
      autoComplete: "off",
      placeholder: "Tên",
      required: true,
    },
    error: "Tên không được để trống",
  },
  {
    validateInput: (value) => ValidateLengthInput(value),
    input: {
      type: "text",
      autoComplete: "off",
      placeholder: "Địa chỉ",
      required: true,
    },
    error: "Địa chỉ không được để trống",
  },
  {
    validateInput: (value) => ValidateLengthInput(value),
    input: {
      type: "number",
      autoComplete: "off",
      placeholder: "Số điện thoại",
      minLength: "1",
      maxLength: "11",
      required: true,
    },
    error: "Số điện thoại không được để trống",
  },
  {
    validateInput: (value) => ValidateLengthInput(value) && value.includes("@"),
    input: {
      type: "email",
      autoComplete: "off",
      placeholder: "Email",
      required: true,
    },
    error: "Email không hợp lệ",
  },
];
const Form = ({ contact }) => {
  const { fetchDataFromServer, data, error, isLoading, resetAllHandler } =
    useFetch();
  
  const matchMobile = useMedia("(max-width: 768px)");
  const icon = [
    "/home-dark-icon.svg",
    "/email-icon.svg",
    "/phone-side-icon.svg",
  ];
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const contentRef = useRef();
  const totalRef = [nameRef, addressRef, phoneRef, emailRef, contentRef];

  const submitFormHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current?.value;
    const address = addressRef.current?.value;
    const phone = phoneRef.current?.value;
    const email = emailRef.current?.value;
    const content = contentRef.current?.value;

    fetchDataFromServer({
      url: ApiCooperation,
      method: "POST",
      data: {
        full_name: name,
        phone_name: phone,
        email: email,
        address: address,
        about: content,
      },
    });
  };
  return (
    <>
      <form onSubmit={submitFormHandler} className={styles.form}>
        <h4>Liên hệ với chúng tôi</h4>
        <Grid className={styles.grid}>
          {renderInput.map((input, index) => {
            return (
              <Input
                ref={totalRef[index]}
                className={styles.input}
                key={index}
                {...input}
              />
            );
          })}
          <TextArea
            ref={contentRef}
            textarea={{
              rows: "4",
              placeholder: "Nội dung",
            }}
            className={`w-100 ${styles.text}`}
          />
          {isLoading && (
            <div className="text-center pt-3">
              <Loading />
            </div>
          )}
        </Grid>
        <div className={styles.button}>
            <Button
              options={{
                type: "submit",
              }}
            >
              Gửi nội dung
            </Button>
          </div>
      </form>
      <CSSTransition
        in={!isLoading && data}
        unmountOnExit
        mountOnEnter
        timeout={500}
        classNames="form-open"
      >
        <>
          <FixLayout className="text-center">
            {data && +data.code < 400 && (
              <p>
                Chúng tôi đã nhận được thông tin và sẽ liên hệ tới bạn trong
                thời gian sớm nhất
              </p>
            )}
            {data && +data.code >= 400 && <p>Có lỗi xảy ra, xin thử lại sau</p>}
            <div className="text-end pt-5">
              <Button
                options={{
                  onClick: resetAllHandler,
                }}
              >
                Xác nhận
              </Button>
            </div>
          </FixLayout>
          <OverlayBG onClick={resetAllHandler} />
        </>
      </CSSTransition>
    </>
  );
};

export default Form;
