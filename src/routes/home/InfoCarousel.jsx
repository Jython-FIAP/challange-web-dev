import { useState } from "react";

// Importing images from the assets folder
import img1 from "../../assets/banners-carousel/IMG01-Peculiaridades.png";
import img2 from "../../assets/banners-carousel/IMG2-Modo Ataque.png";
import img3 from "../../assets/banners-carousel/IMG3-Regulamento.png";
import img4 from "../../assets/banners-carousel/IMG4-Fanboost.png";

function InfoCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);

	const images = [
		{
			src: img1,
			alt: "Banner sobre peculiaridades da Fórmula E",
		},
		{
			src: img2,
			alt: "Banner explicativo sobre o modo de ataque",
		},
		{
			src: img3,
			alt: "Banner explicativo sobre o regulamento da Fórmula E",
		},
		{
			src: img4,
			alt: "Banner explicativo sobre o modo fanboost",
		},
	];

	const handlePrevClick = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1,
		);
	};

	const handleNextClick = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1,
		);
	};

	return (
		<section className="relative w-full max-w-[80%] mx-auto">
			<div className="overflow-hidden">
				<div
					className="flex transition-transform duration-500"
					style={{ transform: `translateX(-${activeIndex * 100}%)` }}
				>
					{images.map((image, index) => (
						<div className="min-w-full" key={index}>
							<img
								src={image.src}
								alt={image.alt}
								className="w-full object-cover"
							/>
						</div>
					))}
				</div>
			</div>

			<button
				onClick={handlePrevClick}
				className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white text-4xl ml-10"
			>
				&#10094;
			</button>

			<button
				onClick={handleNextClick}
				className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white text-4xl mr-10"
			>
				&#10095;
			</button>
		</section>
	);
}

export default InfoCarousel;
