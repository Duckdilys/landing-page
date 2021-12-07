import React, { useRef } from "react";
import { Grid, InputRequiredValidate, Button, TextArea, Loading } from "..";
import { ValidateLengthInput } from "../../../util";
import styles from "../../Products/BannerLanding/BannerLanding.module.scss";

const FormContact = ({ isLoading }) => {
  return (
    <>
      <Grid className={styles.grid}>
        <div className={styles["grid-input"]}>
          <InputRequiredValidate
            input={{
              type: "text",
              placeholder: "Họ và tên *",
            }}
            cb={(value) => ValidateLengthInput(value, 0)}
            errorMessage="Tên không được phép để trống"
            getStatus={setNameIsValid}
          />
          <InputRequiredValidate
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
    </>
  );
};

export default FormContact;
