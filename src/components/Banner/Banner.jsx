import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <div className="hero bg-base-200 py-6 md:py-20 rounded-xl mt-6">
                <div className="hero-content flex-col lg:flex-row-reverse md:px-20">
                    <img src={bannerImg} className="w-full lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-semibold">Books to Freshen up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-white mt-8 hover:text-[#23BE0A]">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;