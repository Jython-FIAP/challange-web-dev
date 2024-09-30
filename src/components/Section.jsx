function Section({ children, gap = 5 }) {
	return (
		<section
			className={`flex flex-col gap-${gap} items-center justify-center`}
		>
			{children}
		</section>
	);
}

export default Section;
