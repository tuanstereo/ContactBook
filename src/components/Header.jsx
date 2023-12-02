import React, { useState } from 'react'
import '../css/Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { totalContact } from '../const'
import { searchContact } from '../slice/ListContactSlice'
import { updateTheme } from '../slice/ThemeSlice'
import avatar from "../avatar.jpg"
const Header = () => {
    const [options, setOptions] = useState("Hồ sơ của tôi")
    const disPatchContact = useDispatch()
    const handleSearchContact = (e) => {
        if (e.keyCode === 13) {
            let value = e.target.value;
            let fillterContact = totalContact.filter(item => item.Name.indexOf(value) > -1 && item)
            fillterContact.length === 0 ? alert("Không tìm thấy tên nào hợp lệ") : disPatchContact(searchContact(fillterContact))
        }
    }
    const theme = useSelector(state => state.theme)
    const changeTheme = () => {
        disPatchContact(updateTheme())
    }
    const updateOptions = e => {
        console.log(e.target.innerHTML);
            setOptions(e.target.innerHTML)
    }
    return (
        <>
            <div className={theme ? "header-dark" : "header"}>
                <div className='nav'>
                    <div className="dropdown">
                        <button className="dropdown-button" id="selectedItem">{options}</button>
                        <div className="dropdown-content">
                            <button className='btn' onClick={updateOptions}>Hồ sơ của tôi</button>
                            <button className='btn'  onClick={updateOptions}>Cài đặt của tôi</button>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="text" className='input-search' placeholder='search Name Use' onKeyDown={handleSearchContact} />
                </div>
                <div className='nav-right'>
                    <div className="form-check form-switch form-switch-lg" onClick={changeTheme}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked" />
                    </div>
                    <img src={avatar} className='avatar-image' alt="" />
                </div>
            </div>
        </>
    )
}

export default Header