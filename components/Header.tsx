import * as React from "react"

import Link from 'next/link'

import Menu from './Menu'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<header className="bg-primary px-8 md:px-20 lg:px-40 xl:px-60 py-4 border-b border-MTred">
			<div className="flex flex-wrap gap-4 justify-between items-center">
				<Link href="/"><a className="text-bold text-MTred text-2xl">MetaTales</a></Link>
				<Menu />
			</div>
		</header>
	)
}

export default Header;
