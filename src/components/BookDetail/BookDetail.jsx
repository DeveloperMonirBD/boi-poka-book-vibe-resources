import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../utility/adToDb";



const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData(); 

    const book = data.find(book => book.bookId === id)
    const { bookId: currentBookId, image } = book;

    const handleMarkAsRead = (id) => {
        /**
         * 1. understand what to store or save: => bookId
         * 2. Where to store: database
         * 3. array, list, collection:
         * 4. check: if the book is already in the readList.
         * 5. if not, then add the book to the list
         * 6. if yes, do not add the book
         */

        addToStoredReadList(id)

    }

    return (
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center my-20 bg-base-200 py-20">
            <h2>Book Details: {bookId}</h2>
            <img className="w-36" src={image} alt="" />
            <br />
            <div>
                <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline btn-accent mr-4">Mark as Read</button>
                <button className="btn btn-accent"> Add to Wish List</button>
            </div>
        </div>
    );
};

export default BookDetail;