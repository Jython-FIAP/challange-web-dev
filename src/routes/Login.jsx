// src/components/Auth.js

import { useState } from "react";

function Login() {
	const [isRegistering, setIsRegistering] = useState(true);
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const username = formData.get("username").trim();
		const password = formData.get("password").trim();

		if (isRegistering) {
			const users = JSON.parse(localStorage.getItem("users")) || {};

			if (users[username]) {
				setMessage(
					"Usuário já existe. Por favor, escolha outro nome de usuário.",
				);
			} else {
				users[username] = password;
				localStorage.setItem("users", JSON.stringify(users));
				setMessage(
					"Registro bem-sucedido! Você pode agora fazer login.",
				);
				e.target.reset();
				setIsRegistering(false);
			}
		} else {
			const users = JSON.parse(localStorage.getItem("users")) || {};

			if (users[username] && users[username] === password) {
				setMessage(
					"Login bem-sucedido! Bem-vindo(a), " + username + "!",
				);
				localStorage.setItem("currentUser", username);
				e.target.reset();
			} else {
				setMessage(
					"Credenciais inválidas. Por favor, tente novamente.",
				);
			}
		}
	};

	return (
		<section className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
				<h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
					{isRegistering ? "Registrar" : "Login"}
				</h2>

				{message && (
					<div
						className={`mb-4 p-3 text-sm rounded ${message.includes("bem-sucedido") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
					>
						{message}
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label
							htmlFor="username"
							className="block text-sm font-medium text-gray-700"
						>
							Nome de Usuário
						</label>
						<input
							type="text"
							name="username"
							id="username"
							required
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
							placeholder="Seu nome de usuário"
						/>
					</div>

					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Senha
						</label>
						<input
							type="password"
							name="password"
							id="password"
							required
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
							placeholder="Sua senha"
						/>
					</div>

					<div>
						<button
							type="submit"
							className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							{isRegistering ? "Registrar" : "Login"}
						</button>
					</div>
				</form>

				<div className="mt-6 text-center">
					<button
						onClick={() => {
							setIsRegistering(!isRegistering);
							setMessage("");
						}}
						className="text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
					>
						{isRegistering
							? "Já tem uma conta? Faça Login"
							: "Não tem uma conta? Registre-se"}
					</button>
				</div>
			</div>
		</section>
	);
}

export default Login;
