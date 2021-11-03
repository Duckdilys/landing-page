import React, { useState } from "react";
import styles from "./Select.module.scss";
import Image from "next/image";
import useToggle from '../../../hook/use-toggle'
import { CSSTransition } from "react-transition-group";
const Select = ({ children, className, listValue, setValueByFn, firstTitle }) => {
    const {toggle, changeToggleHandler} = useToggle(false);
    const [valueField, setValueField] = useState(null);
    const setValueHandler = value => {
        setValueField(value);
        if(typeof setValueByFn === 'function'){
            setValueByFn(value);
        }
        changeToggleHandler();
    }
  return (
    <div onClick={changeToggleHandler} className={`${styles.select} ${className}`}>
      <div className={`${styles.value}`}>
        <p>{valueField ? valueField : firstTitle}</p>
        <Image src="/arrow-down-icon.svg" width="10px" height="13px" alt="" />
      </div>
      <CSSTransition in={toggle} classNames="scale" timeout={750} unmountOnExit mountOnEnter>
        <ul>
          {listValue &&
            listValue.map((list, index) => {
              return <li onClick={setValueHandler.bind(null, list)} key={index}>{list}</li>;
            })}
          {children}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default Select;
