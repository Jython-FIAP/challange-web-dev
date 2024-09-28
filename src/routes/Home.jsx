import Button from "../components/Button";
import { Divider } from "./Divider";

function Section({ children, gap = 5 }) {
	return (
		<section
			className={`flex flex-col gap-${gap} items-center justify-center`}
		>
			{children}
		</section>
	);
}

function Home() {
	return (
		<main>
			<article className="gap-10 text-white flex flex-col items-center justify-center h-screen w-screen bg-gray-600">
				<Section>
					<h1 className="text-4xl">
						A principal categoria de automobilismo totalmente
						elétrica do mundo
					</h1>
					<p>
						Conheça o universo da fórmula E. Aperte esse cinto, e
						venha descobrir o futuro do automobilismo.
					</p>
				</Section>
				<Divider />
				<Section gap={10}>
					<h1 className="text-6xl">FÓRMULA E</h1>
					<div>
						<Button>Venha Conhecer</Button>
					</div>
				</Section>
			</article>
			<div className="flex flex-col items-center justify-center h-96"></div>
			<div className="flex flex-col items-center justify-center h-96 bg-gray-600"></div>
			<div className="flex flex-col items-center justify-center h-96"></div>
		</main>
	);
}

export default Home;
