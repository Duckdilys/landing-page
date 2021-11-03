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
            src={"/facebook-box-icon.svg"}
            width="36px"
            height="36px"
            alt=""
          />
        </a>
      </Link>
      <Link href="/" passHref={true}>
        <a>
          <Image
            src={"/twitter-box-icon.svg"}
            width="36px"
            height="36px"
            alt=""
          />
        </a>
      </Link>
      <Link href="/" passHref={true}>
        <a>
          <Image
            src={"/instagram-box-icon.svg"}
            width="36px"
            height="36px"
            alt=""
          />
        </a>
      </Link>
    </div>
  );
};

export default Share;
