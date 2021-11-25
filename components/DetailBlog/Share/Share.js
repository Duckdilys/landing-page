import React from "react";
import styles from "./Share.module.scss";
import Image from "next/image";
import Link from "next/link";
const Share = () => {
  return (
    <div className={`d-flex align-items-center ${styles.container}`}>
      <p>Chia sẻ:</p>
      <Link href="/" passHref={true}>
        <a>
          <Image
            src={"/fb-blue-icon.svg"}
            width="32px"
            height="32px"
            alt=""
          />
        </a>
      </Link>
      <Link href="/" passHref={true}>
        <a>
          <Image
            src={"/tw-blue-icon.svg"}
            width="32px"
            height="32px"
            alt=""
          />
        </a>
      </Link>
      <Link href={'/'} passHref={true}>
        <a>
          <Image src={'/Noron.png'} width="48px" height="48px" alt=""/>
        </a>
      </Link>
    </div>
  );
};

export default Share;
