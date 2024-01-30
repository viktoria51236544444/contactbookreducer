import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../store/ContactSlice";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    if (!name || !lastName || !phone || !img) {
      alert("Заполните все поля!");
      return;
    }
    dispatch(addContact({ name, lastName, phone, img }));
    setName("");
    setLastName("");
    setPhone("");
    setImg("");
    navigate("/");
  };
  return (
    <div>
      <div
        className="container2"
        style={{
          backgroundColor: "#078f2d71",
          width: "1000px",
          height: "300px",
          marginLeft: "17%",
          marginTop: "3%",
          borderRadius: "15px",
        }}
      >
        <h2 className="add" style={{ padding: "8px", fontSize: "30px" }}>
          Add Contact
        </h2>
        <div className="input-field">
          <div className="input-row">
            <input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
            />
            <input
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
            />
          </div>
          <div className="input-row">
            <input
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              type="text"
            />
            <input
              placeholder="Img"
              onChange={(e) => setImg(e.target.value)}
              value={img}
              type="text"
            />
          </div>
          <button className="button2" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
