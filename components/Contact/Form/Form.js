import React, { useState } from "react";
import { FormContact } from "../../container";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import { ValidateLengthInput } from "../../../util";
import useMedia from "../../../hook/use-media";
import useFetch from "../../../hook/use-fetch";
import { ApiCooperation } from "../../../config/ApiCooperation";
import ModelSuccess from "../../container/ModelSuccess/ModelSuccess";
const Form = ({ contact }) => {
  const { fetchDataFromServer, data, error, isLoading, resetAllHandler } =
    useFetch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const submitFormHandler = (event) => {
    const nameIsValid = ValidateLengthInput(name, 0);
    const phoneIsValid = ValidateLengthInput(phone, 0);
    const emailIsValid = ValidateLengthInput(email, 0) && email.trim().includes('@');
    if(!nameIsValid || !phoneIsValid || !emailIsValid) {
      return;
    }
    event.preventDefault();
    fetchDataFromServer({
      url: ApiCooperation,
      method: "POST",
      data: {
        full_name: name,
        phone_name: phone,
        email: email,
        about: content,
      },
    });
  }
  return (
    <>
      <form onSubmit={submitFormHandler} className={styles.form}>
        <h4>Liên hệ với chúng tôi</h4>
        <FormContact
          getContentHandler={setContent}
          getEmailHandler={setEmail}
          getNameHandler={setName}
          getPhoneHandler={setPhone}
          isLoading={isLoading}
          classGrid={styles["form-grid"]}
          classBtn={styles.btn}
          className={styles.grid}
        />
      </form>
      <ModelSuccess
        condition={(!isLoading && data?.code) || (!isLoading && error)}
        title={data?.code >= 400 || error ? "Gửi thông tin thất bại" : null}
        contentMessage={
          data?.code >= 400 || error
            ? "Có vẻ như bạn đang gặp gián đoạn về đường truyền Internet. Vui lòng kiểm tra kết nối và thử lại!"
            : null
        }
        error={data?.code >= 400 || error}
        resetStateHandler={resetAllHandler}
      />
    </>
  );
};

export default Form;
