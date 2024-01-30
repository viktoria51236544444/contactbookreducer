import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ContactItem = () => {
  const { id } = useParams();
  const contact = useSelector((state) =>
    state.contacts.contacts.find((elem) => elem.id === parseInt(id))
  );
  return (
    <div className="details">
      <p>Name: {contact.name}</p>
      <p>Last Name: {contact.lastName}</p>
      <p>Phone: {contact.phone}</p>
      <img src={contact.img} alt="" className="img__details" />
    </div>
  );
};

export default ContactItem;
