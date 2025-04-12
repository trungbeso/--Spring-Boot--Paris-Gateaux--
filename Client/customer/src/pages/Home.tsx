import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";

const Home = () => {
    return (
        <main className="container">
            <Header />
            <ExploreMenu/>
            <FoodDisplay />
        </main>
    );
};

export default Home;
