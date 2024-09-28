import logo from "../assets/logo-formulae.png";
import StyledNavLink from "./StyledNavLink";

function Header() {
	return (
		<header className="flex justify-between items-center bg-gray-600 h-20 pt-4">
			<img src={logo} alt="Logo Formula E" />
			<nav className="flex gap-10 mr-4 items-center">
				<StyledNavLink to="/">Home</StyledNavLink>
				<StyledNavLink to="/next">NextGen</StyledNavLink>
				<StyledNavLink to="/projeto">Projeto</StyledNavLink>
				{/* blue background button with rounded corners and white text */}
				<button className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-100">
					Login
				</button>
			</nav>
		</header>
	);
}

export default Header;
