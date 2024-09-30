import { useRef } from "react";
import Divider from "../components/Divider";
import Section from "../components/Section";

function Next() {
	let formRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Formulário enviado com sucesso!");

		const formData = new FormData(e.currentTarget);
		for (const [key, value] of formData.entries()) {
			console.log(key, value);
		}

		formRef.current.reset();
	};

	return (
		<main>
			<article className="gap-10 text-white flex flex-col items-center justify-center min-h-96 w-screen bg-gray-600">
				<Section>
					<h1 className="text-4xl">Desenvolvimento por @FICAPS</h1>
					<p>
						Este projeto é um jogo de corrida estilo Subway Surfers
						(em desenvolvimento) usando Python com a biblioteca
						Pygame.
					</p>
				</Section>
				<Divider />
				<section className="w-2/3 text-center">
					O desenvolvimento de jogos é uma área fascinante e criativa
					que combina programação, design e narrativa. Este projeto,
					intitulado &quot;NextGen&quot;, é um jogo de corrida em
					estilo &quot;endless runner&quot; semelhante ao famoso
					Subway Surfers, mas com um toque especial: O jogador assume
					o controle de um carro de Fórmula E. Utilizando a biblioteca
					Pygame, nosso objetivo é criar uma experiência dinâmica e
					envolvente que não só entretenha, mas também desafie os
					jogadores a melhorar suas habilidades.
				</section>
			</article>
			<article className="py-10 gap-10 flex flex-col items-center justify-center w-screen">
				<Section>
					<h1 className="text-6xl">ENTRE EM CONTATO</h1>
					<p>
						Temos prazer em ouvir você! Se você tem alguma dúvida,
						sugestão ou comentário, sinta-se à vontade para nos
						enviar uma mensagem.
					</p>
				</Section>
				<Divider />
				{/* Contact form */}
				<form
					className="flex flex-col gap-4 min-w-96"
					onSubmit={handleSubmit}
					ref={formRef}
				>
					<input
						type="text"
						placeholder="Digite seu Nome:"
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
					<input
						type="email"
						placeholder="Digite seu E-mail:"
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					/>
					<textarea
						name="message"
						placeholder="Digite sua mensagem:"
						rows="5"
						className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
					></textarea>
					<button
						type="submit"
						className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
					>
						ENVIE AGORA
					</button>
				</form>
			</article>
		</main>
	);
}

export default Next;
