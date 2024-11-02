import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId, image, bookName, author, tags, category, rating, totalPages } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card shadow-lg p-6 bg-base-100 rounded-xl">
                <figure className="bg-base-200 py-10 rounded-2xl">
                    <div>
                        <img className="h-[200px] object-cover rounded-xl" src={image} alt={bookName} />
                    </div>
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-2">
                        {tags.map((tag, index) => (
                            <button key={index} className="btn bg-[#eaf5ea] text-[#23BE0A] text-xs">
                                {tags}
                            </button>
                        ))}
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border border-top border-dashed my-4"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="">
                            <div className="rating">
                                <div>{rating}</div>
                                <div>{totalPages}</div>
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;
