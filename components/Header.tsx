import * as React from "react"

import Link from 'next/link'

import Menu from './Menu'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
	const scrollBottom = () => {
		window.scrollTo(0, document.body.scrollHeight);
	}

	return (
		<header className="bg-primary px-8 md:px-60 py-4 border-b border-mt-red">
			<div className="flex flex-wrap gap-4 justify-between items-center">
				<Link href="/"><a className="text-bold text-mt-red text-2xl">MetaTales</a></Link>
				<div className="flex flex-wrap gap-4">
					<Menu />
					<button
						className="py-1 px-3 font-bold border border-mt-red rounded-2xl bg-mt-red text-primary hover:text-mt-red hover:bg-primary transition-colors"
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
