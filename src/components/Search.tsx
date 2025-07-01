

import { useState } from "react";

interface SearchProps{
	getApi : (url:string)=> void
}

const Search = ({getApi}: SearchProps) => {
	

	const [searchItem, setSearchItem] = useState('')

	function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (searchItem){
			const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=de3fc5e31340aa8a69240f604f9b61e0'+'&query=' + searchItem;
			getApi(searchUrl)
		}
	}
	

	return (
		<div>
			<form action="" onSubmit={(e)=>handleSubmit(e)}>
           <input
				className="border-[#22254b] border-2 rounded-4xl py-2 px-4 w-64 placeholder-indigo-500 outline-none text-white"
				type="search"
				name=""
				id="search"
				placeholder="Search..."
				value={searchItem}
				onChange={(e)=>setSearchItem(e.target.value)}
			/>
			</form>
			
		</div>
	);
};

export default Search;
