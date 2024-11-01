import { useEffect, useState } from 'react';
import Book from '../../Book/Book';

const Books = () => {
    const [Books, setBooks] = useState([]);

    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-between'>
                {
                    Books.map(book => <Book key={book.bookId} book = {book} />)
                }
            </div>
        </div>
    );
};

export default Books;

/**
 * 1. State to store books
 * 2. useEffect
 * 3. fetch to load data
 * 4. set the data to the Books state
 *
 */
