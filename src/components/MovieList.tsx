import Movie from "./Movie";

interface Movie {
	id: number,
	title: string,
	overview: string,
	poster_path:string,
	vote_average: number
}

interface MovieListProps {
	movies: Movie[]
}

const MovieList = ({movies}: MovieListProps) => {

	
	return (
		<div className="flex flex-wrap gap-10 px-4 lg:px-24 py-6 bg-[#22254b] justify-center items-center pt-29 ">
			{movies.map(movie=>{
				return <Movie 
							key={movie.id} 
							title={movie.title} 
							overview={movie.overview}  
							image={'https://image.tmdb.org/t/p/w500'+ movie.poster_path}
							rating={movie.vote_average}
						/>
			})}
		</div>
	);
};

export default MovieList;
