// src/components/Projeto.js
import { useRef } from "react";
import arduinoImage from "../assets/segue-linha.png";
import Button from "../components/Button";
import Divider from "../components/Divider";
import Section from "../components/Section";
import InfoCarousel from "./home/InfoCarousel";

function Projeto() {
	const aboutArticleRef = useRef(null);

	return (
		<main>
			<article className="gap-10 text-white flex flex-col items-center justify-center h-screen w-screen bg-gray-600">
				<Section>
					<h1 className="text-4xl">
						Buscamos popularizar a Fórmula E e promover a
						sustentabilidade no automobilismo.
					</h1>
					<p>
						Através de um projeto em arduino, visamos aproximar o
						público da tecnologia e inovação dos carros elétricos,
						tornando a categoria mais acessível.
					</p>
				</Section>
				<Divider />
				<Section gap={10}>
					<h1 className="text-6xl">FICAPS</h1>
					<div>
						<Button
							onClick={() =>
								aboutArticleRef.current.scrollIntoView({
									behavior: "smooth",
								})
							}
						>
							Venha Conhecer
						</Button>
					</div>
				</Section>
			</article>
			<article className="p-20 flex flex-col gap-10">
				<h1 className="text-5xl">
					Desafio: Popularizar a Fórmula E, trazendo maior
					visibilidade ao público.
				</h1>
				<p>
					Devemos criar uma estrátegia que tem como seu objetivo
					proporcionar aos usuários uma maior gama de interações, que
					possuem um incentivo maior a novos públicos ao consumo dá
					fórmula e.
				</p>

				<InfoCarousel />

				<section className="flex justify-center">
					<div className="max-w-xl rounded-lg shadow-md">
						<div className="bg-blue-600 text-white text-center py-3">
							<h2 className="text-2xl font-bold">AD-FÓRMULA E</h2>
						</div>
						<div className="p-6">
							<h5 className="text-xl font-semibold mb-3">
								Venha fazer parte do nosso time oficial.
							</h5>
							<p className="text-gray-700 mb-6">
								Agora que você conhece um pouco da Fórmula E,
								conheça o site oficial que hospeda toda esta
								rede.
							</p>
							<a
								href="https://www.fiaformulae.com/en"
								className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition duration-100"
								target="_blank"
								rel="noopener noreferrer"
							>
								Visite-Nos
							</a>
						</div>
					</div>
				</section>
			</article>
			<article className="bg-gray-600" ref={aboutArticleRef}>
				<div className="text-white p-20 w-3/5 text-justify flex flex-col gap-10">
					<div className="flex flex-col gap-4">
						<p className="text-blue-300">Solução FICAPS</p>
						<h1 className="text-6xl">Futuros Velocistas</h1>
					</div>
					<p>
						Nossa solução envolve envolve cativar as pessoas a verem
						como é interessante a parte elétrica dos motores,
						faremos isso por meio de carrinhos feitos com auxílio do
						arduino, por meio desses carrinhos as pessoas poderão
						competir entre si. Desenvolvendo junto disso stands de
						apresentação com foco em corridas utilizando dos
						carrinhos de arduino como forma de cativar e competir
						com o público.
					</p>
					<p>
						Os carrinhos feitos com arduino seriam mais focados no
						público jovem/infantil , incentivando jovens e não
						somente o público mais velho a se interessarem pelo
						esporte e terem curiosidade sobre ele. Esse projeto
						também será voltado para pessoas com alguma deficiência
						como transtorno do espectro autista já que os carros por
						serem elétricos possuem o barulho do motor mais baixo
						(pessoas com essa deficiência normalmente são sensíveis
						a barulhos muito altos).
					</p>
				</div>
			</article>
			<article className="p-20 flex flex-col gap-10">
				<Section>
					<h1 className="text-5xl">Carrinhos Arduinos</h1>

					<Divider />

					<img src={arduinoImage} alt="Imagem carro fórmula E" />
					<p className="font-bold">Arduino x Fórmula E</p>
					<p>
						Entenda toda nossa dinâmica de criação com este vídeo
						sobre.
					</p>
					<a
						href="https://www.youtube.com/embed/HjjLJPkaGhc"
						className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
						target="_blank"
						rel="noopener noreferrer"
					>
						Veja Mais
					</a>
				</Section>
			</article>
		</main>
	);
}

export default Projeto;
