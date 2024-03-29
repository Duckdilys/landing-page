import React, { useEffect, useRef } from "react";
import { LayoutContainer, Image, Input, Button, OverlayBG } from "../container";
import styles from "./Footer.module.scss";
import Link from "next/link";
import paths from "../Navigation/path";
import { useRouter } from "next/router";
import { ApiCooperation } from "../../config/ApiCooperation";
import { ValidateLengthInput } from "../../util";
const images = [
  "/fb-icon-footer.svg",
  "/noron-icon-footer.svg",
  "/linkedln-icon-footer.svg",
];
import useFetch from "../../hook/use-fetch";
import ModelSuccess from "../container/ModelSuccess/ModelSuccess";
import useMedia from "../../hook/use-media";
const Footer = ({ data_footer }) => {
  const router = useRouter();
  const isMatchMobile = useMedia("(max-width: 576px)");
  const { isLoading, error, data, fetchDataFromServer, resetAllHandler } =
    useFetch();
  const emailRef = useRef();
  const submitFormHandler = () => {
    const email = emailRef.current.value;
    const emailIsValid = ValidateLengthInput(email, 0) && email.includes("@");
    if (!emailIsValid) {
      return;
    }
    fetchDataFromServer({
      url: ApiCooperation,
      method: "POST",
      data: {
        email: email,
      },
    });
  };
  return (
    <>
      <footer className={styles.footer}>
        <LayoutContainer className={styles["container-footer"]}>
          <div className={styles.grid}>
            <div className={styles["logo-box"]}>
              <Image
                src={"/favicon/logo-footer.svg"}
                alt=""
                className={styles.logo}
              />
              {!isMatchMobile && (
                <div
                  className={`d-flex align-items-center ${styles.copyright}`}
                >
                  <Image src="/copy-right.svg" alt="" />
                  <span>Copyright 2020</span>
                </div>
              )}
            </div>
            <ul className={`${styles.list} ${styles["paths-list"]}`}>
              <div className={styles.paths}>
                {paths.map((item, index) => {
                  if (index < paths.length / 2) {
                    return (
                      <li
                        key={item.name}
                        className={
                          router.asPath === item.path ? styles.active : ""
                        }
                      >
                        <Link
                          href={
                            index === 2
                              ? `${item.path}/nen-tang-phan-tich-du-lieu-data-mining-platform-5`
                              : item.path
                          }
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  }
                })}
              </div>
              <div className={styles.paths}>
                {paths.map((item, index) => {
                  if (index > paths.length / 2 - 1) {
                    return (
                      <li
                        className={
                          router.asPath === item.path ? styles.active : ""
                        }
                        key={item.name}
                      >
                        <Link href={item.path}>{item.name}</Link>
                      </li>
                    );
                  }
                })}
              </div>
            </ul>
            {!isMatchMobile && (
              <ul className={styles["list-contact"]}>
                <li>Thông tin liên hệ</li>
                <li data-aos-delay={200}>
                  <span>
                    Địa chỉ: 71-73, Trần Thái Tông, Dịch Vọng, Cầu Giấy, Hà Nội
                  </span>
                </li>
                <li data-aos-delay={400}>
                  <span>Email: {data_footer?.[0]?.email}</span>
                </li>
                <li data-aos-delay={600}>
                  <span>Điện thoại: {data_footer?.[0]?.phone_number}</span>
                </li>
              </ul>
            )}
            <ul className={`${styles.list} ${styles.email}`}>
              {!isMatchMobile && (
                <>
                  <li>Đăng ký nhận thông tin</li>
                  <li className={styles.middle}>
                    Đăng ký email để nhận tin tức và dịch vụ mới nhất từ chúng
                    tôi
                  </li>
                  <div
                    className={`d-flex justify-content-between ${styles.box}`}
                  >
                    <Input
                      ref={emailRef}
                      input={{
                        type: "email",
                        placeholder: "Địa chỉ Email",
                      }}
                      className={styles.input}
                    />
                    <Button
                      className={styles.button}
                      options={{
                        onClick: submitFormHandler,
                      }}
                    >
                      Đăng ký
                    </Button>
                  </div>
                </>
              )}
              <li
                className={`d-flex align-items-center ${styles["list-media"]}`}
              >
                {isMatchMobile && (
                  <div
                    className={`d-flex align-items-center ${styles.copyright}`}
                  >
                    <Image src="/copy-right.svg" alt="" />
                    <span>Copyright 2020</span>
                  </div>
                )}
                {(data_footer?.[0]?.socials || []).map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.src}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        className={`d-flex justify-content-center align-items-center rounded-circle ${styles.brand}`}
                        alt=""
                        src={images[index]}
                      />
                    </a>
                  );
                })}
              </li>
            </ul>
          </div>
        </LayoutContainer>
      </footer>
      <ModelSuccess
        condition={!isLoading && data?.code < 400}
        resetStateHandler={resetAllHandler}
      />
    </>
  );
};

export default Footer;
