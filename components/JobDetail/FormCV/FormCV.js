import React, { useCallback, useEffect, useState, useRef } from "react";
import styles from "./FormCV.module.scss";
import { Grid, DropzoneUpload, Button, Loading } from "../../container";
import Input from "./Input";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { ValidateLengthInput } from "../../../util";
import useFetch from "../../../hook/use-fetch";
import { modelActions } from "../../../store/slices/model-slice";
import { CSSTransition } from "react-transition-group";
import { ApiApplicantCV } from "../../../config/ApiApplicant";
import SuccessModel from "../../container/SuccessModel/SuccessModel";
const FormCV = ({ time_end, id, timeIsExpire }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [isLoadingSession, setIsLoadingSession] = useState(false);
  const emailRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const isOpened = useSelector((state) => state.model.openOverlay);
  const { fetchDataFromServer, error, upload_progress, isLoading, data } =
    useFetch();
  const {
    fetchDataFromServer: uploadFormHandler,
    error: errorForm,
    isLoading: isLoadingForm,
    data: dataForm,
    resetAllHandler,
  } = useFetch();
  const submitFormHandler = (event) => {
    event.preventDefault();
    if (Date.now() > time_end || !url) {
      return;
    }
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const phone = phoneRef.current?.value;
    const emailIsValid = ValidateLengthInput(email, 0) && email.includes("@");
    const nameIsValid = ValidateLengthInput(name, 0);
    const phoneIsValid = ValidateLengthInput(phone, 0);
    if (!emailIsValid || !nameIsValid || !phoneIsValid) {
      return;
    }
    uploadFormHandler({
      url: ApiApplicantCV,
      method: "POST",
      data: {
        full_name: name,
        phone_number: phone,
        email: email,
        src_file: url,
        created_at: Date.now(),
        create_by: id,
        job_id: id,
      },
    });
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
  useEffect(() => {
    if (isLoading) {
      setIsLoadingSession(true);
    }
    if (!isLoading && !error) {
      setTimeout(() => {
        setIsLoadingSession(false);
      }, 1000);
    }
    if (!isLoading && error) {
      setFile(null);
      setUrl(null);
    }
    if (!isLoading && data?.code < 400) {
      setUrl(data?.result?.file_url);
    }
  }, [isLoading, error, data]);
  const removeFileHandler = useCallback(() => {
    setFile(null);
    setUrl(null);
  }, []);

  useEffect(() => {
    if (!isOpened) {
      setTimeout(() => {
        resetAllHandler();
        removeFileHandler();
      }, 500);
    }
  }, [isOpened, resetAllHandler, removeFileHandler]);

  return (
    <>
      <form
        onSubmit={submitFormHandler}
        className={`${styles.container} ${
          isOpened && styles["container-back"]
        }`}
      >
        {((!isLoadingForm && !dataForm) || (!isLoadingForm && !error)) && (
          <div
            onClick={() => dispatch(modelActions.closeModelHandler())}
            className={styles.close}
          >
            <div></div>
            <div></div>
          </div>
        )}
        <>
          {(!dataForm || dataForm?.code >= 400) && (
            <>
              <h4>
                {timeIsExpire
                  ? "Gửi CV cho nhà tuyển dụng"
                  : "ứng tuyển cho vị trí này"}
              </h4>
              <Grid className={styles.grid}>
                <Input
                  ref={nameRef}
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
                  ref={phoneRef}
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
                <Input
                  ref={emailRef}
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
                <CSSTransition
                  in={!file && !url}
                  unmountOnExit
                  mountOnEnter
                  timeout={0}
                  classNames="fade"
                >
                  <DropzoneUpload
                    className={styles.drop}
                    title="Click để tải lên CV của bạn"
                    fileAllowTitle="Chấp nhận file .pdf kích thước dưới 10MB"
                    configDropzone={{
                      accept: ".pdf",
                      multiple: false,
                    }}
                    getFilesHandler={getFileHandler}
                  />
                </CSSTransition>
                <CSSTransition
                  in={!!file}
                  timeout={500}
                  classNames="scale"
                  unmountOnExit
                  mountOnEnter
                >
                  <div
                    className={`d-flex w-100 position-relative justify-content-between align-items-center ${
                      styles.upload
                    } ${isLoadingSession && styles["upload-disabled"]} ${
                      !isLoadingSession && data?.code >= 400 && styles.error
                    }`}
                  >
                    <span className={styles.file}>{file}</span>
                    <span className="d-flex align-items-center">
                      <span className={styles.percent}>{upload_progress}%</span>
                      <span
                        onClick={removeFileHandler}
                        className={`d-flex align-items-center justify-content-center ${styles.remove}`}
                      >
                        <Image
                          src="/close-icon.svg"
                          alt=""
                          width="12px"
                          height="12px"
                        />
                      </span>
                    </span>
                  </div>
                </CSSTransition>
                <div className={styles.button}>
                  <Button
                    options={{
                      type: "submit",
                      disabled: isLoadingSession,
                    }}
                    className={
                      (isLoadingSession || isLoadingForm) && styles.disabled
                    }
                  >
                    {timeIsExpire ? "Gửi CV" : "Ứng tuyển ngay"}
                  </Button>
                </div>
                {isLoadingForm && (
                  <div className="text-center">
                    <Loading />
                  </div>
                )}
              </div>
            </>
          )}
          {!isLoadingForm && data?.code && (
            <SuccessModel
              title={
                errorForm || dataForm?.code >= 400
                  ? "Gửi thông tin thất bại"
                  : "Cảm ơn bạn đã ứng tuyển vị trí này"
              }
              contentMessage={
                errorForm || dataForm?.code >= 400
                  ? "Có vẻ như bạn đang gặp gián đoạn về đường truyền Internet. Vui lòng kiểm tra kết nối và thử lại!"
                  : "Chúng tôi sẽ liên hệ với bạn trong 2-3 ngày tới. Hãy kiểm tra email thường xuyên để cập nhật những thông tin mới nhất từ chúng tôi."
              }
              onRemoveModel={() => dispatch(modelActions.closeModelHandler())}
            />
          )}
        </>
      </form>
    </>
  );
};
export default FormCV;
