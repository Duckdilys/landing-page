import React from "react";
import useMedia from "../../../hook/use-media";
import Image from 'next/image';
const Logo = (props) => {
  const match = useMedia('(max-width: 991px)');
  return (
    <Image
      className={props.className}
      src={match ? "/logo-footer.png" : "/Logo-icon-svg.svg"}
      alt="logo"
      width={match ? "46.67" : "80"}
      height={match ? "32" : "80"}
      {...props}
    />
  );
};

export default Logo;
