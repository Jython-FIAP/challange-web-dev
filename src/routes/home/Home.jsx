import Entretenimento from "../../assets/cards/entretenimento.png";
import Inovacao from "../../assets/cards/inovacao.png";
import Planta from "../../assets/cards/planta.png";
import Velocimetro from "../../assets/cards/velocimetro.png";
import CarroE from "../../assets/carro-e.webp";
import Ficaps from "../../assets/ficaps.png";
import Button from "../../components/Button";
import ImageWithHoverText from "../../components/ImageWithHoverText";
import Divider from "../Divider";
import ComparisonCards from "./ComparisonCards";

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
			<article className="flex flex-col items-center gap-10 py-20">
				<div>
					<h1 className="text-6xl">Projetos Ficaps</h1>
				</div>
				<Divider />
				<div className="flex gap-20">
					<Section>
						<img
							src={CarroE}
							alt="Carro da formula E"
							width={556}
							height={313}
							className="object-contain rounded-lg"
						/>
						<p className="text-2xl font-bold">NextGen</p>
						<p>
							Conheça o jogo NextGen criado para propagar a
							Fórmula E.
						</p>
						<Button>Veja Mais</Button>
					</Section>
					<Section>
						<img
							width={556}
							height={313}
							className="object-contain rounded-lg"
							src={Ficaps}
							alt="Foto dos integrantes do projeto"
						/>
						<p className="text-2xl font-bold">Ficaps</p>
						<p>
							Conheça o projeto idealizado para a Fórmula E + seus
							Criadores.
						</p>
						<Button>Veja Mais</Button>
					</Section>
				</div>
			</article>
			<article className="bg-gray-600">
				<div className="text-white p-20 w-3/5 text-justify flex flex-col gap-10">
					<h1 className="text-6xl">O que é a Fórmula E?</h1>
					<p>
						Fórmula E, ou Campeonato Mundial da ABB Fórmula E da
						FIA, é uma categoria de automobilismo organizada pela
						FIA com carros monopostos exclusivamente elétricos, cuja
						primeira temporada começou no ano de 2014.
					</p>
					<p>
						A Fórmula E se formou em 2014 como uma resposta à
						crescente demanda por corridas de automóveis
						sustentáveis e ao mesmo tempo empolgantes. A ideia
						surgiu de uma combinação de fatores:{" "}
						<span className="text-blue-400">
							a necessidade de reduzir as emissões de carbono
						</span>{" "}
						no automobilismo e o{" "}
						<span className="text-blue-400">
							desejo de promover a tecnologia de veículos
							elétricos
						</span>
						. A primeira temporada começou em setembro de 2014 em
						Pequim, China.
					</p>
					<p>
						A Fórmula E foi idealizada pelo ex-piloto de Fórmula 1 e
						fundador da Fórmula E,{" "}
						<span className="text-blue-400">Alejandro Agag</span>,
						com o objetivo de criar uma categoria de corrida
						totalmente elétrica, visando destacar a inovação
						tecnológica e promover a mobilidade sustentável. O
						campeonato foi projetado para atrair um público urbano e
						jovem, realizando corridas em circuitos de rua em
						grandes cidades ao redor do mundo.
					</p>
					<div className="flex gap-5">
						<ImageWithHoverText
							src={Velocimetro}
							hoverText="A formação mais competitiva do automobilismo. Ação ininterrupta e alucinante."
						/>
						<ImageWithHoverText
							src={Entretenimento}
							hoverText="Entretenimento eletrizante nas maiores cidades. Contendo 11 globais."
						/>
						<ImageWithHoverText
							src={Inovacao}
							hoverText="Inovação e aceleração. Recorde Pináculo do desempenho."
						/>
						<ImageWithHoverText
							src={Planta}
							hoverText="A corrida em direção a um futuro mais limpo e mais rápido"
						/>
					</div>
				</div>
			</article>

			<article className="p-20 flex flex-col gap-10">
				<h1 className="text-5xl">Fórmula E x Fórmula 1</h1>
				<p>
					Assim que olhamos para ambas logo de cara é possível já ver
					diferenças entre essas categorias de automobilismo.
				</p>
				<p>
					Na Fórmula E, os carros de todas as equipes contam com o
					mesmo chassi e eles usam motores 100% elétricos. Já na
					Fórmula 1, todos podem desenvolver sua aerodinâmica, dentro
					dos limites impostos pelo livro de regras, e os motores
					usados são os turbo-híbridos, ou seja, usam combustível
					sustentável e energia elétrica.
				</p>
				<ComparisonCards />
			</article>
		</main>
	);
}

export default Home;
