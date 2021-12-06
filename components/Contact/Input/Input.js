import { Input as InputComponent } from "../../container";
import useInput from "../../../hook/use-input";
import styles from "./Input.module.scss";
import { forwardRef, useEffect, useState } from "react";
/* eslint-disable react/display-name */
const Input = forwardRef(
  ({ input, error, validateInput, children, className, setStatus }, ref) => {
    const {
      value,
      isTouched,
      inputChangeHandler,
      inputIsTouchHandler,
      isValid,
    } = useInput(validateInput ? (value) => validateInput(value) : true);
    useEffect(() => {
      if(typeof setStatus === 'function') {
        setStatus(isValid);
      }
    }, [isValid, setStatus]);
    return (
      <InputComponent
        ref={ref}
        className={`${styles.input} ${className}`}
        input={{
          ...input,
          onChange: inputChangeHandler,
          value: value,
          onBlur: inputIsTouchHandler,
        }}
        error={!isValid && isTouched ? error : null}
      >
        {children}
      </InputComponent>
    );
  }
);
export default Input;
