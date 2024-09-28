function ImageWithHoverText({ src, alt = "", hoverText, className = "" }) {
	return (
		<div
			className={`relative inline-block transition-transform duration-300 hover:scale-110 cursor-default ${className}`}
		>
			<div className="relative shadow-lg overflow-visible">
				<img
					src={src}
					alt={alt}
					className="object-cover w-full h-full"
				/>
				{hoverText && (
					<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
						<p className="text-white text-xs font-semibold text-center">
							{hoverText}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default ImageWithHoverText;
