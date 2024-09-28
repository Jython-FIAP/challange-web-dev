import { NavLink } from "react-router-dom";
import logo from "../assets/logo-formulae.png";
import Button from "./Button";
import StyledNavLink from "./StyledNavLink";

function Header() {
	const headerHeight = 20;

	return (
		<header
			className={`flex justify-between items-center bg-gray-600 h-${headerHeight} pt-4 -mb-${headerHeight}`}
		>
			<img src={logo} alt="Logo Formula E" />
			<nav className="flex gap-10 mr-4 items-center">
				<StyledNavLink to="/">Home</StyledNavLink>
				<StyledNavLink to="/next">NextGen</StyledNavLink>
				<StyledNavLink to="/projeto">Projeto</StyledNavLink>
				<NavLink to="/login">
					<Button>Login</Button>
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
