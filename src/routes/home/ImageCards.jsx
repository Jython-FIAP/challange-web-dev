import Entretenimento from "../../assets/cards/entretenimento.png";
import Inovacao from "../../assets/cards/inovacao.png";
import Planta from "../../assets/cards/planta.png";
import Velocimetro from "../../assets/cards/velocimetro.png";
import ImageWithHoverText from "../../components/ImageWithHoverText";

function ImageCards() {
	return (
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
	);
}

export default ImageCards;
