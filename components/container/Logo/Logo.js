import Image from "next/image";
import React from "react";
import useMedia from "../../../hook/use-media";
const Logo = (props) => {
  const match = useMedia('(max-width: 991px)');
  return (
    <Image
      className={props.className}
      src={match ? "/logo-svg-icon.svg" : "/Logo.png"}
      alt="logo"
      width={match ? "46.67" : "175"}
      height={match ? "32" : "40"}
      {...props}
    />
  );
};

export default Logo;
