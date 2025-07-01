
interface MovieProps {
	title: string,
	overview: string,
	image: string,
	rating: number
}

const Movie = ({title, overview, image, rating}: MovieProps) => {
	return (
		<div className="group w-74 h-139 relative overflow-hidden ">
			<div>
				<img className="h-120" src={image} alt="" />
			</div>
			<div className="flex justify-between text-white px-4 py-5 bg-[#373b69]">
				<h3 className="font-bold text-xl">{title}</h3>
				<span className="bg-[#22254b] px-5 py-2 h-10 text-center text-base font-bold text-green-600">
					{rating}
				</span>
			</div>
			<div className="overview absolute bottom-0 left-0 right-0  translate-y-full  group-hover:-translate-y-0 transition duration-500 ease bg-white text-black p-5">
				<h3 className="font-bold pb-2">Overview</h3>
				{overview}
			</div>
		</div>
	);
};

export default Movie;
