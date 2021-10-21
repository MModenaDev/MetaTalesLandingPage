import * as React from "react"

import Link from 'next/link'

import Menu from './Menu'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
	const scrollBottom = () => {
		window.scrollTo(0, document.body.scrollHeight);
	}

	return (
		<header className="bg-primary px-8 md:px-60 py-4 border-b border-MTred">
			<div className="flex flex-wrap gap-4 justify-between items-center">
				<Link href="/"><a className="text-bold text-MTred text-2xl">MetaTales</a></Link>
				<div className="flex flex-wrap gap-4">
					<Menu />
					<button
						className="py-1 px-3 font-bold border border-MTred rounded-2xl bg-MTred text-primary hover:text-MTred hover:bg-primary transition-colors"
						type="submit"
						onClick={() => scrollBottom()}
					>
						Sign Up
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header;
