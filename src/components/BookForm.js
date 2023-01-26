import { useState } from "react";

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

import { useAuthContext } from "../hooks/useAuthContext";

const BookForm = () => {

  const [newBook, setNewBook] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "books");
    await addDoc(ref, { title: newBook, uid: user.uid });
    setNewBook("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span> Add New Book</span>

        <input
          type="text"
          value={newBook}
          required
          onChange={(e) => setNewBook(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
