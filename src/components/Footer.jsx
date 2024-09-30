import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";

function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-6">
			<div className="container mx-auto text-center">
				<div className="flex justify-center space-x-6 mb-4">
					<a
						href="https://github.com/Jython-FIAP/challange-web-dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={githubLogo}
							alt="Logo-Github"
							className="w-8 h-8"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/thomasreichmann"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={linkedinLogo}
							alt="Logo-Linkedin"
							className="w-9 h-9"
						/>
					</a>
				</div>
				<div className="text-xs text-gray-400">
					<span>Termos de uso @FICAPS</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
