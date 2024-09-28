import CardWithAccordion from "../../components/CardWithAccordion";

function ComparisonCards() {
	return (
		<div className="flex flex-wrap gap-10">
			<CardWithAccordion
				className="w-72"
				title="Locais de Corrida"
				content="Fórmula E: Comumente conhecida por suas corridas em circuitos de rua localizados em grandes cidades ao redor do mundo."
				actionLabel="Veja a diferença"
				accordionContent={
					<p>
						Fórmula 1: Geralmente ocorre em circuitos tradicionais
						de corrida, tanto permanentes quanto temporários.
					</p>
				}
			/>

			<CardWithAccordion
				className="w-72"
				title="Duração de Corrida"
				content="Fórmula E: Tem uma duração mais curta, geralmente em torno de 45 minutos a 1 hora, devido à capacidade das baterias dos carros elétricos."
				actionLabel="Veja a diferença"
				accordionContent={
					<p>
						Fórmula 1: Tem uma duração padrão de cerca de 300
						quilômetros ou 2 horas.
					</p>
				}
			/>

			<CardWithAccordion
				className="w-72"
				title="Estratégias de Corridas"
				content="Fórmula E: As estratégias se concentram na gestão da energia da bateria, uso do Modo Ataque e planejamento das trocas de carro."
				actionLabel="Veja a diferença"
				accordionContent={
					<p>
						Fórmula 1: As estratégias de corrida na Fórmula 1
						envolvem gestão de pneus, combustível e pit stops.
					</p>
				}
			/>

			<CardWithAccordion
				className="w-72"
				title="Formato de Corrida"
				content="Fórmula E: Apresenta um formato de corrida de duas etapas, com uma pausa no meio para troca de carros e um 'Modo Ataque'."
				actionLabel="Veja a diferença"
				accordionContent={
					<p>
						Fórmula 1: Tradicionalmente, realiza uma única corrida
						principal.
					</p>
				}
			/>
		</div>
	);
}

export default ComparisonCards;
