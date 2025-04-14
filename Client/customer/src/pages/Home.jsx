import Header from "../components/Header";
import ExploreMenu from "../components/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <main>
      <Header />
      <div className="contaier">
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} searchText={""} />
      </div>
    </main>
  );
};

export default Home;
