import React, { forwardRef, useEffect, useState } from "react";
import { Input } from "..";
import useInput from "../../../hook/use-input";
/* eslint-disable react/display-name */

const InputRequiredValidate = forwardRef(({ cb, input, className, errorMessage, getStatus }, ref) => {
  const { value, inputChangeHandler, isTouched, inputIsTouchHandler, isValid } =
    useInput((value) => cb(value));
  useEffect(() => {
    if(typeof getStatus === 'function') {
      getStatus(isValid);
    }
  }, [isValid, getStatus]);
  return (
    <>
      <Input
        input={{
          ...input,
          onChange: inputChangeHandler,
          onBlur: inputIsTouchHandler,
          value: value
        }}
        className={className}
        ref={ref}
        error={(!isValid && errorMessage && isTouched) ? errorMessage : false}
      />
    </>
  );
});

export default InputRequiredValidate;
