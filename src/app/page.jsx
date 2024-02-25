import Navbar from "@/component/global/Navbar";
import Card from "@/component/global/Card";
import Title from "@/component/global/title";
import Carousel from "@/component/global/Carousel";
const Home = async () => {
	return (
		<div className="px-8 lg:px-52">
			<Navbar />
			<Carousel />
			<Title title={"Top Anime"} content={"see all"} />
			<Card path={"top/anime"} limit={10} />
		</div>
	);
};

export default Home;
