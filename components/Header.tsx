import * as React from "react"

import Link from 'next/link'
import { useRouter } from 'next/router';

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
	const router = useRouter();

	const generateClass = (route: string) => {
		if (router.asPath === route) {
			return "hover:text-tertiary transition-colors border-b border-tertiary"
		} else {
			return "hover:text-tertiary transition-colors"
		}
	}

	const scrollBottom = () => {
		window.scrollTo(0, document.body.scrollHeight);
	}

	return (
		<header className="bg-primary px-8 md:px-60 py-4 border-b border-tertiary">
			<div className="flex flex-wrap gap-4 justify-between items-center">
				<Link href="/"><a className="text-bold text-tertiary text-2xl">MetaTales</a></Link>
				<div className="flex flex-wrap gap-4">
					<nav className="flex gap-4 md:gap-8 items-center">
						<Link href="/faq"><a className={generateClass("/faq")}>FAQ</a></Link>
						<Link href="/manifesto"><a className={generateClass("/manifesto")}>Manifesto</a></Link>
						<Link href="/roadmap"><a className={generateClass("/roadmap")}>Roadmap</a></Link>
						<Link href="/team"><a className={generateClass("/team")}>Team</a></Link>
					</nav>
					<button
						className="w-full md:w-auto py-1 px-3 font-bold border border-tertiary rounded-2xl bg-tertiary text-primary hover:text-tertiary hover:bg-primary transition-colors"
						type="submit"
						onClick={() => scrollBottom()}
					>
						SIGN UP
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header;
