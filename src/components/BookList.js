import React from 'react'
import {db} from '../firebase/config'
import {deleteDoc,doc} from 'firebase/firestore'

 const BookList = ({books}) => {
    const handleDelete = async (id) => {
        try {
            const ref = doc(db, 'books', id)
            await deleteDoc(ref)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='book-list'>
        <ul>
            {books.map((book) => (
                <li key={book.id} onClick={() => handleDelete(book.id)}>
                  {book.title}
                </li>
            ))}
        </ul>
    </div>
  )
}
export default BookList