import React, { memo, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../slice/ListContactSlice';
import { emailRegex, nameRegex, phoneNumberRegex, totalContact } from '../const';
import { formatContact, getValue } from '../ultils';

const ContactForm = ({ isShowForm, handleShowForm }) => {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const homeTownRef = useRef()
    const disPatchContact = useDispatch();
    const cleanData = useCallback(() => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        homeTownRef.current.value = "";

    }, [])
    const handleAddContact = () => {
        let data = getValue([nameRef, emailRef, phoneRef, homeTownRef])
        let result = data.every(item => {
            switch (Object.keys(item)[0]) {
                case "Name":
                    if (nameRegex.test(item.Name)) {
                        return true
                    } else {
                        alert("Tên trống hoặc chứa kí tự không hợp lệ")
                        return false
                    }
                case "Email":
                    if (emailRegex.test(item.Email)) {
                        return true
                    } else {
                        alert("Email trống hoặc chứa kí tự không hợp lệ")
                        return false
                    }
                case "Phone":
                    if (phoneNumberRegex.test(item.Phone)) {
                        return true
                    } else {
                        alert("Số điện thoại trống hoặc chứa kí tự không hợp lệ")
                        return false
                    }
                case "Hometown":
                    if (item.Hometown.length > 0) {
                        return true
                    } else {
                        alert("Địa chỉ không được để trống")
                        return false
                    }
                default:
                    alert("Lỗi không tìm thấy column cần kiểm tra")
                    return false;
            }
        })
        if (result) {
            let contact = formatContact(data)
            totalContact.unshift(contact)
            disPatchContact(addContact(contact))
            cleanData()
            handleShowForm(isShowForm)
        }
    }
    const theme = useSelector(state => state.theme)
    return (
        <div className={theme ? "active-theme": ""}>
            <div className={isShowForm ? 'contact-form' : "hide-form"}> 
                <form>
                    <h4>Communications</h4>
                    <div className="form-row row">
                        <div className="col-md-6 mb-4">
                            <input ref={nameRef} type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-md-6 mb-4">
                            <input ref={emailRef} type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-row row">
                        <div className="col-md-6 mb-4">
                            <input ref={phoneRef} type="phone" className="form-control" placeholder="Phone" />
                        </div>
                        <div className="col-md-6 mb-4">
                            <input ref={homeTownRef} type="text" className="form-control" placeholder="Hometown" />
                        </div>
                    </div>
                    <div className='button-event'>
                        <button type='button' className='btn btn-primary' onClick={handleAddContact}>add</button>
                        <button type='button' className='btn btn-danger' onClick={() => handleShowForm(isShowForm)}>exit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default memo(ContactForm)