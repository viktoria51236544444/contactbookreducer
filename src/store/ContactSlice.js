import { createSlice } from "@reduxjs/toolkit";

const ContactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: JSON.parse(localStorage.getItem("contacts")) || [],
  },
  reducers: {
    addContact: (state, action) => {
      const { name, lastName, phone, img } = action.payload;
      state.contacts.push({
        name,
        lastName,
        phone,
        img,
        id: Date.now(),
      });
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (elem) => elem.id !== action.payload.id
      );
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    editContact(state, action) {
      const { id, newName, newLastName, newPhone, newImg } = action.payload;
      const editedContacts = state.contacts.find((elem) => elem.id == id);
      editedContacts.name = newName;
      editedContacts.lastName = newLastName;
      editedContacts.phone = newPhone;
      editedContacts.img = newImg;
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
  },
});
export const { addContact, deleteContact, editContact } = ContactSlice.actions;
export default ContactSlice.reducer;
