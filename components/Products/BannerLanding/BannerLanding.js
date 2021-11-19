import React from "react";
import { ContainerSmall, Image, Button, Input, Grid } from "../../container";
import styles from "./BannerLanding.module.scss";
import Link from "next/link";
const BannerLanding = () => {
  return (
    <ContainerSmall className={styles.container}>
      <div className={`position-relative w-100 ${styles.img}`}>
        <Image src={"/landing_page.png"} alt="" />
        <div className={`${styles.text} text-center`}>
          <h5>Bạn muốn biết thêm thông tin về giải pháp?</h5>
          <Link href="https://www.noron.vn/" passHref={true}>
            <a>
              <Button>Truy cập noron</Button>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.contact}>
        <h4>Liên hệ & Hợp tác</h4>
        <Grid className={styles.grid}>
          <Input
            input={{
              type: "text",
              placeholder: "Họ và tên",
            }}
          />
          <Input
            input={{
              type: "text",
              placeholder: "Địa chỉ",
            }}
          />
          <Input
            input={{
              type: "number",
              placeholder: "Số điện thoại",
            }}
          />
          <Input
            input={{
              type: "email",
              placeholder: "Email",
            }}
          />
          <textarea placeholder="Nội dung" cols="10"></textarea>
        </Grid>
        <div className={`${styles.submit} text-center`}>
          <Button>Gửi nội dung</Button>
        </div>
      </div>
    </ContainerSmall>
  );
};

export default BannerLanding;
