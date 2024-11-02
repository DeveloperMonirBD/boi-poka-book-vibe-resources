import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookDetail from './components/BookDetail/BookDetail';
import Dashboard from './components/Dashboard/Dashboard';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import Root from './components/Root/Root';
import './index.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'books/:bookId',
                element: <BookDetail />,
                loader: () => fetch('/booksData.json') //do not load all the books for one book.
            },
            {
                path: 'listedBooks',
                element: <ListedBooks />,
                // worst way to load some data
                loader: () => fetch('/booksData.json') //do not load all data for some
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    }
]);
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
        <ToastContainer />
    </StrictMode>
);
