import Image from "next/image";
import React from "react";
const Logo = (props) => {
  return (
    <Image
      className={props.className}
      src={"/Logo.png"}
      alt="logo"
      width="100"
      height="68"
      {...props}
    />
  );
};

export default Logo;
