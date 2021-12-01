import React from "react";
import {
  ContainerBanner,
  BoxLayout,
  BreadCrumbScript,
  ContainerSmall,
} from "../../components/container";
import Image from "next/image";
import Form from "../../components/Contact/Form/Form";
import styles from "../../components/Contact/Form/Form.module.scss";
import useMedia from "../../hook/use-media";
const Contact = () => {
  const isMobile = useMedia("(max-width: 991px)");
  return (
    <>
      <BreadCrumbScript dataElement={[]} title="Liên hệ | MH - Solution" />
      <ContainerBanner
        className={styles.container}
        style={{ background: "transparent" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.467018702984!2d105.79492111520663!3d21.01399149365754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab597644cd75%3A0x862d26fc13f09e77!2zUC4gVHJ1bmcgS2nMgW5oLCBUcnVuZyBIb8OgLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1635932050798!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: "0", position: "relative", zIndex: "10" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </ContainerBanner>
      {
        !isMobile && 
        <div className={styles.background}>
          <ContainerSmall className={`${styles.contact}`}>
            <ul className="d-flex justify-content-between align-items-center">
              <li>
                <Image
                  src="/Icon/house-icon.svg"
                  alt=""
                  width="23px"
                  height="23px"
                />
                <span>Địa chỉ: Số 24, ngõ 224 Trung Kính, Hà Nội</span>
              </li>
              <li>
                <Image
                  src="/Icon/mail-icon.svg"
                  alt=""
                  width="23px"
                  height="23px"
                />
                <span>Email: contact@mhsolution.vn</span>
              </li>
              <li>
                <Image
                  src="/Icon/phone-footer-icon.svg"
                  alt=""
                  width="23px"
                  height="23px"
                />
                <span>Điện thoại: 0975718168</span>
              </li>
            </ul>
          </ContainerSmall>
        </div>
      }
      <ContainerSmall className={styles.remove}>
        <Form />
      </ContainerSmall>
    </>
  );
};
export default Contact;
