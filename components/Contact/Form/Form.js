import React from "react";
import { Grid, Button } from "../../container";
import Image from "next/image";
import styles from "./Form.module.scss";
import Link from "next/link";
import Input from "../Input/Input";
import { ValidateLengthInput } from "../../../util";
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
  const icon = [
    "/home-dark-icon.svg",
    "/email-icon.svg",
    "/phone-side-icon.svg",
  ];
  return (
    <Grid className={styles.grid}>
      <div className={styles.information}>
        <h5>Thông tin liên hệ</h5>
        <ul>
          {Object.values(contact).map((content, index) => {
            return (
              <li className="d-flex align-items-center" key={index}>
                <Image src={icon[index]} alt="" width="23px" height="23px" />
                <span>{content}</span>
              </li>
            );
          })}
          <li className={`d-flex align-items-center ${styles.social}`}>
            <Link href="/" passHref={true}>
              <a>
                <Image
                  src="/facebook-white-icon.svg"
                  alt=""
                  width="10px"
                  height="20px"
                />
              </a>
            </Link>
            <Link href="/" passHref={true}>
              <a>
                <Image
                  src="/linkedln-white.svg"
                  alt=""
                  width="17px"
                  height="17px"
                />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <form className={styles.form}>
        {renderInput.map((input, index) => {
          return <Input key={index} {...input} />;
        })}
        <textarea
          rows="4"
          placeholder="Nội dung"
          className={`w-100 ${styles.text}`}
        />
        <div className={styles.button}>
          <Button>Gửi nội dung</Button>
        </div>
      </form>
    </Grid>
  );
};

export default Form;
