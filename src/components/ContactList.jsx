import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, editContact } from "../store/ContactSlice";
import { NavLink } from "react-router-dom";

const ContactList = ({ name, lastName, phone, img }) => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(name || "");
  const [newLastName, setNewLastName] = useState(lastName || "");
  const [newPhone, setNewPhone] = useState(phone || "");
  const [newImg, setNewImg] = useState(img || "");
  const [editId, setEditId] = useState(null);

  const handleSave = (id) => {
    dispatch(
      editContact({
        id,
        newName: newName,
        newLastName: newLastName,
        newPhone: newPhone,
        newImg: newImg,
      })
    );
    setEditId(null);
  };

  const handleEdit = (elem) => {
    setNewName(elem.name || "");
    setNewLastName(elem.lastName || "");
    setNewPhone(elem.phone || "");
    setNewImg(elem.img || "");
    setEditId(elem.id);
  };

  return (
    <div>
      <div>
        <h1>Contact Book</h1>
      </div>

      {contacts.map((elem) => (
        <div key={elem.id}>
          {editId === elem.id ? (
            <div>
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                type="text"
              />
              <input
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                type="text"
              />
              <input
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                type="text"
              />
              <input
                value={newImg}
                onChange={(e) => setNewImg(e.target.value)}
                type="text"
              />
              <button className="button" onClick={() => handleSave(elem.id)}>
                Save
              </button>
            </div>
          ) : (
            <div className="container">
              <img src={elem.img} alt="" className="img" />

              <div className="person">
                <h3 className="lastName">{elem.lastName}</h3>
                <h3 className="name">{elem.name}</h3>
              </div>
              <h4 className="h4">{elem.phone}</h4>
              <div className="buttonhome">
                <button
                  className="button"
                  onClick={() => dispatch(deleteContact({ id: elem.id }))}
                >
                  delete
                </button>
                <button className="button" onClick={() => handleEdit(elem)}>
                  Edit
                </button>
                <NavLink to={`/details/${elem.id}`}>
                  <button className="button">Details</button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="IMG7">
        <img
          src="https://cdn-icons-png.flaticon.com/256/2224/2224878.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ContactList;
