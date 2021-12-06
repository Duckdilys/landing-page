import React from "react";
import styles from "./Share.module.scss";
import Image from "next/image";
import Link from "next/link";
import useMedia from "../../../hook/use-media";
const Share = () => {
  const isMobile = useMedia("(max-width: 768px)");
  // const sharingHandler = () => {
  //   FB.ui({
  //     display: 'popup',
  //     method: 'share',
  //     href: 'https://developers.facebook.com/docs/'
  //   }, function(response){});
  // }
  return (
    <div className={`d-flex align-items-center ${styles.container}`}>
      <p>Chia sẻ:</p>
      <div className={styles.icon}>
        <Image
          src={"/fb-blue-icon.svg"}
          width={!isMobile ? "32px" : "21px"}
          height={!isMobile ? "32px" : "21px"}
          alt=""
        />
      </div>

      <div className={styles.icon}>
        <Image
          src={"/tw-blue-icon.svg"}
          width={!isMobile ? "32px" : "21px"}
          height={!isMobile ? "32px" : "21px"}
          alt=""
        />
      </div>
      <div className={styles.icon}>
        <Image
          src={"/Noron.png"}
          width={!isMobile ? "48px" : "30px"}
          height={!isMobile ? "48px" : "30px"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Share;
