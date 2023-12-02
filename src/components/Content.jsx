import React, { useCallback, useState } from 'react'
import "../css/Content.css"
import ContactForm from './ContactForm'
import { useDispatch, useSelector } from 'react-redux'
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { deleteContact } from '../slice/ListContactSlice';
import { totalContact } from '../const';
import { Link } from 'react-router-dom';

const Content = () => {
    const [isShowForm, setIsShowForm] = useState(false)
    const disPatchContact = useDispatch();
    const handleShowForm = useCallback((status) => {
        setIsShowForm(!status)
    }, [])
    const handleDeleteContact = id => {
        let index = totalContact.findIndex(contact => contact.id === id)
        totalContact.splice(index, 1)
        disPatchContact(deleteContact(id))
    }
    const listContact = useSelector(state => state.listContact)
    const theme = useSelector(state => state.theme)
    return (
        <>
            <div className="content">

                <div className='table-container'>
                    <button className='btn btn-primary' onClick={() => setIsShowForm(!isShowForm)}>ADD </button>
                    <ContactForm
                        isShowForm={isShowForm}
                        handleShowForm={handleShowForm}
                    />
                    <table className={theme ? "table table-dark table-hover" : "table table-hover"}>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Hometown</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {listContact.map(contact =>
                                <tr key={contact.id}>
                                    <td>{contact.Name}</td>
                                    <td>{contact.Email}</td>
                                    <td>{contact.Phone}</td>
                                    <td>{contact.Hometown}</td>
                                    <td>
                                        <Link className={theme ? "btn btn-light mr-2" : "btn"} to={"/detail/" + contact.id} ><MdEdit /></Link>
                                        <button className={theme ? "btn btn-light" : "btn"} onClick={() => { handleDeleteContact(contact.id) }}><MdDeleteForever /></button>
                                    </td>
                                </tr>
                            )}


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Content