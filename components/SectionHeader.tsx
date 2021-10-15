import * as React from "react"

import Image from 'next/image'

type SectionHeaderProps = {}

const SectionHeader: React.FC<SectionHeaderProps> = () => {
	const scrollBottom = () => {
		window.scrollTo(0, document.body.scrollHeight);
	}

	return (
		<section className="w-full h-80vh bg-secondary px-8 md:px-80 py-16 flex flex-col justify-end">
			<Image src="http://placekitten.com/g/160/160" height={160} width={160} layout="fixed" />
			<h1 className="text-6xl text-tertiary mt-2"><strong>MetaTales</strong></h1>
			<h2 className="text-2xl text-primary mt-8 italic">Awesome one liner</h2>
			<button
				className="mt-8 p-4 font-bold border border-tertiary rounded-2xl bg-tertiary text-primary hover:text-tertiary hover:bg-primary w-40 transition-colors"
				type="submit"
				onClick={() => scrollBottom()}
			>
				SIGN UP
			</button>
		</section>
	)
}

export default SectionHeader;
