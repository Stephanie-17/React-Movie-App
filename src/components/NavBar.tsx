import Search from "./Search";
interface NavBarProps{
	getApi : (url:string)=> void
}
const NavBar = ({getApi}: NavBarProps) => {
	return (
		<div className="w-full flex justify-between text-white bg-[#373b69] px-5 py-3 pl-10 fixed z-10 ">
			<h2 className="font-bold text-xl">Movie App (with React and TSX)</h2>
			<Search getApi = {getApi} />
		</div>
	);
};

export default NavBar;
