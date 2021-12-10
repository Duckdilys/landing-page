import React from "react";
import { OverlayBG } from "..";
import SuccessModel from "../SuccessModel/SuccessModel";
import styles from "./ModelSuccess.module.scss";
import { CSSTransition } from "react-transition-group";
const ModelSuccess = ({
  condition,
  resetStateHandler,
  error,
  contentMessage,
  title,
}) => {
  return (
    <>
      <CSSTransition
        unmountOnExit
        mountOnEnter
        classNames="form-open"
        timeout={500}
        in={condition || false}
      >
        <>
          <SuccessModel
            className={styles.success}
            onRemoveModel={resetStateHandler}
            error={error}
            contentMessage={contentMessage}
            title={title}
          />
          <OverlayBG onClick={resetStateHandler} style={{ zIndex: "202" }} />
        </>
      </CSSTransition>
    </>
  );
};

export default ModelSuccess;
