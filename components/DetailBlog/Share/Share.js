import React, { useEffect, useState } from "react";
import styles from "./Share.module.scss";
import Image from "next/image";
import Link from "next/link";
import useMedia from "../../../hook/use-media";
import { FacebookShareButton, TwitterShareButton } from "react-share";
const Share = () => {
  const isMobile = useMedia("(max-width: 768px)");
  // const sharingHandler = () => {
  //   FB.ui({
  //     display: 'popup',
  //     method: 'share',
  //     href: 'https://developers.facebook.com/docs/'
  //   }, function(response){});
  // }
  const [url, setUrl] = useState(null);
  useEffect(() => {
    if (window) {
      setUrl(window.location.href);
    }
  }, []);
  return (
    <div className={`d-flex align-items-center ${styles.container}`}>
      <p>Chia sẻ:</p>
      <FacebookShareButton className={styles.share} url={`${url}?app_id=292204241285034` || ""}>
        <div className={styles.icon}>
          <Image
            src={"/fb-blue-icon.svg"}
            width={!isMobile ? "32px" : "21px"}
            height={!isMobile ? "32px" : "21px"}
            alt=""
          />
        </div>
      </FacebookShareButton>
      <TwitterShareButton className={styles.share} url={url || ""}>
        <div className={styles.icon}>
          <Image
            src={"/tw-blue-icon.svg"}
            width={!isMobile ? "32px" : "21px"}
            height={!isMobile ? "32px" : "21px"}
            alt=""
          />
        </div>
      </TwitterShareButton>
      {/* <div className={styles.icon}>
        <Image
          src={"/Noron.png"}
          width={!isMobile ? "48px" : "30px"}
          height={!isMobile ? "48px" : "30px"}
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Share;
