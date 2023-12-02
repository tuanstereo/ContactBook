import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { totalContact } from '../const';
import { useDispatch } from 'react-redux';
import { updateContact } from '../slice/ListContactSlice';

const ContactDetail = () => {
  const { id } = useParams();
  const [contactDetail, setContactDetail] = useState()
  const disPatchContact = useDispatch();
  useEffect(() => {
    let contact = totalContact.find(contact => contact.id === Number.parseInt(id))
    setContactDetail(contact)
  }, [id])
  const handleUpdateValue = (e) => {
    let newContact = { ...contactDetail }
    newContact[e.target.placeholder] = e.target.value
    setContactDetail(newContact)
  }
  const handleUpdateListContact = () => {
    let index = totalContact.findIndex(item => item.id === Number.parseInt(contactDetail.id))
    totalContact.splice(index, 1, contactDetail)
    disPatchContact(updateContact({ contact: contactDetail, index }))
  }
  return (
    <>
      <form>
        <h4>Contact Detail</h4>
        <div className="form-row row">
          <div className="col-md-6 mb-4">
            <input type="text" value={contactDetail ? contactDetail.Name : ""} onChange={handleUpdateValue} className="form-control" placeholder="Name" />
          </div>
          <div className="col-md-6 mb-4">
            <input value={contactDetail ? contactDetail.Email : ""} onChange={handleUpdateValue} type="email" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="form-row row">
          <div className="col-md-6 mb-4">
            <input value={contactDetail ? contactDetail.Phone : ""} onChange={handleUpdateValue} type="phone" className="form-control" placeholder="Phone" />
          </div>
          <div className="col-md-6 mb-4">
            <input value={contactDetail ? contactDetail.Hometown : ""} onChange={handleUpdateValue} type="text" className="form-control" placeholder="Hometown" />
          </div>
        </div>
        <div className='button-event'>
          <Link to={"/"} type='button' className='btn btn-primary' onClick={handleUpdateListContact} >Update</Link>
          <Link to={"/"} type='button' className='btn btn-danger' >Exit</Link>
        </div>
      </form>
    </>
  )
}

export default ContactDetail