import Banner from "../Banner/Banner";
import Books from "../Dashboard/Books/Books";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto px-3 space-y-20">
            <Banner />
            <Books />
        </div>
    );
};

export default Home;