import React, { useRef, useState } from "react";
import { Grid, Button, TextArea, Loading } from "../../container";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import { ValidateLengthInput } from "../../../util";
import useMedia from "../../../hook/use-media";
import useFetch from "../../../hook/use-fetch";
import { ApiCooperation } from "../../../config/ApiCooperation";
import ModelSuccess from "../../container/ModelSuccess/ModelSuccess";
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
  const [nameIsValid, setNameIsValid] = useState(false);
  const [addressIsValid, setAddressIsValid] = useState(false);
  const [phoneIsValid, setPhoneIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
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

    if(!nameIsValid || !addressIsValid || !phoneIsValid || !emailIsValid) {
      return;
    }
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
  const functionCheckValid = [setNameIsValid, setAddressIsValid, setPhoneIsValid, setEmailIsValid];
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
                setStatus={functionCheckValid[index]}
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
      <ModelSuccess
        condition={!isLoading && (data?.code || error)}
        title={data?.code >= 400 || error ? "Gửi thông tin thất bại" : null}
        contentMessage={data?.code >= 400 || error ? "Có vẻ như bạn đang gặp gián đoạn về đường truyền Internet. Vui lòng kiểm tra kết nối và thử lại!" : null}
        error={data?.code >= 400 || error}
        resetStateHandler={resetAllHandler}
      />
    </>
  );
};

export default Form;
