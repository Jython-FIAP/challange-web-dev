import { NavLink } from "react-router-dom";

function CustomNavLink({ children, to, isButton, ...props }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isButton
					? "px-4 py-2 bg-blue-800 rounded-full text-white hover:bg-blue-700"
					: `${isActive ? "text-white underline decoration-blue-600 underline-offset-4 decoration-2 font-bold" : "text-white"} hover:text-blue-500 font-normal hover:underline`
			}
			{...props}
		>
			{children}
		</NavLink>
	);
}

export default CustomNavLink;
