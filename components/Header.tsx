import * as React from "react"

import Link from 'next/link'
import Image from 'next/image'

import Menu from './Menu'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
	return (
		<header className="absolute w-full bg-transparent px-8 md:px-20 lg:px-40 xl:px-60 py-8">
			<div className="flex flex-wrap gap-4 justify-between items-center">
				<div className="flex items-center">
					<Image src="/logo.png" height={32} width={32} />
					<Link href="/"><a className="text-bold text-MTpurple text-2xl font-bold ml-2">MetaTales</a></Link>
				</div>
				<Menu />
			</div>
		</header>
	)
}

export default Header;
