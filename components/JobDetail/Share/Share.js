import React, { useEffect, useState } from "react";
import styles from "../styles.module.scss";
import { Image } from "../../container";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
const Share = () => {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    if (window) {
      setUrl(window?.location?.href);
    }
  }, []);
  return (
    <div className={styles.share}>
      <h4>Chia sẻ công việc này</h4>
      <div className={`d-flex align-items-center ${styles.line}`}>
        <span>
          <FacebookShareButton url={`${url}?app_id=292204241285034` || ""}>
            <Image
              src="/facebook-square-icon.svg"
              alt=""
              width="36px"
              height="36px"
            />
          </FacebookShareButton>
        </span>

        <span>
          <LinkedinShareButton url={url || ""}>
            <Image
              src="/linkedln-icon-footer.svg"
              width="36px"
              height="36px"
              alt=""
            />
          </LinkedinShareButton>
        </span>
      </div>
    </div>
  );
};

export default Share;
