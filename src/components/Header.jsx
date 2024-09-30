import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-formulae.png";
import Button from "./Button";
import StyledNavLink from "./StyledNavLink";

function Header() {
	const headerHeight = 20;
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const user = localStorage.getItem("currentUser");
		if (user) {
			setCurrentUser(user);
		}

		const handleStorageChange = () => {
			const updatedUser = localStorage.getItem("currentUser");
			setCurrentUser(updatedUser);
		};

		window.addEventListener("storage", handleStorageChange);

		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("currentUser");
		setCurrentUser(null);
	};

	return (
		<header
			className={`flex justify-between items-center bg-gray-600 h-${headerHeight} pt-4 -mb-${headerHeight}`}
		>
			<Link to="/">
				<img src={logo} alt="Logo Formula E" />
			</Link>
			<nav className="flex gap-10 mr-10 items-center">
				<StyledNavLink to="/">Home</StyledNavLink>
				<StyledNavLink to="/next">NextGen</StyledNavLink>
				<StyledNavLink to="/projeto">Projeto</StyledNavLink>
				{currentUser ? (
					<div className="flex gap-5 items-center">
						<div className="text-white font-semibold">
							Olá, {currentUser}
						</div>
						<Button onClick={handleLogout}>Logout</Button>
					</div>
				) : (
					<NavLink to="/login">
						<Button>Login</Button>
					</NavLink>
				)}
			</nav>
		</header>
	);
}

export default Header;
