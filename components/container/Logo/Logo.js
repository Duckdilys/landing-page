import Image from 'next/image';
import React from 'react';
const Logo = (props) => {
  return <Image className={props.className} src={"/Rectangle.png"} alt="logo" width="100" height="68" />;
};

export default Logo;
