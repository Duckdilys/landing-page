import React, { useState } from "react";
import { useRouter } from "next/router";
import { ContainerSmall, Image, Button } from "../../container";
import styles from "./BannerLanding.module.scss";
import useFetch from "../../../hook/use-fetch";
import { ApiCooperation } from "../../../config/ApiCooperation";
import ModelSuccess from "../../container/ModelSuccess/ModelSuccess";
import { ValidateLengthInput } from "../../../util";
import FormContact from "../../container/FormContact/FormContact";
const BannerLanding = ({ website }) => {
  const { fetchDataFromServer, data, error, isLoading, resetAllHandler } =
    useFetch();
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const submitFormHandler = (event) => {
    event.preventDefault();
    const emailIsValid = ValidateLengthInput(email, 0) && email.includes('@');
    const nameIsValid = ValidateLengthInput(name, 0);
    const phoneIsValid = ValidateLengthInput(phone, 0);
    if(!emailIsValid || !nameIsValid || !phoneIsValid) {
      return;
    }
    fetchDataFromServer({
      url: ApiCooperation,
      method: "POST",
      data: {
        full_name: name,
        phone_name: phone,
        email: email,
        about: content,
        product_id: +router.query.id,
      },
    });
  };
  return (
    <>
      <ContainerSmall className={styles.container}>
        <div className={`position-relative w-100 ${styles.img}`}>
          <Image src={"/landing_page.png"} alt="" />
          <div className={`${styles.text} text-center`}>
            {website && <h5 className={website ? styles.space : ""}>
              Tìm hiểu thêm Giải pháp của chúng tôi
            </h5>}

            {website && (
              <a href={website} target="_blank" rel="noreferrer">
                <Button>Truy cập website</Button>
              </a>
            )}
          </div>
        </div>
        <form onSubmit={submitFormHandler} className={styles.contact}>
          <h4>Liên hệ & Hợp tác</h4>
          <FormContact
            isLoading={isLoading}
            getNameHandler={setName}
            getContentHandler={setContent}
            getEmailHandler={setEmail}
            getPhoneHandler={setPhone}
          />
        </form>
      </ContainerSmall>
      <ModelSuccess
        condition={!isLoading && (!!data || error)}
        error={!isLoading && (error || !!data?.code >= 400)}
        contentMessage={
          data?.code >= 400 || error
            ? "Có vẻ như bạn đang gặp gián đoạn về đường truyền Internet. Vui lòng kiểm tra kết nối và thử lại!"
            : null
        }
        title={data?.code >= 400 || error ? "Gửi thông tin thất bại" : null}
        resetStateHandler={resetAllHandler}
      />
    </>
  );
};

export default BannerLanding;
