const Button = ({ className, ...props }) => {
	return (
		<button
			className={`bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-100 ${className}`}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;
