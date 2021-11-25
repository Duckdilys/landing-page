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
          <Image src={'/noron-icon.svg'} width="36px" height="36px" alt=""/>
        </a>
      </Link>
    </div>
  );
};

export default Share;
