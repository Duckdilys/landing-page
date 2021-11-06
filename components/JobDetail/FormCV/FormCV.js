import React, { useCallback, useEffect, useState } from "react";
import styles from "./FormCV.module.scss";
import { Grid, DropzoneUpload, Button } from "../../container";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { ValidateLengthInput } from "../../../util";
import useFetch from "../../../hook/use-fetch";
import { modelActions } from "../../../store/slices/model-slice";
const FormCV = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const isOpened = useSelector((state) => state.model.openOverlay);
  const {
    fetchDataFromServer,
    error,
    upload_progress,
    isLoading,
    download_progress,
    data,
  } = useFetch();
  const submitFormHandler = (event) => {
    event.preventDefault();
  };
  const getFileHandler = useCallback(
    (files) => {
      if (!files || files.length === 0) {
        return;
      }
      const file = files[0];
      setFile(file.name);
      const formData = new FormData();
      formData.append("file_upload", files[0]);
      fetchDataFromServer({
        url: "https://login.noron.vn/api/upload/file",
        method: "POST",
        data: formData,
      });
    },
    [fetchDataFromServer]
  );
  console.log(file);
  console.log(error, upload_progress, isLoading, download_progress, data);
  return (
    <form
      onSubmit={submitFormHandler}
      className={`${styles.container} ${isOpened && styles["container-back"]}`}
    >
      <h4>Nộp đơn ứng tuyển cho vị trí này</h4>
      <Grid className={styles.grid}>
        <Input
          inputDefine={{
            type: "text",
            required: true,
            autoComplete: "off",
            placeholder: "Họ và tên",
          }}
          error="Tên không được phép trống"
          checkValidate={(value) => ValidateLengthInput(value)}
        />
        <Input
          inputDefine={{
            type: "number",
            required: true,
            autoComplete: "off",
            placeholder: "Số điện thoại liên hệ",
            minLength: "1",
            maxLength: "11",
          }}
          checkValidate={(value) => ValidateLengthInput(value)}
          className={styles["phone-input"]}
          error="Số điện thoại không được phép trống"
        />
      </Grid>
      <div className={styles.inputs}>
        <div
          onClick={() => dispatch(modelActions.closeModelHandler())}
          className={styles.close}
        >
          <div></div>
          <div></div>
        </div>
        <Input
          inputDefine={{
            type: "email",
            required: true,
            autoComplete: "off",
            placeholder: "Địa chỉ email",
          }}
          checkValidate={(value) =>
            ValidateLengthInput(value) && value.includes("@")
          }
          error="Email không được phép trống"
        />
        <Input
          inputDefine={{
            type: "text",
            autoComplete: "off",
            placeholder: "Link sản phẩm (Nếu có)",
          }}
        />
        <DropzoneUpload
          title="Click để tải lên CV của bạn"
          fileAllowTitle="Chấp nhận file .pdf kích thước dưới 10MB"
          configDropzone={{
            accept: ".pdf",
            multiple: false,
          }}
          getFilesHandler={getFileHandler}
        />
        <div className={styles.button}>
          <Button
            options={{
              type: "submit",
            }}
          >
            Nộp hồ sơ ngay
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormCV;
