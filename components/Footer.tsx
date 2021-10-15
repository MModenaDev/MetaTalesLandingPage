import * as React from "react"

import Link from 'next/link'

type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className="border-t border-tertiary px-8 md:px-80 pt-8 pb-16">
			<div className="flex justify-between pb-4 border-b border-tertiary">
				<Link href="/faq"><a>MetaTales</a></Link>
				<nav className="flex gap-4 md:gap-20">
					<Link href="/faq"><a className="hover:text-tertiary transition-colors">FAQ</a></Link>
					<Link href="/manifesto"><a className="hover:text-tertiary transition-colors">Manifesto</a></Link>
					<Link href="/roadmap"><a className="hover:text-tertiary transition-colors">Roadmap</a></Link>
					<Link href="/Team"><a className="hover:text-tertiary transition-colors">Team</a></Link>
				</nav>
			</div>
			<div className="flex justify-between mt-4">
				<p className="text-sm italic">made with love</p>
				<p className="text-sm italic">terms of service</p>
			</div>
		</footer>
	)
}

export default Footer;