import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utility/adToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    // ideally we will directly get the read book list from the database
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('')

    const allBooks = useLoaderData();

    useEffect(() => {

        const storedReadList = getStoredReadList();
        //worst way
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        console.log(storedReadList, storedReadListInt, allBooks)
        
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);
    }, [])


    const handleSort = sortType => {
        setSort(sortType)

        if (sortType === 'No of pages') {
            
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortedReadList)
        }

        if (sortType === 'Ratings') {
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating); 
            setReadList(sortedReadList)
        }
    }


    return (
        <div className="max-w-7xl mx-auto px-3 py-10">
            <h3 className="text-3xl my-8">Listed Books</h3>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                    {sort ? `Sort by: ${sort}` : 'Sort by'}
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}>
                        <a>Ratings</a>
                    </li>
                    <li onClick={() => handleSort('No of pages')}>
                        <a>No of pages</a>
                    </li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className="text-2xl">Books I read: {readList.length}</h2>

                    {readList.map(book => (
                        <Book key={book.bookId} book={book} />
                    ))}
                </TabPanel>
                <TabPanel className="text-2xl">
                    <h2>My wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
