import { useState } from "react";

const Bookshelf = () => {
const [books, setBooks] = useState([
    {title: 'Dune', author: 'Frank Herbert'},
    {title: 'Pride and Predjudice', author: 'Jane Austen'}
]);

const [newBook, setNewBook] = useState({
    title: '',
    author: '',
})

//functions
const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value})
}

const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, {title: newBook.title, author: newBook.author}]) //setting the array = the spread of the old array plus the new item because of react sets being mutable.
    setNewBook({ title: '', author: ''})
    console.log(books);
    
}

return (
    <>
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    {/* Form here */}
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
            id='title'
            name='title'
            value={newBook.title}
            onChange={handleInputChange}
            />
        <label htmlFor="author">Author: </label>
        <input
            id='author'
            name='author'
            value={newBook.author}
            onChange={handleInputChange}
            />
            <button type="submit">Submit Book</button>
    </form>
  </div>
  <h2>Books</h2>
    {/* Book cards will display here */}
        {books.map((book) => 
          <div className="bookCardsDiv">
            {book.title} by: {book.author}
        </div>
        )}



</div>
</>
)
}

export default Bookshelf;