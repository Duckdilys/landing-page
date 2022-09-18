import React from 'react';
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
}) => {
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
                        cb={(value) =>
                            ValidateLengthInput(value, 0) &&
                            value.trim().includes('@')
                        }
                        // errorMessage='Email không hợp lệ'
                        getValueInput={getEmailHandler}
                    />
                    <Form.Select className='formContact' style={{padding:'20px'}}
                        onChange={(e) => getContentHandler(e.target.value)}
                    >
                        <option >
                            Bạn quan tâm đến vấn đề gì?
                        </option>
                        <option>Nền tảng phân tích dữ liệu</option>
                        <option>Giám sát truyền thông mạng xã hội</option>
                        <option>Tư vấn và triển khai giaỉ pháp BI</option>
                        <option>Chuyên gia phân tích dữ liệu</option>
                    </Form.Select>
                </div>

                {/* <TextArea
          textarea={{
            placeholder: "Nội dung",
            cols: "10",
            rows: "5",
            onChange: event => getContentHandler(event.target.value)
          }}
        ></TextArea> */}
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
