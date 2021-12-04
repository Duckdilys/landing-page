import React from "react";
import { OverlayBG } from "..";
import SuccessModel from "../SuccessModel/SuccessModel";
import styles from "./ModelSuccess.module.scss";
import { CSSTransition } from "react-transition-group";
const ModelSuccess = ({condition, resetStateHandler}) => {
  return (
    <>
      <CSSTransition
        unmountOnExit
        mountOnEnter
        classNames="form-open"
        timeout={750}
        in={condition || false}
      >
        <>
          <SuccessModel className={styles.success} onRemoveModel={resetStateHandler}/>
          <OverlayBG onClick={resetStateHandler} style={{zIndex: '202'}}/>
        </>
      </CSSTransition>
    </>
  );
};

export default ModelSuccess;
