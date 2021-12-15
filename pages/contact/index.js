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
  const isMobile = useMedia('(max-width: 991px)');
  return (
    <>
      <BreadCrumbScript dataElement={[]} title="Liên hệ | MH - Solution" />
      <ContainerBanner
        className={styles.container}
        style={{ background: "transparent" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.983135234988!2d105.78696361520169!3d21.033360792996497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab49744c0919%3A0xfc377436381b96c9!2zNzEgVHLhuqduIFRow6FpIFTDtG5nLCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMDAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1639566409643!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: "0", position: "relative", zIndex: "10" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </ContainerBanner>
      <div className={styles.background}>
        <ContainerSmall className={`${styles.contact}`}>
          <ul className="d-flex justify-content-between align-items-center">
            {isMobile && <li className={styles['title-contact']}>thông tin liên hệ</li>}
            <li>
              <Image
                src="/Icon/house-icon.svg"
                alt=""
                width={isMobile ? "15px" : "23px"}
                height={isMobile ? "15px" : "23px"}
              />
              <span>Địa chỉ: 71-73, Trần Thái Tông, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</span>
            </li>
            <li>
              <Image
                src="/Icon/mail-icon.svg"
                alt=""
                width={isMobile ? "15px" : "23px"}
                height={isMobile ? "11px" : "16px"}
              />
              <span>Email: contact@mhsolution.vn</span>
            </li>
            <li>
              <Image
                src="/Icon/phone-footer-icon.svg"
                alt=""
                width={isMobile ? "15px" : "23px"}
                height={isMobile ? "15px" : "23px"}
              />
              <span>Điện thoại: 0973 090 393</span>
            </li>
          </ul>
        </ContainerSmall>
      </div>
      <ContainerSmall className={styles.remove}>
        <Form />
      </ContainerSmall>
    </>
  );
};
export default Contact;
