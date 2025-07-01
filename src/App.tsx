import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";

function App() {
    const [movie, setMovie] = useState([])
	const APIUrl =  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=de3fc5e31340aa8a69240f604f9b61e0';
    
	function getApi(url:string) {
		fetch(url)
		.then(res => res.json())
		.then(data=>{
			setMovie(data.results)
		})
	}
    
	useEffect(() => {
		getApi(APIUrl)
	}, [])
	


	
	return (
		<>
			<NavBar getApi = {getApi} />
			<MovieList movies = {movie} />
		</>
	);
}

export default App;
