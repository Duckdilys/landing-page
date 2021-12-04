import React from "react";
import styles from "./FormEmail.module.scss";
import { Input, Button } from "../../container";
import useInput from "../../../hook/use-input";
import useFetch from "../../../hook/use-fetch";
import { ApiCooperation } from "../../../config/ApiCooperation";
import ModelSuccess from "../../container/ModelSuccess/ModelSuccess";
const FormEmail = () => {
  const { isValid, inputChangeHandler, inputIsTouchHandler, value, isTouched } =
    useInput((value) => value.trim().length > 0 && value.includes("@"));
  const { isLoading, data, fetchDataFromServer, resetAllHandler } = useFetch();
  const submitFormHandler = (event) => {
    event.preventDefault();
    if(!isValid){
      return;
    }
    fetchDataFromServer({
      url: ApiCooperation,
      method: 'POST',
      data: {
        email: value
      }
    })
  };
  return (
    <>
    <form onSubmit={submitFormHandler} className={styles.container}>
      <h6>Nhận thông báo việc làm</h6>
      <p>Nhận thông báo về Email khi có việc làm mới.</p>
      <Input
        className={styles.input}
        input={{
          onChange: inputChangeHandler,
          onBlur: inputIsTouchHandler,
          value: value,
          type: "email",
          required: true,
          autoComplete: "off",
          placeholder: "Nhập địa chỉ Email",
        }}
        error={!isValid && isTouched && "Email không hợp lệ"}
      />
      <Button
        options={{
          disabled: !isValid,
        }}
      >
        Tạo thông báo
      </Button>
    </form>
    <ModelSuccess condition={!isLoading && data?.code < 400} resetStateHandler={resetAllHandler}/>
    </>
  );
};

export default FormEmail;
