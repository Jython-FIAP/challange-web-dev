import { useState } from "react";

function CardWithAccordion({
	title,
	content,
	actionLabel,
	accordionContent,
	className = "",
}) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleAccordion = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div
			className={`h-min relative border border-gray-200 rounded-lg shadow-lg p-4 ${className}`}
		>
			<h2 className="text-xl font-semibold mb-2">{title}</h2>

			<div className="text-gray-700 mb-4">{content}</div>

			<button
				className="text-blue-500 font-semibold focus:outline-none hover:underline"
				onClick={toggleAccordion}
			>
				{actionLabel}
			</button>

			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? "max-h-96" : "max-h-0"}`}
			>
				<div
					className={`mt-4 ${isExpanded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
				>
					{accordionContent}
				</div>
			</div>
		</div>
	);
}

export default CardWithAccordion;
