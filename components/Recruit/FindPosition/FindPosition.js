import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Input, Select, Button } from "../../container";
import useInput from "../../../hook/use-input";
import styles from "./FIndPosition.module.scss";
import useMedia from "../../../hook/use-media";
const helperFilterHandler = (name, value) => {
  return {
    name: name,
    operation: "eq",
    value: value,
  };
};

const FindPosition = ({
  setQueryFilterHandler,
}) => {
  const isMobile = useMedia('(max-width: 1200px)');
  const functionCheckValidate = useCallback((value) => {
    return value.trim().length > 0;
  }, []);
  const { isValid, inputIsTouchHandler, inputChangeHandler, value } =
    useInput((value) => functionCheckValidate(value));

  const positionRef = useRef();
  const [workType, setWorkType] = useState(null);
  const [level, setLevel] = useState(null);
  const [method, setMethod] = useState(null);
  const submitFormHandler = async (event) => {
    event.preventDefault();
    const position = positionRef.current.value;
    const filter = [];
    if (workType && workType !== "Tất cả") {
      filter.push(helperFilterHandler("career", workType || undefined));
    }
    if (level && level !== "Tất cả") {
      filter.push(helperFilterHandler("level", level || undefined));
    }
    if (method && method !== "Tất cả") {
      filter.push(helperFilterHandler("work_type", method || undefined));
    }
    if(position.trim().length > 0){
      filter.push(helperFilterHandler('title', position || undefined));
    }
    setQueryFilterHandler(filter);
  };
  return (
    <form onSubmit={submitFormHandler} className={`${styles.filter}`}>
      <Input
        ref={positionRef}
        className={styles.input}
        input={{
          type: "text",
          autoComplete: "off",
          placeholder: "Tên vị trí",
          value: value,
          onChange: inputChangeHandler,
          onBlur: inputIsTouchHandler,
        }}
      >
        <Image src={"/search-icon.svg"} alt="" width={isMobile ? "16px" : "18px"} height={isMobile ? "16px" : "18px"} />
      </Input>
      <Select
        setValueByFn={setWorkType}
        listValue={["Tất cả", "Phần mềm", "Kinh doanh", "Back Office"]}
        firstTitle="Ngành nghề"
      />
      <Select
        listValue={["Tất cả", "Intern", "Fresher", "Junior", "Middle", "Middle Senior", "Senior"]}
        setValueByFn={setLevel}
        firstTitle="Cấp bậc"
      />
      <Select
        listValue={["Tất cả", "Full-time", "Part-time"]}
        setValueByFn={setMethod}
        firstTitle="Hình thức làm việc"
      />
      <div className={styles.button}>
        <Button options={{ type: "submit" }} className={`w-100`}>
          Tìm kiếm việc làm
        </Button>
      </div>
    </form>
  );
};

export default FindPosition;
