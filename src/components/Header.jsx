import logo from "../assets/logo-formulae.png";

function Header() {
	return (
		<header className="flex justify-between items-center bg-gray-600 h-20 pt-4">
			<img src={logo} alt="Logo Formula E" />
			<nav>
				<a>Home</a>
				<a>About</a>
				<a>Contact</a>
				<a>Login</a>
			</nav>
		</header>
	);
}

export default Header;
