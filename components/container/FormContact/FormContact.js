import React, { useState } from 'react';
import { Grid, InputRequiredValidate, Button, TextArea, Loading } from '..';
import { ValidateLengthInput } from '../../../util';
import Form from 'react-bootstrap/Form';
import styles from '../../Products/BannerLanding/BannerLanding.module.scss';

const FormContact = ({
  isLoading,
  getNameHandler,
  getEmailHandler,
  getPhoneHandler,
  getContentHandler,
  className,
  classBtn,
  classGrid,
  services,
}) => {
  const [isTextArea, setIsTextArea] = useState(false);

  return (
    <>
      <Grid className={`${styles.grid} ${className}`}>
        <div className={`${styles['grid-input']} ${classGrid}`}>
          <InputRequiredValidate
            input={{
              type: 'text',
              placeholder: 'Họ và tên *',
            }}
            cb={(value) => ValidateLengthInput(value, 0)}
            errorMessage='Tên không được phép để trống'
            getValueInput={getNameHandler}
          />
          <InputRequiredValidate
            input={{
              type: 'number',
              placeholder: 'Số điện thoại *',
              minLength: 1,
              maxLength: 11,
            }}
            cb={(value) => ValidateLengthInput(value, 9)}
            errorMessage='Số điện thoại không hợp lệ'
            getValueInput={getPhoneHandler}
          />
          <InputRequiredValidate
            input={{
              type: 'email',
              placeholder: 'Email',
            }}
            cb={(value) => ValidateLengthInput(value, 0) && value.trim().includes('@')}
            // errorMessage='Email không hợp lệ'
            getValueInput={getEmailHandler}
          />
          <Form.Select
            className='formContact'
            style={{ padding: '20px' }}
            onChange={(e) => {
              if (e.target.value === 'Khác') {
                setIsTextArea(true);
                getContentHandler('');
                return
              }
              getContentHandler(e.target.value);
              setIsTextArea(false);
            }}
          >
            <option>Bạn quan tâm đến vấn đề gì?</option>
            {(services || []).map((item) => (
              <option key={item?.id} value={item?.title}>
                {item?.title}
              </option>
            ))}
            <option>Khác</option>
          </Form.Select>
        </div>

        {isTextArea && (
          <TextArea
            textarea={{
              placeholder: 'Nội dung quan tâm',
              cols: '10',
              rows: '5',
              onChange: (event) => getContentHandler(event.target.value),
            }}
          />
        )}
      </Grid>
      <div className={`${styles.submit} text-center ${classBtn}`}>
        <Button>Gửi nội dung</Button>
      </div>
      {isLoading && (
        <div className='text-center pt-3'>
          <Loading />
        </div>
      )}
    </>
  );
};

export default FormContact;
