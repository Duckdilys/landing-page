import Image from "next/image";
import React from "react";
const Logo = (props) => {
  return (
    <Image
      className={props.className}
      src={"/Logo.png"}
      alt="logo"
      width="70.59"
      height="50"
      {...props}
    />
  );
};

export default Logo;
