import React, { useCallback } from "react";
import Image from "next/image";
import { Input, Select, Button } from "../../container";
import useInput from "../../../hook/use-input";
import styles from "./FIndPosition.module.scss";
const FindPosition = () => {
  const functionCheckValidate = useCallback((value) => {
    return value.trim().length > 0;
  }, []);
  const { isValid, inputIsTouchHandler, inputChangeHandler, isTouched, value } =
    useInput((value) => functionCheckValidate(value));
  return (
    <form className={`${styles.filter}`}>
      <Input
        className={styles.input}
        input={{
          type: "text",
          required: true,
          autoComplete: "off",
          placeholder: "Tên vị trí",
          value: value,
          onChange: inputChangeHandler,
          onBlur: inputIsTouchHandler,
        }}
      >
        <Image src={"/search-icon.svg"} alt="" width="18px" height="18px" />
      </Input>
      <Select listValue={["A", "B", "C"]} firstTitle="Ngành nghề" />
      <Select listValue={["A", "B", "C"]} firstTitle="Cấp bậc" />
      <Select listValue={["A", "B", "C"]} firstTitle="Hình thức làm việc" />
      <div className={styles.button}>
        <Button className={`w-100`}>Tìm kiếm việc làm</Button>
      </div>
    </form>
  );
};

export default FindPosition;
